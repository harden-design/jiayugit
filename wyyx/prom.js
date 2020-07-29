window.addEventListener("load", function () {
  var chlist = document.querySelectorAll(".pr-ch");
  var mainlist = document.querySelectorAll(".pr-main");
  console.log(chlist);
  console.log(mainlist);
  chlist[0].addEventListener("click", function () {
    mainlist[0].style.display = "block";
    mainlist[1].style.display = "none";
  });
  chlist[1].addEventListener("click", function () {
    mainlist[0].style.display = "none";
    mainlist[1].style.display = "block";
  });
});
