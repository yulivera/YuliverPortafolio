<template>
  <div>
    <section class="section_gap">
      <div class="container">
        <div class="portfolio_details_inner">
          <div class="row">
            <div class="col-md-6">
              <div id="arrayFotos" class="carousel slide left_img" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    v-for="(fotot, index) of proyecto.foto"
                    :key="index"
                    data-target="#arrayFotos"
                    :data-slide-to="index"
                    :class="{ active: index === 0 }"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div
                    v-for="(fotot, index) of proyecto.foto"
                    :key="index"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                  >
                    <img class="d-block w-100" :src="'/images/' + fotot" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="portfolio_right_text">
                <h4>{{ proyecto.titulo }}</h4>
                <p>{{ proyecto.descripcion }}</p>
                <ul class="list">
                  <li>
                    <span>Sitio</span>:
                    <a :href="proyecto.siteWeb" target="_blank">
                      {{ proyecto.siteWeb }}</a
                    >
                  </li>
                  <li><span>Herramientas</span>: {{ proyecto.herramientas }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Proyecto",
  data() {
    return {
      proyecto: {},
    };
  },
  computed: {
    ...mapState(["proyectos"]),
  },
  mounted() {
    this.buscarproyect();
  },
  methods: {
    buscarproyect() {
      let indice = this.proyectos.findIndex((proye) => proye.id == this.$route.params.id);
      this.proyecto = this.proyectos[indice];

      $(".carousel").carousel({
        interval: 4000,
      });
    },
  },
};
</script>
