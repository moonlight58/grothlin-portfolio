<template>
  <div class="blueprint-portfolio" @mousemove="updateCoords">
    <!-- Grille blueprint subtile -->
    <div class="grid-layer"></div>

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
            <span class="meta-key">{{ $i18n.t("home.panel.roleTitle") }}:</span>
            <span class="meta-value">{{ $i18n.t("home.panel.role") }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">{{ $i18n.t("home.panel.focusTitle") }}:</span>
            <span class="meta-value">{{ $i18n.t("home.panel.focus") }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">{{ $i18n.t("home.panel.statusTitle") }}:</span>
            <span class="meta-value blink">{{
              $i18n.t("home.panel.status")
            }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-key">{{ $i18n.t("home.panel.locationTitle") }}:</span>
            <span class="meta-value">Besançon, FR</span>
          </div>
          <!-- Nota bene for BUT definition -->
          <div class="meta-note">
            {{ $i18n.t("home.panel.butNote") }}
          </div>
        </div>

        <!-- Avatar en position absolue style "blueprint annotation" -->
        <div class="avatar-blueprint">
          <div class="avatar-container">
            <img src="../assets/profile_img.jpg" alt="Gaël Röthlin" />
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
          <div class="bio-intro">
            <div class="bio-icon"></div>
            <p class="bio-text">{{ $i18n.t("home.body.student") }}</p>
          </div>
          <div class="bio-intro">
            <div class="bio-icon">󰓾</div>
            <p class="bio-text">{{ $i18n.t("home.body.description") }}</p>
          </div>
          <div class="bio-intro">
            <a 
              href="/cv.pdf" 
              download="Gael_Rothlin_CV.pdf"
              class="cv-download-btn"
              aria-label="Télécharger mon CV"
            >
              <span class="cv-btn-icon">󰏢</span>
              <span class="cv-btn-text">{{ $i18n.t("home.body.downloadCV") }}</span>
              <span class="cv-btn-ext">.pdf</span>
            </a>
          </div>
        </div>

        <!-- Actions sociales minimalistes -->
        <div class="social-compact">
          <a
            href="https://www.instagram.com/osiris._25"
            target="_blank"
            rel="noopener noreferrer"
            class="social-item"
            aria-label="Visit Instagram profile"
          >
            <img src="../assets/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://github.com/moonlight58"
            target="_blank"
            rel="noopener noreferrer"
            class="social-item"
            aria-label="Visit GitHub profile"
          >
            <img src="../assets/github.svg" alt="GitHub" />
          </a>
          <a href="#contact" class="social-item" aria-label="Go to contact section">
            <img src="../assets/email.svg" alt="Email" />
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @click="scrollToWork" role="button" tabindex="0" aria-label="Scroll to work section" @keydown.enter="scrollToWork" @keydown.space="scrollToWork">
        <span class="scroll-text">SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- About Section - Format interview/terminal -->
    <section id="about" class="about-zone">
      <div class="section-marker">
        <span class="marker-number">01</span>
        <span class="marker-title">{{ $i18n.t("nav.about") }}</span>
      </div>

      <TerminalWindow />
    </section>

    <!-- Work Section - Format grille blueprint -->
    <section id="work" class="work-zone" ref="workSection">
      <div class="section-marker">
        <span class="marker-number">02</span>
        <span class="marker-title">{{ $i18n.t("nav.work") }}</span>
      </div>

      <!-- Projects Grid -->
      <div class="work-category">
        <h3 class="category-label">{{ $i18n.t("home.body.projects") }}</h3>
        <div class="blueprint-grid">
          <div
            class="blueprint-card"
            v-for="project in projects"
            :key="project.name"
          >
            <div class="card-header">
              <span class="card-number"
                >0{{ projects.indexOf(project) + 1 }}</span
              >
              <span class="card-status">{{ project.status }}</span>
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ project.name }}</h4>
              <img
                :src="project.image"
                :alt="project.name"
                class="project-image"
              />
              <p class="card-description">
                {{ project.description }}
              </p>
              <div class="card-tags">
                <div v-for="tag in project.tech" :key="tag">
                  <span class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button 
                @click="openProjectModal(project)" 
                class="card-link"
                style="background: none; border: none; cursor: pointer; padding: 0;"
                :aria-label="`View details for ${project.name} project`"
              >
                {{ $i18n.t("home.body.viewProject") }} ⇁
              </button>
            </div>
          </div>
        </div>
        <div class="more-projects">
          <a href="/projects" class="card-link" aria-label="View all projects">{{ $i18n.t("home.body.viewAllProjects") }} ⇁</a>
        </div>
      </div>

      <div class="work-column">
        <!-- Internship -->
        <div class="work-category">
          <h3 class="category-label">{{ $i18n.t("home.body.internship.title") }}</h3>
          <div class="timeline-container">
            <div
              class="timeline-item"
              v-for="internship in internships"
              :key="internship.name"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">{{ internship.date }}</div>
                <h4 class="timeline-title">{{ internship.name }}</h4>
                <p class="timeline-description">
                  {{ internship.mission }}
                </p>
                <div class="timeline-tech">
                  <span
                    class="tech-badge"
                    v-for="tech in internship.tech"
                    :key="tech"
                    >{{ tech }}</span
                  >
                </div>
                <div class="redirect-link">
                  <a :href="internship.link" class="card-link" :aria-label="`View details for ${internship.name} internship`">{{ $i18n.t("home.body.internship.viewDetails") }} ⇁</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="work-divider" />

        <!-- Parcours Educatif -->
        <div class="school-category">
          <h3 class="category-label">{{ $i18n.t("home.body.school.title") }}</h3>
          <div class="timeline-container">
            <div class="timeline-item"
              v-for="school in schools"
              :key="school.name"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">{{ school.date }}</div>
                <h4 class="timeline-title">{{ school.name }}</h4>
                <p class="timeline-description">
                  {{ school.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section - Redesigned -->
    <section id="skills" class="skills-zone">
      <div class="section-marker">
        <span class="marker-number">03</span>
        <span class="marker-title">{{ $i18n.t("nav.skills") }}</span>
      </div>

      <!-- Category tabs -->
      <div class="skills-tabs" role="tablist">
        <button
          v-for="cat in skillCategories"
          :key="cat.id"
          :class="['skills-tab', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
          :aria-selected="activeCategory === cat.id"
          role="tab"
        >
          <span class="tab-icon">{{ cat.icon }}</span>
          <span class="tab-label">{{ cat.label }}</span>
          <span class="tab-count">{{ String(cat.skills.length).padStart(2, '0') }}</span>
        </button>
      </div>

      <!-- Skills panel -->
      <div class="skills-panel">
        <div class="panel-header">
          <span class="panel-marker">{{ t("home.skills.panel.marker") }}: {{ activeCategory.toUpperCase() }}</span>
          <span class="panel-info">{{ activeSkills.length }} {{ t("home.skills.panel.info") }}</span>
        </div>

        <div class="skills-grid">
          <div
            v-for="(skill, index) in activeSkills"
            :key="skill.name"
            class="skill-card"
            :class="`tier-${skill.tier}`"
            :style="{ '--accent': skill.color }"
          >
            <div class="skill-index">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="skill-card-body">
              <img :src="skill.icon" :alt="skill.name" class="skill-logo" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
            <div class="skill-footer">
              <span class="tier-label">{{ tierMeta[skill.tier].label }}</span>
              <div class="skill-bars">
                <span
                  v-for="i in 4"
                  :key="i"
                  :class="['signal-bar', { active: i <= skill.level }]"
                  :style="i <= skill.level ? { background: `rgba(${skill.color}, 0.9)` } : {}"
                ></span>
              </div>
            </div>
            <div class="skill-scan"></div>
          </div>
        </div>

        <!-- Tier legend -->
        <div class="tier-legend">
          <div class="legend-title">{{ $i18n.t("home.skills.legendTitle") }}</div>
          <div class="legend-items">
            <div v-for="(item, key) in tierMeta" :key="key" class="legend-item">
              <div class="legend-bars">
                <span
                  v-for="i in 4"
                  :key="i"
                  class="signal-bar sm"
                  :class="{ active: i <= item.level }"
                ></span>
              </div>
              <span class="legend-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section - Format formulaire minimaliste -->
    <section id="contact" class="contact-zone">
      <div class="section-marker">
        <span class="marker-number">04</span>
        <span class="marker-title">{{ $i18n.t("nav.contact") }}</span>
      </div>

      <div class="contact-layout">
        <!-- Gauche : Infos -->
        <div class="contact-info">
          <h2 class="contact-heading">{{ $t('home.contact.title') }}</h2>
          <p class="contact-text">
            {{ $t('home.contact.description') }}
          </p>

          <div class="contact-methods">
            <div class="method-item">
              <span class="method-label">EMAIL</span>
              <span class="method-value">gael.rothlin@edu.univ-fcomte.fr</span>
            </div>
            <div class="method-item">
              <span class="method-label">{{ $i18n.t("home.panel.locationTitle") }}</span>
              <span class="method-value">Besançon, France</span>
            </div>
          </div>

          <div class="social-links">
            <a
              href="https://www.instagram.com/osiris._25"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Visit Instagram profile (opens in new tab)"
            >
              <img src="../assets/instagram.svg" alt="" />
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/moonlight58"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <img src="../assets/github.svg" alt="" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <!-- Droite : Formulaire -->
        <div class="contact-form-wrapper" v-if="showForm">
          <form
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
            class="contact-form"
            @submit.prevent="handleSubmit"
            netlify
            aria-label="Contact form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-field">
              <label for="name">{{ $i18n.t("home.contact.form.name") }}</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                :placeholder="$t('home.contact.form.namePlaceholder')"
                required
                aria-required="true"
              />
            </div>

            <div class="form-field">
              <label for="email">{{ $i18n.t("home.contact.form.email") }}</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                :placeholder="$t('home.contact.form.emailPlaceholder')"
                required
                aria-required="true"
              />
            </div>

            <div class="form-field">
              <label for="message">{{ $i18n.t("home.contact.form.message") }}</label>
              <textarea
                id="message"
                name="message"
                v-model="formData.message"
                :placeholder="$t('home.contact.form.messagePlaceholder')"
                rows="5"
                required
                aria-required="true"
              ></textarea>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting || cooldownRemaining > 0"
              aria-label="Submit contact form"
            >
              <span v-if="!isSubmitting && cooldownRemaining === 0">{{ $i18n.t("home.contact.form.submit") }}</span>
              <span v-else-if="isSubmitting">{{ $i18n.t("home.contact.form.submitting") }}</span>
              <span v-else>{{ $i18n.t("home.contact.form.preventSpam") }} {{ Math.ceil(cooldownRemaining / 1000) }}s</span>
            </button>

            <div v-if="statusMessage" class="form-status" :class="statusClass">
              {{ statusMessage }}
            </div>
          </form>
        </div>
        <div v-else class="form-toggle">
          <button @click="toggleFormVisibility" class="toggle-button" :aria-label="`${showForm ? 'Hide' : 'Show'} contact form`">
            {{ $t('home.contact.toggleButton') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterComponent />
  </div>
  
  <ProjectModal 
    :isOpen="modalOpen"
    :projectName="selectedProject?.name?.toLowerCase()"
    :language="$i18n.locale"
    @close="closeProjectModal"
  />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import ProjectModal from "@/components/ProjectModal.vue";
import TerminalWindow from "@/components/TerminalWindow.vue";
import FooterComponent from "@/components/FooterComponent.vue";


// État
const mouseX = ref(0);
const mouseY = ref(0);
const showForm = ref(false);
const isSubmitting = ref(false);
const statusMessage = ref("");
const statusClass = ref("");
const workSection = ref(null);
const selectedProject = ref(null);
const modalOpen = ref(false);
const { t } = useI18n();

// Form rate limiting
const lastSubmissionTime = ref(0);
const cooldownDuration = 60000; // 1 minute cooldown
const cooldownRemaining = ref(0);
let cooldownInterval = null;

// Données du formulaire
const formData = ref({
  name: "",
  email: "",
  message: "",
});

// ========== SKILLS DATA (REDESIGNED) ==========
const activeCategory = ref('frontend');

const skillCategories = computed(() => [
  {
    id: 'frontend',
    label: t('home.skills.frontend'),
    icon: '',
    skills: [
      { name: "VueJS",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",       color: "65, 184, 131",  level: 4, tier: 'expert'     },
      { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",          color: "86, 130, 230",  level: 4, tier: 'expert'     },
      { name: "Quasar",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-plain.svg",         color: "0, 162, 255",   level: 3, tier: 'proficient' },
      { name: "BabylonJS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babylonjs/babylonjs-original.svg", color: "255, 102, 0",  level: 2, tier: 'learning'   },
    ]
  },
  {
    id: 'backend',
    label: t('home.skills.backend'),
    icon: '⚙',
    skills: [
      { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",       color: "55, 118, 171",  level: 4, tier: 'expert'     },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "220, 195, 30", level: 4, tier: 'expert'   },
      { name: "NodeJS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",       color: "51, 153, 51",   level: 3, tier: 'proficient' },
      { name: "C",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                 color: "80, 140, 200",  level: 2, tier: 'proficient'   },
      { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",           color: "176, 114, 25",  level: 2, tier: 'proficient'   },
      { name: "PHP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",             color: "130, 120, 200", level: 3, tier: 'learning' },
    ]
  },
  {
    id: 'devops',
    label: t('home.skills.devops'),
    icon: '⚒',
    skills: [
      { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",         color: "230, 200, 100", level: 4, tier: 'expert'     },
      { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",             color: "240, 80, 51",   level: 4, tier: 'expert'     },
      { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",       color: "0, 150, 210",   level: 3, tier: 'proficient' },
      { name: "Bash",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",           color: "180, 180, 200", level: 3, tier: 'proficient' },
      { name: "ProxMox",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/proxmox/proxmox-original-wordmark.svg", color: "229, 112, 0", level: 2, tier: 'learning' },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",  color: "50, 108, 229",  level: 2, tier: 'learning'   },
    ]
  },
  {
    id: 'tools',
    label: t('home.skills.tools'),
    icon: '⊞',
    skills: [
      { name: "MySQL",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",    color: "0, 150, 200",   level: 4, tier: 'expert'     },
      { name: "MongoDB",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "76, 175, 80",  level: 3, tier: 'proficient' },
      { name: "Figma",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",    color: "240, 80, 130",  level: 3, tier: 'proficient' },
      { name: "Netlify",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "14, 210, 210", level: 3, tier: 'proficient' },
      { name: "Ollama",   icon: "https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/devicons/icons/ollama/ollama.svg", color: "180, 180, 200", level: 2, tier: 'learning' },
    ]
  },
]);

const activeSkills = computed(() =>
  skillCategories.value.find(c => c.id === activeCategory.value)?.skills || []
);

const tierMeta = computed (() => ({
  expert:     { label: t('home.skills.tier.expert'),     level: 4 },
  proficient: { label: t('home.skills.tier.proficient'), level: 3 },
  learning:   { label: t('home.skills.tier.learning'),   level: 2 },
}));


const internships = computed(() => [
  { name: "ANI & Low-Tech", mission: t("home.internship.ani.mission"), tech: ["IA", "VR", "3D", "Help-Desk"], date: t("home.internship.ani.date"), link: "/internship/ani" },
  { name: "Euphron", mission: t("home.internship.euphron.mission"), tech: ["Quasar", "VueJS", "MySQL"], date: t("home.internship.euphron.date"), link: "/internship/euphron" },
]);

const schools = computed(() => [
  { name: t("home.school.univ.name"), description: t("home.school.univ.description"), date: "2023 - 2026", status: t("home.school.univ.status") },
  { name: t("home.school.lycee.name"), description: t("home.school.lycee.description"), date: "2020 - 2023", status: t("home.school.lycee.status") },
]);

const projects = computed(() => [
  { name: "Sagittarius", image: "https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/sagittarius.png", description: t("home.projects.sagittarius.description"), tech: ["Ollama", "VueJS"], status: t("home.projects.sagittarius.status"), github: "https://github.com/moonlight58/sagittarius.git"},
  { name: "SpotCLI", image: "https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/spotcli.png", description: t("home.projects.spotcli.description"), tech: ["C", "curl", "SpotifyAPI"], status: t("home.projects.spotcli.status"), github: "https://github.com/moonlight58/SpotCLI.git"},
  { name: "DotIC", image: "https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/dotic.png", description: t("home.projects.dotic.description"), tech: ["Python", "NumPy", "Matplotlib", "OpenCV"], status: t("home.projects.dotic.status"), github: "https://github.com/moonlight58/DotIC.git"},
]);

const isSubmissionAllowed = computed(() => cooldownRemaining.value === 0);

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

const startCooldown = () => {
  lastSubmissionTime.value = Date.now();
  cooldownRemaining.value = cooldownDuration;
  
  if (cooldownInterval) clearInterval(cooldownInterval);
  
  cooldownInterval = setInterval(() => {
    cooldownRemaining.value = Math.max(0, cooldownDuration - (Date.now() - lastSubmissionTime.value));
    if (cooldownRemaining.value === 0) {
      clearInterval(cooldownInterval);
    }
  }, 100);
};

const handleSubmit = async () => {
  const timeSinceLastSubmission = Date.now() - lastSubmissionTime.value;
  if (timeSinceLastSubmission < cooldownDuration) {
    const secondsRemaining = Math.ceil((cooldownDuration - timeSinceLastSubmission) / 1000);
    statusMessage.value = `Veuillez attendre ${secondsRemaining}s avant de renvoyer un message.`;
    statusClass.value = "error";
    return;
  }

  isSubmitting.value = true;
  statusMessage.value = "";

  try {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok || response.status === 404) {
      statusMessage.value = t('home.contact.form.success');
      statusClass.value = "success";
      document.getElementById("contact-form").reset();
      formData.value = { name: "", email: "", message: "" };
      startCooldown();
    } else {
      throw new Error("Erreur");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    statusMessage.value = "Erreur lors de l'envoi. Réessayez.";
    statusClass.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};

const openProjectModal = (project) => {
  selectedProject.value = project;
  modalOpen.value = true;
};

const closeProjectModal = () => {
  modalOpen.value = false;
  selectedProject.value = null;
};

onBeforeUnmount(() => {
  if (cooldownInterval) {
    clearInterval(cooldownInterval);
  }
});
</script>

<style scoped>
/* ========== BASE ========== */
.blueprint-portfolio {
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  position: relative;
  overflow-x: hidden;
}

/* ========== HERO SECTION ========== */
.hero-zone {
  min-height: 100vh;
  position: relative;
  padding: 60px 6% 80px;
  z-index: 1;
}

.hero-content {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  height: calc(100vh - 200px);
}

.name-stack {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.name-line {
  font-family: "Chivo", sans-serif;
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  margin: 0;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 2px var(--color-primary);
}

.name-line.accent {
  font-family: "Bricolage Grotesque", sans-serif;
  color: var(--color-primary);
  -webkit-text-stroke: 0;
}

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
  min-width: 470px;
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
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

.meta-note {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.5px;
  right: 0;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(79, 172, 254, 0.15);
}

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

.label-text { color: var(--color-primary); }
.label-dimension { color: var(--color-muted); }

.bio-compact {
  position: absolute;
  left: 0;
  bottom: 10%;
  max-width: 30vw;
  text-align: justify;
}

.bio-intro {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 15px;
}

.bio-icon {
  font-size: 24px;
  color: var(--color-primary);
}

.bio-text {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.6;
  margin: 0;
}

.social-compact {
  position: absolute;
  right: 0;
  bottom: 10%;
  display: flex;
  gap: 16px;
  margin-top: 20px;
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

.cv-download-btn {
  position: absolute;
  bottom: -60px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(79, 172, 254, 0.05);
  border: 1px solid rgba(79, 172, 254, 0.4);
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
}

.cv-download-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.cv-download-btn:hover::before { transform: translateX(100%); }

.cv-download-btn:hover {
  background: rgba(79, 172, 254, 0.12);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(79, 172, 254, 0.25);
  transform: translateY(-2px);
  color: var(--color-primary);
  text-shadow: none;
}

.cv-btn-icon { font-size: 16px; }
.cv-btn-text { letter-spacing: 1.5px; }

.cv-btn-ext {
  font-size: 10px;
  color: var(--color-muted);
  border-left: 1px solid rgba(79, 172, 254, 0.3);
  padding-left: 10px;
  margin-left: 2px;
}

@media (max-width: 1024px) {
  .cv-download-btn {
    position: relative;
    bottom: auto;
    left: auto;
    margin-top: 24px;
    width: fit-content;
  }
}

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
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
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

.terminal-dots { display: flex; gap: 8px; }

.rectangle {
  width: 16px;
  height: 8px;
  border-radius: 2px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.active { background: rgba(54, 255, 54, 1); }
.rectangle.close { background: var(--color-primary); }
.rectangle.reduce { background: var(--color-secondary); }
.rectangle.expand { background: #f0f0f0; }

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
  margin: 0;
}

.cursor-blink { animation: cursorBlink 1s infinite; }

@keyframes cursorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* ========== WORK SECTION ========== */
.work-column {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  gap: 80px;
  margin-top: 170px;
  margin-bottom: 100px;
}

.work-category { min-width: 0; }
.school-category { min-width: 0; }

.work-divider {
  border: none;
  border-left: 1px solid rgba(79, 172, 254, 0.2);
  height: auto;
  margin: 0;
}

@media (max-width: 1024px) {
  .work-column {
    grid-template-columns: 1fr;
    gap: 60px;
    margin-top: 80px;
  }

  .work-divider {
    border-left: none;
    border-top: 1px solid rgba(79, 172, 254, 0.2);
    height: 0;
    width: 100%;
    margin: 0;
  }
}

.category-label {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 40px;
  letter-spacing: 1px;
}

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
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
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

.card-link:hover { opacity: 0.7; }

.more-projects {
  padding: 20px 0;
  text-align: right;
}

.redirect-link { margin-top: 12px; }

.redirect-link .card-link,
.more-projects .card-link {
  font-size: 13px;
  font-weight: 600;
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
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

.timeline-item:last-child .timeline-marker::before { display: none; }

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

/* ========== SKILLS SECTION (REDESIGNED) ========== */
.skills-tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 24px;
  max-width: 1200px;
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.skills-tab {
  flex: 1;
  min-width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  background: transparent;
  border: none;
  border-right: 1px solid rgba(79, 172, 254, 0.15);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.skills-tab:last-child { border-right: none; }

.skills-tab:hover {
  background: rgba(79, 172, 254, 0.06);
  color: var(--color-primary);
}

.skills-tab.active {
  background: rgba(79, 172, 254, 0.12);
  color: var(--color-primary);
  box-shadow: inset 0 -2px 0 var(--color-primary);
}

.tab-icon { font-size: 14px; }

.tab-count {
  font-size: 10px;
  opacity: 0.5;
  padding: 2px 6px;
  border: 1px solid currentColor;
  border-radius: 2px;
}

.skills-tab.active .tab-count { opacity: 1; }

/* Panel */
.skills-panel {
  background: rgba(79, 172, 254, 0.02);
  border: 1px solid rgba(79, 172, 254, 0.15);
  border-radius: 4px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.1);
}

.panel-marker {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(79, 172, 254, 0.45);
  letter-spacing: 0.5px;
}

.panel-info {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 1px;
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
  margin-bottom: 36px;
}

/* Skill card */
.skill-card {
  --accent: 79, 172, 254;
  position: relative;
  /*
   * will-change: transform forces Chrome to pre-allocate a GPU compositing
   * layer for every card before any hover occurs. Without this, Chrome
   * promotes only the hovered card mid-interaction, which causes adjacent
   * cards' painted content to bleed into the new layer (visible as the
   * previous card's text appearing inside the hovered card).
   * isolation: isolate creates a separate stacking context per card so
   * paint operations never cross card boundaries.
   */
  will-change: transform;
  isolation: isolate;
  background: rgba(var(--accent), 0.04);
  border: 1px solid rgba(var(--accent), 0.2);
  padding: 18px 14px 14px;
  transition: transform 0.3s ease, background 0.3s ease,
              border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  cursor: default;
}

.skill-card:hover {
  background: rgba(var(--accent), 0.09);
  border-color: rgba(var(--accent), 0.65);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(var(--accent), 0.12),
              0 0 0 1px rgba(var(--accent), 0.1);
}

.skill-card.tier-expert, 
.skill-card.tier-proficient, 
.skill-card.tier-learning { 
  border-color: rgba(var(--accent), 0.3);
}

.skill-card.tier-expert:hover, 
.skill-card.tier-proficient:hover, 
.skill-card.tier-learning:hover { 
  border-color: rgba(var(--accent), 0.75);
}

.skill-card.tier-expert .tier-label, 
.skill-card.tier-proficient .tier-label, 
.skill-card.tier-learning .tier-label {
  color: rgba(var(--accent), 1); 
}

/* Scan-line sweep on hover */
.skill-scan {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(var(--accent), 0.07) 50%,
    transparent 100%
  );
  pointer-events: none;
}

.skill-card:hover .skill-scan {
  animation: scanDown 0.5s ease forwards;
}

@keyframes scanDown {
  from { top: -60%; }
  to   { top: 110%; }
}

.skill-index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(var(--accent), 0.6);
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.skill-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.skill-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
  filter: saturate(0.6) brightness(0.85);
  transition: filter 0.3s ease;
}

.skill-card:hover .skill-logo {
  filter: saturate(1) brightness(1.15);
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-secondary);
  text-align: center;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name { color: var(--color-text-primary); }

.skill-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid rgba(var(--accent), 0.12);
}

.tier-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.5px;
  color: rgba(var(--accent), 0.5);
  text-transform: uppercase;
}

.skill-card.tier-expert .tier-label { color: rgba(var(--accent), 0.85); }

/* Signal bars */
.skill-bars {
  display: flex;
  gap: 2px;
  align-items: flex-end;
}

.signal-bar {
  width: 3px;
  border-radius: 1px;
  background: rgba(var(--accent), 0.18);
  transition: background 0.3s ease;
}

.signal-bar:nth-child(1) { height: 5px; }
.signal-bar:nth-child(2) { height: 8px; }
.signal-bar:nth-child(3) { height: 11px; }
.signal-bar:nth-child(4) { height: 14px; }

/* Tier legend */
.tier-legend {
  border-top: 1px solid rgba(79, 172, 254, 0.1);
  padding-top: 20px;
}

.legend-title {
  font-family: var(--font-mono);
  font-size: 9px;
  color: rgba(79, 172, 254, 0.35);
  margin-bottom: 14px;
  letter-spacing: 1px;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.legend-bars {
  display: flex;
  gap: 2px;
  align-items: flex-end;
}

/* Legend signal bars — no CSS variable dependency */
.signal-bar.sm {
  width: 3px;
  background: rgba(79, 172, 254, 0.18);
}

.signal-bar.sm:nth-child(1) { height: 4px; }
.signal-bar.sm:nth-child(2) { height: 6px; }
.signal-bar.sm:nth-child(3) { height: 8px; }
.signal-bar.sm:nth-child(4) { height: 10px; }

.signal-bar.sm.active { background: rgba(79, 172, 254, 0.75) !important; }

.legend-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text);
  letter-spacing: 0.5px;
}

/* Skills responsive */
@media (max-width: 768px) {
  .skills-tab {
    min-width: 100px;
    padding: 10px 14px;
    font-size: 10px;
    gap: 6px;
  }

  .skills-panel { padding: 20px 16px; }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .skills-tab {
    flex: 1 1 45%;
    min-width: 0;
    padding: 8px 10px;
    font-size: 9px;
    border-right: 1px solid rgba(79, 172, 254, 0.15);
  }

  .tab-icon { display: none; }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .skill-logo { width: 28px; height: 28px; }
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

.social-links { display: flex; gap: 16px; }

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

.social-link img { width: 18px; height: 18px; }

/* Formulaire */
.contact-form {
  background: rgba(79, 172, 254, 0.03);
  border: 1px solid rgba(79, 172, 254, 0.2);
  padding: 40px;
}

.form-field { margin-bottom: 24px; }

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
  opacity: 0.65;
  cursor: not-allowed;
  border-color: var(--color-danger, #ff6b6b);
  color: var(--color-danger, #ff6b6b);
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

@media (max-width: 1200px) {
  .name-line { font-size: clamp(3rem, 10vw, 8rem); }
  .meta-panel { min-width: 280px; }
}

@media (max-width: 1024px) {
  .hero-content { height: auto; }

  .avatar-container {
    width: 140px;
    height: 140px;
    margin: 0 auto;
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
    max-width: 100vw;
  }

  .contact-layout,
  .skills-diagram {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .blueprint-header { padding: 20px 5%; }
  .header-nav { gap: 16px; }
  .nav-link { font-size: 10px; }

  section { padding: 80px 5%; }

  .hero-zone { padding: 100px 5% 60px; }

  .section-marker { margin-bottom: 40px; }
  .marker-number { font-size: 32px; }
  .marker-title { font-size: 24px; }

  .blueprint-grid,
  .design-showcase { grid-template-columns: 1fr; }
}

/* ========== ACCESSIBILITÉ ========== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>