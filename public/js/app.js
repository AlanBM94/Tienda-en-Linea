$(document).ready(function() {
  // Sticky navigation
  $('.caracteristicas').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.nav').addClass('sticky');
        $('.nav__lista').css({ background: '#232121' });
      } else {
        $('.nav').removeClass('sticky');
        $('.nav').css({ opacity: '0.9' });
        $('.nav__lista').css({ background: 'transparent' });
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
