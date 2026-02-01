<template>
  <header :class="{ 'scrolled': scrollTop > 0 }">
    <div class="logo-container">
      <a href="/" class="logo">Gaël Röthlin</a>
    </div>
    <nav>
      <ul>
        <li><a href="#about" @click="scrollToSection('#about')">About</a></li>
        <li><a href="#work" @click="scrollToSection('#work')">Work</a></li>
        <li><a href="#skills" @click="scrollToSection('#skills')">Skills</a></li>
        <li><a href="#contact" @click="scrollToSection('#contact')">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      container: document.querySelector('header'),
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY || window.pageYOffset;
    },
    scrollToSection(sectionId) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    },
  },
};
</script>

<style scoped>
header {
  transition: background-color 0.3s ease;
}

header.scrolled {
  background-color: rgba(15, 15, 26, 0.8);
}
</style>
