import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = createApp(App)
console.log(app)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
