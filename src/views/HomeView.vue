<template>
  <div class="blueprint-portfolio" @mousemove="updateCoords">
    <!-- Grille blueprint subtile -->
    <div class="grid-layer"></div>

    <!-- En-tête fixe minimaliste -->
    <NavBar />

    <!-- Hero Section - Layout totalement différent -->
    <section class="hero-zone">
      <div class="hero-content">
        <!-- Nom en grand format vertical -->
        <div class="name-stack">
          <h1 class="name-line">GAËL</h1>
          <h1 class="name-line accent">RÖTHLIN</h1>
        </div>

        <!-- Métadonnées techniques à droite -->
        <div class="meta-panel">
          <div class="meta-item">
            <span class="meta-key">ROLE:</span>
            <span class="meta-value">HomeTitle</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">FOCUS:</span>
            <span class="meta-value">AcademicTitle</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">STATUS:</span>
            <span class="meta-value blink">Precision</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">LOCATION:</span>
            <span class="meta-value">Besançon, FR</span>
          </div>
        </div>

        <!-- Avatar en position absolue style "blueprint annotation" -->
        <div class="avatar-blueprint">
          <div class="avatar-container">
            <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" />
            <!-- Lignes d'annotation blueprint -->
            <svg class="annotation-lines" viewBox="0 0 200 200">
              <line x1="0" y1="100" x2="50" y2="100" class="dimension-line" />
              <line
                x1="150"
                y1="100"
                x2="200"
                y2="100"
                class="dimension-line"
              />
              <circle cx="100" cy="100" r="80" class="measurement-circle" />
            </svg>
          </div>
          <div class="avatar-label">
            <span class="label-text">PROFILE_IMAGE</span>
            <span class="label-dimension">280x280px</span>
          </div>
        </div>

        <!-- Bio en bas à gauche -->
        <div class="bio-compact">
          <p class="bio-text">BodyPart1</p>
          <p class="bio-text">BodyPart2</p>
        </div>

        <!-- Actions sociales minimalistes -->
        <div class="social-compact">
          <a
            href="https://www.instagram.com/osiris._25"
            target="_blank"
            class="social-item"
          >
            <img src="../assets/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://github.com/moonlight58"
            target="_blank"
            class="social-item"
          >
            <img src="../assets/github.svg" alt="GitHub" />
          </a>
          <button @click="toggleFormVisibility" class="social-item">
            <img src="../assets/email.svg" alt="Email" />
          </button>
        </div>

        <!-- Spotify en position flottante -->
        <div class="spotify-widget">
          <SpotifyNowPlaying />
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @click="scrollToWork">
        <span class="scroll-text">SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- About Section - Format interview/terminal -->
    <section id="about" class="about-zone">
      <div class="section-marker">
        <span class="marker-number">01</span>
        <span class="marker-title">ABOUT</span>
      </div>

      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="terminal-title">~ about.sh</span>
        </div>
        <div class="terminal-body">
          <p class="terminal-line">
            <span class="prompt">$</span> cat introduction.txt
          </p>
          <p class="terminal-output">WhyPortfolioContent</p>
          <p class="terminal-line">
            <span class="prompt">$</span> ls -la skills/
          </p>
          <p class="terminal-output cursor-blink">_</p>
        </div>
      </div>
    </section>

    <!-- Work Section - Format grille blueprint -->
    <section id="work" class="work-zone" ref="workSection">
      <div class="section-marker">
        <span class="marker-number">02</span>
        <span class="marker-title">WORK</span>
      </div>

      <!-- Projects Grid -->
      <div class="work-category">
        <h3 class="category-label">Projects</h3>
        <div class="blueprint-grid">
          <!-- Template pour les projets - À remplacer par vos vrais projets -->
          <div class="blueprint-card" v-for="n in 3" :key="'project-' + n">
            <div class="card-header">
              <span class="card-number">0{{ n }}</span>
              <span class="card-status">IN_PROGRESS</span>
            </div>
            <div class="card-body">
              <h4 class="card-title">Project Title {{ n }}</h4>
              <p class="card-description">
                Description du projet {{ n }}. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div class="card-tags">
                <span class="tag">VueJS</span>
                <span class="tag">TailwindCSS</span>
                <span class="tag">API</span>
              </div>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link">VIEW_PROJECT →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Internship -->
      <div class="work-category">
        <h3 class="category-label">Internship</h3>
        <div class="timeline-container">
          <!-- Template pour les stages - À remplacer par vos vrais stages -->
          <div class="timeline-item" v-for="n in 2" :key="'internship-' + n">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">2024 - 202{{ 5 - n }}</div>
              <h4 class="timeline-title">Stage Entreprise {{ n }}</h4>
              <p class="timeline-description">
                Description du stage. Missions réalisées et compétences
                développées.
              </p>
              <div class="timeline-tech">
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">MySQL</span>
                <span class="tech-badge">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- UI/UX -->
      <div class="work-category">
        <h3 class="category-label">UI/UX DESIGN</h3>
        <div class="design-showcase">
          <!-- Template pour UI/UX - À remplacer par vos vrais designs -->
          <div class="design-card" v-for="n in 4" :key="'design-' + n">
            <div class="design-preview">
              <div class="preview-placeholder">
                <span class="placeholder-text">DESIGN {{ n }}</span>
              </div>
            </div>
            <div class="design-info">
              <span class="design-name">Design Project {{ n }}</span>
              <span class="design-tool">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section - Format diagramme technique -->
    <section id="skills" class="skills-zone">
      <div class="section-marker">
        <span class="marker-number">03</span>
        <span class="marker-title">SKILLS</span>
      </div>

      <div class="skills-diagram">
        <!-- Frontend -->
        <div class="skill-block">
          <div class="block-header">
            <div class="block-icon">{'}</div>
            <h3 class="block-title">FRONTEND</h3>
          </div>
          <div class="block-content">
            <div
              class="skill-item"
              :style="{ '--color': skill.color }"
              v-for="skill in frontendSkills"
            >
              <!-- svg logo of the skill -->
              <img class="skill-icon" :src="skill.icon" :alt="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="skill-block">
          <div class="block-header">
            <div class="block-icon">⚙</div>
            <h3 class="block-title">BACKEND</h3>
          </div>
          <div class="block-content">
            <div
              class="skill-item"
              :style="{ '--color': skill.color }"
              v-for="skill in backendSkills"
            >
              <!-- svg logo of the skill -->
              <img class="skill-icon" :src="skill.icon" :alt="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Tools & Others -->
        <div class="skill-block full-width">
          <div class="block-header">
            <div class="block-icon">⚒</div>
            <h3 class="block-title">TOOLS & DATABASES</h3>
          </div>
          <div class="block-content horizontal">
            <div class="skill-item" :style="{ '--color': skill.color }" v-for="skill in tools">
              <!-- svg logo of the skill -->
              <img class="skill-icon" :src="skill.icon" :alt="skill.name">
              <span class="skill-name">{{ skill.name }}</span>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section - Format formulaire minimaliste -->
    <section id="contact" class="contact-zone">
      <div class="section-marker">
        <span class="marker-number">04</span>
        <span class="marker-title">CONTACT</span>
      </div>

      <div class="contact-layout">
        <!-- Gauche : Infos -->
        <div class="contact-info">
          <h2 class="contact-heading">LET'S WORK<br />TOGETHER</h2>
          <p class="contact-text">
            Vous avez un projet en tête ? N'hésitez pas à me contacter.
          </p>

          <div class="contact-methods">
            <div class="method-item">
              <span class="method-label">EMAIL</span>
              <span class="method-value">gael.rothlin@example.com</span>
            </div>
            <div class="method-item">
              <span class="method-label">LOCATION</span>
              <span class="method-value">Besançon, France</span>
            </div>
          </div>

          <div class="social-links">
            <a
              href="https://www.instagram.com/osiris._25"
              target="_blank"
              class="social-link"
            >
              <img src="../assets/instagram.svg" alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/moonlight58"
              target="_blank"
              class="social-link"
            >
              <img src="../assets/github.svg" alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <!-- Droite : Formulaire -->
        <div class="contact-form-wrapper" v-if="showForm">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            class="contact-form"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-field">
              <label for="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div class="form-field">
              <label for="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div class="form-field">
              <label for="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                v-model="formData.message"
                placeholder="Votre message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">SEND_MESSAGE</span>
              <span v-else>SENDING...</span>
            </button>

            <div v-if="statusMessage" class="form-status" :class="statusClass">
              {{ statusMessage }}
            </div>
          </form>
        </div>

        <!-- Bouton toggle formulaire si fermé -->
        <div v-else class="form-toggle">
          <button @click="toggleFormVisibility" class="toggle-button">
            OPEN_CONTACT_FORM
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-content">
        <span class="footer-text">© 2026 Gaël Röthlin</span>
        <span class="footer-text">Designed & Built with Vue.js</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";

// État
const mouseX = ref(0);
const mouseY = ref(0);
const showForm = ref(true);
const isSubmitting = ref(false);
const statusMessage = ref("");
const statusClass = ref("");

const workSection = ref(null);

// Données du formulaire
const formData = ref({
  name: "",
  email: "",
  message: "",
});

// Skills data (exemples)
const frontendSkills = ref([
  { name: "VueJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "65, 184, 131" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "97, 218, 251" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "38, 77, 228" }
]);

const backendSkills = ref([
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "55, 118, 171" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "51, 153, 51" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "247, 223, 30" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "119, 123, 180" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "176, 114, 25" },
]);

const tools = ref([
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "0, 123, 193" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "240, 80, 51" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "0, 117, 181" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "255, 0, 102" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "0, 0, 0" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "76, 153, 0" },
  { name: "Neovim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg", color: "43, 145, 175" },
]);

