<template>
  <header class="blueprint-header">
    <div class="header-left">
      <a class="logo-text" href="/">GR_</a>
    </div>
    <nav class="header-nav">
      <a href="/#about" class="nav-link">01_{{ $i18n.t("nav.about") }}</a>
      <a href="/#work" class="nav-link">02_{{ $i18n.t("nav.work") }}</a>
      <a href="/#skills" class="nav-link">03_{{ $i18n.t("nav.skills") }}</a>
      <a href="/#contact" class="nav-link">04_{{ $i18n.t("nav.contact") }}</a>
    </nav>
    <div class="extra-buttons">
      <button class="lang-btn" @click="changeLang('fr')">FR</button>
      <button class="lang-btn" @click="changeLang('en')">EN</button>
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      container: document.querySelector("header"),
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY || window.pageYOffset;
    },
    scrollToSection(sectionId) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
header {
  transition: background-color 0.3s ease;
}

header.scrolled {
  background-color: rgba(15, 15, 26, 0.8);
}

.header-left {
  display: flex;
  align-items: center;
} 

/* ========== HEADER ========== */
.blueprint-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 6%;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(79, 172, 254, 0.1);
  z-index: 1000;
}

.logo-text {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
}

.header-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.extra-buttons {
  display: flex;
  gap: 10px;
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.lang-btn:hover {
  color: var(--color-primary);
}

.blueprint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
