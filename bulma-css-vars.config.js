const { hsl } = require('bulma-css-vars');

const appColors = {
  white: hsl(0, 0, 100),
  black: hsl(0, 0, 4),
  background: hsl(0, 0, 96),
  primary: hsl(137, 31, 49),
  text: hsl(0, 0, 29),
  border: hsl(0, 0, 86),
  'navbar-box-shadow-color': hsl(0, 0, 29),
};

appColors['scheme-main'] = appColors.white;
appColors['scheme-main-bis'] = hsl(0, 0, 98);
appColors.link = appColors.primary;
appColors['link-hover'] = appColors.primary;
appColors['navbar-background-color'] = appColors.white;
appColors['navbar-dropdown-item-hover-color'] = hsl(0, 0, 4);

module.exports = {
  jsOutputFile: 'src/bulma-generated/bulma-colors.js',
  sassOutputFile: 'src/bulma-generated/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'src/bulma-generated/generated-fallback.scss',
  colorDefs: appColors,
  sassEntryFile: 'src/assets/scss/main.scss',
};
