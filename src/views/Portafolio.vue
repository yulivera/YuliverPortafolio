<template>
  <div class="SectionPortf">
    <banner titulo="Portafolio"></banner>
    <Proyectos></Proyectos>
  </div>
</template>

<script>
import Proyectos from "@/components/portafolio/Proyectos.vue";
import banner from "@/components/basicos/banner.vue";

export default {
  name: "Portafolio",
  components: {
    Proyectos,
    banner,
  },
  data() {
    return {};
  },
};
</script>
