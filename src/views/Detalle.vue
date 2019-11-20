<template>
 <div class="SectionDetalle">
    <banner titulo="Detalle"></banner>
 	<Proyecto></Proyecto>
 	<MasProyecto></MasProyecto>
 </div>
</template>

<script>

import banner from '@/components/basicos/banner.vue'
import Proyecto from '@/components/detalle/Proyecto.vue'
import MasProyecto from '@/components/detalle/MasProyecto.vue'


export default {

 name: 'Detalle',
 components: {
    banner,
    Proyecto,
    MasProyecto

  },
  data () {
    return {

    }
  }
}
</script>
