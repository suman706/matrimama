$(window).load(function() {

  $("section img").click(function() {
    $(".lightbox").fadeIn(300);
    $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' title='" + $(this).attr("title") + "' />");
    $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
    $(".title").append("" + $(this).attr("alt") + "");
    $(".desc").append("" + $(this).attr("title") + "");
    $("html").css("overflow", "hidden");
    if ($(this).is(":last-child")) {
      $(".arrowr").css("display", "none");
      $(".arrowl").css("display", "block");
    } else if ($(this).is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut(300);
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });

  $(".arrowr").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var head = $(".lightbox img").attr("alt");
    var conte = $(".lightbox img").attr("title");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var search = $("section").find("img[alt$='" + head + "']");
    /*var search = $("section").find("img[title$='" + conte + "']");*/
    var newImage = search.next().attr("src");
    var heading = search.next().attr("alt");
    var content = search.next().attr("title");

    $(".lightbox img").attr("src", search.next());
    $(".lightbox img").attr("src", newImage);
    $(".lightbox img").attr("alt", heading);
    $(".lightbox img").attr("title", content);
    $(".filter").css("background-image", "url(" + newImage + ")");
    $(".title").text("" + heading + "");
    $(".desc").text("" + content + "");

    if (!search.next().is(":last-child")) {
      $(".arrowl").css("display", "block");
    } else {
      $(".arrowr").css("display", "none");
    }
  });

  $(".arrowl").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var head = $(".lightbox img").attr("alt");
    var conte = $(".lightbox img").attr("title");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var search1 = $("section").find("img[alt$='" + head + "']");
    var search2 = $("section").find("img[title$='" + conte + "']");
    var newImage = search.prev().attr("src");
    var heading = search.prev().attr("alt");
    var content = search.prev().attr("title");
    /*$(".lightbox img").attr("src", search.next());*/
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");
    $(".title").text("" + heading + "");
    $(".desc").text("" + content + "");

    if (!search.prev().is(":first-child")) {
      $(".arrowr").css("display", "block");
    } else {
      $(".arrowl").css("display", "none");
    }
  });

});