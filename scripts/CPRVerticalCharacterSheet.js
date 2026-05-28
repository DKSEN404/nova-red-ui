export default class CPRVerticalCharacterSheet extends game.cpr.apps.CPRCharacterActorSheet {
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
}
