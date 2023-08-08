import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown);

// Crea l'app utilizzando createApp
const app = createApp(App);

// Registra il componente FontAwesomeIcon
app.component("font-awesome-icon", FontAwesomeIcon);

// Monta l'applicazione
app.mount("#app");
