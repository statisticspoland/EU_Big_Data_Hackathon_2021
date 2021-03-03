var accessibilitySwitcher = function(language) {

  var contrastIdentifiers = ['default', 'high'];

  function setActiveContrast(contrast) {
    _.each(contrastIdentifiers, function(id) {
      $('body').removeClass('contrast-' + id);
      $('h3').removeClass('contrast-' + id);
      $('g').removeClass('contrast-' + id);
      $('a').removeClass('contrast-' + id);
      $('h1').removeClass('contrast-' + id);
      $('h2').removeClass('contrast-' + id);
      $('th').removeClass('contrast-' + id);

      $('.panel').removeClass('contrast-' + id);
      $('.panel-heading').removeClass('contrast-' + id);
      $('.dropdown-header').removeClass('contrast-' + id);
      $('span').removeClass('contrast-' + id);

      $('td').removeClass('contrast-' + id);
      $('#filtry').removeClass('contrast-' + id);
      $('.custom-toggler .navbar-toggler-icon').removeClass('contrast-' + id);
      $('.ct-label').removeClass('contrast-' + id);
      $('a').removeClass('contrast-' + id);
      $('.nav-link').removeClass('contrast-' + id);
      setTimeout(function() {
				$('#cookie-toolkit.visible').removeClass('contrast-' + id);
        $('#cookie-toolkit-accept').removeClass('contrast-' + id);
			}, 600);

    });
    $('body').addClass('contrast-' + contrast);
    $('h3').addClass('contrast-' + contrast);
    $('g').addClass('contrast-' + contrast);
    $('a').addClass('contrast-' + contrast);
    $('h1').addClass('contrast-' + contrast);
    $('h2').addClass('contrast-' + contrast);
    $('th').addClass('contrast-' + contrast);

    $('.panel').addClass('contrast-' + contrast);
    $('.panel-heading').addClass('contrast-' + contrast);
    $('.dropdown-header').addClass('contrast-' + contrast);
    $('span').addClass('contrast-' + contrast);

    $('td').addClass('contrast-' + contrast);
    $('#filtry').addClass('contrast-' + contrast);
    $('.custom-toggler .navbar-toggler-icon').addClass('contrast-' + contrast);
    $('.ct-label').addClass('contrast-' + contrast);
    $('a').addClass('contrast-' + contrast);
    $('.nav-link').addClass('contrast-' + contrast);
    setTimeout(function() {
        $('#cookie-toolkit.visible').addClass('contrast-' + contrast);
        $('#cookie-toolkit-accept').addClass('contrast-' + contrast);
    }, 600);

    createCookie("contrast", contrast, 365);
  }

  function getActiveContrast() {
    var contrast = _.filter(contrastIdentifiers, function(id) {
      return $('body').hasClass('contrast-' + id);
    });

    return contrast ? contrast : contrastIdentifiers[0];
  }

  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  window.onload = function(e) {
    var cookie = readCookie("contrast");
    var contrast = cookie ? cookie : contrastIdentifiers[0];
    setActiveContrast(contrast);
    imageFix(contrast);
  }

  $(document).on('click','body *',function(e){
    var cookie = readCookie("contrast");
    var contrast = cookie ? cookie : contrastIdentifiers[0];
    setActiveContrast(contrast);
    imageFix(contrast);
  });

  window.onunload = function(e) {
    var contrast = getActiveContrast();
    createCookie("contrast", contrast, 365);
  }

  var cookie = readCookie("contrast");
  var contrast = cookie ? cookie : contrastIdentifiers[0];
  setActiveContrast(contrast);

  ////////////////////////////////////////////////////////////////////////////////////


    _.each(contrastIdentifiers, function(contrast) {
      $('.kontrast').append($('<i />').attr({
        'href': 'javascript:void(0)',
        'data-contrast': contrast,
        'class': 'fa fa-adn '+contrast
      }).click(function() {
        setActiveContrast($(this).data('contrast'));
        imageFix(contrast);
      }));
    });

  function imageFix(contrast) {
  if (contrast == 'high') {
    _.each($('img:not([src*=high-contrast])'), function(goalImage){
      $(goalImage).attr('src', $(goalImage).attr('src').replace('img/', 'img/high-contrast/'));
    })
  } else {
    // Remove high-contrast
    _.each($('img[src*=high-contrast]'), function(goalImage){
      $(goalImage).attr('src', $(goalImage).attr('src').replace( '/high-contrast/', '/'));
    })
  }
};

};
