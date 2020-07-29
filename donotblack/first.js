   $(function () {
      function bgt() {
        this.width = "100%";
        this.height = "800px";
        this.backgroundColor = "white";
        this.overflow = "hidden";
        if (!bgt.prototype.show) {
          bgt.prototype.show = function () {
            var div = document.createElement("div");
            div.style.backgroundColor = this.backgroundColor;
            div.style.height = "" + this.height;
            div.style.width = "" + this.width;
            div.style.overflow = this.overflow;
            document.body.appendChild(div);
            // div.style.marginTop = "150px";
            // div.style.marginLeft = "300px";
            div.style.position = "relative";
            this.mainbg = div;
          };
        }
      }
      function row() {
        this.width = 100;
        this.height = 120;
        this.backgroundColor = "white";
        this.position = "absolute";
        if (!row.prototype.show) {
          row.prototype.show = function (y) {
            var div = document.createElement("div");
            div.style.backgroundColor = this.backgroundColor;
            div.style.height = this.height + "px";
            div.style.width = this.width + "%";
            div.style.position = this.position;
            div.style.top = y + "px";
            div.style.left = 0 + "px";
            // div.style.border = "1px solid black";
            bg.mainbg.appendChild(div);
            this.rowdiv = div;
            // var x = 0;
            this.swidth = 25;
            var black = Math.floor(Math.random() * 4);
            for (var i = 0; i < 4; i++) {
              var div = document.createElement("div");

              div.style.height = "200px";
              div.style.width = this.swidth + "%";
              div.style.position = "absolute";
              div.style.backgroundColor = "white";
              if (i === black) {
                div.style.backgroundColor = "black";
              }
              div.style.top = 0 + "px";
              div.style.left = this.swidth * i + "%";

              div.style.borderRight = "1px solid black";
              div.style.borderLeft = "1px solid black";
              div.style.borderTop = "1px solid black";
              this.rowdiv.appendChild(div);
            }
          };
        }
      }
      var bg = new bgt();
      bg.show();
      var y = 600;
      for (var j = 0; j < 14; j++) {
        // var doublack = Math.floor(Math.random() * 4);
        // console.log(black);
        var hang = new row();
        hang.show(y);
        y -= 200;
      }
      //
      //
      function move() {
        var list = $(bg.mainbg).children();
        var taildiv = $(list.eq(0));
        taildiv = $(list.eq(0));
        taildiv.click(function () {
          taildiv.stop().fadeTo(500, 0.3);
          taildiv.remove();
          var head = new row();
          head.show(-200);
          list = $(bg.mainbg).children();
          var nowy = 600;
          for (var i in list) {
            $(list.eq(i))
              .stop()
              .animate(
                {
                  top: nowy + "px",
                },
                500
              );
            nowy -= 200;
          }
        });
      }
      right();
      move();
      var timer = setInterval(function () {
        right();
        // console.log(list);
      }, 7000);
      function right() {
        $(" div").click(function (e) {
          if ($(this).css("backgroundColor") == "rgb(0, 0, 0)") {
            move();
            // console.log("✔");
          } else {
            // console.log("x");
            e.stopPropagation();
          }
        });
      }
    });