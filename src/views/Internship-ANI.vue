<template>
  <div class="blueprint-internship" @mousemove="updateCoords">
    <!-- Grille blueprint subtile -->
    <div class="grid-layer"></div>

    <!-- Spybar -->
    <aside class="spybar">
      <nav class="spybar-nav">
        <a 
          v-for="section in sections" 
          :key="section.id"
          :href="`#${section.id}`"
          class="spybar-link"
          :class="{ active: currentSection === section.id }"
          :title="section.label"
          @click="scrollToSection(section.id)"
        >
          <span class="spybar-indicator"></span>
          <span class="spybar-label">{{ section.label }}</span>
        </a>
      </nav>
    </aside>

    <!-- Hero Section -->
    <section class="internship-hero">
      <a class="back-btn" href="/">
        ↼ {{ $t('common.back') }}
      </a>
      <div class="hero-content">
        <div class="title-stack">
          <h1 class="title-line">{{ $t('internshipPage.ani.hero.title') }}</h1>
          <h1 class="title-line accent">{{ $t('internshipPage.ani.hero.jobTitle') }}</h1>
        </div>

        <!-- Stats panel technique -->
        <div class="stats-panel">
          <div class="stat-item">
            <span class="stat-key">{{ $t('internshipPage.ani.hero.jobTitleLabel') }}:</span>
            <span class="stat-value">{{ $t('internshipPage.ani.hero.jobTitle') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">{{ $t('internshipPage.ani.hero.locationLabel') }}:</span>
            <span class="stat-value">{{ $t('internshipPage.ani.hero.location') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">{{ $t('internshipPage.ani.hero.durationLabel') }}:</span>
            <span class="stat-value">{{ $t('internshipPage.ani.hero.duration') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">{{ $t('internshipPage.ani.hero.statusLabel') }}:</span>
            <span class="stat-value blink"><span class="stat-icon"></span>  {{ $t('internshipPage.ani.hero.status') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Section -->
    <section id="context" class="context-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.ani.context.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.ani.context.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <p class="content-text">{{ $t('internshipPage.ani.context.description1') }}</p>
        <p class="content-text">{{ $t('internshipPage.ani.context.description2') }}</p>
        
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon"></span>
              <span class="card-number">01</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.context.objective1Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.context.objective1Desc') }}</p>
          </div>
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon">󰢍</span>
              <span class="card-number">02</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.context.objective2Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.context.objective2Desc') }}</p>
          </div>
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon">󰧑</span>
              <span class="card-number">03</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.context.objective3Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.context.objective3Desc') }}</p>
          </div>
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon"></span>
              <span class="card-number">04</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.context.objective4Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.context.objective4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Role Section -->
    <section id="role" class="context-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.ani.role.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.ani.role.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <p class="content-text">{{ $t('internshipPage.ani.role.description') }}</p>
        
        <div class="responsibilities-grid">
          <div class="responsibility-card">
            <div class="card-header">
                <span class="card-icon"></span>
                <span class="card-number">01</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.role.responsibility1Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.role.responsibility1Desc') }}</p>
          </div>
          <div class="responsibility-card">
            <div class="card-header">
                <span class="card-icon"></span>
                <span class="card-number">02</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.role.responsibility2Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.role.responsibility2Desc') }}</p>
          </div>
          <div class="responsibility-card">
            <div class="card-header">
                <span class="card-icon"></span>
                <span class="card-number">03</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.ani.role.responsibility3Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.ani.role.responsibility3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-content">
        <span class="footer-text">© 2026 Gaël Röthlin</span>
        <span class="footer-text">ANI & Low-Tech Internship Documentation</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "InternshipANI",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      currentSection: "context",
    };
  },
  computed: {
    sections() {
      return [
        { id: "context", label: this.$t('internshipPage.ani.context.title') },
        { id: "role", label: this.$t('internshipPage.ani.role.title') },
      ];
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSpybarScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleSpybarScroll);
  },
  methods: {
    updateCoords(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    goBack() {
      this.$router.back();
    },
    handleSpybarScroll() {
      const sections = this.sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      let currentSection = "context";
      let closestDistance = Infinity;

      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);

          if (rect.top <= 100 && distance < closestDistance) {
            closestDistance = distance;
            currentSection = section.id;
          } else if (rect.top > 100 && rect.top < closestDistance) {
            closestDistance = rect.top;
            currentSection = section.id;
          }
        }
      });

      this.currentSection = currentSection;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

<style scoped>
p {
    text-align: justify;
}

/* ========== SPYBAR ========== */
.spybar {
  position: fixed;
  right: 40px;
  top: 70%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: small;
}

.spybar-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.spybar-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-muted);
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.05em;
}

.spybar-link:hover {
  color: var(--color-primary);
}

.spybar-link.active {
  color: var(--color-primary);
}

.spybar-indicator {
  width: 8px;
  height: 8px;
  border: 2px solid currentColor;
  border-radius: 50%;
  transition: all 0.3s ease;
  order: 2;
  margin-left: auto;
}

.spybar-link.active .spybar-indicator {
  background-color: var(--color-primary);
  box-shadow: 0 0 16px rgba(79, 172, 254, 0.6);
  width: 12px;
  height: 12px;
  margin-left: auto;
}

.spybar-label {
  order: 1;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.3s ease;
  opacity: 0;
  margin-right: auto;
}

.spybar-link:hover .spybar-label,
.spybar-link.active .spybar-label {
  max-width: 150px;
  opacity: 1;
}

.internship-hero {
  min-height: 60vh;
  position: relative;
  padding: 120px 6% 80px;
  z-index: 1;
}

.hero-content {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.title-stack {
  margin-bottom: 60px;
}

.title-line {
  font-family: "Chivo", sans-serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 0.9;
  margin: 0;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-primary);
}

.title-line.accent {
  font-family: "Bricolage Grotesque", sans-serif;
  color: var(--color-primary);
  -webkit-text-stroke: 0;
  width:35%;
  text-align: left;
}

/* Stats panel */
.stats-panel {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  min-width: 320px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12px;
}

.stat-key {
  color: var(--color-muted);
  letter-spacing: 1px;
}

.stat-value {
  color: var(--color-primary);
  font-weight: 700;
  text-align: right;
  max-width: 200px;
}

.stat-icon {
  font-size: 14px;
  margin-right: 4px;;
}

.blink {
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0.3;
  }
}

/* ========== SECTIONS ========== */
section {
  padding: 100px 6%;
  position: relative;
  z-index: 1;
}

.section-marker {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 60px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
  padding-bottom: 16px;
}

.marker-number {
  font-family: var(--font-mono);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.3;
}

.marker-title {
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-text);
}

.content-block {
  max-width: 1400px;
  margin: 0 auto;
}

.content-text {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 24px;
}

/* ========== OBJECTIVES GRID ========== */
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.objective-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  transition: all 0.3s ease;
}

.objective-card:hover {
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.06);
  transform: translateY(-4px);
}

.objective-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 32px;
}

.card-number {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 700;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 12px;
}

.card-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
}

/* ========== RESPONSIBILITIES GRID ========== */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.responsibility-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  transition: all 0.3s ease;
}

.responsibility-card:hover {
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.06);
  transform: translateY(-4px);
}

.responsibility-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .internship-hero {
    padding: 60px 30px 40px;
  }

  .context-zone {
    padding: 50px 30px;
  }

  .title-line {
    font-size: 2.5rem;
  }

  .spybar {
    left: 10px;
  }
}
</style>