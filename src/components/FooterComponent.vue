<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Left section: Info -->
      <div class="footer-section">
        <h3 class="footer-title">GR</h3>
        <p class="footer-desc">{{ $t('footer.description') }}</p>
        <div class="footer-links">
          <a href="/#about" class="footer-link">{{ $t('footer.aboutLink') }}</a>
          <a href="/#contact" class="footer-link">{{ $t('footer.contactLink') }}</a>
          <a href="/projects" class="footer-link">{{ $t('footer.projectsLink') }}</a>
        </div>
      </div>

      <!-- Middle section: Social -->
      <div class="footer-section">
        <h4 class="footer-heading">{{ $t('footer.connectHeading') }}</h4>
        <div class="social-grid">
          <a 
            href="https://github.com/moonlight58" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="`${$t('footer.github')} profile`"
          >
            <span class="social-icon">󰊤</span>
            <span class="social-text">{{ $t('footer.github') }}</span>
          </a>
          <a 
            href="https://www.instagram.com/osiris._25" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="`${$t('footer.instagram')} profile`"
          >
            <span class="social-icon">󰋾</span>
            <span class="social-text">{{ $t('footer.instagram') }}</span>
          </a>
          <a 
            href="/#contact"
            class="social-link"
            :aria-label="`Send ${$t('footer.email')}`"
          >
            <span class="social-icon">󰇮</span>
            <span class="social-text">{{ $t('footer.email') }}</span>
          </a>
        </div>
      </div>

      <!-- Right section: Legal & Back to top -->
      <div class="footer-section">
        <p class="footer-legal">{{ $t('footer.copyright') }}</p>
        <p class="footer-legal">{{ $t('footer.allRightsReserved') }}</p>
        <button 
          class="back-to-top"
          @click="scrollToTop"
          :aria-label="$t('footer.backToTop')"
        >
          {{ $t('footer.backToTop') }}
        </button>
      </div>
    </div>

    <!-- Footer divider -->
    <div class="footer-divider"></div>
    
    <!-- Bottom bar -->
    <div class="footer-bottom">
      <span class="footer-meta">{{ $t('footer.credit') }}</span>
      <span class="footer-meta">{{ currentYear }}</span>
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.site-footer {
  background: rgba(10, 10, 15, 0.6);
  border-top: 1px solid rgba(79, 172, 254, 0.15);
  padding: 60px 6% 40px;
  margin-top: 80px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-title {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  letter-spacing: 2px;
}

.footer-heading {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-desc {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--color-primary);
  transform: translateX(4px);
}

.social-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(79, 172, 254, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.15);
  border-radius: 4px;
  color: var(--color-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 12px;
  font-family: var(--font-mono);
}

.social-link:hover {
  background: rgba(79, 172, 254, 0.1);
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateX(4px);
}

.social-icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.2);
}

.social-text {
  font-weight: 500;
}

.footer-legal {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.4;
}

.back-to-top {
  margin-top: 12px;
  padding: 10px 16px;
  background: transparent;
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: rgba(79, 172, 254, 0.1);
  border-color: var(--color-primary);
  box-shadow: 0 0 12px rgba(79, 172, 254, 0.3);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(79, 172, 254, 0.2),
    transparent
  );
  margin: 0 0 24px;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 6%;
}

.footer-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-section:nth-child(3) {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding: 40px 4% 30px;
    margin-top: 60px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section:nth-child(3) {
    grid-column: auto;
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 30px 3%;
  }

  .footer-container {
    gap: 20px;
  }

  .footer-title {
    font-size: 18px;
  }

  .footer-desc {
    font-size: 12px;
  }

  .social-link {
    padding: 8px 10px;
    font-size: 11px;
  }

  .back-to-top {
    padding: 8px 12px;
    font-size: 11px;
  }
}
</style>