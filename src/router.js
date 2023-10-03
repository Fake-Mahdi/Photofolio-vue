import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from './views/HomeSection.vue';
import AboutSection from './views/AboutSection.vue';
import CantactSection from './views/CantactSection.vue';
import ServiceSection from './views/ServiceSection.vue';


Vue.use(Router);

const routes = [
    { path: '/', 
    name: 'HomeSection',
    component: HomeSection
 },
 { path: '/AboutSection', 
 name: 'AboutSection',
 component: AboutSection
},
{ path: '/CantactSection', 
name: 'CantactSection',
component: CantactSection
},
{ path: '/ServiceSection', 
name: 'ServiceSection',
component: ServiceSection
},


    // You can define more routes here for other components/pages.
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;