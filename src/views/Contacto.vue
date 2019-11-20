<template>
	<div class="SectionContac">
		<banner titulo="Contacto"></banner>
	  <MyContacto></MyContacto>   
	</div> 
</template>

<script>

import banner from '@/components/basicos/banner.vue'
import MyContacto from '@/components/contacto/MyContacto.vue'


export default {

  name: 'Contacto',
  components: {
    banner,
    MyContacto
    
  },
  data () {
    return {

    }
  }
}
</script>