// Méthodes
const updateCoords = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const scrollToWork = () => {
  workSection.value?.scrollIntoView({ behavior: "smooth" });
};

const toggleFormVisibility = () => {
  showForm.value = !showForm.value;
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  statusMessage.value = "";

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData.value,
      }).toString(),
    });

    if (response.ok) {
      statusMessage.value = "Message envoyé avec succès !";
      statusClass.value = "success";
      formData.value = { name: "", email: "", message: "" };
    } else {
      throw new Error("Erreur");
    }
  } catch (error) {
    statusMessage.value = "Erreur lors de l'envoi. Réessayez.";
    statusClass.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600&display=swap");

/* ========== VARIABLES ========== */
:root {
  --color-primary: #4facfe;
  --color-bg: #0a0a0f;
  --color-surface: #151520;
  --color-text: #e0e0e0;
  --color-muted: #6a7c92;
  --font-mono: "Space Mono", monospace;
  --font-sans: "Inter", sans-serif;
}

/* ========== BASE ========== */
.blueprint-portfolio {
  min-height: 100vh;
  background-color: var(--color-bg);
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
.hero-zone {
  min-height: 100vh;
  position: relative;
  padding: 120px 6% 80px;
  z-index: 1;
}

.hero-content {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  height: calc(100vh - 200px);
}

/* Nom en stack vertical */
.name-stack {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.name-line {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  margin: 0;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-primary);
}

.name-line.accent {
  color: var(--color-primary);
  -webkit-text-stroke: 0;
}

/* Meta panel à droite */
.meta-panel {
  position: absolute;
  right: 0;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
  min-width: 320px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12px;
}

.meta-key {
  color: var(--color-muted);
  letter-spacing: 1px;
}

.meta-value {
  color: var(--color-primary);
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

/* Avatar blueprint */
.avatar-blueprint {
  position: absolute;
  right: 40%;
  bottom: 10%;
  text-align: center;
}

.avatar-container {
  position: relative;
  width: 180px;
  height: 180px;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-primary);
}

.annotation-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dimension-line {
  stroke: var(--color-primary);
  stroke-width: 1;
  opacity: 0.4;
}

.measurement-circle {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 1;
  stroke-dasharray: 5, 5;
  opacity: 0.3;
}

.avatar-label {
  margin-top: 12px;
  font-family: var(--font-mono);
  font-size: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label-text {
  color: var(--color-primary);
}

.label-dimension {
  color: var(--color-muted);
}

/* Bio compact */
.bio-compact {
  position: absolute;
  left: 0;
  bottom: 10%;
  max-width: 400px;
}

.bio-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-muted);
  margin: 8px 0;
}

/* Social compact */
.social-compact {
  position: absolute;
  right: 0;
  bottom: 10%;
  display: flex;
  gap: 16px;
}

.social-item {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(79, 172, 254, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-item:hover {
  background: rgba(79, 172, 254, 0.1);
  border-color: var(--color-primary);
}

.social-item img {
  width: 20px;
  height: 20px;
}

/* Spotify widget */
.spotify-widget {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.scroll-text {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-muted);
  letter-spacing: 2px;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  animation: scrollPulse 2s infinite;
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

/* ========== SECTIONS COMMUNES ========== */
section {
  padding: 120px 6%;
  position: relative;
  z-index: 1;
}

.section-marker {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 80px;
}

.marker-number {
  font-family: var(--font-mono);
  font-size: 48px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-primary);
}

.marker-title {
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 2px;
}

/* ========== ABOUT SECTION ========== */
.terminal-window {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(79, 172, 254, 0.05);
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.terminal-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f56;
}
.dot.yellow {
  background: #ffbd2e;
}
.dot.green {
  background: #27c93f;
}

.terminal-title {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
}

.terminal-body {
  padding: 32px;
  font-family: var(--font-mono);
  font-size: 14px;
}

.terminal-line {
  margin: 20px 0 8px;
  color: var(--color-text);
}

.prompt {
  color: var(--color-primary);
  margin-right: 8px;
}

.terminal-output {
  color: var(--color-muted);
  line-height: 1.8;
  margin: 0;
}

.cursor-blink {
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* ========== WORK SECTION ========== */
.work-category {
  margin-bottom: 100px;
}

.category-label {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 40px;
  letter-spacing: 1px;
}

/* Blueprint Grid */
.blueprint-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.blueprint-card {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 28px;
  transition: all 0.3s ease;
}

.blueprint-card:hover {
  background: rgba(79, 172, 254, 0.06);
  border-color: var(--color-primary);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-number {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-primary);
}

.card-status {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-muted);
  letter-spacing: 1px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 12px;
}

.card-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-muted);
  margin-bottom: 20px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 12px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: var(--color-primary);
}

.card-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.card-link:hover {
  opacity: 0.7;
}

/* Timeline */
.timeline-container {
  position: relative;
  padding-left: 40px;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 8px;
  width: 12px;
  height: 12px;
  background: var(--color-primary);
  border-radius: 50%;
}

.timeline-marker::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 12px;
  transform: translateX(-50%);
  width: 2px;
  height: 100px;
  background: rgba(79, 172, 254, 0.3);
}

