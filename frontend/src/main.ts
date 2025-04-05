import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const main = async () => {
if (import.meta.env.VITE_APP_MOCK_MODE) {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }
  app.mount('#app');
};



main();
