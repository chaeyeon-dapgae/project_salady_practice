$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 120) {
      $(".hdrWrap").addClass("scroll");
    } else {
      $(".hdrWrap").removeClass("scroll");
    }
  });
  $(".menu-list li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var menuList = $(this).attr("data-alt");
    $("#" + menuList)
      .siblings()
      .removeClass("active");
    $("#" + menuList).addClass("active");
  });
  $(".faq .title").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(this).next().addClass("active");
  });
  // responsive
  $(".headerButton").click(function () {
    $(this).toggleClass("on");
    $(".lnb").toggleClass("on");
  });
  $(".lnb li").click(function () {
    $(".lnb, .headerButton").removeClass("on");
  });
  // menu
  $('.mnGroup article').click(function(){
    $(this).toggleClass('active')
    $('.text').removeClass('active')
  })
  $('.mnGroup article').mouseenter(function(){
    $(this).children('.text').addClass('active')
  })
  $('.mnGroup article').mouseleave(function(){
    $(this).children('.text').removeClass('active')
  })
  $('.menu-list li').click(function(){
    $('.mnGroup article').removeClass('active')
    $('.mnGroup .text').removeClass('active')
  })
  $('.btn-benefit li').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    var benefit = $(this).attr('data-benefit')
    $('#' + benefit).siblings().removeClass('active')
    $('#' + benefit).addClass('active')
  })
});
