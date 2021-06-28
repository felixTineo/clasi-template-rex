const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/index.js"))),
  "component---src-pages-properties-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/properties.js"))),
  "component---src-pages-property-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/property.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/services.js")))
}

