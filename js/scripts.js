var w = $(window);

// Popup
var Popup = {
    block: $('.popup'),
    window: $('.popup__window'),
    container: $('.popup__container'),
    title: $('.popup__title'),
    close: $('.popup__close'),
    bg: $('.popup__bg'),
    speed: 500,
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        this.block.css('padding-top', scrollTop + 20).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
    }
}

$('.popupShow').click(function() {
    Popup.funShow();
});

Popup.close.click(function() {
    Popup.funHide();
});

Popup.bg.click(function() {
    Popup.funHide();
});






$('.phone').mask("+7 (999) 999-99-99");


$('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});


// Responsive

var nav = $('.nav__list'),
    sticks = $('button#sticks');


sticks.click(function() {
    $(this).toggleClass('close');
    nav.slideToggle(400);
});

w.resize(function() {
    if (w.width()>1040) {
        nav.removeAttr('style');
    }
});