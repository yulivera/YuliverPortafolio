<template>
  <section class="ftco-section-no-padding bg-light">
    <div class="hero-wrap">
      <div class="overlay"></div>

      <div class="d-flex js-fullheight align-items-center">
        <div
          class="author-image text img js-fullheight"
          style="background-image: url(images/pre3.jpeg)"
        ></div>
        <!-- info user autor -->
        <div class="author-info text p-3 p-md-5">
          <div class="desc">
            <span class="subheading">Hola, mi nombre es: </span>
            <h1 class="big-letter">Yuliver</h1>
            <h1 class="mb-4">
              <!--<span>Yuliver</span>-->
              Yuliver
            </h1>
            <div class="contact-info mb-5 mt-5" data-wow-delay="700ms">
              <a href="#">
                <font-awesome-icon icon="map-marker" />
                Venezuela-Barquisimeto</a
              >
            </div>

            <!-- icon social -->
            <ul
              class="ftco-social mt-2"
              v-vue-aos.once="{ animationClass: 'fadeIn animated' }"
            >
              <li class="">
                <a href="http://www.linkedin.com/in/yuliver-bracho" target="_blank">
                  <span>
                    <img src="/images/social/in20.png" /> </span
                ></a>
              </li>
              <li>
                <a href="https://www.facebook.com/andreinajimen" target="_blank">
                  <span>
                    <img src="/images/social/fa20.png" /> </span
                ></a>
              </li>
              <li>
                <a href="https://github.com/yulivera" target="_blank">
                  <span>
                    <img src="/images/social/git20.png" /> </span
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// author-info text p-3
export default {
  name: "Presentacion2",

  data() {
    return {};
  },
  mounted() {
    //  $('.carousel').carousel({
    //    interval: 4000
    //  })

    var fullHeight = function () {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    };
    fullHeight();
  },
};
</script>
