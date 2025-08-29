jQuery(document).ready(function($) {

/******************************
*	ACTIVATOR 
* пометить ссылку классом active-link и указать класс цели в атрибуте rel
* цель пометить классом active-item
* Необязательно:
* active-box - можно пометить контейнер, в котором находятся все цели, чтобы не влиять на другие цели
* active-bodyscroll для цели - чтобы отключать прокрутку страницы при активации
* active-alone для контейнера - чтобы активным мог быть только один элемент
* active-last для контейнера - чтобы последний активный элемент нельзя было деактивировать
******************************/

(function () {
  $(document).on('click', '.active-link', function (e) {
    e.preventDefault();
    var goal = $(this).attr('rel');
    var box = $(this).closest('.active-box');
    if (box.length == 0) box = $(document);
    var goalItem = $(box).find('.active-item.' + goal);
    var link = $(box).find('.active-link[rel=' + goal + ']');
    var dur = 400;
    console.log(goalItem);

    if ($(box).hasClass('active-last')) {
      if ($(box).find('.active-link.active').length == 1 && $(this).hasClass('active')) return;
    }

	/* изменение активности ссылки */
    if ($(link).hasClass('active')) {
			$(link).removeClass('active');
			if (goalItem.hasClass('active-bodyscroll')) $('body').removeClass('noscroll');
    } else {
      if ($(box).hasClass('active-alone')) $(box).find('.active-link').removeClass('active');
      if (!$(link).hasClass('active')) $(link).addClass('active');
			if ($('.active-item.' + goal).hasClass('active-bodyscroll')) $('body').addClass('noscroll');
    }

	/* изменение надписи ссылки */
    $(link).each(function () {
      var curLabel = $(this).text();
      var newLabel = $(this).data('alt-label');
      if (newLabel) {
        $(this).text(newLabel);
        $(this).data('alt-label', curLabel);
      }
    });

	/* изменение активности цели */
      if ($(link).hasClass('active')) {
        if ($(box).hasClass('active-alone')) $(box).find('.active-item:not(.' + goal + ')').removeClass('active');
        if (!goalItem.hasClass('active')) goalItem.addClass('active');
      } else {
      	goalItem.removeClass('active');
      }
  }); 
})(jQuery);

/*    Swiper slider
***************************************************************/

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.pagination__arrow--next',
    prevEl: '.pagination__arrow--prev',
  }
});












});