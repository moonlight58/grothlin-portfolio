<template>
  <div class="blueprint-internship">
    <div class="grid-layer" aria-hidden="true"></div>

    <!-- ── SPYBAR ───────────────────────────────────────────────────────── -->
    <!--
      Fix: replaced scroll+click dual-fire with pure IntersectionObserver.
      On tablet (≤1024px) the bar collapses into a compact dot-only rail
      on the right edge so it never overflows, with labels shown on hover.
      Hidden entirely on mobile (≤640px) where it would be unusable.
    -->
    <aside class="spybar" aria-label="Page sections">
      <nav class="spybar-nav">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="spybar-link"
          :class="{ active: currentSection === section.id }"
          :aria-current="currentSection === section.id ? 'true' : undefined"
          @click.prevent="scrollToSection(section.id)"
        >
          <span class="spybar-label">{{ section.label }}</span>
          <span class="spybar-dot" aria-hidden="true"></span>
        </a>
      </nav>
    </aside>

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <!--
      Fix: stats-panel is no longer position:absolute at any breakpoint.
      Layout uses CSS grid so the panel never overlaps the title at
      1024–1200px. The logo moves into its own grid cell.
    -->
    <header class="internship-hero">
      <a class="back-btn" href="/">
        <span aria-hidden="true">↼</span> {{ $t('common.back') }}
      </a>

      <div class="hero-grid">
        <!-- Title -->
        <div class="title-stack">
          <p class="hero-eyebrow">INTERNSHIP_REPORT</p>
          <h1 class="title-line">{{ $t('internshipPage.euphron.hero.title') }}</h1>
          <h2 class="title-sub">{{ $t('internshipPage.euphron.hero.jobTitle') }}</h2>
        </div>

        <!-- Stats panel — sits in its own grid column, never overlaps -->
        <aside class="stats-panel" aria-label="Internship metadata">
          <dl class="stats-list">
            <div class="stat-row">
              <dt class="stat-key">{{ $t('internshipPage.euphron.hero.jobTitleLabel') }}</dt>
              <dd class="stat-value">{{ $t('internshipPage.euphron.hero.jobTitle') }}</dd>
            </div>
            <div class="stat-row">
              <dt class="stat-key">{{ $t('internshipPage.euphron.hero.locationLabel') }}</dt>
              <dd class="stat-value">{{ $t('internshipPage.euphron.hero.location') }}</dd>
            </div>
            <div class="stat-row">
              <dt class="stat-key">{{ $t('internshipPage.euphron.hero.durationLabel') }}</dt>
              <dd class="stat-value">{{ $t('internshipPage.euphron.hero.duration') }}</dd>
            </div>
            <div class="stat-row">
              <dt class="stat-key">{{ $t('internshipPage.euphron.hero.statusLabel') }}</dt>
              <dd class="stat-value stat-value--done">
                <span class="status-dot" aria-hidden="true"></span>
                {{ $t('internshipPage.euphron.hero.status') }}
              </dd>
            </div>
          </dl>
        </aside>

        <!-- Logo -->
        <div class="hero-logo" aria-hidden="true">
          <img src="@/assets/Euphron.svg" alt="" class="logo-image" />
        </div>
      </div>
    </header>

    <!-- ── MAIN CONTENT ──────────────────────────────────────────────────── -->
    <!--  Fix: <main> landmark wrapping all page sections  -->
    <main id="main-content">

      <!-- 01 · CONTEXT -->
      <section id="context" class="page-section" aria-labelledby="heading-context">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.context.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-context" class="section-title">
          {{ $t('internshipPage.euphron.context.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <p class="content-text">{{ $t('internshipPage.euphron.context.description1') }}</p>
          <p class="content-text">{{ $t('internshipPage.euphron.context.description2') }}</p>

          <div class="card-grid card-grid--3">
            <div class="info-card">
              <span class="info-card__num">01</span>
              <h3 class="info-card__title">{{ $t('internshipPage.euphron.context.objective1Title') }}</h3>
              <p class="info-card__desc">{{ $t('internshipPage.euphron.context.objective1Desc') }}</p>
            </div>
            <div class="info-card">
              <span class="info-card__num">02</span>
              <h3 class="info-card__title">{{ $t('internshipPage.euphron.context.objective2Title') }}</h3>
              <p class="info-card__desc">{{ $t('internshipPage.euphron.context.objective2Desc') }}</p>
            </div>
            <div class="info-card">
              <span class="info-card__num">03</span>
              <h3 class="info-card__title">{{ $t('internshipPage.euphron.context.objective3Title') }}</h3>
              <p class="info-card__desc">{{ $t('internshipPage.euphron.context.objective3Desc') }}</p>
            </div>
          </div>

          <blockquote class="constraint-box">
            <span class="constraint-label">{{ $t('internshipPage.euphron.context.constraintLabel') }}</span>
            {{ $t('internshipPage.euphron.context.constraintText') }}
          </blockquote>
        </div>
      </section>

      <!-- 02 · ROLE -->
      <section id="role" class="page-section" aria-labelledby="heading-role">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.role.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-role" class="section-title">
          {{ $t('internshipPage.euphron.role.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <p class="content-text">{{ $t('internshipPage.euphron.role.description') }}</p>

          <div class="card-grid card-grid--4">
            <div class="info-card" v-for="n in 4" :key="n">
              <span class="info-card__num">0{{ n }}</span>
              <h3 class="info-card__title">{{ $t(`internshipPage.euphron.role.responsibility${n}Title`) }}</h3>
              <p class="info-card__desc">{{ $t(`internshipPage.euphron.role.responsibility${n}Desc`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 03 · ORGANIZATION -->
      <section id="organization" class="page-section" aria-labelledby="heading-org">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.organization.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-org" class="section-title">
          {{ $t('internshipPage.euphron.organization.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <!-- Timeline -->
          <ol class="timeline" aria-label="Project timeline">
            <li class="timeline-item">
              <div class="timeline-marker" aria-hidden="true">
                <span class="tl-label">WEEKS</span>
                <span class="tl-value">1–2</span>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ $t('internshipPage.euphron.organization.week12Title') }}</h3>
                <p class="timeline-desc">{{ $t('internshipPage.euphron.organization.week12Desc') }}</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-marker" aria-hidden="true">
                <span class="tl-label">WEEK</span>
                <span class="tl-value">3</span>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ $t('internshipPage.euphron.organization.week3Title') }}</h3>
                <p class="timeline-desc">{{ $t('internshipPage.euphron.organization.week3Desc') }}</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-marker" aria-hidden="true">
                <span class="tl-label">WEEKS</span>
                <span class="tl-value">4–8</span>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ $t('internshipPage.euphron.organization.week48Title') }}</h3>
                <p class="timeline-desc">{{ $t('internshipPage.euphron.organization.week48Desc') }}</p>
              </div>
            </li>
          </ol>

          <div class="highlight-box">
            <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.organization.methodologyTitle') }}</h3>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.organization.methodologyDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 04 · TECH STACK -->
      <section id="tech" class="page-section" aria-labelledby="heading-tech">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.techStack.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-tech" class="section-title">
          {{ $t('internshipPage.euphron.techStack.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <div class="tech-columns">
            <!-- Frontend -->
            <div class="tech-group">
              <h3 class="tech-group__title">{{ $t('internshipPage.euphron.techStack.frontendTitle') }}</h3>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`fe-${n}`" class="tech-item">
                  <strong class="tech-item__name">{{ $t(`internshipPage.euphron.techStack.frontend${n}Name`) }}</strong>
                  <p class="tech-item__desc">{{ $t(`internshipPage.euphron.techStack.frontend${n}Desc`) }}</p>
                </li>
              </ul>
            </div>
            <!-- Backend -->
            <div class="tech-group">
              <h3 class="tech-group__title">{{ $t('internshipPage.euphron.techStack.backendTitle') }}</h3>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`be-${n}`" class="tech-item">
                  <strong class="tech-item__name">{{ $t(`internshipPage.euphron.techStack.backend${n}Name`) }}</strong>
                  <p class="tech-item__desc">{{ $t(`internshipPage.euphron.techStack.backend${n}Desc`) }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="highlight-box">
            <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.techStack.justificationTitle') }}</h3>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.techStack.justificationDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 05 · FEATURES -->
      <section id="features" class="page-section" aria-labelledby="heading-features">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.features.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-features" class="section-title">
          {{ $t('internshipPage.euphron.features.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <div class="card-grid card-grid--4">
            <div class="feature-card">
              <h3 class="feature-card__title">{{ $t('internshipPage.euphron.features.category1Title') }}</h3>
              <ul class="feature-card__list">
                <li>{{ $t('internshipPage.euphron.features.category1Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category1Item2') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category1Item3') }}</li>
              </ul>
            </div>
            <div class="feature-card">
              <h3 class="feature-card__title">{{ $t('internshipPage.euphron.features.category2Title') }}</h3>
              <ul class="feature-card__list">
                <li>{{ $t('internshipPage.euphron.features.category2Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category2Item2') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category2Item3') }}</li>
              </ul>
            </div>
            <div class="feature-card">
              <h3 class="feature-card__title">{{ $t('internshipPage.euphron.features.category3Title') }}</h3>
              <ul class="feature-card__list">
                <li>{{ $t('internshipPage.euphron.features.category3Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category3Item2') }}</li>
              </ul>
            </div>
            <div class="feature-card">
              <h3 class="feature-card__title">{{ $t('internshipPage.euphron.features.category4Title') }}</h3>
              <ul class="feature-card__list">
                <li>{{ $t('internshipPage.euphron.features.category4Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category4Item2') }}</li>
                <li>{{ $t('internshipPage.euphron.features.category4Item3') }}</li>
              </ul>
            </div>
          </div>

          <div class="highlight-box">
            <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.features.highlightTitle') }}</h3>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.features.highlightDesc') }}</p>
          </div>

          <!-- Fix: progress bar now has correct ARIA roles and values -->
          <div class="progress-block">
            <div class="progress-block__header">
              <h3 class="progress-block__title">{{ $t('internshipPage.euphron.features.progressTitle') }}</h3>
              <span class="progress-block__pct">{{ $t('internshipPage.euphron.features.progressPercentage') }}</span>
            </div>
            <div
              class="progress-track"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="$t('internshipPage.euphron.features.progressTitle')"
            >
              <div class="progress-fill" style="width: 70%"></div>
            </div>
            <p class="progress-block__desc">{{ $t('internshipPage.euphron.features.progressDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 06 · ARCHITECTURE -->
      <section id="architecture" class="page-section" aria-labelledby="heading-arch">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.architecture.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-arch" class="section-title">
          {{ $t('internshipPage.euphron.architecture.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <!-- Fix: diagram now fluid width with min-width so it stays readable on mobile -->
          <figure class="diagram-figure">
            <img
              src="@/assets/stage/Diagram.png"
              :alt="$t('internshipPage.euphron.architecture.diagramAlt')"
              class="diagram-img"
              loading="lazy"
            />
            <figcaption class="diagram-caption">
              <span class="caption-label" aria-hidden="true">FIGURE 01 —</span>
              {{ $t('internshipPage.euphron.architecture.diagramCaption') }}
            </figcaption>
          </figure>

          <p class="content-text">{{ $t('internshipPage.euphron.architecture.description') }}</p>

          <div class="two-col">
            <div class="highlight-box">
              <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.architecture.section1Title') }}</h3>
              <p class="highlight-box__desc">{{ $t('internshipPage.euphron.architecture.section1Desc') }}</p>
            </div>
            <div class="highlight-box">
              <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.architecture.section2Title') }}</h3>
              <p class="highlight-box__desc">{{ $t('internshipPage.euphron.architecture.section2Desc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 07 · SECURITY -->
      <section id="security" class="page-section" aria-labelledby="heading-security">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.security.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-security" class="section-title">
          {{ $t('internshipPage.euphron.security.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <p class="content-text">{{ $t('internshipPage.euphron.security.intro') }}</p>

          <div class="two-col">
            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">01</span>
                <h3 class="security-method__title">{{ $t('internshipPage.euphron.security.method1Title') }}</h3>
              </div>
              <p class="security-method__desc">{{ $t('internshipPage.euphron.security.method1Desc') }}</p>
              <!-- Fix: image is fluid, never truncated on small screens -->
              <div class="code-img-wrapper">
                <img
                  src="@/assets/stage/RegexCheck.png"
                  :alt="$t('internshipPage.euphron.security.method1Alt')"
                  class="code-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">02</span>
                <h3 class="security-method__title">{{ $t('internshipPage.euphron.security.method2Title') }}</h3>
              </div>
              <p class="security-method__desc">{{ $t('internshipPage.euphron.security.method2Desc') }}</p>
              <ul class="check-list">
                <li>{{ $t('internshipPage.euphron.security.method2Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.security.method2Item2') }}</li>
                <li>{{ $t('internshipPage.euphron.security.method2Item3') }}</li>
              </ul>
              <div class="code-img-wrapper">
                <img
                  src="@/assets/stage/PreparedQuery.png"
                  :alt="$t('internshipPage.euphron.security.method2Alt')"
                  class="code-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 08 · LEARNING -->
      <section id="learning" class="page-section" aria-labelledby="heading-learning">
        <div class="section-marker" aria-hidden="true">
          <span class="marker-number">{{ $t('internshipPage.euphron.learning.sectionNumber') }}</span>
          <span class="marker-bar"></span>
        </div>
        <h2 id="heading-learning" class="section-title">
          {{ $t('internshipPage.euphron.learning.title').toUpperCase() }}
        </h2>

        <div class="content-block">
          <div class="two-col">
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.euphron.learning.technicalTitle') }}</h3>
              <ul class="arrow-list">
                <li>{{ $t('internshipPage.euphron.learning.technical1') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical2') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical3') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical4') }}</li>
              </ul>
            </div>
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.euphron.learning.softTitle') }}</h3>
              <ul class="arrow-list">
                <li>{{ $t('internshipPage.euphron.learning.soft1') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft2') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft3') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft4') }}</li>
              </ul>
            </div>
          </div>

          <div class="highlight-box highlight-box--accent">
            <h3 class="highlight-box__title">{{ $t('internshipPage.euphron.learning.reflectionTitle') }}</h3>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.learning.reflectionDesc') }}</p>
          </div>
        </div>
      </section>

    </main>

    <!-- ── BACK LINK ─────────────────────────────────────────────────────── -->
    <div class="back-section">
      <a class="back-btn" href="/">
        <span aria-hidden="true">↼</span> {{ $t('common.back') }}
      </a>
    </div>

    <!-- ── FOOTER ────────────────────────────────────────────────────────── -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "InternshipEuphron",
  components: { FooterComponent },

  data() {
    return {
      currentSection: "context",
      /* IntersectionObserver instance — kept so we can disconnect on unmount */
      _observer: null,
    };
  },

  computed: {
    sections() {
      return [
        { id: "context",      label: this.$t("internshipPage.euphron.context.title") },
        { id: "role",         label: this.$t("internshipPage.euphron.role.title") },
        { id: "organization", label: this.$t("internshipPage.euphron.organization.title") },
        { id: "tech",         label: this.$t("internshipPage.euphron.techStack.title") },
        { id: "features",     label: this.$t("internshipPage.euphron.features.title") },
        { id: "architecture", label: this.$t("internshipPage.euphron.architecture.title") },
        { id: "security",     label: this.$t("internshipPage.euphron.security.title") },
        { id: "learning",     label: this.$t("internshipPage.euphron.learning.title") },
      ];
    },
  },

  mounted() {
    this.initObserver();
  },

  beforeUnmount() {
    /* Fix: always clean up the observer to prevent memory leaks */
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  },

  methods: {
    /*
     * Fix: replace the scroll-event + getBoundingClientRect loop with a single
     * IntersectionObserver. No throttling needed — the browser calls us only
     * when a section crosses the threshold, not on every pixel of scroll.
     * rootMargin "-40% 0px -55% 0px" fires when the top ~40% of the viewport
     * passes a section heading, which matches "which section am I reading".
     */
    initObserver() {
      this._observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.currentSection = entry.target.id;
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      this.$nextTick(() => {
        this.sections.forEach(({ id }) => {
          const el = document.getElementById(id);
          if (el) this._observer.observe(el);
        });
      });
    },

    /*
     * Fix: @click.prevent on the anchor already stops the native jump,
     * so this method only handles the smooth scroll — no dual-fire.
     */
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   TOKENS — inherit site variables, define local ones
═══════════════════════════════════════════════════════ */
.blueprint-internship {
  --c-primary:   #4facfe;
  --c-secondary: #7dd3fc;
  --c-bg:        #0b0e14;
  --c-surface:   rgba(79,172,254,.03);
  --c-border:    rgba(79,172,254,.18);
  --c-border-hi: rgba(79,172,254,.5);
  --c-text:      #e8eef5;
  --c-muted:     #8b95a8;
  --c-dim:       #6a7c92;
  --font-mono:   'Space Mono', monospace;
  --font-sans:   'Chivo', sans-serif;

  min-height: 100vh;
  background: var(--c-bg);
  color: var(--c-text);
  font-family: var(--font-sans);
  position: relative;
  overflow-x: hidden;
}

/* ── Background grid ── */
.grid-layer {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(79,172,254,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79,172,254,.025) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

p {
  text-align: justify;
}

/* ═══════════════════════════════════════════════════════
   SPYBAR
   Fix: dot-only on tablet; never overflows at any width.
   Layout: label left of dot, dots flush to right edge.
═══════════════════════════════════════════════════════ */
.spybar {
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
}

.spybar-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 18px;
}

.spybar-link {
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: var(--c-dim);
  cursor: pointer;
  transition: color .25s;
}

.spybar-link:hover,
.spybar-link.active { color: var(--c-primary); }

/* Label: visible on desktop, hidden on tablet (overflow-safe) */
.spybar-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(6px);
  transition: opacity .25s, transform .25s;
  pointer-events: none;
}

.spybar-link:hover .spybar-label,
.spybar-link.active  .spybar-label {
  opacity: 1;
  transform: translateX(0);
}

.spybar-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  flex-shrink: 0;
  transition: background .25s, box-shadow .25s, transform .25s;
}

.spybar-link.active .spybar-dot {
  background: var(--c-primary);
  box-shadow: 0 0 10px rgba(79,172,254,.6);
  transform: scale(1.35);
}

/* Tablet: hide labels, keep dots — no overflow risk */
@media (max-width: 1024px) {
  .spybar { right: 16px; }
  .spybar-label { display: none; }
}

/* Mobile: hide entirely */
@media (max-width: 640px) {
  .spybar { display: none; }
}

/* ═══════════════════════════════════════════════════════
   BACK BUTTON
═══════════════════════════════════════════════════════ */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  color: var(--c-primary);
  font-family: var(--font-mono);
  font-size: 12px;
  text-decoration: none;
  transition: background .25s, border-color .25s, transform .25s;
}

.back-btn:hover {
  background: rgba(79,172,254,.08);
  border-color: var(--c-border-hi);
  transform: translateX(-4px);
  color: var(--c-primary);
  text-shadow: none;
}

/* ═══════════════════════════════════════════════════════
   HERO
   Fix: CSS grid layout so stats-panel sits beside the
   title and NEVER overlaps it, at any viewport width.
═══════════════════════════════════════════════════════ */
.internship-hero {
  position: relative;
  z-index: 1;
  padding: 120px 6% 80px;
}

@media (max-width: 768px) {
  .internship-hero { padding: 80px 5% 48px; }
}

.hero-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  /* title | stats panel */
  grid-template-columns: 1fr 340px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title  stats"
    "logo   stats";
  gap: 32px 56px;
  align-items: start;
}

/* 1024–1200 px — was the overlap zone in the original */
@media (max-width: 1200px) {
  .hero-grid {
    grid-template-columns: 1fr 280px;
    gap: 24px 40px;
  }
}

/* Tablet: stack everything */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "stats"
      "logo";
  }
}

.title-stack  { grid-area: title; }
.stats-panel  { grid-area: stats; }
.hero-logo    { grid-area: logo;  }

/* Hero eyebrow */
.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--c-dim);
  margin: 0 0 16px;
  text-transform: uppercase;
}

.title-line {
  font-family: var(--font-sans);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  line-height: .9;
  letter-spacing: -.03em;
  color: transparent;
  -webkit-text-stroke: 2px var(--c-primary);
  margin: 0 0 8px;
}

@media (max-width: 480px) {
  .title-line { -webkit-text-stroke: 1.5px var(--c-primary); }
}

.title-sub {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--c-primary);
  margin: 0;
  letter-spacing: -.01em;
}

/* Stats panel — plain border box, no absolute positioning */
.stats-panel {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
  align-self: start;
}

.stats-list { margin: 0; padding: 0; }

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(79,172,254,.08);
}

.stat-row:last-child { border-bottom: none; }

.stat-key {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--c-dim);
  flex-shrink: 0;
}

.stat-value {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--c-primary);
  text-align: right;
}

.stat-value--done {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--c-muted);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(79,172,254,.4);
  flex-shrink: 0;
}

/* Logo */
.hero-logo {
  display: flex;
  align-items: center;
  padding: 16px 0;
}

.logo-image {
  width: clamp(80px, 15vw, 160px);
  height: auto;
  filter: drop-shadow(0 0 20px rgba(79,172,254,.25));
}

/* ═══════════════════════════════════════════════════════
   MAIN + SECTIONS
═══════════════════════════════════════════════════════ */
#main-content {
  position: relative;
  z-index: 1;
}

.page-section {
  padding: 96px 6%;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 768px) { .page-section { padding: 64px 5%; } }
@media (max-width: 480px) { .page-section { padding: 48px 4%; } }

/* Section marker */
.section-marker {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
}

.marker-number {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--c-primary);
  opacity: .45;
  letter-spacing: 1px;
}

.marker-bar {
  flex: 1;
  height: 1px;
  background: var(--c-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--c-text);
  margin: 0 0 48px;
}

@media (max-width: 480px) {
  .section-title { letter-spacing: 1px; margin-bottom: 32px; }
}

.content-block { display: flex; flex-direction: column; gap: 32px; }

.content-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--c-muted);
  text-align: justify;
  margin: 0;
}

@media (max-width: 640px) {
  .content-text { text-align: justify; }
}

/* ── Card grids ── */
.card-grid {
  display: grid;
  gap: 20px;
}

.card-grid--3 { grid-template-columns: repeat(3, 1fr); }
.card-grid--4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1024px) {
  .card-grid--4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .card-grid--3,
  .card-grid--4 { grid-template-columns: 1fr; }
}

/* Info card */
.info-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 24px;
  transition: border-color .25s, background .25s, transform .25s;
}

.info-card:hover {
  border-color: var(--c-border-hi);
  background: rgba(79,172,254,.06);
  transform: translateY(-3px);
}

.info-card__num {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--c-primary);
  font-weight: 700;
  margin-bottom: 12px;
  opacity: .7;
}

.info-card__title {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 10px;
}

.info-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--c-muted);
  margin: 0;
}

/* Constraint blockquote */
.constraint-box {
  background: rgba(79,172,254,.04);
  border-left: 3px solid var(--c-primary);
  padding: 16px 20px;
  margin: 0;
  font-size: 13px;
  color: var(--c-muted);
  line-height: 1.65;
}

.constraint-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--c-primary);
  margin-right: 8px;
}

/* Highlight box */
.highlight-box {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
}

.highlight-box--accent {
  border-left: 3px solid var(--c-primary);
}

.highlight-box__title {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 10px;
}

.highlight-box__desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--c-muted);
  margin: 0;
}

/* ── Two-column layout (architecture, security, learning) ── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════════════
   TIMELINE (organization section)
   Fix: visible connector on mobile via left border on li.
═══════════════════════════════════════════════════════ */
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  /* Left border acts as the vertical connector — works at all sizes */
  border-left: 2px solid var(--c-border);
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: flex;
  gap: 28px;
  padding-bottom: 40px;
  position: relative;
}

/* Dot on the connector line */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -38px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--c-primary);
  border: 2px solid var(--c-bg);
  box-shadow: 0 0 8px rgba(79,172,254,.45);
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 56px;
  flex-shrink: 0;
  padding-top: 2px;
}

