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
      <button 
        class="lang-btn" 
        :class="{ active: $i18n.locale === 'fr' }"
        @click="changeLang('fr')"
        aria-label="Switch to French"
        :aria-pressed="$i18n.locale === 'fr'">
        FR
      </button>
      <button 
        class="lang-btn" 
        :class="{ active: $i18n.locale === 'en' }"
        @click="changeLang('en')"
        aria-label="Switch to English"
        :aria-pressed="$i18n.locale === 'en'">
        EN
      </button>
    </div>

    <!-- Burger menu button (mobile only) -->
    <button 
      class="burger-menu" 
      :class="{ active: mobileMenuOpen }"
      @click="toggleMobileMenu"
      aria-label="Toggle navigation menu"
      :aria-expanded="mobileMenuOpen"
    >
    <span class="burger-icon">{{ mobileMenuOpen ? "󰖭" : "󰍜" }}</span>
    </button>

    <!-- Mobile menu -->
    <nav v-if="mobileMenuOpen" class="mobile-menu">
      <a href="/#about" class="mobile-nav-link" @click="closeMobileMenu">01_{{ $i18n.t("nav.about") }}</a>
      <a href="/#work" class="mobile-nav-link" @click="closeMobileMenu">02_{{ $i18n.t("nav.work") }}</a>
      <a href="/#skills" class="mobile-nav-link" @click="closeMobileMenu">03_{{ $i18n.t("nav.skills") }}</a>
      <a href="/#contact" class="mobile-nav-link" @click="closeMobileMenu">04_{{ $i18n.t("nav.contact") }}</a>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      container: document.querySelector("header"),
      scrollTop: 0,
      mobileMenuOpen: false,
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
      localStorage.setItem('preferred-language', lang);
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
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
  padding: 8px 12px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.logo-text:hover {
  border: 1px solid var(--color-primary);
  box-shadow: 0 0 8px rgba(79, 172, 254, 0.4);
  border-radius: 4px;
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
  font-weight: 600;
  color: var(--color-text-secondary);
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.2);
  border-color: var(--color-primary);
  box-shadow: 0 0 8px rgba(79, 172, 254, 0.4);
}

.lang-btn.active {
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.25);
  border-color: var(--color-primary);
  box-shadow: 0 0 12px rgba(79, 172, 254, 0.6);
}

/* ========== BURGER MENU (MOBILE) ========== */
.burger-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.burger-icon {
  font-family: var(--font-mono);
  font-size: 20px;
  color: var(--color-primary);
}

/* Mobile menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(79, 172, 254, 0.1);
  padding: 20px;
  flex-direction: column;
  gap: 12px;
  animation: slideDown 0.3s ease;
  z-index: 999;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-link {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-muted);
  text-decoration: none;
  padding: 12px 16px;
  border-left: 2px solid transparent;
  transition: all 0.3s ease;
  display: block;
}

.mobile-nav-link:hover {
  color: var(--color-primary);
  border-left-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.1);
}

/* ========== MOBILE RESPONSIVE ========== */
@media (max-width: 768px) {
  .blueprint-header {
    padding: 16px 4%;
  }

  .header-nav {
    display: none;
  }

  .burger-menu {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .extra-buttons {
    gap: 6px;
  }

  .lang-btn {
    padding: 6px 10px;
    font-size: 11px;
  }

  .logo-text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .blueprint-header {
    padding: 12px 3%;
  }

  .extra-buttons {
    gap: 4px;
  }

  .lang-btn {
    padding: 5px 8px;
    font-size: 10px;
  }

  .mobile-nav-link {
    font-size: 13px;
    padding: 10px 12px;
  }
}
</style>
