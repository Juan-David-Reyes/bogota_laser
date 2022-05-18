$(document).ready(function(){

    function colorMain(){

        const s_medios_pago = null ;
        
        if($('')){

        }
    }
    
    function dropdownMenu(){

        const linkMenu = document.querySelectorAll('.header_nav nav > ul > li > a');
        const subMenu = document.querySelectorAll('.header_nav nav > ul > li .submenu');
        
        $(linkMenu).click(function(){
            if($(this).hasClass('active')){
                $(linkMenu).removeClass('active');
                $(subMenu).slideUp();
            }else{
                $(linkMenu).removeClass('active');
                $(subMenu).slideUp();
                $(this).toggleClass('active');
                $(this).next().slideToggle();
            }
        });

        $(window).scroll(function() {
            if($(subMenu).is(':visible')){
                $(linkMenu).removeClass('active');
                $(subMenu).slideUp();
            }
        });
       
        $('main').click(function(){
            $(linkMenu).removeClass('active');
            $(subMenu).slideUp();
        })
        
    }

    function navbarMobileMenu(){

        const buttonMobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.querySelector('.closeX span');
        const containerMobileMenu = document.querySelector('header .header_nav');
        const body = document.querySelector('body');
    
        $(buttonMobileMenu).click(function(){
            $(containerMobileMenu).css('box-shadow', '-6px 4px 16px rgba(0, 0, 0, 0.4)')
            $(body).css('overflow', 'hidden')
            $('header .header_nav').toggleClass('active')
        });

        $(closeMobileMenu).click(function(){
            $(containerMobileMenu).css('box-shadow', '-6px 4px 16px #00000000')
            $(body).css('overflow', 'scroll')
            $('header .header_nav').removeClass('active')
        });

    }

    function collapseFooter(){

        if (screen.width <= 768) {
            
            const h4 = document.querySelectorAll('footer h4');
            const ulFooter = document.querySelectorAll('footer .s_footer ul');
    
            $(h4).click(function(){

                if($(this).next().is(':visible')){
                    $(this).next('ul').slideUp();
                    $(this).removeClass('rotate_icon');
                }else{
                    $(h4).next('ul').slideUp();
                    $(h4).removeClass('rotate_icon');
    
                    $(this).next('ul').slideToggle();
                    $(this).toggleClass('rotate_icon');
                }
            });
        }



    }

    function sliderHomeHero(){
        let swiper = new Swiper(".sliderHero", {
            pagination: {
              el: ".sliderHero .swiper-pagination",
              clickable: true,
              type: 'bullets',
            },
            parallax: true,
            lazy: true,
          });
    }

    function sliderBlogSection(){
        let swiper = new Swiper(".col_slider_notas .sliderBlog", {
            slidesPerView:1,
            spaceBetween: 20,
            navigation: {
                nextEl: ".col_slider_notas .swiper-button-next",
                prevEl: ".col_slider_notas .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                600: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                // when window width is >= 640px
                1050: {
                  slidesPerView: 2,
                  spaceBetween: 20
                }
              }
        });
    }

    function sliderItems(){
        let swiper = new Swiper(".c_items_slider .swiperItems", {
            slidesPerView:1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".c_items_slider .swiper-button-next",
                prevEl: ".c_items_slider .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                370: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                600: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                900: {
                  slidesPerView: 5,
                  spaceBetween: 30
                }
              }
        });
    }

    function sliderTestimonios(){
        let swiper = new Swiper(".swiperTestimonios", {
            slidesPerView:1,
            spaceBetween: 10,
            pagination: {
                el: '.c_testimonios .swiper-pagination',
                type: 'bullets',
              },
            navigation: {
                nextEl: ".c_testimonios .swiper-button-next",
                prevEl: ".c_testimonios .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                600: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                // when window width is >= 640px
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
            }
        });
    }

    function sliderEquipoMedico(){
        let swiper = new Swiper(".slider_equipo_med .swiperEquipoMed", {
            slidesPerView:1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider_equipo_med .swiper-button-next",
                prevEl: ".slider_equipo_med .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
            }
            
        });
    }
    function sliderNuestroEquipo(){
        let swiper = new Swiper(".swiperEquipo", {
            slidesPerView:1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".slider_n_equipo .swiper-button-next",
                prevEl: ".slider_n_equipo .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
            }
            
        });
    }

    function sliderVideos(){
        let swiper = new Swiper(".swiperVideos", {
            slidesPerView:1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".c_sliderVideos .swiper-button-next",
                prevEl: ".c_sliderVideos .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                500: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 640px

            }
            
        });
    }

    function searchBtn(){

        const btnSerachMobile = document.getElementById('btnSerachMobile');

        const inputSearch = document.querySelector('.search-icon .cont_search');
        const inputSearchMobile = document.querySelector('.cont_search_mobile');


        /* DESKTOP */

        $('.search-icon .fa-search').click(function(){
            $(inputSearch).toggleClass('active');
        });

        /* MOBILE */

        /* $(window).scroll(function() {
            if($(inputSearchMobile).is(':visible')){
                $(inputSearchMobile).slideUp();
            }
        }); */

        $(btnSerachMobile).click(function(){
            $(inputSearchMobile).slideToggle();
        });


       
    }

    function sectionOperarseBL(){

        const linkTabPri = document.querySelectorAll('.link_tab');
        const linkTabSec = document.querySelectorAll('.link_tab_sec');

        $(linkTabPri).click(function(){
            $(linkTabPri).removeClass('active')
            $(this).toggleClass('active')
        });
        $(linkTabSec).click(function(){
            $(linkTabSec).removeClass('active')
            $(this).toggleClass('active')
        });
    }

    function mMobileOperarseBL(){
        const btnMenuOperarseBL = document.querySelector('.mMobile_tab_sec');
        const MenuOperarseBL = document.querySelector('.menu_tab_sec');

        $(btnMenuOperarseBL).click(function(){
            $(MenuOperarseBL).toggleClass('active')
        })

    }

    function preguntasFrecuentes(){

        const pregunta = document.querySelectorAll('.c_tit_pregunta')
        const respuesta = document.querySelectorAll('.item_respuesta_f')

        $(pregunta).click(function(){

            
            if($(this).hasClass('active')){
                $(this).next(respuesta).slideUp();
                $(this).removeClass('active');
            }else{
                $(respuesta).slideUp();
                $(pregunta).removeClass('active');
                $(this).toggleClass('active');
                $(this).next(respuesta).slideToggle();
            }

        });
    }


    function ajusteFooter(){

        const seccionMediosPago = document.querySelector('.s_medios_pago');

        if(!$(seccionMediosPago).is(':visible')){
            $('footer').css('padding', '40px 0 0')
        }
    }


    
    /* EJECUCION DE FUNCIONES */

    navbarMobileMenu();
    dropdownMenu();
    searchBtn();
    colorMain();

    sliderHomeHero();
    sliderBlogSection();
    sliderItems();
    sliderTestimonios();
    sectionOperarseBL();
    mMobileOperarseBL();
    sliderEquipoMedico();
    sliderNuestroEquipo()
    sliderVideos();
    preguntasFrecuentes()

    collapseFooter();
    ajusteFooter();
});
