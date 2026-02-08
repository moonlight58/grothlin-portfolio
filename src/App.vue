<template>
  <div class="terminal-wrapper">
    <!-- Effet scanline subtil -->
    <div class="scanlines"></div>

    <!-- En-tête fixe minimaliste -->
    <NavBar />
    
    <!-- Contenu principal -->
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
/* ========== RESET ET VARIABLES ========== */
:root {
  --color-primary: #4facfe;
  --color-secondary: #7dd3fc;
  --color-accent: #a78bfa;
  --color-bg-dark: #0b0e14;
  --color-bg-darker: #050609;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a8b5c9;
  --color-text-muted: #6a7c92;
  --color-grid: rgba(79, 172, 254, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-dark);
  color: var(--color-text-primary);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========== TERMINAL WRAPPER ========== */
.terminal-wrapper {
  min-height: 100vh;
  background: var(--color-bg-dark);
  position: relative;
  overflow-x: hidden;
}

/* ========== EFFET SCANLINES ========== */
.scanlines {
  position: fixed;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(79, 172, 254, 0.02) 51%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.5;
  animation: scanlineMove 8s linear infinite;
}

@keyframes scanlineMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* ========== SCROLLBAR PERSONNALISÉ ========== */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-darker);
  border-left: 1px solid rgba(79, 172, 254, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-secondary)
  );
  border-radius: 0;
  border: 2px solid var(--color-bg-darker);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-bg-darker);
}

/* ========== SÉLECTION DE TEXTE ========== */
::selection {
  background: rgba(79, 172, 254, 0.3);
  color: var(--color-text-primary);
}

::-moz-selection {
  background: rgba(79, 172, 254, 0.3);
  color: var(--color-text-primary);
}

/* ========== TRANSITIONS DE PAGE ========== */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* ========== UTILITAIRES GLOBAUX ========== */
.text-gradient {
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-text {
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

.blueprint-border {
  border: 1px solid var(--color-primary);
  box-shadow: 0 0 10px rgba(79, 172, 254, 0.2);
}

/* ========== TYPOGRAPHIE GLOBALE ========== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-text-primary);
}

p {
  line-height: 1.6;
  color: var(--color-text-secondary);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
}

code {
  font-family: 'Fira Code', monospace;
  background: rgba(79, 172, 254, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9em;
  color: var(--color-primary);
}

/* ========== ANIMATIONS GLOBALES ========== */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(79, 172, 254, 0.2); }
  50% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.6); }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  .scanlines {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}

/* ========== ACCESSIBILITÉ ========== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .scanlines {
    animation: none;
  }
}

/* ========== MODE SOMBRE FORCÉ ========== */
@media (prefers-color-scheme: dark) {
  /* Le site est déjà en mode sombre, pas de changements nécessaires */
}

/* ========== PRINT ========== */
@media print {
  .scanlines,
  .terminal-wrapper::before {
    display: none;
  }

  body {
    background: white;
    color: black;
  }
}

/* ========== FOCUS VISIBLE ========== */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}
</style>