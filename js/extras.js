! function(i, a) {
    "use strict";
    var e, t, n, s = fp_utils.$,
        o = fp_utils.after,
        l = fp_utils.hasClass,
        r = fp_utils.addClass,
        u = fp_utils.toggleClass,
        c = fp_utils.removeClass,
        f = fp_utils.siblings,
        d = fp_utils.preventDefault,
        p = ".language",
        h = s("#menu-line")[0],
        g = s(".menu-active").offsetWidth,
        v = 0,
        m = 40,
        L = "active";

    function E() {
        m = 2 * parseFloat(getComputedStyle(fp_utils.$(".menu-active a")[0]).paddingLeft)
    }

    function y() {
        var e, t, n, i, a;
        e = "GET", t = "https://alvarotrigo.com/fullPage/routes/github-api.php", n = null, i = function(e) {
            var n = JSON.parse(e);
            Object.keys(n).forEach(function(e) {
                var t = s('[data-github="' + e + '"] h4')[0];
                t && (t.innerHTML = n[e])
            })
        }, (a = new XMLHttpRequest).open(e, t, !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), a.send(n), a.onreadystatechange = function() {
            4 === a.readyState && (200 === a.status ? i(a.responseText) : console.log("Error: " + a.status))
        }
    }

    function w(e) {
        switch (e.keyCode) {
            case 27:
                l(s(".examples")[0], L) && T()
        }
    }

    function b() {
        l(this, "left") ? fullpage_api.moveSlideLeft() : fullpage_api.moveSlideRight()
    }

    function _() {
        var e, t, n;
        e = "https://alvarotrigo.com/fullPage/dist/non-critical.min.css?v=2", t = a.document.createElement("link"), a.document.styleSheets, t.rel = "stylesheet", t.href = e, o(s("#stylesheet-critical")[0], t), s(".github-stars")[0].setAttribute("src", "https://ghbtns.com/github-btn.html?user=alvarotrigo&repo=fullpage.js&type=star&count=true&size=large"), (n = decodeURIComponent(a.location.hash.substr(1))).length && s("." + n, i).length && fp_utils.trigger(s(".show-examples")[0], "click"), y()
    }

    function k() {
        clearTimeout(e), e = setTimeout(x, 350)
    }

    function x() {
        if (g = s(".menu-active")[0].offsetWidth, a.innerWidth <= 900) {
            E();
            var e = s("#menu a")[0];
            R.call(e), v = e.offsetLeft
        } else 900 < a.innerWidth && (E(), R.call(s("#menu a")[0]), v = 0)
    }

    function T() {
        clearTimeout(t), t = setTimeout(function() {
            S(".examples"), fullpage_api.setAllowScrolling(!0)
        }, 500)
    }

    function C(e) {
        S(".examples"), fullpage_api.setAllowScrolling(!1)
    }

    function S(e) {
        u(s(e)[0], L)
    }

    function W(e) {
        void 0 !== e && (d(e), (e || a.event).stopPropagation()), S(p)
    }

    function A(e) {
        c(s(p)[0], L)
    }

    function R() {
        var e = this.parentNode;
        D(e.offsetLeft, e.offsetWidth)
    }

    function j() {
        D(v, g)
    }

    function D(e, t) {
        h.style.left = e + m / 2 + "px", h.style.width = t - m + "px"
    }

    function H(e) {
        d(e);
        var t = this.getAttribute("href").substr(1);
        r(this, L), c(f(this), L);
        var n = s('[data-tab="' + t + '"]')[0];
        r(n, L), c(f(n), L)
    }
    E(), h.style.width = g - m + "px", h.style.left = "20px", "en" !== (!(n = navigator.language || navigator.userLanguage) || n.indexOf("-") < 0 ? n : n.split("-")[0]) && W(), k(), s(".menu-active a")[0].addEventListener("click", function(e) {
            e.preventDefault()
        }), s("#menu li a").forEach(function(e) {
            e.addEventListener("mouseover", R), e.addEventListener("mouseout", j)
        }), a.addEventListener("resize", k), a.addEventListener("load", _), s(".shell-tab").forEach(function(e) {
            e.addEventListener("click", H)
        }), s(".language-current")[0].addEventListener("click", W), s("html")[0].addEventListener("click", A), s(".info-close")[0].addEventListener("touchstart", T), s(".info-close")[0].addEventListener("click", T), s(".show-examples")[0].addEventListener("click", C), i.addEventListener("keydown", w), s(".my-arrow").forEach(function(e) {
            e.addEventListener("click", b)
        }), "serviceWorker" in navigator && a.addEventListener("load", function() {}),
        function() {
            function e() {
                dataLayer.push(arguments)
            }
            a.dataLayer = a.dataLayer || [], e("js", new Date), e("config", "UA-94005074-1"), e("config", "AW-1012934304")
        }()
}(document, window);