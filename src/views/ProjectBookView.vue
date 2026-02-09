<template>
  <div class="blueprint-projects" @mousemove="updateCoords">
    <!-- Grille blueprint subtile -->
    <div class="grid-layer"></div>

    <!-- Hero Section pour Projects -->
    <section class="projects-hero">
      <div class="hero-content">

      <div class="back-btn" @click="goBack">
        ↼ {{ $t('common.back') }}
      </div>

        <div class="title-stack">
          <h1 class="title-line">{{ $t('projects.hero.title') }}</h1>
          <h1 class="title-line accent">{{ $t('projects.hero.subtitle') }}</h1>
        </div>

        <!-- Stats panel technique -->
        <div class="stats-panel">
          <div class="stat-item">
            <span class="stat-key">{{ $t('projects.hero.stats.total') }}:</span>
            <span class="stat-value">{{ projects.length }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">{{ $t('projects.hero.stats.stars') }}:</span>
            <span class="stat-value">{{ totalStars }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-key">{{ $t('projects.hero.stats.status') }}:</span>
            <span class="stat-value blink">{{ loading ? $t('projects.hero.stats.loading') : $t('projects.hero.stats.ready') }}</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="actions-panel">
          <button @click="refreshProjects" :disabled="loading" class="action-btn">
            <span v-if="!loading">↻ {{ $t('projects.hero.actions.refresh') }}</span>
            <span v-else>⟳ {{ $t('projects.hero.actions.syncing') }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-zone">
      <div class="section-marker">
        <span class="marker-number">01</span>
        <span class="marker-title">{{ $t('projects.section.marker') }}</span>
      </div>

      <!-- Loading state -->
      <div v-if="loading && projects.length === 0" class="loading-state">
        <div class="loading-indicator">
          <span class="loading-text">{{ $t('projects.section.loading') }}</span>
          <div class="loading-bar"></div>
        </div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="error-state">
        <div class="error-box">
          <span class="error-icon">⚠</span>
          <p class="error-message">{{ error }}</p>
          <button @click="refreshProjects" class="retry-btn">{{ $t('projects.section.retry') }} →</button>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else-if="projects.length === 0" class="empty-state">
        <div class="empty-box">
          <span class="empty-icon">⊘</span>
          <p class="empty-message">{{ $t('projects.section.empty') }}</p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-else class="blueprint-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="blueprint-card"
          :data-index="String(index + 1).padStart(2, '0')"
        >
          <!-- Card header avec numéro et language -->
          <div class="card-header">
            <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span v-if="project.language" class="language-badge">
              {{ project.language }}
            </span>
          </div>

          <!-- Card body -->
          <div class="card-body">
            <h3 class="card-title">{{ project.name }}</h3>
            <p class="card-description">
              {{ project.description || 'No description available.' }}
            </p>

            <!-- Topics/Tags -->
            <div v-if="project.topics && project.topics.length > 0" class="card-tags">
              <span
                v-for="topic in project.topics.slice(0, 5)"
                :key="topic"
                class="tag"
              >
                {{ topic }}
              </span>
              <span v-if="project.topics.length > 5" class="tag-more">
                +{{ project.topics.length - 5 }}
              </span>
            </div>
          </div>

          <!-- Card footer avec stats et lien -->
          <div class="card-footer">
            <div class="card-stats">
              <span v-if="project.stars > 0" class="stat-badge">
                ★ {{ project.stars }}
              </span>
              <span v-if="project.forks > 0" class="stat-badge">
                ⑂ {{ project.forks }}
              </span>
            </div>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              {{ $t('projects.card.viewRepo') }} →
            </a>
          </div>

          <!-- Hover effect overlay -->
          <div class="card-overlay"></div>
        </article>
      </div>
    </section>

    <section class="back-section">
      <div class="back-btn" @click="goBack">
        ↼ {{ $t('common.back') }}
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-content">
        <span class="footer-text">© 2026 Gaël Röthlin</span>
        <span class="footer-text">{{ $t('projects.footer.synced') }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  getPublicProjectsWithDescription,
  clearProjectsCache,
} from "@/services/githubService.js";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ProjectBookView",
  components: {
    NavBar,
  },
  data() {
    return {
      projects: [],
      loading: false,
      error: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    totalStars() {
      return this.projects.reduce((sum, project) => sum + (project.stars || 0), 0);
    },
  },
  mounted() {
    this.loadProjects();
  },
  methods: {
    async loadProjects(forceRefresh = false) {
      this.loading = true;
      this.error = null;

      try {
        this.projects = await getPublicProjectsWithDescription(forceRefresh);

        // parse projects description to either show FR: or EN: description based on i18n locale
        // Project description format in GitHub should be: "FR: Description en français EN: Description in English"
        this.projects = this.projects.map((project) => {
          if (project.description) {
            const frMatch = project.description.match(/FR:\s*([^EN]+)(?=EN:|$)/);
            const enMatch = project.description.match(/EN:\s*(.+)/);

            return {
              ...project,
              description: this.$i18n.locale === "fr" && frMatch
                ? frMatch[1].trim()
                : enMatch
                ? enMatch[1].trim()
                : project.description,
            };
          }
          return project;
        });
      } catch (error) {
        this.error =
          "CONNECTION_ERROR: Unable to fetch repositories. Please retry.";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    refreshProjects() {
      clearProjectsCache();
      this.loadProjects(true);
    },
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
.blueprint-projects {
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
.projects-hero {
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
  min-width: 280px;
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

/* Actions panel */
.actions-panel {
  position: absolute;
  right: 0;
  top: 220px;
}

.action-btn {
  padding: 16px 32px;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-bg);
  transform: translateY(-2px);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ========== PROJECTS SECTION ========== */
.projects-zone {
  position: relative;
  padding: 80px 6%;
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

/* ========== STATES ========== */
.loading-state,
.error-state,
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.loading-indicator {
  text-align: center;
}

.loading-text {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  letter-spacing: 2px;
  display: block;
  margin-bottom: 20px;
}

.loading-bar {
  width: 200px;
  height: 2px;
  background: rgba(79, 172, 254, 0.2);
  position: relative;
  overflow: hidden;
}

.loading-bar::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--color-primary);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

.error-box,
.empty-box {
  text-align: center;
  padding: 60px 40px;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  max-width: 500px;
}

.error-icon,
.empty-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 20px;
  color: var(--color-primary);
}

.error-message,
.empty-message {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-muted);
  letter-spacing: 1px;
  margin-bottom: 24px;
}

.retry-btn {
  padding: 12px 24px;
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: var(--color-primary);
  color: var(--color-bg);
}

/* ========== PROJECTS GRID ========== */
.blueprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
}

.blueprint-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  position: relative;
  transition: all 0.4s ease;
  overflow: hidden;
}

.blueprint-card::before {
  content: attr(data-index);
  position: absolute;
  top: 8px;
  right: 8px;
  font-family: var(--font-mono);
  font-size: 80px;
  font-weight: 700;
  color: rgba(79, 172, 254, 0.04);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}

.blueprint-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  background: rgba(79, 172, 254, 0.06);
}

.blueprint-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(79, 172, 254, 0.05) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.card-number {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 700;
  letter-spacing: 1px;
}

.language-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-primary);
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  padding: 6px 12px;
  letter-spacing: 1px;
}

.card-body {
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
}

.card-title {
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.card-description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 20px;
  min-height: 60px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-muted);
  background: transparent;
  border: 1px solid rgba(139, 149, 168, 0.3);
  padding: 6px 10px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.tag:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tag-more {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-primary);
  padding: 6px 10px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(79, 172, 254, 0.1);
  position: relative;
  z-index: 1;
}

.card-stats {
  display: flex;
  gap: 16px;
}

.stat-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
  letter-spacing: 0.5px;
}

.card-link {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
}

.card-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.card-link:hover::after {
  width: 100%;
}

.back-section {
  padding: 40px 6%;
  text-align: left;
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
@media (max-width: 1024px) {
  .stats-panel,
  .actions-panel {
    position: relative;
    top: auto;
    right: auto;
    margin-top: 40px;
  }

  .blueprint-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .projects-hero {
    padding: 100px 5% 60px;
  }

  .projects-zone {
    padding: 60px 5%;
  }

  .title-line {
    font-size: clamp(2.5rem, 10vw, 5rem);
  }

  .blueprint-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 12px;
    text-align: center;
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