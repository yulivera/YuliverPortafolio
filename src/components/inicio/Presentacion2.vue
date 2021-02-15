<template>  
	<section class="ftco-section-no-padding bg-light">
    <div class="hero-wrap">
      <div class="overlay"></div>   
			<div class="d-flex ">						
			   <div id="demo" class="carousel slide text author-image " data-ride="carousel">          
	    		<ol class="carousel-indicators">
	    			<li data-target="#demo" data-slide-to="0" class="active"></li>
	    			<li data-target="#demo" data-slide-to="1"></li>
	    		</ol>
	    		<div class="carousel-inner" role="listbox">
	    			<div class="carousel-item active ">
	    				<img  class=""  src="/images/pre3.jpeg">
	    			</div>
	    			<div class="carousel-item">
	    				<img class="" src="/images/code2.jpg">
	    			</div>	    			
	    		</div>			    				    	
					</div>         
					<div class="author-info text mb-5 mt-5 p-3 p-md-5">
						<div class="desc">
							<span class="subheading">Hola! Soy</span>
							<h1 class="big-letter">Yuliver</h1>
							<h1 class="mb-5">
								Yuliver B.	 
							</h1>														 
							<div class="contact-info mb-5" data-wow-delay="700ms">
                <a href="#">
                	<font-awesome-icon icon="envelope" />
                	 yuliverjimenez@gmail.com
                </a>
                <a href="#">                         
                	<font-awesome-icon icon="map-marker" />
                Barquisimeto-Venezuela</a>
              </div>                        
              <ul class="ftco-social mt-2">
                <li class="">
                  <a href="http://www.linkedin.com/in/yuliver-bracho">
                    <span>                    
                    <img src="/images/social/in20.png">
                  </span></a>                   
                  </li>
                 <li><a href="https://www.facebook.com/andreinajimen">
                  <span>
                    <img src="/images/social/fa20.png">
                  </span></a></li>
                 <li><a href="https://github.com/yulivera">
                  <span>
                    <img src="/images/social/git20.png">
                  </span></a></li>
               </ul>         
                <img class="firma" src="images/fuente.png">
              </div>
              <!-- <a class="button type1" href="https://drive.google.com/file/d/1PLr3-Enea-C86BJXRPCRQlWEEhdD8Ahq/view?usp=sharing">Descargar CV</a> -->
	           </div>
					 </div>
				</div>
			</section>
</template>

<script>
export default {

  name: 'Presentacion2',

  data () {
    return {

    }
  },
  mounted() {
     $('.carousel').carousel({
       interval: 4000
     })
  } 
}
</script>
