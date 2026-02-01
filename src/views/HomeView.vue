<template>
  <div class="blueprint-container" @mousemove="updateCoords" @scroll="handleScroll">
    <!-- Grille primaire et secondaire imbriquée -->
    <div class="grid-layer"></div>
    
    <!-- Curseur "Réglet" CAO avec coordonnées -->
    <div class="crosshair-h" :style="{ top: mouseY + 'px' }"></div>
    <div class="crosshair-v" :style="{ left: mouseX + 'px' }"></div>
    <div class="coords-display" :style="{ left: mouseX + 20 + 'px', top: mouseY + 20 + 'px' }">
      <span class="coord-label">X:</span> {{ mouseX.toFixed(0) }}<br>
      <span class="coord-label">Y:</span> {{ mouseY.toFixed(0) }}
    </div>

    <!-- En-tête technique -->
    <header class="blueprint-header">
      <div class="file-info">
        <p class="label">
          <span class="icon">▶</span> FILE_NAME: 
          <span class="value">GAEL_ROTHLIN_DEV.VUE</span>
        </p>
        <p class="label">
          <span class="icon">◆</span> STATUS: 
          <span class="blink value">DRAFT_MODE</span>
        </p>
        <p class="label">
          <span class="icon">●</span> REV: 
          <span class="value">2026.01.30</span>
        </p>
      </div>
      <div class="lang-selector">
        <span class="comment">// Academic Title</span>
      </div>
    </header>

    <!-- Section Hero -->
    <main class="hero-section">
      <!-- Zone de dessin SVG -->
      <div class="drawing-container">
        <svg viewBox="0 0 600 600" class="main-sketch">
          <!-- Cadre principal -->
          <rect x="50" y="50" width="500" height="400" class="path-draw frame" />
          
          <!-- Portrait symbolique -->
          <circle cx="300" cy="250" r="120" class="path-draw portrait-circle" />
          <path d="M 220 250 Q 300 200, 380 250" class="path-draw smile" />
          <circle cx="260" cy="220" r="8" class="path-draw eye" fill="#4facfe" />
          <circle cx="340" cy="220" r="8" class="path-draw eye" fill="#4facfe" />
          
          <!-- Lignes d'annotation technique -->
          <line x1="420" y1="250" x2="550" y2="200" class="annotation-line" 
                :style="{ strokeDashoffset: annotationOffset }" />
          <line x1="180" y1="250" x2="50" y2="150" class="annotation-line" 
                :style="{ strokeDashoffset: annotationOffset }" />
          
          <!-- Points de dimension -->
          <circle cx="420" cy="250" r="3" class="dimension-point" />
          <circle cx="180" cy="250" r="3" class="dimension-point" />
          
          <!-- Texte technique SVG -->
          <text x="480" y="190" class="svg-annotation" fill="#4facfe" font-size="10">
            radius: 120px
          </text>
          <text x="70" y="140" class="svg-annotation" fill="#4facfe" font-size="10">
            center: (300, 250)
          </text>
        </svg>

        <!-- Boîte X-Ray interactive -->
        <div 
          class="x-ray-box" 
          @mouseenter="isHovered = true" 
          @mouseleave="isHovered = false"
          :class="{ 'x-ray-active': isHovered }"
        >
          <div v-if="!isHovered" class="sketch-label">
            <span class="label-icon">[+]</span> PROJECT_CORE
          </div>
          <div v-else class="code-reveal">
            <pre><code><span class="code-brace">{</span>
  <span class="code-key">"type"</span>: <span class="code-string">"Creative_Dev"</span>,
  <span class="code-key">"tools"</span>: [<span class="code-string">"VueJS"</span>, <span class="code-string">"WebGL"</span>, <span class="code-string">"SVG"</span>],
  <span class="code-key">"vision"</span>: <span class="code-string">"Art_meets_Logic"</span>,
  <span class="code-key">"status"</span>: <span class="code-string">"{{ isHovered ? 'INSPECTING' : 'IDLE' }}"</span>
<span class="code-brace">}</span></code></pre>
          </div>
        </div>

        <!-- Annotations flottantes -->
        <div class="floating-annotation" :style="{ top: '15%', left: '5%', opacity: scrollProgress }">
          <div class="annotation-line-connector"></div>
          <span class="annotation-text">
            <span class="comment">// Fusion Code/Art</span>
          </span>
        </div>
        
        <div class="floating-annotation" :style="{ top: '70%', right: '8%', opacity: scrollProgress }">
          <div class="annotation-line-connector right"></div>
          <span class="annotation-text">
            <span class="comment">// Interactive Blueprint</span>
          </span>
        </div>
      </div>

      <!-- Bloc de texte principal -->
      <div class="text-block">
        <h1 class="sketched-name">
          <span class="name-outline">Gaël</span> 
          <span class="name-solid">Röthlin</span>
        </h1>
        
        <div class="subtitle-container">
          <p class="subtitle">
            <span class="comment">// Home Title</span><br />
            <span class="typewriter">{{ typedText }}</span>
            <span class="cursor-blink">|</span>
          </p>
        </div>

        <!-- Métriques techniques -->
        <div class="metrics-grid">
          <div class="metric-item">
            <span class="metric-label">PRECISION</span>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: '95%' }"></div>
            </div>
          </div>
          <div class="metric-item">
            <span class="metric-label">CREATIVITY</span>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: '88%' }"></div>
            </div>
          </div>
          <div class="metric-item">
            <span class="metric-label">INNOVATION</span>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: '92%' }"></div>
            </div>
          </div>
        </div>

        <!-- Bouton CTA avec effet blueprint -->
        <button class="blueprint-cta" @click="handleCTA">
          <span class="cta-brackets">[</span>
          <span class="cta-text">EXPLORE_PROJECTS</span>
          <span class="cta-brackets">]</span>
          <div class="cta-underline"></div>
        </button>
      </div>
    </main>

    <!-- Indicateur de scroll -->
    <div class="scroll-indicator">
      <div class="scroll-line" :style="{ height: scrollProgress * 100 + '%' }"></div>
      <span class="scroll-text">SCROLL</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// État réactif
