/*
 * @Author: 田想兵
 * @Date: 2020-12-01 15:40:58
 * @LastEditTime: 2020-12-02 13:50:25
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
  const StorageCache = {
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
      if (StorageCache.caches.hasOwnProperty(key)) {
        let obj = StorageCache.caches[key];
        if (Date.now() - obj.time < StorageCache.time) {
          return obj.data;
        }else{
          return StorageCache.__reset(key,isjson);
        }
      } else {
        return StorageCache.__reset(key,isjson);
      }
    }
    ,__reset(key,isjson){
      let data = '';
      if (isjson) {
        data = JSON.parse(localStorage.getItem(key));
      } else {
        data = localStorage.getItem(key);
      }
      StorageCache.caches[key] = { data: localStorage.getItem(key), time: Date.now() };
      return data;
    }
  }
  return StorageCache;
});
