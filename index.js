"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * @Author: 田想兵
 * @Date: 2020-12-01 15:40:58
 * @LastEditTime: 2020-12-01 19:26:35
 * @github: https://github.com/tianxiangbing
 * @Contact: 55342775@qq.com
 */

(function (definition) {
  //
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    module.exports = definition();
    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(definition);
  } else {
    PromiseCache = definition();
  }
})(function () {
  "use strict";

  StorageCache = {
    /**
     * @description: 缓存时长，毫秒
     * @param {*}
     * @return {*}
     */
    time: 1000,
    caches: {},
    /**
     * @description: 获取localstorage的值
     * @param {*} key key
     * @param {*} isjson 是否转化为json类型
     * @return {*}
     */
    get: function get(key, isjson) {
      if (this.caches.hasOwnProperty(key)) {
        var obj = this.caches[key];
        if (Date.now() - obj.time < this.time) {
          return obj.data;
        } else {
          return this.__reset(key, isjson);
        }
      } else {
        return this.__reset(key, isjson);
      }
    },
    __reset: function __reset(key, isjson) {
      var data = '';
      if (isjson) {
        data = JSON.parse(localStorage.getItem(key));
      } else {
        data = localStorage.getItem(key);
      }
      this.caches[key] = { data: localStorage.getItem(key), time: Date.now() };
      return data;
    }
  };
  return StorageCache;
});