<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="name">Gaël Röthlin</h1>
      <div class="title-badge">
        <h3>Full-Stack Developer</h3>
        <span>×</span>
        <h3>Artist</h3>
      </div>
      
      <div class="bio-container">
        <div class="bio-line">
          <span class="bio-icon">⚡</span>
          <p>Passionné par le développement logiciel et l'innovation technologique</p>
        </div>
        <div class="bio-line">
          <span class="bio-icon">🚀</span>
          <p>Créateur d'expériences numériques uniques et intuitives</p>
        </div>
      </div>

      <div class="hero-actions">
        <a href="https://www.instagram.com/osiris._25" target="_blank" class="social-link">
          <span>@osiris._25</span>
        </a>
        <button class="scroll-hint" @click="scrollToExpertise">
          <span>Explorer</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="expertise-section" ref="expertiseSection">
      <h2 class="section-title">My Expertise</h2>
      
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h2 class="card-title">Software Development</h2>
          <div class="card-content">
            <h3>&lt;h3&gt;</h3>
            <p>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
            <h3>&lt;/h3&gt;</h3>
          </div>
        </div>

        <div class="expertise-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.8 5.2l-4.2-4.2m0-6l4.2-4.2"></path>
            </svg>
          </div>
          <h2 class="card-title">Frontend Dev<br>VueJS, NextJS</h2>
          <div class="card-content">
            <h3>&lt;h3&gt;</h3>
            <p>Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, VueJS and NextJS frameworks.</p>
            <h3>&lt;/h3&gt;</h3>
          </div>
        </div>

        <div class="expertise-card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h2 class="card-title">Flutter Dev<br>Android, iOS</h2>
          <div class="card-content">
            <h3>&lt;h3&gt;</h3>
            <p>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
            <h3>&lt;/h3&gt;</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="section-intro">
        <span class="section-number">01</span>
        <h2 class="section-heading">
          <span class="heading-main">Projets</span>
          <span class="heading-sub">Découvrez mes réalisations</span>
        </h2>
      </div>
      <div class="placeholder-box">
        <p>Section Carousel - Intégrer le composant Carousel</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-intro">
        <span class="section-number">02</span>
        <h2 class="section-heading">
          <span class="heading-main">Compétences Techniques</span>
        </h2>
      </div>

      <div class="skills-timeline">
        <div v-for="(category, index) in skillCategories" :key="index" class="skill-category">
          <div class="category-header">
            <div class="category-icon">
              <span v-html="category.iconSvg"></span>
            </div>
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="category-line"></div>
          </div>

          <div class="technologies-flow">
            <div v-for="(tech, techIndex) in category.technologies" :key="techIndex" class="tech-bubble">
              <div class="bubble-glow"></div>
              <div class="tech-icon-placeholder">{{ tech.name.substring(0, 2).toUpperCase() }}</div>
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Internship Section -->
    <section class="internship-section">
      <div class="diagonal-bg"></div>
      <div class="section-intro">
        <span class="section-number">03</span>
        <h2 class="section-heading">
          <span class="heading-main">Expériences</span>
        </h2>
      </div>
      <div class="placeholder-box">
        <p>Section Stages - Intégrer le composant Internship</p>
      </div>
    </section>

    <!-- UI/UX Section -->
    <section class="uiux-section">
      <div class="section-intro">
        <span class="section-number">04</span>
        <h2 class="section-heading">
          <span class="heading-main">UI/UX Design</span>
          <span class="heading-sub">Créativité & Innovation</span>
        </h2>
      </div>
      <div class="placeholder-box">
        <p>Section Design - Intégrer le composant UIUX</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="section-intro centered">
        <span class="section-number">05</span>
        <h2 class="section-heading">
          <span class="heading-main">À Propos</span>
        </h2>
      </div>
      <div class="about-content">
        <p class="about-text">
          Développeur passionné et créatif, je combine expertise technique et sensibilité artistique 
          pour créer des solutions innovantes. Mon objectif est de transformer des idées en 
          expériences numériques exceptionnelles qui marquent les esprits.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <h2 class="contact-heading">Contact</h2>
      <div class="contact-links">
        <button class="contact-item email" @click="toggleFormVisibility">
          <div class="contact-bg"></div>
          <div class="contact-icon">📧</div>
          <span>Email</span>
        </button>
        <a href="https://www.instagram.com/osiris._25" class="contact-item instagram">
          <div class="contact-bg"></div>
          <div class="contact-icon">📷</div>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/moonlight58" class="contact-item github">
          <div class="contact-bg"></div>
          <div class="contact-icon">💻</div>
          <span>GitHub</span>
        </a>
      </div>

      <div class="form-container" v-if="showForm">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model="formData.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isLoading">
            {{ isLoading ? 'Envoi...' : 'Envoyer' }}
          </button>
          <p v-if="status" :class="['status-msg', status.type]">{{ status.text }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      showForm: false,
      formData: { name: "", email: "", message: "" },
      isLoading: false,
      status: null,
      skillCategories: [
        {
          name: "Développement de logiciels",
          iconSvg: '<svg viewBox="0 0 24 24" fill="white"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
          technologies: [
            { name: "Python" }, { name: "Java" }, { name: "Dart" }, { name: "TypeScript" }
          ]
        },
        {
          name: "Front-end Web",
          iconSvg: '<svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/></svg>',
          technologies: [
            { name: "React" }, { name: "Vue.js" }, { name: "NextJS" }, { name: "HTML/CSS" }
          ]
        },
        {
          name: "Back-end Web",
          iconSvg: '<svg viewBox="0 0 24 24" fill="white"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>',
          technologies: [
            { name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }, { name: "Firebase" }
          ]
        },
        {
          name: "Game Development",
          iconSvg: '<svg viewBox="0 0 24 24" fill="white"><path d="M21.58 16.09l-1.09-7.66A3.996 3.996 0 0016.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91z"/></svg>',
          technologies: [
            { name: "Unity" }, { name: "C#" }, { name: "Godot" }
          ]
        },
        {
          name: "Art",
          iconSvg: '<svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/></svg>',
          technologies: [
            { name: "Photoshop" }, { name: "Illustrator" }, { name: "Figma" }, { name: "Blender" }
          ]
        }
      ]
    };
  },
  methods: {
    scrollToExpertise() {
      this.$refs.expertiseSection?.scrollIntoView({ behavior: "smooth" });
    },
    toggleFormVisibility() {
      this.showForm = !this.showForm;
    },
    handleSubmit() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.status = { type: "success", text: "Message envoyé !" };
        this.formData = { name: "", email: "", message: "" };
        setTimeout(() => this.showForm = false, 2000);
      }, 1500);
    }
  }
};
</script>

