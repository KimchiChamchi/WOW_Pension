$("#low").click(function () {
  let priceElem = document.getElementById("price-table");
  priceElem.src = "HH-image/price0.png";
});

$("#peak").click(function () {
  let priceElem = document.getElementById("price-table");
  priceElem.src = "HH-image/price1.png";
});

$(document).ready(function () {
  // 메뉴탭의 갯수만큼 each문을 실행 e = 인덱스 index = 자신의 인덱스의 개체
  $(".room-desc").each((e, index) => {
    console.log(index);
    //제이쿼리 객체로 감싼 index 클릭함수 추가
    $(".swiper.nav").click(function () {
      console.log(1);
      //#TDInfoList li의 전체를 숨김 처리
      $(".room-desc").hide();
      //제이쿼리 객체로 감싼 #TDInfoList li eq내부함수로 배열 접근 show로 보여줌
      $(".room-desc").eq(e).show();
    });
  });
});
