$( "div.portfolio-piece" )
  .on( "mouseenter", function() {
    $(this).find(".portfolio-piece-mouseover").css("display", "flex");
  })
  .on( "mouseleave", function() {
    $(this).find(".portfolio-piece-mouseover").css("display", "none");
  });