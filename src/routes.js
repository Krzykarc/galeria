import Logo from './components/Logo.vue';
import Choices from './components/Choices.vue';
import Pierwszy from './components/Gallery1.vue';
import Drugi from './components/Gallery2.vue';
import Trzeci from './components/Gallery3.vue';
import Czwarty from './components/Gallery4.vue';
import Kontakt from './components/Kontakt.vue';
import Scroll from './components/Scroll.vue';
import Krolik from './components/Krolik.vue';
import SubGaleria1 from './components/Subgallery1.vue';
import SubGaleria4 from './components/Subgallery4.vue';


export default [
  {path:'/',component:Logo},
  {path:'/menu',component:Choices},
  {path:'/pierwszy',component:Pierwszy},
  {path:'/drugi',component:Drugi},
  {path:'/trzeci',component:Trzeci},
  {path:'/czwarty',component:Czwarty},
  {path:'/kontakt',component:Kontakt},
  {path:'/scroll',component:Scroll},
  {path:'/krolik',component:Krolik},
  {path:'/trzeci/:id',component:Trzeci},
  {path:'/pierwszy/:id',component:SubGaleria1},
  {path:'/czwarty/:id',component:SubGaleria4}
]
