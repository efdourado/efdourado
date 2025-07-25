const translations = {
  en: {
    showcase: "Showcase",
    about: "About me",
    send_message: "Get in touch",
    hello: "Hello,",
    im_eduardo: "I'm Eduardo Dourado;",
    bio: "a student really interested in AI and full-stack development. I focus on efficiency and seek a positive environment for everyone!",

    showcase_title: "Selected Projects",
    showcase_subtitle:
      "A collection of my most exciting and key projects, showcasing my skills and efficiency.",
    case_study: "Case Study →",
    project1_title: "Memphis",
    project1_description:
      "Music, reimagined — Memphis is a web application designed to provide a seamless, modern music listening experience.",
    project2_title: "Cairo",
    project2_description:
      "Cairo is a fast, hassle-free ordering system that lets you browse menus, place orders, and manage your deliveries with just a few taps.",
    project3_title: "—",
    project3_description: "—",

    details_title: "Details",
    details_subtitle:
      "Here's a closer look at the tools and technologies I'm currently using to bring to life ideas. From frontend and backend integrations to data analysis, problem-solving and different design approaches.",
    
    skill1: "HTML, CSS",
    skill2: "JavaScript (and TypeScript), Python",
    skill3: "Django, React, Next.js, Prisma",
    skill4: "PostgreSQL, MongoDB",
    skill5: "Git, GitHub",
    skill6: "UI/UX Design",

    thank_you: "Thank You!",
    echoes: "Echoes find echoes;",
    footer_subtitle: "send me a message! Or drop your thoughts:",
    send_message_btn: "Send a Message",
    color_palette: "Color palette:",
    rights_reserved: "All rights reserved.",
  },
  pt: {
    showcase: "Destaque",
    about: "Sobre mim",
    send_message: "Entre em contato",
    hello: "Olá,",
    im_eduardo: "sou Eduardo Dourado;",
    bio: "um estudante muito interessado em IA e desenvolvimento full-stack. Foco em eficiência e busco um ambiente positivo para todos!",

    showcase_title: "Projetos Selecionados",
    showcase_subtitle:
      "Uma coleção dos meus projetos mais importantes, mostrando minhas habilidades e eficiência.",
    case_study: "Estudo de Caso →",
    project1_title: "Memphis",
    project1_description:
      "Música, reinventada — Memphis é um aplicativo web criado para oferecer uma experiência musical moderna e fluida.",
    project2_title: "Cairo",
    project2_description:
      "Cairo é um sistema de pedidos rápido e descomplicado que permite navegar por cardápios, fazer pedidos e gerenciar suas entregas com apenas alguns toques.",
    project3_title: "—",
    project3_description: "—",

    details_title: "Detalhes",
    details_subtitle:
      "Aqui está uma visão mais detalhada das ferramentas e tecnologias que estou usando atualmente para dar vida às ideias. Desde integrações frontend e backend até análise de dados, resolução de problemas e diferentes abordagens de design.",
          
    skill1: "HTML, CSS",
    skill2: "JavaScript (e TypeScript), Python",
    skill3: "Django, React, Next.js, Prisma",
    skill4: "PostgreSQL, MongoDB",
    skill5: "Git, GitHub",
    skill6: "UI/UX Design",

    thank_you: "Obrigado!",
    echoes: "Ecos encontram ecos;",
    footer_subtitle: "envie-me uma mensagem! Ou compartilhe seus pensamentos:",
    send_message_btn: "Envie uma Mensagem",
    color_palette: "Paleta de cores:",
    rights_reserved: "Todos os direitos reservados.",
}, };

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  const currentTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", currentTheme);

  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = currentTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
  } }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme =
        html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      const icon = themeToggle.querySelector("i");
      if (icon) {
        icon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
  } }); }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
  }); } }); });

  document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  }); });

  window.addEventListener("scroll", () => {
    const scrollLine = document.querySelector(".scroll-line");
    if (scrollLine) {
      const scrollPosition = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      scrollLine.style.height = `${50 - scrollPercentage * 0.5}px`;
  } });

  const languageToggle = document.querySelector(".language-toggle");
  if (languageToggle) {
    const languageText = languageToggle.querySelector(".language-text");

    const userLanguage =
      localStorage.getItem("language") || navigator.language.split("-")[0];
    const defaultLanguage = ["en", "pt"].includes(userLanguage)
      ? userLanguage
      : "en";
    if (languageText) languageText.textContent = defaultLanguage.toUpperCase();
    switchLanguage(defaultLanguage);

    languageToggle.addEventListener("click", function () {
      const currentLang = localStorage.getItem("language") || "en";
      const newLang = currentLang === "en" ? "pt" : "en";
      if (languageText) languageText.textContent = newLang.toUpperCase();
      switchLanguage(newLang);
  }); }

  function switchLanguage(lang) {
    localStorage.setItem("language", lang);

    if (typeof translations !== "undefined") {
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
} }); } } });