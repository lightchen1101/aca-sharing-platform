$(function(){
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
    $('.menu li').click(function() {
        $('.hamburger').removeClass('active');
        $('.menu').removeClass('active');
    });
    function checkScroll() {
        $('.js-scrollaction-target').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            // 檢查元素是否在視窗中
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                // 元素在視窗中，添加 active class
                $(this).addClass('js-scrollaction-active');
            } else {
                // 元素不在視窗中，移除 active class
                $(this).removeClass('js-scrollaction-active');
            }
        });
    }

    // 初始檢查
    checkScroll();

    let scrollTimeout;
    $(window).scroll(function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                checkScroll();
                scrollTimeout = null;
            }, 50); // 50ms 的延遲
        }
    });
    $('.l-footer_totop_btn').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 800,
            easing: 'easeInOutQuart'
        });
    });
})