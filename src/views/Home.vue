<template>
  <div class="home">
    <Presentacion2></Presentacion2>
    
    <Footer1></Footer1>
  </div>
</template>

<script>

import Presentacion2 from '@/components/inicio/Presentacion2.vue'
import Footer1 from '@/components/basicos/Footer1.vue'


export default {
  name: 'home',
  components: {
    Presentacion2,
    Footer1
   
  }
}
</script>
