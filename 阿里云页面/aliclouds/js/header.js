window.onload = function () {
  var transpotr = document.querySelectorAll(".ali-trans");
  var transicon = document.querySelectorAll(".transpan .iconfont");
  console.log(transicon);
  console.log(transicon[0]);
  transpotr[0].addEventListener("mouseenter", function () {
    transicon[0].className = "iconfont icon-icon-test2";
  });
  transpotr[0].addEventListener("mouseleave", function () {
    transicon[0].className = "iconfont icon-icon-test3";
  });

  var searchlis = document.querySelectorAll(".search-kind li");
  searchlis[0].style.backgroundColor = "#ff6a00";
  searchlis[0].firstElementChild.style.color = "white";
  for (var i = 0; i < searchlis.length; i++) {
    searchlis[i].onclick = function () {
      for (var i = 0; i < searchlis.length; i++) {
        searchlis[i].style.backgroundColor = "white";
        searchlis[i].firstElementChild.style.color = "black";
      }
      this.style.backgroundColor = "#ff6a00";
      this.firstElementChild.style.color = "white";
    };
  }
};
