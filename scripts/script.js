(function($) {
	
  // List group links
  
  $("a").attr("rel", "nofollow");
  $("code a").removeAttr("rel", "nofollow");
  // $(".list-group-item > a").attr("target", "_blank");
  // $("ul").addClass("list-group");
  // $("ol").addClass("list-group");
  // $("li").addClass("list-group-item"); 

//   $(".list-group-item > a").focus(function() {
//     $(this).parent().addClass("focused");
//   })
  
//   $(".list-group-item > a").blur(function() {
//     $(this).parent().removeClass("focused");
//   })

	$('code').each(function(){
    var text=$(this).html().replace(/</g,'&lt;');
    var text=text.replace(/>/g,'&gt;');
    $(this).html(text);
	}); 
  
  // Annotations
  
  $(document).ready(function() {
    $("#annotations01").click(function() {
      $(".btn-annot").toggleClass("btn-annot-on");
      $(".annotations").toggleClass("annotations-on");
      $(".btn-annot-outline").toggleClass("btn-annot-outline-on");
      $(".modal-annot").toggleClass("modal-annot-on");
      $(".body").toggleClass("body-annot");
    });
  });
  
  $(function(){
      window.prettyPrint && prettyPrint()   
    });
  
  if (matchMedia) {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addListener(queryChange);
  queryChange(mediaQuery);
}

function queryChange(mediaQuery) {
  if (mediaQuery.matches) {
    //small
    
    var rows = document.getElementsByClassName("trow")
    for (var i = 0; i < rows.length; i++){
      rows[i].removeAttribute("role");
    }

  } else {
    //medium
   
  }

}
  
})(jQuery);
