<template>
  <section class="ftco-section habilidad-section" id="skills-section">
    <div class="container">
      <div class="row">
        <div v-for="(list, index) in habilidades" :key="index" class="col-md-6">
          <div class="progress-wrap">
            <h3>{{ list.nombre }}</h3>
            

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListaHabilidades",

  data() {
    return {};
  },
  computed: {
    ...mapState(["habilidades"]),
  },
};
</script>
