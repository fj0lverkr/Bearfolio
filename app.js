$(function(){

  // adjust navbar when document is scrolled
  $(document).scroll(
    function(){
      var $nav = $("#main-nav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
