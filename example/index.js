/*
 * @Descripttion: test
 * @Author: tianxiangbing
 * @Date: 2020-07-08 16:14:24
 * @LastEditTime: 2020-12-01 17:02:42
 * @github: https://github.com/tianxiangbing
 */
let StorageCache = require('../src/index');
localStorage.setItem('aaa',{a:1})
StorageCache.get('aaa')