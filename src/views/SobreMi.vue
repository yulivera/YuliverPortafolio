<template>
  <div class="SectionMi">
    <Presentacion></Presentacion>
    <Educacion></Educacion>
  </div>
</template>

<script>
import Presentacion from "@/components/sobremi/Presentacion.vue";
import Educacion from "@/components/sobremi/Educacion.vue";

export default {
  name: "SobreMi",
  components: {
    Presentacion,
    Educacion
  },
  data() {
    return {};
  },
};
</script>