const mouseX = ref(0);
const mouseY = ref(0);
const isHovered = ref(false);
const scrollProgress = ref(1);
const typedText = ref('');

// Texte pour l'effet typewriter
const fullText = "Conception d'interfaces où la logique devient esthétique.";
let typewriterIndex = 0;
let typewriterTimer = null;

// Animation offset pour les lignes d'annotation
const annotationOffset = computed(() => {
  return 200 - (scrollProgress.value * 200);
});

// Mise à jour des coordonnées souris
const updateCoords = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

// Gestion du scroll
const handleScroll = (e) => {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = Math.min(scrolled / (maxScroll || 1), 1);
};

// Effet typewriter
const startTypewriter = () => {
  typewriterTimer = setInterval(() => {
    if (typewriterIndex < fullText.length) {
      typedText.value += fullText[typewriterIndex];
      typewriterIndex++;
    } else {
      clearInterval(typewriterTimer);
    }
  }, 50);
};

// Action CTA
const handleCTA = () => {
  console.log('Navigate to projects');
  // Router navigation ici si nécessaire
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setTimeout(startTypewriter, 1000); // Démarre après l'animation SVG
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (typewriterTimer) clearInterval(typewriterTimer);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Fira+Code:wght@300;400;500;700&display=swap');

/* ========== CONTENEUR PRINCIPAL ========== */
.blueprint-container {
  min-height: 100vh;
  background-color: #0b0e14;
  color: #4facfe;
  font-family: 'Fira Code', monospace;
  overflow-x: hidden;
  position: relative;
  cursor: none;
}

/* ========== GRILLE BLUEPRINT ========== */
.grid-layer {
  position: fixed;
  inset: 0;
  background-image: 
    /* Grille principale */
    linear-gradient(rgba(79, 172, 254, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 172, 254, 0.15) 1px, transparent 1px),
    /* Grille secondaire */
    linear-gradient(rgba(79, 172, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 172, 254, 0.05) 1px, transparent 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  z-index: 0;
  pointer-events: none;
}

.grid-layer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(11, 14, 20, 0.4) 100%);
}