<style scoped>
.home-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  overflow-y: hidden;
}

.hero-section {
  text-align: center;
  padding: 6rem 0 4rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.title-badge h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  color: var(--light-gray);
}

.title-badge span {
  font-size: 2rem;
  color: var(--light-gray);
}

.bio-container {
  max-width: 700px;
  margin: 0 auto 3rem;
}

.bio-line {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  text-align: left;
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

.bio-line:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
  }
}

.bio-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bio-line p {
  margin: 0;
  color: var(--light-gray);
  font-size: 1.1rem;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-link, .scroll-hint {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-link:hover, .scroll-hint:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: translateY(-3px);
}

.expertise-section {
  padding: 6rem 0;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--white);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  border: 2px solid var(--light-gray);
}

.expertise-card {
  background-color: rgba(42, 41, 46, 0.5);
  border: 1px solid var(--light-gray);
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.expertise-card:hover::before {
  opacity: 1;
}

.card-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 1.5rem;
  color: var(--white);
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--white);
  line-height: 1.3;
}

.card-content h3 {
  font-size: 0.9rem;
  color: var(--gray);
  margin: 0.5rem 0;
}

.card-content p {
  color: var(--light-gray);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
}

.section-intro {
  margin-bottom: 3rem;
  text-align: center;
}

.section-number {
  display: inline-block;
  font-size: 0.9rem;
  color: #f72585;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.heading-main {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-sub {
  font-size: 1.1rem;
  color: var(--light-gray);
}

.projects-section, .internship-section, .uiux-section {
  padding: 6rem 0;
}

.placeholder-box {
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(95, 94, 97, 0.3);
  border-radius: 12px;
  text-align: center;
  color: var(--light-gray);
}

.skills-timeline {
  max-width: 1200px;
  margin: 0 auto;
}

.skill-category {
  margin-bottom: 4rem;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1.5rem;
}

.category-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-icon svg {
  width: 30px;
  height: 30px;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white);
  margin: 0;
}

.category-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.5), transparent);
}

.technologies-flow {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 80px;
}

.tech-bubble {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  min-width: 100px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(95, 94, 97, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.bubble-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-bubble:hover {
  transform: translateY(-5px);
}

.tech-bubble:hover .bubble-glow {
  opacity: 1;
}

.tech-icon-placeholder {
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--white);
  position: relative;
  z-index: 1;
}

.tech-bubble span {
  font-size: 0.95rem;
  color: var(--light-gray);
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.tech-bubble:hover span {
  color: var(--white);
}

.diagonal-bg {
  position: absolute;
  inset: -20%;
  background: linear-gradient(135deg, transparent 49%, rgba(102, 126, 234, 0.03) 50%);
  transform: rotate(-5deg);
  z-index: -1;
}

.about-section {
  padding: 6rem 2rem;
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--light-gray);
}

.contact-section {
  padding: 6rem 2rem;
  text-align: center;
}

.contact-heading {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.contact-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px 30px;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(95, 94, 97, 0.3);
  border-radius: 12px;
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.contact-item:hover .contact-bg {
  opacity: 1;
}

.contact-icon {
  font-size: 2rem;
  position: relative;
  z-index: 1;
}

.contact-item span {
  position: relative;
  z-index: 1;
}

.form-container {
  max-width: 600px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(95, 94, 97, 0.3);
  border-radius: 12px;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--white);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(95, 94, 97, 0.3);
  border-radius: 8px;
  color: var(--white);
  font-size: 1rem;
}

.submit-btn {
  padding: 12px 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.status-msg {
  margin-top: 1rem;
  padding: 12px;
  border-radius: 8px;
}

.status-msg.success {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

@media (max-width: 768px) {
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .technologies-flow {
    padding-left: 0;
  }
  
  .title-badge {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .title-badge span {
    display: none;
  }
}
</style>