//= require jquery
//= require materialize-sprockets
//= require moment/min/moment.min
//= require cornerstone-event-components/dist/commons
//= require cornerstone-event-components/dist/forms.component

$(".button-collapse").sideNav();

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

  // responsive slides
  $('.rslides').responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 2500,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    //nav: false,             // Boolean: Show navigation, true or false
    //random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: true,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    //prevText: "Previous",   // String: Text for the "previous" button
    //nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    //navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    //manualControls: "",     // Selector: Declare custom pager navigation
    //namespace: "rslides",   // String: Change the default namespace used
    //before: function(){},   // Function: Before callback
    //after: function(){}     // Function: After callback
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

// rslides pause on mouseover
$('rslides').mouseover(function(){
  $('rslides').slider('pause');
})

$('rslides').mouseout(function(){
  // Start slider
  $('rslides').slider('start');
})



