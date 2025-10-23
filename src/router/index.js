// Importerar nödvändiga funktioner från Vue Router
import { createRouter, createWebHashHistory } from 'vue-router'

// Importera komponenter som motsvarar varje vy/sida
import HomeView from '../views/HomeView.vue'                // Startsida
import ProjectsView from '../views/ProjectsView.vue'        // Projekt-sida
import CertificationsView from '@/views/CertificationsView.vue' // Certifikat-sida

import ContactsView from '@/views/ContactView.vue' // Kontakt-sida


// Definierar de olika rutterna i applikationen
const routes = [
  {
    path: '/',                        // URL-vägen för startsidan
    name: 'home',                     // Namn på rutten (kan användas för navigation)
    component: HomeView               // Komponent som ska visas
  },
  {
    path: '/projects',                // URL-vägen för projektsidan
    name: 'projects',                 // Namn på rutten
    component: ProjectsView           // Komponent som ska visas
  },
  {
  path: '/certifications',                // URL-vägen för projektsidan
  name: 'certifications',                 // Namn på rutten
  component: CertificationsView           // Komponent som ska visas
},
 
   {
 
       path: '/contacts',         // URL-vägen för certifikat-sidan
       name: 'contacts',          // Namn på rutten
       component: ContactsView     // Komponent som ska visas
 
     }
]

// Skapar en router-instans och använd hash-baserad navigation
const router = createRouter({
  history: createWebHashHistory(),   // Använd hash-baserad historik (ex. #/projects)
  routes                              // Tilldela rutterna vi definierade ovan
})

// Exportera router-instansen så att den kan användas i hela appen (t.ex. i main.js)
export default router
