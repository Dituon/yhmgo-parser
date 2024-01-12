function parseResult(raw) {
    let result = '';
    const offset = 0x619;
    const rawLength = raw.length;
    for (let i = 0x0; i < rawLength; i += 0x2) {
        let temp = parseInt(raw[i] + raw[i + 1], 0x10);
        temp = (
            (temp + 0x100000 - offset) - (((rawLength / 0x2) - 0x1) - (i / 0x2))
        ) % 0x100
        result = String.fromCharCode(temp) + result
    }
    return result
}

function test() {
    let raw = '23c7d4c5dcc3160d07bfc8bdd20ecb04c40df9f700fad6c1b3c2c4bcf0c1bebfece4b9bcb6b2b1c5b0a2b5ababa9aca9a6a7baa597dedfd29ce6e6e5e396d8d0dc92d4ccd88f9091ccc1bfa18c7e9e897b968778c5c1c4c3b66f866db6bbbdbd68716680aeb3b575706d6cb0966a75aaa29d736264a9a0935d9f91a48b9598568c98949751435a418a8f918b3c94'
    let result = parseResult(raw)
    console.log(result)
}
