window.onload = function () {
  var lblist = document.querySelectorAll(".xlb");
  console.log(lblist);
  for (var i = 0; i <= lblist.length; i++) {
    lb(lblist[i]);
  }
  function lb(obj) {
    var lastone = obj.querySelector(".lastone");
    var nextone = obj.querySelector(".nextone");
    //console.log(dots.length);
    var dots = obj.querySelectorAll(".gezi");
    var xdots = obj.querySelectorAll(".gezizi");
    console.log(xdots);
    var banner = obj.querySelectorAll(".banner");
    function change(i) {
      for (var j = 0; j < banner.length; j++) {
        dots[j].style.backgroundColor = "";
        banner[j].style.display = "none";
        xdots[j].style.backgroundColor = "white";
      }
      dots[i].style.backgroundColor = "#cc9756";
      banner[i].style.display = "block";
      xdots[i].style.backgroundColor = "#dfcead";
    }
    change(0);
    function mousechange() {
      for (var i = 0; i < dots.length; i++) {
        (function (i) {
          //函数内部i变为了局部变量
          dots[i].onmouseover = function () {
            clearInterval(obj.timer);
            change(i);
            k = i;
          };
          //鼠标离开，重新设置定时器
          dots[i].onmouseout = function () {
            obj.timer = setInterval(function () {
              if (k == dots.length - 1) {
                k = 0;
              } else {
                k++;
              }
              change(k);
            }, 1500);
          };
          /*************/
          lastone.onmouseover = function () {
            clearInterval(obj.timer);
          };
          lastone.onmouseout = function () {
            obj.timer = setInterval(function () {
              if (k == dots.length - 1) {
                k = 0;
              } else {
                k++;
              }
              change(k);
            }, 1500);
          };
          lastone.onclick = function () {
            k--;
            if (k == -1) {
              k = dots.length - 1;
            }
            change(k);
            // console.log(i);
          };
          /********next****** */

          nextone.onmouseover = function () {
            clearInterval(obj.timer);
          };
          nextone.onmouseout = function () {
            obj.timer = setInterval(function () {
              if (k == dots.length - 1) {
                k = 0;
              } else {
                k++;
              }
              change(k);
            }, 1500);
          };
          nextone.onclick = function () {
            //console.log(num);

            if (k == dots.length - 1) {
              k = -1;
            }
            k++;
            change(k);
            // console.log(k);
          };
        })(i);
      }
    }
    mousechange();
    var k = 0;
    obj.timer = setInterval(function () {
      if (k == dots.length - 1) {
        k = 0;
      } else {
        k++;
      }
      change(k);
    }, 1500);
  }
};
