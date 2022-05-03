//각 위치마다 좌표 입력
var Pension = {
  lat: 36.373479893156436,
  lng: 127.55564559530826,
};
var WaterPlant = {
  lat: 36.390715528497786,
  lng: 127.55333494422845,
};
var OkcheonIjidang = {
  lat: 36.329501223993454,
  lng: 127.55583668204352,
};
var Busodamak = {
  lat: 36.3525462370134,
  lng: 127.56306911387192,
};
var MountainHwan = {
  lat: 36.36347457861638,
  lng: 127.54198237996678,
};
var DaecheongDam = {
  lat: 36.477499338521525,
  lng: 127.48083189812229,
};
var Cheongnamdae = {
  lat: 36.461811696802215,
  lng: 127.48918741651077,
};
var JanggyeTouristSite = {
  lat: 36.37638430811881,
  lng: 127.63596717958818,
};

//각 위치 변수들 배열에 넣음
let pointArr = [
  WaterPlant,
  OkcheonIjidang,
  Busodamak,
  MountainHwan,
  DaecheongDam,
  Cheongnamdae,
  JanggyeTouristSite,
];

var map;
// 아이디 map에 지도 생성 / 페이지 처음 진입시 첫번째 관광지인 수생식물학습원 표시
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: WaterPlant,
  });
  //각 위치마다 마커 생성 / 마커에 마우스 커서 올리면 title 띄움
  var PensionMarker = new google.maps.Marker({
    position: Pension,
    map: map,
    title: "와우펜션",
  });
  var WPMarker = new google.maps.Marker({
    position: WaterPlant,
    map: map,
    title: "수생식물학습원",
  });
  var OIMarker = new google.maps.Marker({
    position: OkcheonIjidang,
    map: map,
    title: "옥천 이지당",
  });
  var BSDAMarker = new google.maps.Marker({
    position: Busodamak,
    map: map,
    title: "부소담악(추소정)",
  });
  var MtHMarker = new google.maps.Marker({
    position: MountainHwan,
    map: map,
    title: "고리산(환산)",
  });
  var DHDamMarker = new google.maps.Marker({
    position: DaecheongDam,
    map: map,
    title: "대청댐",
  });
  var CNDMarker = new google.maps.Marker({
    position: Cheongnamdae,
    map: map,
    title: "청남대",
  });
  var JTSMarker = new google.maps.Marker({
    position: JanggyeTouristSite,
    map: map,
    title: "장계관광지",
  });
}

// wideview 누르면 지도 중심을 WaterPlant, 줌11 로 변경
let wideView = document.querySelector(".wideview");
wideView.addEventListener("click", wideview);
function wideview() {
  map.panTo(WaterPlant);
  map.setZoom(11);
}

// 클래스menu-tab들을 each함수에 넣어 배열길이만큼 반복시킴
// 클래스menu-tab 배열 7개(e), index는 .menu-tab
$(".menu-tab").each((e, index) => {
  //.menu-tab 클릭하면
  $(index).click(function () {
    //지도 중심을  pointArr e번째 인덱스에 해당하는 변수로, 줌14로 변경
    map.panTo(pointArr[e]);
    map.setZoom(14);
  });
});

// var originalPosition = document.getElementById("originalPosition");

// TDLocation.addEventListener("click", originalPosition);

// function originalPosition() {
//   Map(document.getElementById("map"), {
//     zoom: 14,
//     center: WaterPlant,
//   });
// }

// let startWaterPlant = document.querySelector(".menu-waterPlant");
// startWaterPlant.addEventListener("click", changeCenter1);
// let startOkcheonIjidang = document.querySelector(".menu-ijidang");
// startOkcheonIjidang.addEventListener("click", changeCenter2);
// let startBusodamak = document.querySelector(".menu-busodamak");
// startBusodamak.addEventListener("click", changeCenter3);
// let startMountainHwan = document.querySelector(".menu-MtnHwan");
// startMountainHwan.addEventListener("click", changeCenter4);
// let startDaecheongDam = document.querySelector(".menu-DaecheongDam");
// startDaecheongDam.addEventListener("click", changeCenter5);
// let startCheongnamdae = document.querySelector(".menu-Cheongnamdae");
// startCheongnamdae.addEventListener("click", changeCenter6);
// let startJanggye = document.querySelector(".menu-JanggyeTouristSite");
// startJanggye.addEventListener("click", changeCenter7);

// function changeCenter1() {
//   map.panTo(WaterPlant);
//   map.setZoom(14);
// }
// function changeCenter2() {
//   map.panTo(OkcheonIjidang);
//   map.setZoom(14);
// }
// function changeCenter3() {
//   map.panTo(Busodamak);
//   map.setZoom(14);
// }
// function changeCenter4() {
//   map.panTo(MountainHwan);
//   map.setZoom(14);
// }
// function changeCenter5() {
//   map.panTo(DaecheongDam);
//   map.setZoom(14);
// }
// function changeCenter6() {
//   map.panTo(Cheongnamdae);
//   map.setZoom(14);
// }
// function changeCenter7() {
//   map.panTo(JanggyeTouristSite);
//   map.setZoom(14);
// }
