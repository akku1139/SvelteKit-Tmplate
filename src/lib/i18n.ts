import { writable, derived } from "svelte/store";
import type { langs } from "../locales/$schema.ts";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

//await import("../locales/"+lang)

const locales = {
  en: en,
  ja: ja,
};

export const lang = writable<langs>("en");

export const t = derived(
  lang,
  ($lang) =>
    (msg: keyof typeof locales[langs]) => {
      return locales[$lang][msg];
    },
);
