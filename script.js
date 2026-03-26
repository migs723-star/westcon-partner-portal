// ==============================
// LANGUAGE TRANSLATIONS
// ==============================
const translations = {
  en: {
    title: "Westcon Partner AI Portal",
    subtitle: "Empowering Partners with AI-Driven Intelligence",
    login: "Partner Login",
    heroTitle: "Welcome to the Future of Distribution",
    heroDesc: "Leverage AI to accelerate sales, design solutions, and unlock new revenue streams.",
    btnExplore: "Explore Platform"
  },
  af: {
    title: "Westcon Vennoot AI Portaal",
    subtitle: "Bemagtig vennote met KI-gedrewe intelligensie",
    login: "Vennoot Aanmelding",
    heroTitle: "Welkom by die Toekoms van Verspreiding",
    heroDesc: "Gebruik KI om verkope te versnel, oplossings te ontwerp en nuwe inkomste te ontsluit.",
    btnExplore: "Verken Platform"
  },
  zu: {
    title: "I-Westcon Partner AI Portal",
    subtitle: "Ukuqinisa ozakwethu ngobuhlakani bokwenziwa",
    login: "Ukungena Kozakwethu",
    heroTitle: "Uyemukelwa Ekusaseni Lokusatshalaliswa",
    heroDesc: "Sebenzisa i-AI ukusheshisa ukuthengisa, ukuklama izixazululo nokuvula amathuba amasha.",
    btnExplore: "Hlola Inkundla"
  },
  fr: {
    title: "Portail IA Partenaire Westcon",
    subtitle: "Autonomiser les partenaires grâce à l'IA",
    login: "Connexion Partenaire",
    heroTitle: "Bienvenue dans le Futur de la Distribution",
    heroDesc: "Exploitez l'IA pour accélérer les ventes et débloquer de nouvelles opportunités.",
    btnExplore: "Explorer la Plateforme"
  },
  pt: {
    title: "Portal de IA Parceiro Westcon",
    subtitle: "Capacitando parceiros com IA",
    login: "Login do Parceiro",
    heroTitle: "Bem-vindo ao Futuro da Distribuição",
    heroDesc: "Use IA para acelerar vendas e desbloquear novas receitas.",
    btnExplore: "Explorar Plataforma"
  },
  ha: {
    title: "Westcon Portal AI na Abokan Hulɗa",
    subtitle: "Ƙarfafa abokan hulɗa da AI",
    login: "Shiga Abokin Hulɗa",
    heroTitle: "Barka da zuwa Gaban Rarrabawa",
    heroDesc: "Yi amfani da AI don haɓaka tallace-tallace da sabbin damar kuɗi.",
    btnExplore: "Duba Dandali"
  },
  yo: {
    title: "Westcon AI Portal Fun Awọn Alabaṣepọ",
    subtitle: "Fifunni ni agbara AI si awọn alabaṣepọ",
    login: "Wọle Alabaṣepọ",
    heroTitle: "Kaabọ si Ọjọ iwaju Pinpin",
    heroDesc: "Lo AI lati mu tita pọ si ati ṣii awọn aye tuntun.",
    btnExplore: "Ṣawari Platform"
  }
};

// ==============================
// APPLY TRANSLATION
// ==============================
function setLanguage(lang) {
  const t = translations[lang];

  document.querySelector("[data-key='title']").innerText = t.title;
  document.querySelector("[data-key='subtitle']").innerText = t.subtitle;
  document.querySelector("[data-key='login']").innerText = t.login;
  document.querySelector("[data-key='heroTitle']").innerText = t.heroTitle;
  document.querySelector("[data-key='heroDesc']").innerText = t.heroDesc;
  document.querySelector("[data-key='btnExplore']").innerText = t.btnExplore;

  localStorage.setItem("lang", lang);
}

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  const langDropdown = document.getElementById("languageSwitcher");
  if (langDropdown) {
    langDropdown.value = savedLang;
    langDropdown.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }
});
