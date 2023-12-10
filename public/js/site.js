$( document ).ready(function() {
    // loop slider
    function sliderLoop() {
        $('.slider .text1').show();
        $('.slider .text1').animate({
            opacity: 1,
        }, 1000, 'linear', function() {
            $('.slider .text1').animate({
                opacity: 1,
            }, 3000, 'linear', function() {
                $('.slider .text1').animate({
                    opacity: 0,
                }, 1000, 'linear', function() {
                    $('.slider .text1').animate({
                        opacity: 0,
                    }, 1500, 'linear', function() {
                        $('.slider .text1').hide();
                        $('.slider .text2').show();
                        $('.slider .text2').animate({
                            opacity: 1,
                        }, 1000, 'linear', function() {
                            $('.slider .text2').animate({
                                opacity: 1,
                            }, 3000, 'linear', function() {
                                $('.slider .text2').animate({
                                    opacity: 0,
                                }, 1000, 'linear', function() {
                                    $('.slider .text2').animate({
                                        opacity: 0,
                                    }, 1500, 'linear', function() {
                                        $('.slider .text2').hide();
                                        $('.slider .text3').show();
                                        $('.slider .text3').animate({
                                            opacity: 1,
                                        }, 1000, 'linear', function() {
                                            $('.slider .text3').animate({
                                                opacity: 1,
                                            }, 3000, 'linear', function() {
                                                $('.slider .text3').animate({
                                                    opacity: 0,
                                                }, 1000, 'linear', function() {
                                                    $('.slider .text3').animate({
                                                        opacity: 0,
                                                    }, 1500, 'linear', function() {
                                                        $('.slider .text3').hide();
                                                        sliderLoop();
                                                    });
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
        });
    }
    sliderLoop();

    // menu left
    $('.main-header .container .menu-left li.first').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main-header .container .menu-left li.second').removeClass('active');
            $('.main-header .container .menu-left li.third').removeClass('active');
        }
        ///
        $('.menu-left-detail .cheesecake').show();
        $('.menu-left-detail .dessert').hide();
        $('.menu-left-detail .accessoire').hide();
    });
    $('.main-header .container .menu-left li.second').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main-header .container .menu-left li.first').removeClass('active');
            $('.main-header .container .menu-left li.third').removeClass('active');
        }
        ///
        $('.menu-left-detail .cheesecake').hide();
        $('.menu-left-detail .dessert').show();
        $('.menu-left-detail .accessoire').hide();
    });
    $('.main-header .container .menu-left li.third').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main-header .container .menu-left li.first').removeClass('active');
            $('.main-header .container .menu-left li.second').removeClass('active');
        }
        ///
        $('.menu-left-detail .cheesecake').hide();
        $('.menu-left-detail .dessert').hide();
        $('.menu-left-detail .accessoire').show();
    });

    // Menu connexion
    $('.main-header .container .menu-right li.account').mouseenter(function() {
        $('.main-header .container .menu-connect').show();
    });
    $('.main-header .container .menu-right li.account').mouseleave(function() {
        if ($('.main-header .container .menu-connect').is(':hover')) {
            $('.main-header .container .menu-connect').show();
        } else {
            $('.main-header .container .menu-connect').hide();
        }
    });
    $('.main-header .container .menu-connect').mouseleave(function() {
        $(this).hide();
    });
});