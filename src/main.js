import { createApp } from 'vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/github-gist.css'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(VueHighlightJS)
app.mount('#app')