.tl-label {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 1px;
  color: var(--c-dim);
  text-transform: uppercase;
}

.tl-value {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 700;
  color: var(--c-primary);
  line-height: 1;
}

.timeline-content { padding-top: 2px; }

.timeline-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 6px;
}

.timeline-desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--c-muted);
  margin: 0;
}

/* ═══════════════════════════════════════════════════════
   TECH STACK
═══════════════════════════════════════════════════════ */
.tech-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .tech-columns { grid-template-columns: 1fr; }
}

.tech-group {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
}

.tech-group__title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--c-primary);
  text-transform: uppercase;
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-border);
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tech-item { display: flex; flex-direction: column; gap: 3px; }

.tech-item__name {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text);
}

.tech-item__desc {
  font-size: 12px;
  line-height: 1.55;
  color: var(--c-muted);
  margin: 0;
}

/* ═══════════════════════════════════════════════════════
   FEATURES
═══════════════════════════════════════════════════════ */
.feature-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 24px;
  transition: border-color .25s, background .25s, transform .25s;
}

.feature-card:hover {
  border-color: var(--c-border-hi);
  background: rgba(79,172,254,.06);
  transform: translateY(-3px);
}

.feature-card__title {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--c-border);
}

.feature-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature-card__list li {
  font-size: 12px;
  line-height: 1.6;
  color: var(--c-muted);
  padding-left: 16px;
  position: relative;
}

