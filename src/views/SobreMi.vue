<template>
  <div class="SectionMi">
    <Presentacion></Presentacion>
    <Educacion></Educacion>
    <Experiencia></Experiencia>
  </div>
</template>

<script>
import Presentacion from "@/components/sobremi/Presentacion.vue";
import Educacion from "@/components/sobremi/Educacion.vue";
import Experiencia from "@/components/sobremi/Experiencia.vue";

export default {
  name: "SobreMi",
  components: {
    Presentacion,
    Educacion,
    Experiencia,
  },
  data() {
    return {};
  },
};
</script>
