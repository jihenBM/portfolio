import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import vClickOutside from "click-outside-vue3"
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import router from './router'
import { faBars, faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
library.add(faBars,faLinkedinIn,faCircle,faXmark)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(vClickOutside);
app.use(createPinia())
app.use(router)

app.mount('#app')