.feature-card__list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--c-primary);
  font-size: 11px;
}

/* Progress bar */
.progress-block {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
}

.progress-block__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 14px;
}

.progress-block__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0;
}

.progress-block__pct {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  color: var(--c-primary);
}

.progress-track {
  width: 100%;
  height: 6px;
  background: rgba(79,172,254,.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--c-primary), var(--c-secondary));
  border-radius: 3px;
  transition: width .6s ease;
}

.progress-block__desc {
  font-size: 12px;
  color: var(--c-dim);
  margin: 0;
}

/* ═══════════════════════════════════════════════════════
   ARCHITECTURE — diagram
   Fix: fluid width with min-width so it never shrinks
   to unreadable size on mobile.
═══════════════════════════════════════════════════════ */
.diagram-figure {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.diagram-img {
  width: 100%;
  max-width: 600px;
  min-width: 240px;   /* never goes below readable size */
  height: auto;
  display: block;
}

.diagram-caption {
  font-size: 12px;
  color: var(--c-dim);
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}

.caption-label {
  font-family: var(--font-mono);
  font-style: normal;
  font-weight: 700;
  color: var(--c-primary);
  margin-right: 4px;
}

/* ═══════════════════════════════════════════════════════
   SECURITY — code images
   Fix: fluid, never 50% fixed width which was too small
   on anything under ~900px.
═══════════════════════════════════════════════════════ */
.security-method {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.security-method__header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.security-method__num {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--c-primary);
  background: rgba(79,172,254,.1);
  border: 1px solid rgba(79,172,254,.3);
  padding: 6px 12px;
  flex-shrink: 0;
}

.security-method__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0;
}

