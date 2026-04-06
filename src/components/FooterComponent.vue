<template>
  <footer class="site-footer" role="contentinfo">

    <!-- Top glow bar -->
    <div class="footer-glow-bar"></div>

    <div class="footer-inner">

      <!-- ── BRAND COLUMN ── -->
      <div class="footer-col footer-col--brand">
        <a href="/" class="footer-logo">GR<span class="logo-cursor">_</span></a>
        <p class="footer-tagline">{{ $t('footer.description') }}</p>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="/#about"   class="footer-nav-link">{{ $t('nav.about') }}</a>
          <a href="/#work"    class="footer-nav-link">{{ $t('nav.work') }}</a>
          <a href="/#skills"  class="footer-nav-link">{{ $t('nav.skills') }}</a>
          <a href="/#contact" class="footer-nav-link">{{ $t('nav.contact') }}</a>
        </nav>
      </div>

      <!-- ── INTERNSHIPS COLUMN ── -->
      <div class="footer-col">
        <h4 class="footer-heading">
          <span class="heading-prefix">// </span>{{ $t('home.body.internship.title') }}
        </h4>

        <div class="internship-list">
          <a href="/internship/ani" class="internship-card">
            <!-- Status strip on the left -->
            <span class="internship-card__strip internship-card__strip--active" aria-hidden="true"></span>

            <div class="internship-card__body">
              <div class="internship-card__top">
                <span class="internship-card__name">ANI &amp; Low-Tech</span>
                <span class="internship-card__badge internship-card__badge--active">{{ $t('home.internship.ani.badge') }}</span>
              </div>
              <span class="internship-card__date">{{ $t('home.internship.ani.date') }}</span>
            </div>

            <span class="internship-card__arrow" aria-hidden="true">⇁</span>
          </a>

          <a href="/internship/euphron" class="internship-card">
            <span class="internship-card__strip internship-card__strip--done" aria-hidden="true"></span>

            <div class="internship-card__body">
              <div class="internship-card__top">
                <span class="internship-card__name">Euphron</span>
                <span class="internship-card__badge internship-card__badge--done">{{ $t('home.internship.euphron.badge') }}</span>
              </div>
              <span class="internship-card__date">{{ $t('home.internship.euphron.date') }}</span>
            </div>

            <span class="internship-card__arrow" aria-hidden="true">⇁</span>
          </a>
        </div>

        <a href="/projects" class="footer-projects-link">
          <span>{{ $t('footer.projectsLink') }}</span>
          <span class="projects-link__arrow">→</span>
        </a>
      </div>

      <!-- ── CONNECT COLUMN ── -->
      <div class="footer-col">
        <h4 class="footer-heading">
          <span class="heading-prefix">// </span>{{ $t('footer.connectHeading') }}
        </h4>
        <div class="social-stack">
          <a
            href="https://github.com/moonlight58"
            target="_blank"
            rel="noopener noreferrer"
            class="social-row"
            :aria-label="$t('footer.github')"
          >
            <img src="../assets/github.svg" alt="" class="social-row__icon-img" />
            <div class="social-row__text">
              <span class="social-row__label">{{ $t('footer.github') }}</span>
              <span class="social-row__handle">moonlight58</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/osiris._25"
            target="_blank"
            rel="noopener noreferrer"
            class="social-row"
            :aria-label="$t('footer.instagram')"
          >
            <img src="../assets/instagram.svg" alt="" class="social-row__icon-img" />
            <div class="social-row__text">
              <span class="social-row__label">{{ $t('footer.instagram') }}</span>
              <span class="social-row__handle">osiris._25</span>
            </div>
          </a>
          <a
            href="/#contact"
            class="social-row"
            :aria-label="$t('footer.email')"
          >
            <img src="../assets/email.svg" alt="" class="social-row__icon-img" />
            <div class="social-row__text">
              <span class="social-row__label">{{ $t('footer.email') }}</span>
              <span class="social-row__handle">gael.rothlin@edu.univ-fcomte.fr</span>
            </div>
          </a>
        </div>

        <button class="back-to-top" @click="scrollToTop" :aria-label="$t('footer.backToTop')">
          <span class="btt-icon" aria-hidden="true">↑</span>
          <span>{{ $t('footer.backToTop') }}</span>
        </button>
      </div>

    </div>

    <!-- ── BOTTOM BAR ── -->
    <div class="footer-bottom">
      <div class="footer-bottom__left">
        <span class="footer-meta">{{ $t('footer.copyright') }}</span>
        <span class="footer-meta footer-meta--sep" aria-hidden="true">·</span>
        <span class="footer-meta">{{ $t('footer.allRightsReserved') }}</span>
      </div>
      <div class="footer-bottom__right">
        <span class="footer-meta">{{ $t('footer.credit') }}</span>
        <span class="footer-meta footer-meta--sep" aria-hidden="true">·</span>
        <span class="footer-meta">{{ currentYear }}</span>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* ── BASE ── */
.site-footer {
  position: relative;
  background: rgba(5, 6, 9, 0.98);
  margin-top: 100px;
  border-top: 1px solid rgba(79, 172, 254, 0.12);
}

/* ── GLOW BAR ── */
.footer-glow-bar {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(79, 172, 254, 0.0) 15%,
    rgba(79, 172, 254, 0.6) 40%,
    rgba(125, 211, 252, 0.8) 50%,
    rgba(79, 172, 254, 0.6) 60%,
    rgba(79, 172, 254, 0.0) 85%,
    transparent 100%
  );
  box-shadow: 0 0 24px rgba(79, 172, 254, 0.35);
}

