<template>
  <div class="masproyec">
	 <section class="ftco-section-3 ">
    <div class="container">
      <div class="row">
        <div class="col-12 section-title text-center">
            <h2 class="subTitulo">Mas proyectos</h2>
        </div>
      </div> 
      </div>
      <div class="row">
        <div v-for="(tres,index) of tresProyec" :key="index" class="col-md-4"
          data-wow-delay="100ms" >
            <div class="container projectmas img d-flex justify-content-center
           align-items-center "            
            :style="{'background-image': 'url(/images/'+tres.foto[0]+')'}">
              <div class="overlay"></div>
              <div class="text text-center p-4">
                <h3>                                    
                  <a :href="'/detalle/'+tres.id">{{tres.titulo}}</a>
                </h3>
                <span>{{tres.cliente}}</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>

import { mapState}  from 'vuex'

export default {

  name: 'MasProyecto',

  data () {
    return {
    tresProyec : []
    }
  },
  computed: {
     ...mapState(['proyectos'])
  },
  mounted(){
     this.llenarArray3();
  },
  methods: {    
    llenarArray3(){      
       for (let i=0; i<this.proyectos.length; i++){
        var indice = this.proyectos[i];

        if(this.proyectos[i].id == this.$route.params.id ){        
        // console.log('proyecto es igual a router');
          }else if(this.tresProyec.length == 3){
        // console.log('array lleno',this.tresProyec.length);
          }else{
          this.tresProyec.push(this.proyectos[i]);
        }
      }
    }
  }
}
</script>
