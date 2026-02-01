<template>
    <div class="form-dialog" v-if="isVisible">
        <div class="form-content">
        <button class="close-button" @click="$emit('close')">×</button>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
    
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
    
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" required></textarea>
    
            <button type="submit">Send</button>
        </form>
        </div>
    </div>
</template>
<script>
export default {
  name: "FormDialog",
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      formData: { name: "", email: "", message: "" },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted:", this.formData);
      this.$emit("submit", this.formData);
      this.formData = { name: "", email: "", message: "" };
    },
  },
};
</script>