.security-method__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--c-muted);
  margin: 0;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.check-list li {
  font-size: 13px;
  color: var(--c-muted);
  padding-left: 20px;
  position: relative;
  line-height: 1.55;
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--c-primary);
  font-weight: 700;
}

.code-img-wrapper {
  border: 1px solid var(--c-border);
  background: rgba(10,14,26,.5);
  padding: 12px;
  overflow-x: auto; /* scroll on tiny screens rather than squash */
}

.code-img {
  width: 100%;         /* fluid */
  min-width: 200px;    /* never unreadably tiny */
  height: auto;
  display: block;
}

/* ═══════════════════════════════════════════════════════
   LEARNING
═══════════════════════════════════════════════════════ */
.learning-group {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 28px;
}

.learning-group__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--c-text);
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-border);
}

.arrow-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.arrow-list li {
  font-size: 13px;
  line-height: 1.65;
  color: var(--c-muted);
  padding-left: 20px;
  position: relative;
}

.arrow-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--c-primary);
  font-weight: 700;
}

/* ═══════════════════════════════════════════════════════
   BACK SECTION
═══════════════════════════════════════════════════════ */
.back-section {
  padding: 32px 6% 64px;
  position: relative;
  z-index: 1;
}

/* ═══════════════════════════════════════════════════════
   REDUCED MOTION
═══════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
</style>