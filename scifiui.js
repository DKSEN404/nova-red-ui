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
  ]).catch((e) => console.error("nova-red-ui | template error:", e));
});

Hooks.once("ready", () => {
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

    activateListeners(html) {
      html.find(".navtabs-side").click(() => this._clearContentFilter());
      super.activateListeners(html);
    }
  };

  Actors.registerSheet("nova-red-ui", CPRVerticalCharacterSheet, {
    label: "Nova-Red: Personaje (Vertical)",
    types: ["character"],
    makeDefault: false,
  });
});
