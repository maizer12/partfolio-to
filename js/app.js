(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    document.querySelectorAll(".products-item__top").forEach((e) => {
      e.addEventListener("click", () => {
        let t = document.getElementById(e.id + "col"),
          o = Number(t.textContent),
          r = (o += 1);
        t.textContent = r;
        let l = document.getElementById(e.id + "price"),
          c = Number(l.textContent),
          d = c / (o - 1) + c;
        l.textContent = d;
        let a = document.getElementById(e.id + "pricesSalet"),
          n = Number(a.textContent),
          s = n / (o - 1) + n;
        a.textContent = s;
      });
    }),
    document.querySelectorAll(".products-item__bottom").forEach((e) => {
      e.addEventListener("click", () => {
        let t = document.getElementById(e.id + "col"),
          o = Number(t.textContent);
        if (o > 1) {
          let r = (o -= 1);
          t.textContent = r;
          let l = document.getElementById(e.id + "price"),
            c = Number(l.textContent),
            d = c - c / (r += 1);
          l.textContent = d;
          let a = document.getElementById(e.id + "pricesSalet"),
            n = Number(a.textContent),
            s = n - n / r;
          a.textContent = s;
        } else alert("Товаров не может быть меньше одного");
      });
    }),
    document.querySelectorAll(".video__link").forEach((e) => {
      e.addEventListener("click", () => {
        document.getElementById(e.id + "open").classList.add("video-start"),
          (document.querySelector("body").style.overflow = "hidden"),
          document
            .getElementById(e.id + "closse")
            .addEventListener("click", function (e) {
              document
                .querySelector(".video-start")
                .classList.remove("video-start"),
                (document.querySelector("body").style.overflow = "");
            });
      });
    }),
    document
      .querySelector(".menu__icon")
      .addEventListener("click", function () {
        document.querySelector(".header__menu").classList.toggle("manu-open"),
          document.querySelector(".menu").classList.toggle("open-manu"),
          document.querySelector(".menu__icon").classList.add("burger-anim"),
          setTimeout(() => {
            document
              .querySelector(".menu__icon")
              .classList.remove("burger-anim");
          }, 1100);
      }),
    document.querySelectorAll(".slider-dot__dot").forEach((e) => {
      e.addEventListener("click", () => {
        console.log(e.id),
          document
            .querySelector(".dots-active")
            .classList.remove("dots-active"),
          document.getElementById(e.id).classList.add("dots-active"),
          document
            .querySelector(".reviews-item_active")
            .classList.remove("reviews-item_active"),
          document
            .getElementById(e.id + "-element")
            .classList.add("reviews-item_active");
      });
    }),
    document.querySelectorAll(".catalog-filds__caption").forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.toggle("style-add");
      });
    }),
    document.querySelectorAll(".catalog-filds__inpute-name").forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.toggle("inpute-active");
      });
    }),
    document.querySelectorAll(".catalog-filds__max").forEach((e) => {
      e.addEventListener("input", () => {
        let t = e.value;
        document.querySelector(".catalog-filds__min-num").textContent = t;
      });
    }),
    document.querySelectorAll(".catalog-filds__min").forEach((e) => {
      e.addEventListener("input", () => {
        let t = e.value;
        (document.querySelector(".catalog-filds__min").style.left = "0%"),
          (document.querySelector(".catalog-filds__max-num").textContent = t);
      });
    }),
    document
      .querySelector(".categories__item_title")
      .addEventListener("click", () => {
        document
          .querySelector(".categories__input")
          .classList.toggle("input-open"),
          document
            .querySelector(".categories__item_title")
            .classList.toggle("title-active");
      }),
    document.querySelectorAll(".categories__item").forEach((e) => {
      e.addEventListener("click", () => {
        document
          .querySelector(".categories__input")
          .classList.remove("input-open");
        let t = document.querySelector(".categories__item_title"),
          o = t.textContent,
          r = e.textContent;
        setTimeout(() => {
          (t.textContent = e.textContent), (e.textContent = o);
        }, 100),
          16 === r.length
            ? (document.querySelectorAll("[data-van]").forEach((e) => {
                e.style = "order:1;";
              }),
              document.querySelectorAll("[data-to]").forEach((e) => {
                e.style = "order:2;";
              }),
              document.querySelectorAll("[data-fre]").forEach((e) => {
                e.style = "order:3;";
              }),
              document.querySelectorAll("[data-for]").forEach((e) => {
                e.style = "order:4;";
              }),
              document.querySelectorAll("[data-fife]").forEach((e) => {
                e.style = "order:5;";
              }),
              document.querySelectorAll("[data-sics]").forEach((e) => {
                e.style = "order:6;";
              }))
            : 12 === r.length
            ? (document.querySelectorAll("[data-van]").forEach((e) => {
                e.style = "order:;";
              }),
              document.querySelectorAll("[data-to]").forEach((e) => {
                e.style = "order:;";
              }),
              document.querySelectorAll("[data-fre]").forEach((e) => {
                e.style = "order:;";
              }),
              document.querySelectorAll("[data-for]").forEach((e) => {
                e.style = "order:;";
              }),
              document.querySelectorAll("[data-fife]").forEach((e) => {
                e.style = "order:;";
              }),
              document.querySelectorAll("[data-sics]").forEach((e) => {
                e.style = "order:;";
              }))
            : (document.querySelectorAll("[data-van]").forEach((e) => {
                e.style = "order:6;";
              }),
              document.querySelectorAll("[data-to]").forEach((e) => {
                e.style = "order:5;";
              }),
              document.querySelectorAll("[data-fre]").forEach((e) => {
                e.style = "order:4;";
              }),
              document.querySelectorAll("[data-for]").forEach((e) => {
                e.style = "order:3;";
              }),
              document.querySelectorAll("[data-fife]").forEach((e) => {
                e.style = "order:2;";
              }),
              document.querySelectorAll("[data-sics]").forEach((e) => {
                e.style = "order:1;";
              }));
      });
    }),
    document.querySelectorAll(".catalog-pages__num").forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelector(".pages-open").classList.remove("pages-open"),
          document.getElementById(e.id + "-pages").classList.add("pages-open"),
          document.querySelector(".btn-active").classList.remove("btn-active"),
          document.getElementById(e.id).classList.add("btn-active");
      });
    }),
    document.querySelector("#salet-btn").addEventListener("click", () => {
      document.querySelectorAll(".item-salet").forEach((e) => {
        let t = e.parentNode.parentNode;
        document.querySelector(".ne-trogat").classList.add("add-style"),
          document.querySelector(".ne-trogat").classList.add("active-inpute"),
          t.classList.add("prioretet-tovar"),
          document.querySelectorAll("[data-van]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-to]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fre]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-for]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fife]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-sics]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll(".prioretet-tovar").forEach((e) => {
            e.classList.remove("prioretet-tovar"),
              setTimeout(() => {
                t.classList.toggle("prioretet-tovar");
              }, 100);
          });
      });
    }),
    document.querySelector("#popular-btn").addEventListener("click", () => {
      document.querySelectorAll("#popular").forEach((e) => {
        e.classList.toggle("prioretet-tovar"),
          document.querySelector(".ne-trogat").classList.add("add-style"),
          document.querySelector(".ne-trogat").classList.add("active-inpute"),
          document.querySelectorAll("[data-van]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-to]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fre]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-for]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fife]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-sics]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll(".prioretet-tovar").forEach((t) => {
            t.classList.remove("prioretet-tovar"),
              setTimeout(() => {
                e.classList.toggle("prioretet-tovar");
              }, 100);
          });
      });
    }),
    document.querySelector("#new-btn").addEventListener("click", () => {
      document.querySelectorAll("#new").forEach((e) => {
        e.classList.toggle("prioretet-tovar"),
          document.querySelector(".ne-trogat").classList.add("add-style"),
          document.querySelector(".ne-trogat").classList.add("active-inpute"),
          document.querySelectorAll("[data-van]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-to]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fre]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-for]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-fife]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll("[data-sics]").forEach((e) => {
            e.style = "order:;";
          }),
          document.querySelectorAll(".prioretet-tovar").forEach((t) => {
            t.classList.remove("prioretet-tovar"),
              setTimeout(() => {
                e.classList.toggle("prioretet-tovar");
              }, 100);
          });
      });
    }),
    document.querySelectorAll(".categories__buton").forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.contains("add-style")
          ? e.classList.remove("add-style")
          : (document.querySelector(".add-style").classList.remove("add-style"),
            e.classList.add("add-style"));
      });
    }),
    document.querySelectorAll(".categories__btn").forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.contains("active-inpute")
          ? e.classList.remove("active-inpute")
          : (document
              .querySelector(".active-inpute")
              .classList.remove("active-inpute"),
            e.classList.add("active-inpute"));
      });
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
