//= require jquery
//= require materialize-sprockets
//= require moment/min/moment.min
//= require cornerstone-event-components/dist/commons
//= require cornerstone-event-components/dist/forms.component

$(".button-collapse").sideNav();

$(".close-icon").on("click", function(){
  $(".button-collapse").sideNav("hide");
});

$(document).ready(function(){

  var ifExists = document.querySelector('#contact form')
  if (ifExists !== null) {
    var contactForm = document.querySelector('#contact form')
    contactForm.addEventListener('saved', function(e){
      contactForm.reset();
    })
  }

  // parallax container
  $('.parallax').parallax();
  // init text area
  $('input#input_text, textarea#textarea1').characterCounter();
  // collapsible popout - current clients
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

// jQuery Scroll Animations
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        if(target.selector == '#team')
          $('html, body').animate({
            scrollTop: $(target).offset().top - 400
          }, 500);
        else
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 500);
    }
});
