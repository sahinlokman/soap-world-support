const translations = window.PAGE_TRANSLATIONS;
const supported = ["tr","en","de","fr","es","it","pt","ja","ko","zh"];
const requested = new URLSearchParams(location.search).get("lang") || navigator.language.slice(0,2);
const lang = supported.includes(requested) ? requested : "en";
document.documentElement.lang = lang;
const select = document.querySelector("#language");
select.value = lang;
select.addEventListener("change", () => {
  const url = new URL(location.href);
  url.searchParams.set("lang", select.value);
  location.href = url;
});
for (const [key, value] of Object.entries(translations[lang])) {
  const element = document.querySelector(`[data-i18n="${key}"]`);
  if (element) element.innerHTML = value;
}
