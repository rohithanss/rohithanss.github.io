import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import PrimeVue from "primevue/config";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Image from "primevue/image";
import AOS from "aos";
AOS.init();
// import "primevue/resources/themes/lara-dark-teal/theme.css";
// import "primevue/resources/themes/tailwind-light/theme.css";
// import "primevue/resources/themes/nova-alt/theme.css";
// import "primevue/resources/themes/luna-amber/theme.css";
// import "primevue/resources/themes/rhea/theme.css";
import "primevue/resources/themes/md-dark-deeppurple/theme.css";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
const app = createApp(App);

app.component("Image", Image);
// app.component("GithubCalendar", GithubCalendar);
app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.mount("#app");
app.use(PrimeVue);
