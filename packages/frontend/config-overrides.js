const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewireStyledComponents = require("react-app-rewire-styled-components");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config = rewireStyledComponents(config, env, {
    // eslint-disable-next-line no-process-env
    displayName: process.env.NODE_ENV === "development",
    pure: true,
    transpileTemplateLiterals: true,
    fileName: false
  });
  return config;
};
