"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (n, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Ald = t();
}(undefined, function () {
  function n() {
    this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;var n = this;this.push = function (t) {
      this.tasks.push(new Promise(function (e, o) {
        var r = function r() {
          n.activeCount++, t().then(function (n) {
            e(n);
          }).then(function () {
            n.next();
          });
        };n.activeCount < n.concurrency ? r() : n.queue.push(r);
      }));
    }, this.all = function () {
      return Promise.all(this.tasks);
    }, this.next = function () {
      n.activeCount--, n.queue.length > 0 && n.queue.shift()();
    };
  }function t(n) {
    this.app = n;
  }function e(n) {
    b = w(), Q = n, this.aldstat = new t(this);
  }function o(n) {
    var t;t = n.scene != cn, cn = n.scene, J = 0, Q = n, V = n.query.ald_share_src, W = n.query.aldsrc || "", z = n.query.ald_share_src, E = Date.now(), sn || ($ = false), sn = false, un || (0 !== B && Date.now() - B > 3e4 ? O = w() : t && (O = w())), 0 !== B && Date.now() - B < 3e4 && (tn = true), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({ shareTicket: n.shareTicket, success: function success(n) {
        X = n, D("event", "ald_share_click", JSON.stringify(n));
      } }) : n.query.ald_share_src && D("event", "ald_share_click", 1), "" === Y && wx.getSetting({ withCredentials: true, success: function success(n) {
        if (n.authSetting["scope.userInfo"]) {
          wx.getUserInfo({ withCredentials: true, success: function success(n) {
              var t = g();Y = n, t.ufo = S(n), j = v(n.userInfo.avatarUrl.split("/")), p(t);
            } });
        }
      } }), m("app", "show");
  }function r() {
    B = Date.now(), "" === Y && wx.getSetting({ success: function success(n) {
        n.authSetting["scope.userInfo"] && wx.getUserInfo({ withCredentials: true, success: function success(n) {
            Y = n, j = v(n.userInfo.avatarUrl.split("/"));var t = g();t.ufo = S(n), p(t);
          } });
      } }), m("app", "hide");
  }function i(n) {
    F++, D("event", "ald_error_message", n);
  }function a(n) {
    rn = n;
  }function s() {
    en = C ? this.$mp.page.route : this.route, x("page", "show"), tn = false;
  }function u() {
    on = C ? this.$mp.page.route : this.route;
  }function c() {
    on = C ? this.$mp.page.route : this.route;
  }function f() {
    D("event", "ald_pulldownrefresh", 1);
  }function l() {
    D("event", "ald_reachbottom", 1);
  }function h(n) {
    un = true;var t = y(n.path),
        e = {};for (var o in Q.query) {
      "ald_share_src" === o && (e[o] = Q.query[o]);
    }var r = "";if (r = n.path.indexOf("?") == -1 ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", "" !== t) for (var o in t) {
      e[o] = t[o];
    }e.ald_share_src ? e.ald_share_src.indexOf(G) == -1 && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + G) : e.ald_share_src = G;for (var i in e) {
      i.indexOf("ald") == -1 && (r += i + "=" + e[i] + "&");
    }return n.path = r + "ald_share_src=" + e.ald_share_src, D("event", "ald_share_status", n), n;
  }function d() {
    function n() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }return n() + n() + n() + n() + n() + n() + n() + n();
  }function p(n) {
    function t() {
      return new Promise(function (t, e) {
        wx.request({ url: "https://" + U + ".aldwx.com/d.html", data: n, header: { AldStat: "MiniApp-Stat", se: T || "", op: N || "", img: j }, method: "GET", success: function success(n) {
            t(200 == n.statusCode ? "" : "status error");
          }, fail: function fail() {
            t("fail");
          } });
      });
    }J++, n.at = O, n.et = Date.now(), n.uu = G, n.v = I, n.ak = H.app_key.replace(/(\t)|(\s)/g, ""), n.wsr = Q, n.ifo = $, n.rq_c = J, n.ls = b, wx.Queue.push(t);
  }function g() {
    var n = {};for (var t in Z) {
      n[t] = Z[t];
    }return n;
  }function v(n) {
    for (var t = "", e = 0; e < n.length; e++) {
      n[e].length > t.length && (t = n[e]);
    }return t;
  }function w() {
    return "" + Date.now() + Math.floor(1e7 * Math.random());
  }function S(n) {
    var t = {};for (var e in n) {
      "rawData" != e && "errMsg" != e && (t[e] = n[e]);
    }return t;
  }function y(n) {
    if (n.indexOf("?") == -1) return "";var t = {};return n.split("?")[1].split("&").forEach(function (n) {
      var e = n.split("=")[1];t[n.split("=")[0]] = e;
    }), t;
  }function _(n) {
    for (var t in n) {
      if ("object" == _typeof(n[t]) && null !== n[t]) return true;
    }return false;
  }function m(n, t) {
    var e = g();e.ev = n, e.life = t, e.ec = F, e.st = Date.now(), e.dr = Date.now() - E, W && (e.qr = W, e.sr = W), V && (e.usr = V), p(e);
  }function x(n, t) {
    var e = g();e.ev = n, e.st = Date.now(), e.life = t, e.pp = en, e.pc = on, e.dr = Date.now() - E, un && (e.so = 1), un = false, rn && "{}" != JSON.stringify(rn) && (e.ag = rn), W && (e.qr = W, e.sr = W), V && (e.usr = V), tn && (e.ps = 1), nn || (an = en, nn = true, e.ifp = nn, e.fp = en), p(e);
  }function D(n, t, e) {
    var o = g();o.ev = n, o.tp = t, o.st = K, o.dr = Date.now() - E, e && (o.ct = e), p(o);
  }function A(n, t, e) {
    if (n[t]) {
      var o = n[t];n[t] = function (n) {
        e.call(this, n, t), o.call(this, n);
      };
    } else n[t] = function (n) {
      e.call(this, n, t);
    };
  }function M(n) {
    var t = {};for (var a in n) {
      "onLaunch" !== a && "onShow" !== a && "onHide" !== a && "onError" !== a && (t[a] = n[a]);
    }return t.onLaunch = function (t) {
      e.call(this, t), "function" == typeof n.onLaunch && n.onLaunch.call(this, t);
    }, t.onShow = function (t) {
      o.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t);
    }, t.onHide = function () {
      r.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
    }, t.onError = function (t) {
      i.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t);
    }, t;
  }function q(n) {
    var t = {};for (var e in n) {
      "onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (t[e] = n[e]);
    }return t.onLoad = function (t) {
      a.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t);
    }, t.onShow = function (t) {
      s.call(this), "function" == typeof n.onShow && n.onShow.call(this, t);
    }, t.onHide = function (t) {
      u.call(this), "function" == typeof n.onHide && n.onHide.call(this, t);
    }, t.onUnload = function (t) {
      c.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t);
    }, t.onReachBottom = function (t) {
      l(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t);
    }, t.onPullDownRefresh = function (t) {
      f(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t);
    }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function (t) {
      var e = n.onShareAppMessage.call(this, t);return undefined === e ? (e = {}, e.path = this.route) : undefined === e.path && (e.path = this.route), h.call(this, e);
    }), t;
  }function L(n) {
    return App(M(n));
  }function P(n) {
    return Page(q(n));
  }function R(n) {
    return C = true, M(n);
  }function k(n) {
    return q(n);
  }undefined === wx.Queue && (wx.Queue = new n(), wx.Queue.all());var H = require("./ald-stat-conf.js"),
      I = "7.2.2",
      U = "log",
      C = false,
      O = "",
      b = "",
      E = 0,
      B = 0,
      T = "",
      N = "",
      j = "",
      J = 0,
      Q = "",
      $ = "",
      G = function () {
    var n = "";try {
      n = wx.getStorageSync("aldstat_uuid");
    } catch (t) {
      n = "uuid_getstoragesync";
    }if (n) $ = false;else {
      n = d();try {
        wx.setStorageSync("aldstat_uuid", n), $ = true;
      } catch (n) {
        wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
      }
    }return n;
  }(),
      K = Date.now(),
      V = "",
      W = "",
      z = "",
      F = 0,
      X = "",
      Y = "",
      Z = {},
      nn = false,
      tn = false,
      en = "",
      on = "",
      rn = "",
      an = "",
      sn = true,
      un = false,
      cn = "";!function () {
    wx.request({ url: "https://log.aldwx.com/config/app.json", header: { AldStat: "MiniApp-Stat" }, method: "GET", success: function success(n) {
        200 === n.statusCode && (I < n.data.version && console.warn("您的SDK不是最新版本，请尽快升级！"), n.data.warn && console.warn(n.data.warn), n.data.error && console.error(n.data.error));
      } });
  }();try {
    var fn = wx.getSystemInfoSync();Z.br = fn.brand, Z.pm = fn.model, Z.pr = fn.pixelRatio, Z.ww = fn.windowWidth, Z.wh = fn.windowHeight, Z.lang = fn.language, Z.wv = fn.version, Z.wvv = fn.platform, Z.wsdk = fn.SDKVersion, Z.sv = fn.system;
  } catch (n) {}wx.getNetworkType({ success: function success(n) {
      Z.nt = n.networkType;
    } }), wx.getSetting({ success: function success(n) {
      n.authSetting["scope.userLocation"] ? wx.getLocation({ type: "wgs84", success: function success(n) {
          Z.lat = n.latitude, Z.lng = n.longitude, Z.spd = n.speed;
        } }) : H.getLocation && wx.getLocation({ type: "wgs84", success: function success(n) {
          Z.lat = n.latitude, Z.lng = n.longitude, Z.spd = n.speed;
        } });
    } }), t.prototype.sendEvent = function (n, t) {
    if ("" !== n && "string" == typeof n && n.length <= 255) {
      if ("string" == typeof t && t.length <= 255) D("event", n, t);else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        if (JSON.stringify(t).length >= 255) return undefined;if (_(t)) return undefined;D("event", n, JSON.stringify(t));
      } else undefined === t ? D("event", n, false) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
    } else console.error("事件名称必须为String类型且不能超过255个字符");
  }, t.prototype.sendSession = function (n) {
    if ("" === n || !n) return undefined;T = n;var t = g();t.st = Date.now(), t.tp = "session", t.ct = "session", t.ev = "event", "" === Y ? wx.getSetting({ success: function success(n) {
        n.authSetting["scope.userInfo"] ? wx.getUserInfo({ success: function success(n) {
            t.ufo = S(n), j = v(n.userInfo.avatarUrl.split("/")), "" !== X && (t.gid = X), p(t);
          } }) : "" !== X && (t.gid = X, p(t));
      } }) : (t.ufo = Y, "" !== X && (t.gid = X), p(t));
  }, t.prototype.sendOpenid = function (n) {
    if ("" === n || !n) return undefined;N = n;var t = g();t.st = Date.now(), t.tp = "openid", t.ev = "event", t.ct = "openid", p(t);
  };return H.plugin ? { App: L, Page: P, MpvueApp: R, MpvuePage: k } : function (n) {
    !function () {
      var n = App,
          t = Page,
          d = Component;App = function App(t) {
        A(t, "onLaunch", e), A(t, "onShow", o), A(t, "onHide", r), A(t, "onError", i), n(t);
      }, Page = function Page(n) {
        var e = n.onShareAppMessage;A(n, "onLoad", a), A(n, "onUnload", c), A(n, "onShow", s), A(n, "onHide", u), A(n, "onReachBottom", l), A(n, "onPullDownRefresh", f), undefined !== e && null !== e && (n.onShareAppMessage = function (n) {
          if (undefined !== e) {
            var t = e.call(this, n);return undefined === t ? (t = {}, t.path = en) : undefined === t.path && (t.path = en), h(t);
          }
        }), t(n);
      }, Component = function Component(n) {
        var t = n.methods.onShareAppMessage;A(n.methods, "onLoad", a), A(n.methods, "onUnload", c), A(n.methods, "onShow", s), A(n.methods, "onHide", u), A(n.methods, "onReachBottom", l), A(n.methods, "onPullDownRefresh", f), undefined !== t && null !== t && (n.methods.onShareAppMessage = function (n) {
          if (undefined !== t) {
            var e = t.call(this, n);return undefined === e ? (e = {}, e.path = en) : undefined === e.path && (e.path = en), h(e);
          }
        }), d(n);
      };
    }();
  }();
});