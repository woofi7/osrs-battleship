import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueCsvImportPlugin } from "vue-csv-import";

library.add(faInfo);

createApp(App)
  .use(VueCsvImportPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
