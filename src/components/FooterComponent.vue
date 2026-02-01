<template>
  <footer id="contact">
    <p @onclick="$emit('open-form')">
      Connect with me:
      <span style="color: var(--accent)">
        gael.rothlin@edu.univ-fcomte.fr
      </span>
    </p>
    <FormDialog v-if="showForm" @close="showForm = false" />
    <p>© 2026 Gaël Röthlin. All rights reserved.</p>
  </footer>
</template>
<script>
import FormDialog from './FormDialog.vue';

export default {
  name: "FooterComponent",
  components: {
    FormDialog
  },
};
</script>