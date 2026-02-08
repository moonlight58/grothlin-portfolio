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
      <div class="back-btn" @click="goBack">
        ↼ {{ $t('common.back') }}
      </div>
      <div class="hero-content">
        <div class="title-stack">
          <h1 class="title-line">{{ $t('internshipPage.hero.title') }}</h1>
          <h1 class="title-line accent">INTERNSHIP</h1>
        </div>

        <!-- Stats panel technique -->
        <div class="stats-panel">
          <div class="stat-item">
            <span class="stat-key">ROLE:</span>
            <span class="stat-value">{{ $t('internshipPage.hero.jobTitle') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">LOCATION:</span>
            <span class="stat-value">{{ $t('internshipPage.hero.location') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">DURATION:</span>
            <span class="stat-value">{{ $t('internshipPage.hero.duration') }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">STATUS:</span>
            <span class="stat-value blink">COMPLETED</span>
          </div>
        </div>

        <!-- Logo Euphron -->
        <div class="logo-visual">
          <img
            src="@/assets/Euphron.svg"
            class="logo-image"
            alt="Logo Euphron"
          />
        </div>
      </div>
    </section>

    <!-- Context Section -->
    <section id="context" class="context-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.context.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.context.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <p class="content-text">{{ $t('internshipPage.context.description1') }}</p>
        <p class="content-text">{{ $t('internshipPage.context.description2') }}</p>
        
        <div class="objectives-grid">
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon"></span>
              <span class="card-number">01</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.context.objective1Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.context.objective1Desc') }}</p>
          </div>
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon"></span>
              <span class="card-number">02</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.context.objective2Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.context.objective2Desc') }}</p>
          </div>
          <div class="objective-card">
            <div class="card-header">
              <span class="card-icon"></span>
              <span class="card-number">03</span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.context.objective3Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.context.objective3Desc') }}</p>
          </div>
        </div>
        
        <div class="constraint-box">
          <span class="constraint-label">{{ $t('internshipPage.context.constraintLabel') }}</span>
          <span class="constraint-text">{{ $t('internshipPage.context.constraintText') }}</span>
        </div>
      </div>
    </section>

    <!-- Role Section -->
    <section id="role" class="role-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.role.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.role.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <p class="content-text">{{ $t('internshipPage.role.description') }}</p>
        
        <div class="responsibilities-grid">
          <div class="responsibility-card">
            <div class="card-header">
              <span class="card-number">01</span>
              <span class="card-icon"></span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.role.responsibility1Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.role.responsibility1Desc') }}</p>
          </div>
          <div class="responsibility-card">
            <div class="card-header">
              <span class="card-number">02</span>
              <span class="card-icon"></span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.role.responsibility2Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.role.responsibility2Desc') }}</p>
          </div>
          <div class="responsibility-card">
            <div class="card-header">
              <span class="card-number">03</span>
              <span class="card-icon"></span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.role.responsibility3Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.role.responsibility3Desc') }}</p>
          </div>
          <div class="responsibility-card">
            <div class="card-header">
              <span class="card-number">04</span>
              <span class="card-icon"></span>
            </div>
            <h4 class="card-title">{{ $t('internshipPage.role.responsibility4Title') }}</h4>
            <p class="card-description">{{ $t('internshipPage.role.responsibility4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Section -->
    <section id="organization" class="organization-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.organization.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.organization.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              <span class="marker-label">WEEKS</span>
              <span class="marker-value">1-2</span>
            </div>
            <div class="timeline-content">
              <h4 class="timeline-title">{{ $t('internshipPage.organization.week12Title') }}</h4>
              <p class="timeline-description">{{ $t('internshipPage.organization.week12Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">
              <span class="marker-label">WEEK</span>
              <span class="marker-value">3</span>
            </div>
            <div class="timeline-content">
              <h4 class="timeline-title">{{ $t('internshipPage.organization.week3Title') }}</h4>
              <p class="timeline-description">{{ $t('internshipPage.organization.week3Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">
              <span class="marker-label">WEEKS</span>
              <span class="marker-value">4-8</span>
            </div>
            <div class="timeline-content">
              <h4 class="timeline-title">{{ $t('internshipPage.organization.week48Title') }}</h4>
              <p class="timeline-description">{{ $t('internshipPage.organization.week48Desc') }}</p>
            </div>
          </div>
        </div>
        
        <div class="methodology-box">
          <div class="box-header">
            <span class="box-icon"></span>
            <h4 class="box-title">{{ $t('internshipPage.organization.methodologyTitle') }}</h4>
          </div>
          <p class="box-description">{{ $t('internshipPage.organization.methodologyDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="tech-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.techStack.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.techStack.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <div class="tech-stack-grid">
          <div class="tech-stack-section">
            <h3 class="stack-title">{{ $t('internshipPage.techStack.frontendTitle') }}</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.frontend1Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.frontend1Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.frontend2Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.frontend2Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">󱇯</span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.frontend3Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.frontend3Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.frontend4Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.frontend4Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tech-stack-section">
            <h3 class="stack-title">{{ $t('internshipPage.techStack.backendTitle') }}</h3>
            <div class="tech-list">
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.backend1Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.backend1Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.backend2Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.backend2Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.backend3Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.backend3Desc') }}</p>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon"></span>
                <div class="tech-info">
                  <strong class="tech-name">{{ $t('internshipPage.techStack.backend4Name') }}</strong>
                  <p class="tech-desc">{{ $t('internshipPage.techStack.backend4Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="justification-box">
          <div class="box-header">
            <span class="box-icon">󰛨</span>
            <h4 class="box-title">{{ $t('internshipPage.techStack.justificationTitle') }}</h4>
          </div>
          <p class="box-description">{{ $t('internshipPage.techStack.justificationDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.features.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.features.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <div class="features-grid">
          <div class="feature-category">
            <div class="category-header">
              <span class="category-icon"></span>
              <h3 class="category-title">{{ $t('internshipPage.features.category1Title') }}</h3>
            </div>
            <ul class="feature-list">
              <li>{{ $t('internshipPage.features.category1Item1') }}</li>
              <li>{{ $t('internshipPage.features.category1Item2') }}</li>
              <li>{{ $t('internshipPage.features.category1Item3') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="category-header">
              <span class="category-icon"></span>
              <h3 class="category-title">{{ $t('internshipPage.features.category2Title') }}</h3>
            </div>
            <ul class="feature-list">
              <li>{{ $t('internshipPage.features.category2Item1') }}</li>
              <li>{{ $t('internshipPage.features.category2Item2') }}</li>
              <li>{{ $t('internshipPage.features.category2Item3') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="category-header">
              <span class="category-icon"></span>
              <h3 class="category-title">{{ $t('internshipPage.features.category3Title') }}</h3>
            </div>
            <ul class="feature-list">
              <li>{{ $t('internshipPage.features.category3Item1') }}</li>
              <li>{{ $t('internshipPage.features.category3Item2') }}</li>
            </ul>
          </div>
          <div class="feature-category">
            <div class="category-header">
              <span class="category-icon"></span>
              <h3 class="category-title">{{ $t('internshipPage.features.category4Title') }}</h3>
            </div>
            <ul class="feature-list">
              <li>{{ $t('internshipPage.features.category4Item1') }}</li>
              <li>{{ $t('internshipPage.features.category4Item2') }}</li>
              <li>{{ $t('internshipPage.features.category4Item3') }}</li>
            </ul>
          </div>
        </div>
        
        <div class="highlight-box">
          <div class="box-header">
            <span class="box-icon">󰛨</span>
            <h4 class="box-title">{{ $t('internshipPage.features.highlightTitle') }}</h4>
          </div>
          <p class="box-description">{{ $t('internshipPage.features.highlightDesc') }}</p>
        </div>
        
        <div class="progress-box">
          <div class="progress-header">
            <h4 class="progress-title">{{ $t('internshipPage.features.progressTitle') }}</h4>
            <span class="progress-percentage">{{ $t('internshipPage.features.progressPercentage') }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 70%"></div>
          </div>
          <p class="progress-description">{{ $t('internshipPage.features.progressDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section id="architecture" class="architecture-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.architecture.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.architecture.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <div class="diagram-container">
          <img
            src="@/assets/stage/Diagram.png"
            :alt="$t('internshipPage.architecture.diagramAlt')"
            class="architecture-diagram"
          />
          <div class="diagram-caption">
            <span class="caption-label">FIGURE 01:</span>
            <em class="caption-text">{{ $t('internshipPage.architecture.diagramCaption') }}</em>
          </div>
        </div>
        
        <div class="architecture-description">
          <p class="content-text">{{ $t('internshipPage.architecture.description') }}</p>
          
          <div class="architecture-sections">
            <div class="arch-section">
              <div class="section-header">
                <span class="section-icon">󰛈</span>
                <h4 class="section-title">{{ $t('internshipPage.architecture.section1Title') }}</h4>
              </div>
              <p class="section-description">{{ $t('internshipPage.architecture.section1Desc') }}</p>
            </div>
            <div class="arch-section">
              <div class="section-header">
                <span class="section-icon">⚡</span>
                <h4 class="section-title">{{ $t('internshipPage.architecture.section2Title') }}</h4>
              </div>
              <p class="section-description">{{ $t('internshipPage.architecture.section2Desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section id="security" class="security-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.security.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.security.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <p class="content-text">{{ $t('internshipPage.security.intro') }}</p>
        
        <div class="security-methods">
          <div class="security-method">
            <div class="method-header">
              <span class="method-number">01</span>
              <h4 class="method-title">{{ $t('internshipPage.security.method1Title') }}</h4>
            </div>
            <p class="method-description">{{ $t('internshipPage.security.method1Desc') }}</p>
            <div class="method-image-wrapper">
              <img
                src="@/assets/stage/RegexCheck.png"
                :alt="$t('internshipPage.security.method1Alt')"
                class="security-image"
              />
            </div>
          </div>
          
          <div class="security-method">
            <div class="method-header">
              <span class="method-number">02</span>
              <h4 class="method-title">{{ $t('internshipPage.security.method2Title') }}</h4>
            </div>
            <p class="method-description">{{ $t('internshipPage.security.method2Desc') }}</p>
            <ul class="method-list">
              <li>{{ $t('internshipPage.security.method2Item1') }}</li>
              <li>{{ $t('internshipPage.security.method2Item2') }}</li>
              <li>{{ $t('internshipPage.security.method2Item3') }}</li>
            </ul>
            <div class="method-image-wrapper">
              <img
                src="@/assets/stage/PreparedQuery.png"
                :alt="$t('internshipPage.security.method2Alt')"
                class="security-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Section -->
    <section id="learning" class="learning-zone">
      <div class="section-marker">
        <span class="marker-number">{{ $t('internshipPage.learning.sectionNumber') }}</span>
        <span class="marker-title">{{ $t('internshipPage.learning.title').toUpperCase() }}</span>
      </div>

      <div class="content-block">
        <div class="learning-grid">
          <div class="learning-section">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3 class="section-title">{{ $t('internshipPage.learning.technicalTitle') }}</h3>
            </div>
            <ul class="learning-list">
              <li>{{ $t('internshipPage.learning.technical1') }}</li>
              <li>{{ $t('internshipPage.learning.technical2') }}</li>
              <li>{{ $t('internshipPage.learning.technical3') }}</li>
              <li>{{ $t('internshipPage.learning.technical4') }}</li>
            </ul>
          </div>
          <div class="learning-section">
            <div class="section-header">
              <span class="section-icon"></span>
              <h3 class="section-title">{{ $t('internshipPage.learning.softTitle') }}</h3>
            </div>
            <ul class="learning-list">
              <li>{{ $t('internshipPage.learning.soft1') }}</li>
              <li>{{ $t('internshipPage.learning.soft2') }}</li>
              <li>{{ $t('internshipPage.learning.soft3') }}</li>
              <li>{{ $t('internshipPage.learning.soft4') }}</li>
            </ul>
          </div>
        </div>
        
        <div class="reflection-box">
          <div class="box-header">
            <span class="box-icon"></span>
            <h4 class="box-title">{{ $t('internshipPage.learning.reflectionTitle') }}</h4>
          </div>
          <p class="box-description">{{ $t('internshipPage.learning.reflectionDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-content">
        <span class="footer-text">© 2026 Gaël Röthlin</span>
        <span class="footer-text">Euphron Project Documentation</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "InternshipView",
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    updateCoords(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
/* ========== VARIABLES ========== */
:root {
  --color-bg: #0a0e1a;
  --color-text: #e8eef5;
  --color-muted: #8b95a8;
  --color-primary: #4facfe;
  --font-sans: "Chivo", sans-serif;
  --font-mono: "Space Mono", monospace;
}

/* ========== BASE ========== */
.blueprint-internship {
  min-height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  position: relative;
  overflow-x: hidden;
}

/* ========== GRILLE ========== */
.grid-layer {
  position: fixed;
  inset: 0;
  background-image: linear-gradient(
      rgba(79, 172, 254, 0.02) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(79, 172, 254, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  pointer-events: none;
}

/* ========== HERO SECTION ========== */
.internship-hero {
  min-height: 60vh;
  position: relative;
  padding: 120px 6% 80px;
  margin-top: 5rem;
  z-index: 1;
}

.back-btn {
  position: absolute;
  top: 32px;
  left: 32px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateX(-4px);
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

/* Logo visual */
.logo-visual {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(79, 172, 254, 0.3));
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
  color: var(--color-muted);
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

/* ========== CONSTRAINT BOX ========== */
.constraint-box {
  background: rgba(79, 172, 254, 0.05);
  border-left: 4px solid var(--color-primary);
  padding: 20px 24px;
  margin-top: 40px;
  font-family: var(--font-mono);
  font-size: 13px;
}

.constraint-label {
  color: var(--color-primary);
  font-weight: 700;
  margin-right: 8px;
}

.constraint-text {
  color: var(--color-muted);
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

/* ========== TIMELINE ========== */
.timeline {
  margin: 40px 0;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(79, 172, 254, 0.2);
}

.timeline-item {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  position: relative;
}

.timeline-marker {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
}

.timeline-marker::after {
  content: "";
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: var(--color-primary);
  border: 3px solid var(--color-bg);
  border-radius: 50%;
  z-index: 1;
}

.marker-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-muted);
  letter-spacing: 1px;
}

.marker-value {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

.timeline-content {
  flex: 1;
  padding-top: 8px;
}

.timeline-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 12px;
}

.timeline-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
}

/* ========== BOX STYLES ========== */
.methodology-box,
.justification-box,
.highlight-box,
.reflection-box {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  margin-top: 40px;
}

.box-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.box-icon {
  font-size: 24px;
}

.box-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.box-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
}

/* ========== TECH STACK ========== */
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin: 40px 0;
}

.tech-stack-section {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
}

.stack-title {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 2px;
  margin: 0 0 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.tech-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.tech-info {
  flex: 1;
}

.tech-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  display: block;
  margin-bottom: 6px;
}

.tech-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-muted);
  margin: 0;
}

/* ========== FEATURES GRID ========== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.feature-category {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  transition: all 0.3s ease;
}

.feature-category:hover {
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.06);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.category-icon {
  font-size: 28px;
}

.category-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.feature-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* ========== PROGRESS BOX ========== */
.progress-box {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  margin-top: 40px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.progress-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.progress-percentage {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}

.progress-fill {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.5s ease;
}

.progress-description {
  font-size: 13px;
  color: var(--color-muted);
  margin: 0;
}

/* ========== ARCHITECTURE ========== */
.diagram-container {
  margin: 40px 0;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
}

.architecture-diagram {
  width: 50%;
  display: block;
  margin-bottom: 20px;
  /* center the image */
  margin: 0 auto 20px;
}

.diagram-caption {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
}

.caption-label {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-weight: 700;
}

.caption-text {
  color: var(--color-muted);
  font-style: italic;
}

.architecture-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.arch-section {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 24px;
}

.arch-section .section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.section-icon {
  font-size: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.section-description {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 0;
}

/* ========== SECURITY ========== */
.security-methods {
  margin-top: 40px;
}

.security-method {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  margin-bottom: 32px;
}

.method-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.method-number {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 700;
  padding: 8px 16px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
}

.method-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.method-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 16px;
}

.method-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.method-list li {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.method-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

.method-image-wrapper {
  margin-top: 20px;
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 16px;
  background: rgba(10, 14, 26, 0.5);
}

.security-image {
  width: 100%;
  height: auto;
  display: block;
}

/* ========== LEARNING ========== */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  margin: 40px 0;
}

.learning-section {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
}

.learning-section .section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.learning-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.learning-list li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}

.learning-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

/* ========== FOOTER ========== */
.site-footer {
  padding: 40px 6%;
  border-top: 1px solid rgba(79, 172, 254, 0.1);
  position: relative;
  z-index: 1;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1200px) {
  .stats-panel {
    position: relative;
    top: auto;
    right: auto;
    margin-top: 40px;
  }

  .logo-visual {
    position: relative;
    left: 0;
    transform: none;
    margin-top: 40px;
  }
}

@media (max-width: 1024px) {
  .objectives-grid,
  .responsibilities-grid,
  .features-grid,
  .tech-stack-grid,
  .architecture-sections,
  .learning-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 60px;
  }

  .timeline-item {
    gap: 24px;
  }

  .timeline-marker {
    min-width: 100px;
  }
}

@media (max-width: 768px) {
  .internship-hero {
    padding: 100px 5% 60px;
  }

  section {
    padding: 80px 5%;
  }

  .title-line {
    font-size: clamp(2.5rem, 10vw, 5rem);
  }

  .marker-number {
    font-size: 32px;
  }

  .marker-title {
    font-size: 24px;
  }

  .stats-panel {
    min-width: auto;
    width: 100%;
  }

  .footer-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .timeline::before {
    display: none;
  }

  .timeline-marker::after {
    display: none;
  }

  .timeline-item {
    flex-direction: column;
    gap: 16px;
  }
}

/* ========== ACCESSIBILITÉ ========== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>