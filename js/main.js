// $(".overlay").hide();

$(".menu-btn").click(function(e){
  $(".menu-btn .fas").toggleClass("fa-bars fa-times-circle");
  $("nav ul").toggle();
  e.preventDefault();
})

$(".choose-locations, locations a").click(function(e){
  $(".overlay").toggle();
  e.preventDefault();
})

// $(".locations a").click(function(e){
//   $(".overlay").toggle();
//   e.preventDefault();
// })
