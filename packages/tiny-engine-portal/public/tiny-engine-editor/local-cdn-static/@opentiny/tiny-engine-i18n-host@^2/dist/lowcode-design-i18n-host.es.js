import { createI18n } from "vue-i18n";
const i18n = {
  ...createI18n({
    locale: "zh_CN",
    messages: {},
    legacy: false
  })
};
const defineCustomI18n = (customI18n) => {
  Object.assign(i18n, customI18n);
};
export {
  i18n as default,
  defineCustomI18n
};
//# sourceMappingURL=lowcode-design-i18n-host.es.js.map
