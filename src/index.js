/*
 * @Author: 田想兵
 * @Date: 2020-12-01 15:40:58
 * @LastEditTime: 2020-12-01 16:56:26
 * @github: https://github.com/tianxiangbing
 * @Contact: 55342775@qq.com
 */

(function (definition) {
  //
  if (typeof exports === "object") {
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
    get(key, isjson) {
      if (this.caches.hasOwnProperty(key)) {
        let obj = this.caches[key];
        if (Date.now() - obj.time < this.time) {
          return obj.data;
        }else{
          return this.__reset(key,isjson);
        }
      } else {
        return this.__reset(key,isjson);
      }
    }
    ,__reset(key,isjson){
      let data = '';
      if (isjson) {
        data = JSON.parse(localStorage.getItem(key));
      } else {
        data = localStorage.getItem(key);
      }
      this.caches[key] = { data: localStorage.getItem(key), time: Date.now() };
      return data;
    }
  }
});
