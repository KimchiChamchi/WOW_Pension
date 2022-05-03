//문서와 페이지가 준비되면
$(window).ready(function () {
  //각 아이디에 해당경로의 html을 불러옴
  $("#header").load("../include/headline.html");
  $("#roomSwiper").load("../include/room1.html");
  $("#footer").load("../include/footer.html");
});

// ---------------------------------------------
// .swiper-nav p를 each로 반복 (배열(e)은 5개,
// index는 각 방들로 이동하는 버튼역할의 p태그들)
$(".swiper-nav p").each((e, index) => {
  // 해당 p태그 (예 "소나무"방) 클릭시
  $(index).click(function () {
    // #roomSwiper에 해당방 room html을 불러옴
    // e+1은 html네이밍은 1부터, e배열의 인덱스는 0부터 시작하여
    // 0번째 배열은 room1을 불러오게 하기 위해
    $("#roomSwiper").load("../include/room" + (e + 1) + ".html");
  });
});

// // .swiper-nav의 자식요소의 eq번째 요소 클릭시 html 불러오는 함수
// // 반복이 많아서 축약
// $(".swiper-nav")
//   .children()
//   .eq(0)
//   .click(function () {
//     $("#roomSwiper").load("../include/room1.html");
//   });
// $(".swiper-nav")
//   .children()
//   .eq(1)
//   .click(function () {
//     $("#roomSwiper").load("../include/room2.html");
//   });
// $(".swiper-nav")
//   .children()
//   .eq(2)
//   .click(function () {
//     $("#roomSwiper").load("../include/room3.html");
//   });
// $(".swiper-nav")
//   .children()
//   .eq(3)
//   .click(function () {
//     $("#roomSwiper").load("../include/room4.html");
//   });
// $(".swiper-nav")
//   .children()
//   .eq(4)
//   .click(function () {
//     $("#roomSwiper").load("../include/room5.html");
//   });
