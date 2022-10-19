<template>
  <div class="SectionHabili">
    <banner titulo="Habilidades"></banner>
    <ListaHabilidades></ListaHabilidades>
  </div>
</template>

<script>
import banner from "@/components/basicos/banner.vue";
import ListaHabilidades from "@/components/habilidades/ListaHabilidades.vue";

export default {
  name: "Habilidades",
  components: {
    banner,
    ListaHabilidades,
  },
  data() {
    return {};
  },
};
</script>
