function parseCookie(t1, k1) {
    let pos = Math.floor(t1 / 0x3e8) >> 0x5
    let offset = 0x89a4
    let k2 = '' + (((((pos * (pos % 0x100) + 0x1) + offset) * ((pos % 0x80) + 0x1)) * ((pos % 0x10) + 0x1)) + pos)

    let t2 = ''
    while (true) {
        t2 = '' + Math.floor(new Date().getTime())
        let tOffset = t2.slice(t2.length - 0x3)
        let kOffset = k2.slice(k2.length - 0x1)
        if (tOffset.indexOf(kOffset) >= 0x0) {
            break
        }
    }

    let start = 0x0
    // if (navigator.platform.match(/(Windows|win32|win64)/i)) {
    //     start += 0x1
    // }
    // if (navigator.maxTouchPoints < 0x3) {
    //     start += 0x1
    // }
    let timeOffset = Math.floor(new Date().getTime() / 0x3e8) >> (0x11 + start)
    let m2t = ((((timeOffset * 0x15 + 0x9a) * (((timeOffset % 0x40) + 0xd)) * ((timeOffset % 0x20) + 0x22) * ((timeOffset % 0x10) + 0x57)) * ((timeOffset % 0x8) + 0x41)) + 0x2ef)

    return {
        t1, k1, t2, k2, m2t
    }
}
