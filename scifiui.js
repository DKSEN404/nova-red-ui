Hooks.on("init", async () => {
  const modulePath = "modules/nova-red-ui";

  const myTemplates = [
    `${modulePath}/templates/actor/cpr-character-sheet.hbs`,
    `${modulePath}/templates/actor/cpr-mook-sheet.hbs`,
    `${modulePath}/templates/actor/character/cpr-sheet-header.hbs`,
    `${modulePath}/templates/actor/character/cpr-profile-tab.hbs`,
    `${modulePath}/templates/actor/character/cpr-rolefight-tab.hbs`,
    `${modulePath}/templates/actor/mook/cpr-mook-tab1.hbs`,
    `${modulePath}/templates/actor/mook/cpr-mook-tab2.hbs`,
  ];
  await loadTemplates(myTemplates);

  const moduleKey = (path) => `${modulePath}/templates/actor/${path}`;
  const systemKey = (path) => `systems/cyberpunk-red-core/templates/actor/${path}`;

  Handlebars.registerPartial(
    systemKey("character/cpr-sheet-header"),
    Handlebars.partials[moduleKey("character/cpr-sheet-header")]
  );
  Handlebars.registerPartial(
    systemKey("character/cpr-profile-tab"),
    Handlebars.partials[moduleKey("character/cpr-profile-tab")]
  );
  Handlebars.registerPartial(
    systemKey("character/cpr-rolefight-tab"),
    Handlebars.partials[moduleKey("character/cpr-rolefight-tab")]
  );
  Handlebars.registerPartial(
    systemKey("mook/cpr-mook-tab1"),
    Handlebars.partials[moduleKey("mook/cpr-mook-tab1")]
  );
  Handlebars.registerPartial(
    systemKey("mook/cpr-mook-tab2"),
    Handlebars.partials[moduleKey("mook/cpr-mook-tab2")]
  );

});