.timeline-item:last-child .timeline-marker::before {
  display: none;
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted);
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 12px;
}

.timeline-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-muted);
  margin-bottom: 16px;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 12px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: var(--color-primary);
}

/* Design Showcase */
.design-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.design-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.design-card:hover {
  transform: translateY(-8px);
}

.design-preview {
  aspect-ratio: 16 / 10;
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-placeholder {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-muted);
}

.design-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.design-name {
  font-size: 14px;
  color: var(--color-text);
}

.design-tool {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

/* ========== SKILLS SECTION ========== */
.skills-diagram {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-block {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 32px;
}

.skill-block.full-width {
  grid-column: 1 / -1;
}

.block-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
}

.block-icon {
  font-size: 24px;
}

.block-title {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 1px;
  margin: 0;
}

.block-content {
  display: flex;
  gap: 20px;
}

.block-content.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-item {
  --color: 79, 172, 254;
  color: white;
  width: fit-content;
  background-color: rgba(var(--color), 0.2);
  padding: 12px 16px;
  border: 2px solid rgba(var(--color), 0.6);
  display: flex;
  align-items: center;
}

.skill-icon {
  width: 24px;
  margin-right: 12px;
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text);
}

.tool-chip {
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 8px 16px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.3);
  color: var(--color-primary);
}