/* ========== CURSEUR RÉGLET CAO ========== */
.crosshair-h, .crosshair-v {
  position: fixed;
  background: rgba(79, 172, 254, 0.4);
  pointer-events: none;
  z-index: 100;
  transition: opacity 0.2s ease;
}

.crosshair-h { 
  width: 100%; 
  height: 1px; 
  left: 0;
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

.crosshair-v { 
  width: 1px; 
  height: 100%; 
  top: 0;
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

.coords-display {
  position: fixed;
  font-size: 11px;
  color: #4facfe;
  pointer-events: none;
  z-index: 101;
  background: rgba(11, 14, 20, 0.9);
  padding: 4px 8px;
  border: 1px solid rgba(79, 172, 254, 0.3);
  font-weight: 500;
  line-height: 1.4;
}

.coord-label {
  color: #6a7c92;
  font-size: 9px;
}

/* ========== EN-TÊTE ========== */
.blueprint-header {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 50;
  font-size: 11px;
  pointer-events: none;
}

.file-info .label {
  margin: 4px 0;
  color: #6a7c92;
  display: flex;
  align-items: center;
  gap: 8px;
}

.file-info .icon {
  color: #4facfe;
  font-size: 8px;
}

.file-info .value {
  color: #4facfe;
  font-weight: 500;
}

.blink {
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0.3; }
}

.comment {
  color: #6a7c92;
  font-style: italic;
}

/* ========== SECTION HERO ========== */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 100vh;
  padding: 100px 10% 60px;
  position: relative;
  z-index: 1;
}

/* ========== CONTENEUR DE DESSIN ========== */
.drawing-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.main-sketch {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(79, 172, 254, 0.3));
}

/* Animation du tracé SVG */
.path-draw {
  fill: none;
  stroke: #4facfe;
  stroke-width: 2;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: draw 3s forwards ease-in-out;
}

.path-draw.frame {
  animation-delay: 0s;
}

.path-draw.portrait-circle {
  animation-delay: 0.5s;
  stroke-width: 2.5;
}

.path-draw.smile {
  animation-delay: 1s;
  stroke-linecap: round;
}

