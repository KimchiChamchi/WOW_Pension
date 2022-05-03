// 문서가 준비되면
$(document).ready(function () {
  // .menu-tab 개수만큼 each문을 실행 / e = 인덱스 (7개) / index = 자신의 인덱스의 개체 (해당 .menu-tab)
  $(".menu-tab").each((e, index) => {
    //e배열의 .menu-tab 클릭하면
    $(index).click(function () {
      //#TDInfoList li 전체를 숨김 처리
      $("#TDInfoList li").hide();
      // #TDInfoList li 의 제이쿼리객체(eq) e번째를 show로 보이게 함
      $("#TDInfoList li").eq(e).show();
    });
  });

  // $(".waterPlant").show();
  // $(".ijidang").hide();
  // $(".busodamak").hide();
  // $(".MountainHwan").hide();
  // $(".DaecheongDam").hide();
  // $(".Cheongnamdae").hide();
  // $(".JanggyeTouristSite").hide();

  //각 리스트들마다 누르면 해당 내용물은 보이고
  //나머지리스트들의 내용은 숨김
  // $(".menu-waterPlant").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".waterPlant").show();
  // });

  // $(".menu-ijidang").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".ijidang").show();
  // });

  // $(".menu-busodamak").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".busodamak").show();
  // });

  // $(".menu-MtnHwan").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".MountainHwan").show();
  // });

  // $(".menu-DaecheongDam").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".DaecheongDam").show();
  // });

  // $(".menu-Cheongnamdae").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".Cheongnamdae").show();
  // });

  // $(".menu-JanggyeTouristSite").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".JanggyeTouristSite").show();
  // });
});
