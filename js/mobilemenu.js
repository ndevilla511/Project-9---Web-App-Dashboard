var $navicon = $('.navicon');
var $body = $('body');
var $mainNav = $('#main-nav');
var $sideNav = $('#side-nav');
var $mainHeader = $('#main-header')

$navicon.click(function() {
    console.log("you are clicking the navicon");
    $body.toggleClass('move-over');
    $mainHeader.toggleClass('move-over');
    $mainNav.toggleClass('mobile-menu-on');
    $sideNav.toggleClass('mobile-menu-on');
    $navicon.toggleClass('exit-mobile');
});

$(window).resize(function() {
    if ($(window).width() > 1024 && $sideNav.hasClass('mobile-menu-on')) {
        $body.removeClass('move-over');
        $mainNav.removeClass('mobile-menu-on');
        $sideNav.removeClass('mobile-menu-on');
        $navicon.removeClass('exit-mobile');
    }
});