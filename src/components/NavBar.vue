<template>
  <nav class="nav-bar">
    <router-link to="/" class="nav-link">// Home</router-link>
    <router-link to="/about" class="nav-link">// About</router-link>
    <router-link to="/projects" class="nav-link">// Projects</router-link>
    <router-link to="/contact" class="nav-link">// Contact</router-link>
  </nav>
</template>
<script setup></script>
<style>
.nav-bar {
  background-color: var(--background-color);
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  color: var(--white);
  transition: color 0.2s ease;
}

.nav-link:hover {
    color: var(--blue);
}
</style>
