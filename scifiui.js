Hooks.on("init", function () {
  const mod = (rel) => `modules/nova-red-ui/templates/actor/${rel}`;
  const sys = (rel) => `systems/cyberpunk-red-core/templates/actor/${rel}`;

  const loadReg = (moduleRel) =>
    getTemplate(mod(moduleRel)).then((tpl) => {
      Handlebars.registerPartial(sys(moduleRel), tpl);
    });

  Promise.all([
    loadReg("character/cpr-sheet-header.hbs"),
    loadReg("character/cpr-profile-tab.hbs"),
    loadReg("character/cpr-rolefight-tab.hbs"),
    getTemplate(mod("cpr-character-sheet.hbs")),
    getTemplate(mod("cpr-mook-sheet.hbs")),
    getTemplate("modules/nova-red-ui/templates/actor/character/pp-upgrade-dialog.hbs"),
  ]).catch((e) => console.error("nova-red-ui | template error:", e));
});

Hooks.once("ready", () => {
  const FVTTFormApp = foundry.applications?.sheets?.FormApplication || FormApplication;
  class PPUpgradeDialog extends FVTTFormApp {
    constructor(actor, options = {}) {
      super(options);
      this.actor = actor;
      this.changes = {};
      this.roleChanges = {};
      this.originalIP = actor.system.improvementPoints.value;
    }

    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        title: "Mejora de Personaje",
        template: "modules/nova-red-ui/templates/actor/character/pp-upgrade-dialog.hbs",
        width: 580,
        height: 680,
        resizable: true,
        classes: ["pp-upgrade-dialog-window"],
        tabs: [{ navSelector: ".pp-tabs", contentSelector: ".pp-tab-content", initial: "stats" }],
        submitOnChange: false,
        closeOnSubmit: false,
      });
    }

    getData() {
      return {
        actor: this.actor,
        remainingPP: this.originalIP - this.totalPendingCost,
        threshold: this.actor.getFlag("nova-red-ui", "ppThreshold") || 20,
      };
    }

    _calcSkillCost(difficulty, currentLevel, newLevel) {
      const multiplier = difficulty === "difficult" ? 2 : 1;
      let total = 0;
      for (let lvl = currentLevel + 1; lvl <= newLevel; lvl++) {
        total += lvl * 20 * multiplier;
      }
      return total;
    }

    _calcRoleCost(currentRank, newRank) {
      let total = 0;
      for (let r = currentRank + 1; r <= newRank; r++) {
        total += r * 60;
      }
      return total;
    }

    get totalPendingCost() {
      let total = 0;
      for (const [id, delta] of Object.entries(this.changes)) {
        const skill = this.actor.itemTypes.skill.get(id);
        if (skill) {
          total += this._calcSkillCost(skill.system.difficulty, skill.system.level, skill.system.level + delta);
        }
      }
      for (const [id, delta] of Object.entries(this.roleChanges)) {
        const role = this.actor.itemTypes.role.get(id);
        if (role) {
          total += this._calcRoleCost(role.system.rank, role.system.rank + delta);
        }
      }
      return total;
    }

    _refresh() {
      const html = this.element;
      html.find(".pp-skill-row").each((i, row) => {
        const $row = $(row);
        const id = $row.data("skill-id");
        const skill = this.actor.itemTypes.skill.get(id);
        if (!skill) return;
        const delta = this.changes[id] || 0;
        const newLevel = skill.system.level + delta;
        $row.find(".pp-skill-level").text(newLevel);
        const cost = delta > 0 ? this._calcSkillCost(skill.system.difficulty, skill.system.level, newLevel) : 0;
        $row.find(".pp-skill-cost").text(cost + " PP");
      });
      html.find(".pp-role-row").each((i, row) => {
        const $row = $(row);
        const id = $row.data("role-id");
        const role = this.actor.itemTypes.role.get(id);
        if (!role) return;
        const delta = this.roleChanges[id] || 0;
        const newRank = role.system.rank + delta;
        $row.find(".pp-role-rank").text(newRank);
        const cost = delta > 0 ? this._calcRoleCost(role.system.rank, newRank) : 0;
        $row.find(".pp-role-cost").text(cost + " PP");
      });
      const remaining = this.originalIP - this.totalPendingCost;
      html.find(".pp-remaining-value").text(remaining);
      html.find(".pp-total-cost").text(this.totalPendingCost + " PP");
      const hasChanges = Object.keys(this.changes).length > 0 || Object.keys(this.roleChanges).length > 0;
      html.find(".pp-btn-save").prop("disabled", !hasChanges || this.totalPendingCost > this.originalIP);
      if (this.totalPendingCost > this.originalIP) {
        html.find(".pp-remaining-value").css("color", "var(--nv-color-danger)");
      } else {
        html.find(".pp-remaining-value").css("color", "");
      }
    }

    activateListeners(html) {
      super.activateListeners(html);

      html.find(".pp-skill-inc").click((event) => {
        event.preventDefault();
        const row = $(event.currentTarget).closest(".pp-skill-row");
        const id = row.data("skill-id");
        const currentLevel = parseInt(row.data("current-level"));
        const delta = (this.changes[id] || 0) + 1;
        if (currentLevel + delta > 10) return;
        this.changes[id] = delta;
        this._refresh();
      });

      html.find(".pp-skill-dec").click((event) => {
        event.preventDefault();
        const row = $(event.currentTarget).closest(".pp-skill-row");
        const id = row.data("skill-id");
        const currentLevel = parseInt(row.data("current-level"));
        const curDelta = this.changes[id] || 0;
        if (curDelta <= 0 && currentLevel === 0) return;
        const delta = curDelta - 1;
        if (delta <= 0) {
          delete this.changes[id];
        } else {
          this.changes[id] = delta;
        }
        this._refresh();
      });

      html.find(".pp-role-inc").click((event) => {
        event.preventDefault();
        const row = $(event.currentTarget).closest(".pp-role-row");
        const id = row.data("role-id");
        const currentRank = parseInt(row.data("current-rank"));
        const delta = (this.roleChanges[id] || 0) + 1;
        if (currentRank + delta > 10) return;
        this.roleChanges[id] = delta;
        this._refresh();
      });

      html.find(".pp-role-dec").click((event) => {
        event.preventDefault();
        const row = $(event.currentTarget).closest(".pp-role-row");
        const id = row.data("role-id");
        const currentRank = parseInt(row.data("current-rank"));
        const curDelta = this.roleChanges[id] || 0;
        if (curDelta <= 0 && currentRank === 0) return;
        const delta = curDelta - 1;
        if (delta <= 0) {
          delete this.roleChanges[id];
        } else {
          this.roleChanges[id] = delta;
        }
        this._refresh();
      });

      html.find(".pp-btn-save").click(async (event) => {
        event.preventDefault();
        const cost = this.totalPendingCost;
        if (cost === 0) {
          ui.notifications.warn("No hay cambios pendientes.");
          return;
        }
        if (cost > this.originalIP) {
          ui.notifications.error(`No tienes suficientes PP. Necesitas ${cost} pero solo tienes ${this.originalIP}.`);
          return;
        }
        try {
          const updates = [];
          for (const [id, delta] of Object.entries(this.changes)) {
            const skill = this.actor.itemTypes.skill.get(id);
            if (skill) {
              updates.push({ _id: id, "system.level": skill.system.level + delta });
            }
          }
          for (const [id, delta] of Object.entries(this.roleChanges)) {
            const role = this.actor.itemTypes.role.get(id);
            if (role) {
              updates.push({ _id: id, "system.rank": role.system.rank + delta });
            }
          }
          if (updates.length > 0) {
            await this.actor.updateEmbeddedDocuments("Item", updates);
          }
          const parts = [];
          if (Object.keys(this.changes).length > 0) parts.push(`${Object.keys(this.changes).length} habilidad(es)`);
          if (Object.keys(this.roleChanges).length > 0) parts.push(`${Object.keys(this.roleChanges).length} aptitud(es)`);
          const reason = `Mejora: ${parts.join(", ")}`;
          await this.actor.deltaLedgerProperty("improvementPoints", -cost, reason);
          ui.notifications.info(`¡Mejora aplicada correctamente! Se han gastado ${cost} PP.`);
          this.close();
        } catch (err) {
          ui.notifications.error(`No se pudo guardar: ${err.message || "Error desconocido"}`);
          console.error("PP Upgrade save failed:", err);
        }
      });

      html.find(".pp-btn-cancel").click((event) => {
        event.preventDefault();
        this.close();
      });

      html.find(".pp-threshold-input").change((event) => {
        const val = parseInt($(event.currentTarget).val());
        if (val > 0) {
          this.actor.setFlag("nova-red-ui", "ppThreshold", val);
        }
      });
    }
  }

  const CPRVerticalCharacterSheet = class extends game.cpr.apps.CPRCharacterActorSheet {
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        height: 690,
        width: 625,
        resizable: true,
        scrollY: [".tab-content-vertical"],
        tabs: [
          {
            navSelector: ".navtabs-side",
            contentSelector: ".tab-content-vertical",
            initial: "profile",
          },
        ],
        classes: ["sheet", "actor", "character-vertical-sheet"],
        template: "modules/nova-red-ui/templates/actor/cpr-character-sheet.hbs",
      });
    }

    getData() {
      const data = super.getData();
      data.ppHasPoints = false;
      const ip = this.actor.system.improvementPoints?.value || 0;
      const threshold = this.actor.getFlag("nova-red-ui", "ppThreshold") || 20;
      data.ppThreshold = threshold;
      if (ip > threshold) {
        data.ppHasPoints = true;
      }
      return data;
    }

    activateListeners(html) {
      html.find(".navtabs-side").click(() => this._clearContentFilter());
      html.find(".pp-notification-btn").click((event) => {
        event.preventDefault();
        event.stopPropagation();
        new PPUpgradeDialog(this.actor).render(true);
      });
      super.activateListeners(html);
    }
  };

  Actors.registerSheet("nova-red-ui", CPRVerticalCharacterSheet, {
    label: "Nova-Red: Personaje (Vertical)",
    types: ["character"],
    makeDefault: false,
  });
});
