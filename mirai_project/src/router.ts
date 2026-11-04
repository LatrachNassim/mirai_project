// 1. Les outils de vue-router
import { createRouter, createWebHistory } from 'vue-router'

// 2. Tes pages
import ChapterList from './views/ChapterList.vue'
import ChapterPage from './views/ChapterPage.vue'

// 3. La liste des routes : un tableau d'objets
const routes = [
  { path: '/', component: ChapterList },
  { path: '/chapitre/:id', component: ChapterPage },
]

// 4. Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// 5. Le rendre disponible pour les autres fichiers
export default router