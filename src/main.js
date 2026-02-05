import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./assets/styles.css";

const app = createApp(App);

// Add plugins like router and store
app.use(router);
app.use(i18n);

// Expose i18n globally
window.$i18n = i18n.global;

// Mount the app to the DOM
app.mount('#app');

