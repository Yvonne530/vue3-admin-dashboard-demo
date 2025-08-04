import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 这里根据你的样式方案，导入全局样式文件，比如 Tailwind、reset.css 等
import './assets/styles/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
