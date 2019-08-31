$(document).ready(function() {
  // Sticky navigation
  $('.caracteristicas').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.nav').addClass('sticky');
        $('.nav__lista').css({ background: '#232121' });
        $('.nav__usuarioDropdown').css({ background: '#232121' });
        $('.nav__usuarioDropdown').css({
          height: '7rem',
          width: '12rem',
          padding: '1rem'
        });
      } else {
        $('.nav').removeClass('sticky');
        $('.nav').css({ opacity: '0.9' });
        $('.nav__lista').css({ background: 'transparent' });
        $('.nav__usuarioDropdown').css({ background: '' });
        $('.nav__usuarioDropdown').css({
          height: 'auto',
          width: 'auto',
          padding: '0'
        });
      }
    },
    {
      offset: '80px;'
    }
  );
  //Animaciones de las secciones
  $('.caracteristicas').waypoint(
    function(direction) {
      $('.caracteristicas__contenido').css({ opacity: '1' });
    },
    {
      offset: '10%'
    }
  );

  $('.testimonial').waypoint(
    function(direction) {
      $('.testimonial__contenedorGrande').css({ opacity: '1' });
    },
    {
      offset: '10%'
    }
  );
});
