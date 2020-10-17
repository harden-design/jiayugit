window.addEventListener("load", function () {
  // right-main
  var imgcontral = document.querySelectorAll(".img-contral>a");
  // console.log(imgcontral);
  var rightlist = document.querySelectorAll(".right-main>li");
  // console.log(rightlist);

  for (var i = 0; i < imgcontral.length; i++) {
    (function (i) {
      imgcontral[i].addEventListener("click", function () {
        for (let i = 0; i < imgcontral.length; i++) {
          imgcontral[i].style.backgroundColor = "#ededed";
          rightlist[i].style.display = "none";
        }
        imgcontral[i].style.backgroundColor = "#ff6a00";
        rightlist[i].style.display = "block";
      });
      imgcontral[i].addEventListener("mouseenter", function () {
        imgcontral[i].style.backgroundColor = "#ff6a00";
      });
      imgcontral[i].addEventListener("mouseout", function () {
        imgcontral[i].style.backgroundColor = "#ededed";
      });
    })(i);
  }

  //
  var infopro = document.querySelectorAll(".info-pro li");
  var infomes = document.querySelectorAll(".info-mes-list>li");
  function infochoose() {
    for (var i = 0; i < infopro.length; i++) {
      (function (i) {
        infopro[i].addEventListener("click", function () {
          for (var j = 0; j < infopro.length; j++) {
            infomes[j].style.display = "none";
            infopro[j].style.backgroundColor = "#ededed";
          }
          infomes[i].style.display = "block";
          infopro[i].style.backgroundColor = "#ff6a00";
        });
      })(i);
    }
  }
  infochoose();
  //热点
  var hottitle = document.querySelectorAll(".hot-tab-title li");
  var hotlist = document.querySelectorAll(".hot-main-list>li");
  function hotchoose() {
    for (var i = 0; i < hottitle.length; i++) {
      (function (i) {
        hottitle[i].addEventListener("click", function () {
          for (let i = 0; i < hottitle.length; i++) {
            hottitle[i].className = "";
            hotlist[i].className = "";
          }
          hottitle[i].className = "orange";
          hotlist[i].className = "hot-current";
        });
      })(i);
    }
  }
  hotchoose();

  //导航二级菜单
  var productclass = document.querySelectorAll(".productclass");
  var navProduct = document.querySelectorAll(".nav-product");
  // console.log(navProduct);
  // console.log(productclass);
  productclass[0].addEventListener("mouseover", function () {
    navProduct[0].style.display = "block";
  });
  navProduct[0].addEventListener("mouseleave", function () {
    this.style.display = "none";
  });
  var navlist = document.querySelectorAll(".nav-product-list>li");
  var navtables = document.querySelectorAll(".nav-product-table");
  for (var i = 0; i < navlist.length; i++) {
    (function (i) {
      navlist[i].addEventListener("mouseenter", function () {
        for (var j = 0; j < navlist.length; j++) {
          navtables[j].className = "nav-product-table";
          navlist[j].className = "";
        }
        navlist[i].className = "nav-product-list-current";
        if (i == 0 || i == 4) {
          navtables[i].className = "nav-product-table nav-table-current";
        } else {
          navtables[i].className =
            "nav-product-table table-normal nav-table-current";
        }
      });
    })(i);
  }

  // });
  // })(i);
  // }
  //footer的切换
  var footchoose = document.querySelectorAll(".f-h-r-tabtitle a");
  var foottable = document.querySelectorAll(".f-h-r-table ul");
  footchoose[1].addEventListener("click", function () {
    for (var i = 0; i < footchoose.length; i++) {
      footchoose[i].className = "";
      foottable[i].className = "";
    }
    footchoose[1].className = "f-h-r-tabtitle-current";
    foottable[0].className = "f-h-r-hide";
  });
  footchoose[0].addEventListener("click", function () {
    for (var i = 0; i < footchoose.length; i++) {
      footchoose[i].className = "";
      foottable[i].className = "";
    }
    footchoose[0].className = "f-h-r-tabtitle-current";
    foottable[1].className = "f-h-r-hide";
  });
});
