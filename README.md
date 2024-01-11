# Intro

某知名动画网站的接口逆向

# 思路

1. 访问播放页面时服务端发送 `Set-Cookie`, 获取 `k1` `t1`
2. 通过 `t1` 通过计算得出 `k2` `t2` `m2t` (详见 `cookie-parser.js`)
3. Cookie 携带 `k1` `t1` `k2` `t2` `m2t` 请求 `/playurl` 获取加密后的视频信息
4. 解密获取资源链接 (详见 `result-parser.js`)
