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
    
    /* EJECUCION DE FUNCIONES */

    navbarMobileMenu()
    dropdownMenu();
});