.path-draw.eye {
  animation-delay: 1.2s;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

/* Lignes d'annotation */
.annotation-line {
  stroke: #4facfe;
  stroke-width: 1;
  stroke-dasharray: 5, 5;
  stroke-dashoffset: 200;
  opacity: 0.6;
  transition: stroke-dashoffset 0.5s ease-out;
}

.dimension-point {
  fill: #4facfe;
  stroke: #0b0e14;
  stroke-width: 2;
  opacity: 0;
  animation: fadeInPoint 0.5s forwards 2s;
}

@keyframes fadeInPoint {
  to { opacity: 1; }
}

.svg-annotation {
  font-family: 'Fira Code', monospace;
  opacity: 0;
  animation: fadeInPoint 0.5s forwards 2.2s;
}

/* ========== BOÎTE X-RAY ========== */
.x-ray-box {
  position: absolute;
  top: 10%;
  right: 0;
  border: 1px dashed #4facfe;
  padding: 20px;
  background: rgba(11, 14, 20, 0.95);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 250px;
  backdrop-filter: blur(10px);
}

.x-ray-box:hover,
.x-ray-box.x-ray-active {
  background: rgba(79, 172, 254, 0.08);
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 30px rgba(79, 172, 254, 0.3);
  transform: scale(1.02);
}

.sketch-label {
  font-size: 14px;
  font-weight: 500;
  color: #4facfe;
  letter-spacing: 1px;
}

.label-icon {
  color: #6a7c92;
  margin-right: 8px;
}

.code-reveal pre {
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  color: #a8b5c9;
}

.code-reveal code {
  font-family: 'Fira Code', monospace;
}

.code-brace { color: #4facfe; font-weight: bold; }
.code-key { color: #7dd3fc; }
.code-string { color: #a78bfa; }

/* ========== ANNOTATIONS FLOTTANTES ========== */
.floating-annotation {
  position: absolute;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.5s ease;
}

.annotation-line-connector {
  width: 40px;
  height: 1px;
  background: #4facfe;
  position: relative;
}

.annotation-line-connector::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 0;
  height: 0;
  border-left: 6px solid #4facfe;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
}

.annotation-line-connector.right {
  order: 2;
}

.annotation-line-connector.right::after {
  left: 0;
  right: auto;
  border-left: none;
  border-right: 6px solid #4facfe;
}

/* ========== BLOC DE TEXTE ========== */
.text-block {
  position: relative;
}

.sketched-name {
  font-family: 'Architects Daughter', cursive;
  font-size: clamp(3rem, 8vw, 5.5rem);
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
}

.name-outline {
  -webkit-text-stroke: 2px #4facfe;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(79, 172, 254, 0.5);
}

.name-solid {
  text-shadow: 3px 3px 0px #4facfe;
}

.subtitle-container {
  margin-bottom: 40px;
}

.subtitle {
  font-size: 16px;
  line-height: 1.8;
  color: #a8b5c9;
}

.typewriter {
  color: #fff;
  font-weight: 400;
}

.cursor-blink {
  color: #4facfe;
  animation: cursorBlink 1s infinite;
  font-weight: 300;
}

@keyframes cursorBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* ========== MÉTRIQUES ========== */
.metrics-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.metric-label {
  font-size: 10px;
  color: #6a7c92;
  letter-spacing: 1px;
}

.metric-bar {
  width: 100%;
  height: 4px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.2);
  position: relative;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #7dd3fc 100%);
  transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fillMetric 2s ease-out 1.5s backwards;
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.6);
}

@keyframes fillMetric {
  from { width: 0 !important; }
}

/* ========== BOUTON CTA ========== */
.blueprint-cta {
  background: transparent;
  border: 2px solid #4facfe;
  color: #4facfe;
  padding: 16px 32px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.blueprint-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.2), transparent);
  transition: left 0.5s ease;
}

.blueprint-cta:hover::before {
  left: 100%;
}

.blueprint-cta:hover {
  background: rgba(79, 172, 254, 0.1);
  box-shadow: 0 0 20px rgba(79, 172, 254, 0.4);
  transform: translateY(-2px);
}

.cta-brackets {
  color: #6a7c92;
  font-weight: 700;
}

.cta-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #4facfe;
  transition: width 0.3s ease;
}

.blueprint-cta:hover .cta-underline {
  width: 100%;
}

/* ========== INDICATEUR DE SCROLL ========== */
.scroll-indicator {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 50;
}

.scroll-line {
  width: 2px;
  height: 0;
  background: linear-gradient(to bottom, #4facfe, #7dd3fc);
  transition: height 0.3s ease;
  position: relative;
}

.scroll-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #4facfe;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.8);
}

.scroll-text {
  font-size: 9px;
  letter-spacing: 2px;
  color: #6a7c92;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
    padding: 80px 5% 40px;
    gap: 40px;
  }

  .drawing-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .sketched-name {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .x-ray-box {
    position: relative;
    top: 20px;
    right: auto;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .blueprint-header {
    flex-direction: column;
    gap: 10px;
  }

  .coords-display {
    font-size: 9px;
  }

  .floating-annotation {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }

  .metrics-grid {
    gap: 12px;
  }
}

/* ========== ACCESSIBILITÉ ========== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .cursor-blink {
    animation: none;
    opacity: 1;
  }
}
</style>