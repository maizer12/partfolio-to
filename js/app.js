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
          n = Number(t.textContent),
          o = (n += 1);
        t.textContent = o;
        let c = document.getElementById(e.id + "price"),
          d = Number(c.textContent),
          i = d / (n - 1) + d;
        c.textContent = i;
        let l = document.getElementById(e.id + "pricesSalet"),
          r = Number(l.textContent),
          m = r / (n - 1) + r;
        l.textContent = m;
      });
    }),
    document.querySelectorAll(".products-item__bottom").forEach((e) => {
      e.addEventListener("click", () => {
        let t = document.getElementById(e.id + "col"),
          n = Number(t.textContent);
        if (n > 1) {
          let o = (n -= 1);
          t.textContent = o;
          let c = document.getElementById(e.id + "price"),
            d = Number(c.textContent),
            i = d - d / (o += 1);
          c.textContent = i;
          let l = document.getElementById(e.id + "pricesSalet"),
            r = Number(l.textContent),
            m = r - r / o;
          l.textContent = m;
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
          document.querySelector(".menu__icon").classList.add("burger-anim"),
          setTimeout(() => {
            document
              .querySelector(".menu__icon")
              .classList.remove("burger-anim");
          }, 1e3);
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