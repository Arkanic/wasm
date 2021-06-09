const request = new XMLHttpRequest();
request.open('GET', './d/index.wasm');
request.responseType = 'arraybuffer';
request.onload = () => {
    console.log('response received');
    const bytes = request.response;
    const importObject = {};
    WebAssembly.instantiate(bytes, importObject).then(result => {
        console.log('instantiated');
        const { exports } = result.instance;
        // finally, call the add() function implemented in D:
        const r = exports.add(42, -2.5);
        console.log('r = ' + r);
    });
};
request.send();
console.log('request sent');