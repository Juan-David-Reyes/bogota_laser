$(document).ready(function(){
    
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
          });
    }

    function sliderBlogSection(){
        let swiper = new Swiper(".col_slider_notas .sliderBlog", {
            slidesPerView:2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".col_slider_notas .swiper-button-next",
                prevEl: ".col_slider_notas .swiper-button-prev",
            },
        });
    }

    function sliderItems(){
        let swiper = new Swiper(".c_items_slider .swiperItems", {
            slidesPerView:5,
            spaceBetween: 20,
            navigation: {
                nextEl: ".c_items_slider .swiper-button-next",
                prevEl: ".c_items_slider .swiper-button-prev",
            },
        });
    }

    function sliderTestimonios(){
        var swiper = new Swiper(".swiperTestimonios", {
            slidesPerView:3,
            spaceBetween: 20,
            pagination: {
                el: '.c_testimonios .swiper-pagination',
                type: 'bullets',
              },
            navigation: {
                nextEl: ".c_testimonios .swiper-button-next",
                prevEl: ".c_testimonios .swiper-button-prev",
            },
        });
    }

    function searchBtn(){

        const inputSearch = document.querySelector('.search-icon .cont_search');

        $('.search-icon .fa-search').click(function(){
            $(inputSearch).toggleClass('active');
        });
       
    }
    
    
    /* EJECUCION DE FUNCIONES */

    navbarMobileMenu();
    dropdownMenu();
    searchBtn();

    sliderHomeHero();
    sliderBlogSection();
    sliderItems();
    sliderTestimonios();

    collapseFooter();
});
