// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-properties-js": () => import("./../../../src/pages/properties.js" /* webpackChunkName: "component---src-pages-properties-js" */),
  "component---src-pages-property-js": () => import("./../../../src/pages/property.js" /* webpackChunkName: "component---src-pages-property-js" */),
  "component---src-pages-services-js": () => import("./../../../src/pages/services.js" /* webpackChunkName: "component---src-pages-services-js" */)
}

