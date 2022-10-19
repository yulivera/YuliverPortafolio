<template>
  <section class="ftco-section ftco-bread">
    <div class="container">
      <div class="row no-gutters slider-text justify-content-center align-items-center">
        <div class="col-md-8" v-vue-aos.once="{ animationClass: 'fadeIn animated' }">
          <p class="breadcrumbs">
            <span class="mr-2">
              <a @click="home">Inicio</a>
            </span>
            <span v-if="this.titulo === 'Detalle'" class="mr-2">
              <a @click="portafolios">Portafolio</a>
            </span>
            <span>{{ titulo }}</span>
          </p>
          <h1 class="bread">{{ titulo }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titulo: String,
  },
  name: "banner",

  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
      $("ul.filters-menu > li").removeClass("activee");
      $("#menu-home").addClass("activee");
    },
    portafolios() {
      this.$router.push("/portafolio");
      $("ul.filters-menu > li").removeClass("activee");
      $("#menu-portafolio").addClass("activee");
    },
  },
};
</script>
