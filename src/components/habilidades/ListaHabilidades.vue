<template>
  <section class="ftco-section" id="skills-section">  
    <div class="container">
      <div class="row">
        <div v-for="(list,index) in habilidades" :key="index" class="col-md-6">
          <div class="progress-wrap ">
            <h3>{{list.nombre}}</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" 
                  :style="{'width': list.porcentaje +'%'}">
                  <span>{{list.porcentaje}}%</span>
              </div>
            </div>
          </div>
        </div>          
      </div>
    </div>
  </section>
</template>

<script>

import { mapState}  from 'vuex'

export default {

  name: 'ListaHabilidades',

  data () {
    return {

    }
  },
  computed: {
     ...mapState(['habilidades'])
  }
}
</script>
