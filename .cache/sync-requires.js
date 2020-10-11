const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/index.js"))),
  "component---src-pages-new-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/new.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/news.js"))),
  "component---src-pages-properties-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/properties.js"))),
  "component---src-pages-property-js": hot(preferDefault(require("/home/felix/Documentos/projects/clasi-templates/rex/src/pages/property.js")))
}