/* ── INNER GRID ── */
.footer-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: 60px 80px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 64px 6% 48px;
}

/* ── COLUMN BASE ── */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── BRAND ── */
.footer-logo {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: 2px;
  display: inline-block;
  transition: text-shadow 0.3s ease;
}

.footer-logo:hover {
  text-shadow: 0 0 16px rgba(79, 172, 254, 0.7);
}

.logo-cursor {
  animation: cursorBlink 1.2s infinite;
  color: var(--color-secondary);
}

@keyframes cursorBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.footer-tagline {
  font-size: 13px;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
}

/* ── FOOTER NAV ── */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid rgba(79, 172, 254, 0.1);
}

.footer-nav-link {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  text-decoration: none;
  letter-spacing: 0.8px;
  transition: color 0.25s ease, transform 0.25s ease;
  display: inline-block;
}

.footer-nav-link:hover {
  color: var(--color-primary);
  transform: translateX(6px);
}

/* ── SECTION HEADING ── */
.footer-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  margin: 0;
}

.heading-prefix {
  color: rgba(79, 172, 254, 0.45);
  font-weight: 400;
}

/* ── INTERNSHIP LIST ── */
.internship-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── INTERNSHIP CARD (redesigned) ── */
.internship-card {
  display: flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.12);
  border-radius: 3px;
  overflow: hidden;
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
  position: relative;
}

.internship-card:hover {
  border-color: rgba(79, 172, 254, 0.5);
  background: rgba(79, 172, 254, 0.07);
  transform: translateX(4px);
}

/* Left status strip */
.internship-card__strip {
  display: block;
  width: 3px;
  align-self: stretch;
  flex-shrink: 0;
}

.internship-card__strip--active {
  background: var(--color-primary);
  box-shadow: 0 0 8px rgba(79, 172, 254, 0.6);
  animation: stripPulse 2s ease-in-out infinite;
}

.internship-card__strip--done {
  background: rgba(79, 172, 254, 0.25);
}

@keyframes stripPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

/* Card body */
.internship-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  min-width: 0; /* prevent text overflow breaking layout */
}

.internship-card__top {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.internship-card__name {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text-primary);
  white-space: nowrap;
}

/* Status badge */
.internship-card__badge {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 2px 6px;
  border-radius: 2px;
}

.internship-card__badge--active {
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.12);
  border: 1px solid rgba(79, 172, 254, 0.3);
}

.internship-card__badge--done {
  color: var(--color-text-muted);
  background: rgba(106, 124, 146, 0.1);
  border: 1px solid rgba(106, 124, 146, 0.25);
}

.internship-card__date {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
}

/* Arrow */
.internship-card__arrow {
  font-size: 14px;
  color: var(--color-primary);
  padding: 0 14px;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  flex-shrink: 0;
}

.internship-card:hover .internship-card__arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ── PROJECTS LINK ── */
.footer-projects-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border: 1px dashed rgba(79, 172, 254, 0.2);
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-secondary);
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.footer-projects-link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.05);
}

.projects-link__arrow {
  transition: transform 0.25s ease;
}

.footer-projects-link:hover .projects-link__arrow {
  transform: translateX(4px);
}

/* ── SOCIAL ROWS ── */
.social-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.1);
  border-radius: 3px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-row:hover {
  border-color: rgba(79, 172, 254, 0.5);
  background: rgba(79, 172, 254, 0.08);
  transform: translateX(4px);
}

/* SVG icon — replaces Nerd Font glyphs */
.social-row__icon-img {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  filter: brightness(0) saturate(100%) invert(62%) sepia(60%) saturate(500%) hue-rotate(180deg) brightness(105%);
  transition: filter 0.3s ease;
}

.social-row:hover .social-row__icon-img {
  filter: brightness(0) saturate(100%) invert(72%) sepia(80%) saturate(600%) hue-rotate(185deg) brightness(110%);
}

.social-row__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.social-row__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-secondary);
  letter-spacing: 1px;
  line-height: 1;
}

.social-row__handle {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── BACK TO TOP ── */
.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: transparent;
  border: 1px solid rgba(79, 172, 254, 0.25);
  border-radius: 3px;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
}

.back-to-top:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.08);
  transform: translateY(-3px);
  box-shadow: 0 4px 16px rgba(79, 172, 254, 0.15);
}

.btt-icon {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.back-to-top:hover .btt-icon {
  transform: translateY(-3px);
}

/* ── BOTTOM BAR ── */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px 6% 20px;
  border-top: 1px solid rgba(79, 172, 254, 0.07);
  gap: 12px;
  flex-wrap: wrap;
}

.footer-bottom__left,
.footer-bottom__right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-meta {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.5px;
}

.footer-meta--sep {
  opacity: 0.3;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 48px 60px;
  }

  .footer-col--brand {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 48px;
    align-items: start;
  }

  .footer-logo,
  .footer-tagline { grid-column: 1; }
  .footer-nav { grid-column: 2; grid-row: 1 / 3; border-top: none; padding-top: 0; }
}

@media (max-width: 768px) {
  .site-footer { margin-top: 60px; }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 48px 5% 32px;
  }

  .footer-col--brand {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .footer-nav { border-top: 1px solid rgba(79, 172, 254, 0.1); padding-top: 12px; }

  /* On mobile, hide the handle text to keep rows compact */
  .social-row__handle { display: none; }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .footer-inner { padding: 36px 4% 24px; }

  /* Stack badge below name on very small screens */
  .internship-card__top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>