/* ========== CONTACT SECTION ========== */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-heading {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text);
  margin: 0 0 24px;
}

.contact-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-muted);
  margin-bottom: 40px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.method-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.method-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
  letter-spacing: 1px;
}

.method-value {
  font-size: 14px;
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid rgba(79, 172, 254, 0.3);
  border-radius: 4px;
  color: var(--color-text);
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(79, 172, 254, 0.1);
  border-color: var(--color-primary);
}

.social-link img {
  width: 18px;
  height: 18px;
}

/* Formulaire */
.contact-form {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 40px;
}

.form-field {
  margin-bottom: 24px;
}

.form-field label {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 14px 16px;
  background: rgba(79, 172, 254, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.2);
  color: var(--color-text);
  font-size: 14px;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(79, 172, 254, 0.08);
}

.submit-button {
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-bg);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-status {
  margin-top: 16px;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  border: 1px solid;
}

.form-status.success {
  color: #4caf50;
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
}

.form-status.error {
  color: #f44336;
  border-color: #f44336;
  background: rgba(244, 67, 54, 0.1);
}

.form-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-button {
  padding: 16px 32px;
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-button:hover {
  background: var(--color-primary);
  color: var(--color-bg);
}

/* ========== FOOTER ========== */
.site-footer {
  padding: 40px 6%;
  border-top: 1px solid rgba(79, 172, 254, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1200px) {
  .name-line {
    font-size: clamp(3rem, 10vw, 8rem);
  }

  .meta-panel {
    min-width: 280px;
  }
}

@media (max-width: 1024px) {
  .hero-content {
    height: auto;
  }

  .name-stack {
    position: relative;
    transform: none;
    margin-bottom: 40px;
  }

  .meta-panel {
    position: relative;
    margin-bottom: 40px;
  }

  .avatar-blueprint {
    position: relative;
    right: auto;
    bottom: auto;
    margin-bottom: 40px;
  }

  .bio-compact,
  .social-compact {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
  }

  .contact-layout,
  .skills-diagram {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .blueprint-header {
    padding: 20px 5%;
  }

  .header-nav {
    gap: 16px;
  }

  .nav-link {
    font-size: 10px;
  }

  section {
    padding: 80px 5%;
  }

  .hero-zone {
    padding: 100px 5% 60px;
  }

  .section-marker {
    margin-bottom: 40px;
  }

  .marker-number {
    font-size: 32px;
  }

  .marker-title {
    font-size: 24px;
  }

  .blueprint-grid,
  .design-showcase {
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
