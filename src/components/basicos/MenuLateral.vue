<template> 
	<div id="colorlib-page">
    <a @click="burgerMenu" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>    
		<aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">      
			<!-- logo -->
			<h1 id="colorlib-logo">
				<a href="/">
				<span class="img" 
				style="background-image: url(/images/ilus2.gif);">	
				</span>Yuliver B.
			    </a>
			</h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul class="filters-menu">		

					<li id="menu-home" class="activee"><router-link to="/" >Inicio</router-link></li>

					<li><router-link to="/sobreMi" >Sobre Mi</router-link></li>

      		<li id="menu-portafolio" ><router-link to="/portafolio">Portafolio</router-link></li>

      		<li><router-link to="/habilidades" >Habilidades</router-link></li>

      		<li><router-link to="/contacto">Contacto</router-link></li>
				</ul>      
			</nav>
		</aside> 
		<div id="colorlib-main">
		<router-view/>
    <Footer1></Footer1>      
		</div>	 	
  </div>
</template>

<script>

import Footer1 from '@/components/basicos/Footer1.vue'


	export default {

	name: 'MenuLateral',	
       data(){
       	return{
       		
       	}
       },
       components: {
       Footer1
       },
       mounted(){
         this.mobileMenuOutsideClick();
         this.activar2();
       },
       methods:{
        
       	activar2(){
          $('ul.filters-menu > li').on('click', function(e){
        	e.preventDefault();
          
     			$('ul.filters-menu > li').removeClass('activee');
        	$(this).addClass('activee');       
           $('html, body').animate({scrollTop:0},'slow');
          });      
       	},
       	burgerMenu(){
       		
      			var $this = $(this);
      			if ($('body').hasClass('offcanvas')) {
      				$this.removeClass('active');
      				$('body').removeClass('offcanvas');	
      			} else {
      				$this.addClass('active');
      				$('body').addClass('offcanvas');	
      			}
       	},
       	mobileMenuOutsideClick(){

       	$(document).click(function (e) {
	    	var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    	if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
	    	}            	
	     }
		  });
  		$(window).scroll(function(){
  			if ( $('body').hasClass('offcanvas') ) {
      			$('body').removeClass('offcanvas');
      			$('.js-colorlib-nav-toggle').removeClass('active');
  	    	}
  		    });
      }
    }
	}
</script>
