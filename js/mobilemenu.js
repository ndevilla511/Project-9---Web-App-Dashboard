var $navicon = $('.navicon');
var $body = $('body');
var $mainNav = $('#main-nav');
var $sideNav = $('#side-nav');
var $mainHeader = $('#main-header');

$navicon.click(function() {
    console.log("you are clicking the navicon");
    $body.toggleClass('move-over-body');
    $mainHeader.toggleClass('move-over-header');
    $mainNav.toggleClass('mobile-menu-on');
    $sideNav.toggleClass('mobile-menu-on');
    $navicon.toggleClass('exit-mobile');
});

$(window).resize(function() {
    if ($(window).width() > 1024 && $sideNav.hasClass('mobile-menu-on')) {
        $body.removeClass('move-over-body');
        $mainHeader.removeClass('move-over-header');
        $mainNav.removeClass('mobile-menu-on');
        $sideNav.removeClass('mobile-menu-on');
        $navicon.removeClass('exit-mobile');
    }
});