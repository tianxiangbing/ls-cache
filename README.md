<!--
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2020-07-08 16:14:24
 * @LastEditTime: 2020-12-01 17:20:24
 * @github: https://github.com/tianxiangbing
 -->
# localstorage-cache
针对localstorage频繁取值的节流操作
# npm 
```
npm install --save x-ls-cache
```

# demo
```
let StorageCache = require('x-ls-cache');
StorageCache.time=1000;
StorageCache.get('aaa',true)
```
# api
## get (key,isParseJson)
获取localStorage值，key为键值，isParseJson是否转为json对象。

## time
配置多少毫秒内不作重复读取，默认为1000;