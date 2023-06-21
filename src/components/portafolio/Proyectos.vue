<template>
  <section class="ftco-section-3 portfolio-section">
    <div class="container">
      <div class="projects mt-4">
        <div class="row">
          <div
            v-for="(proyecto, index) of proyectos"
            :key="index"
            class="col-md-4 item"
            :class="proyecto.categoria"
          >
            <div
              class="project img d-flex justify-content-center align-items-center"
              :style="{ 'background-image': 'url(/images/' + proyecto.foto[0] + ')' }"
            >
              <div class="overlay"></div>
              <div class="text text-center p-4">
                <h3 @click="scrollTopp">
                  <router-link
                    :to="{
                      name: 'detalle',
                      params: { id: proyecto.id },
                    }"
                    >{{ proyecto.titulo }}</router-link
                  >
                </h3>
                <span>{{ proyecto.cliente }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Proyectos",

  data() {
    return {};
  },
  computed: {
    ...mapState(["proyectos"]),
  },
  mounted() {
    this.metodos();
  },
  methods: {
    scrollTopp() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    metodos() {
      $("ul.filters > li").click(function () {
        $("ul.filters > li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        // console.log('mi  selector: '+selector);

        if (selector == "all") {
          $(".item").show("3000");
        } else {
          $(".item")
            .not("." + selector)
            .hide("3000");
          $(".item")
            .filter("." + selector)
            .show("3000");
        }
      });
    },
  },
};
</script>
