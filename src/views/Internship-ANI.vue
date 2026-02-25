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
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "InternshipANI",
  components: {
    FooterComponent,
  },
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

@media (max-width: 1024px) {
  .spybar {
    right: 20px;
  }
}

@media (max-width: 768px) {
  .spybar {
    display: none;
  }
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

@media (max-width: 1024px) {
  .internship-hero {
    padding: 100px 5% 70px;
  }
}

@media (max-width: 768px) {
  .internship-hero {
    min-height: auto;
    padding: 60px 5% 40px;
  }
}

@media (max-width: 480px) {
  .internship-hero {
    padding: 40px 4% 30px;
  }
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

@media (max-width: 768px) {
  .title-line {
    font-size: clamp(1.8rem, 6vw, 3rem);
    -webkit-text-stroke: 1.5px var(--color-primary);
  }
}

@media (max-width: 480px) {
  .title-line {
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    -webkit-text-stroke: 1px var(--color-primary);
  }
}

.title-line.accent {
  font-family: "Bricolage Grotesque", sans-serif;
  color: var(--color-primary);
  -webkit-text-stroke: 0;
  width: 35%;
  text-align: left;
}

@media (max-width: 768px) {
  .title-line.accent {
    width: 100%;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .title-line.accent {
    width: 100%;
  }
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
  max-width: 100%;
}

@media (max-width: 1024px) {
  .stats-panel {
    position: relative;
    min-width: auto;
    margin-top: 40px;
  }
}

@media (max-width: 768px) {
  .stats-panel {
    padding: 24px;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .stats-panel {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
}

.stat-item {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12px;
}

@media (max-width: 768px) {
  .stat-item {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .stat-item {
    flex-direction: column;
    gap: 4px;
    font-size: 10px;
  }
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

@media (max-width: 480px) {
  .stat-value {
    max-width: 100%;
    text-align: left;
  }
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

@media (max-width: 1024px) {
  section {
    padding: 80px 5%;
  }
}

@media (max-width: 768px) {
  section {
    padding: 50px 5%;
  }
}

@media (max-width: 480px) {
  section {
    padding: 40px 4%;
  }
}

.section-marker {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 60px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
  padding-bottom: 16px;
}

@media (max-width: 768px) {
  .section-marker {
    gap: 16px;
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .section-marker {
    gap: 12px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
}

.marker-number {
  font-family: var(--font-mono);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.3;
}

@media (max-width: 768px) {
  .marker-number {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .marker-number {
    font-size: 24px;
  }
}

.marker-title {
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .marker-title {
    font-size: 20px;
    letter-spacing: 1px;
  }
}

@media (max-width: 480px) {
  .marker-title {
    font-size: 16px;
    letter-spacing: 0.5px;
  }
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

@media (max-width: 768px) {
  .content-text {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .content-text {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }
}

/* ========== OBJECTIVES GRID ========== */
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

@media (max-width: 1024px) {
  .objectives-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .objectives-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .objectives-grid {
    margin: 30px 0;
  }
}

.objective-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .objective-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .objective-card {
    padding: 16px;
  }
}

.objective-card:hover {
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.06);
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .objective-card:hover {
    transform: translateY(-2px);
  }
}

.objective-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .objective-card .card-header {
    margin-bottom: 16px;
  }
}

.card-icon {
  font-size: 32px;
}

@media (max-width: 768px) {
  .card-icon {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .card-icon {
    font-size: 20px;
  }
}

.card-number {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 700;
}

@media (max-width: 480px) {
  .card-number {
    font-size: 12px;
  }
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 12px;
}

@media (max-width: 768px) {
  .card-title {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .card-title {
    font-size: 15px;
    margin: 0 0 8px;
  }
}

.card-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
}

@media (max-width: 768px) {
  .card-description {
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .card-description {
    font-size: 12px;
    line-height: 1.5;
  }
}

/* ========== RESPONSIBILITIES GRID ========== */
.responsibilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

@media (max-width: 1024px) {
  .responsibilities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .responsibilities-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .responsibilities-grid {
    margin-top: 30px;
  }
}

.responsibility-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .responsibility-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .responsibility-card {
    padding: 16px;
  }
}

.responsibility-card:hover {
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.06);
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .responsibility-card:hover {
    transform: translateY(-2px);
  }
}

.responsibility-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .responsibility-card .card-header {
    margin-bottom: 16px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .internship-hero {
    padding: 60px 5% 40px;
  }

  .title-line {
    font-size: 2.5rem;
  }

  p {
    text-align: left;
  }
}

@media (max-width: 480px) {
  p {
    text-align: left;
  }

  .title-stack {
    margin-bottom: 40px;
  }

  .back-btn {
    font-size: 13px;
    padding: 8px 16px;
  }
}
</style>