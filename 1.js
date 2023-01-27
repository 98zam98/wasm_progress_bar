
        var memory = new WebAssembly.Memory({
            initial: 256,
            maximum: 512
        });

        var exports;
        WebAssembly.instantiateStreaming(fetch("0.wasm"), {
            js: {
                mem: memory
            },
            env: {
                emscripten_resize_heap: memory.grow
            }
        }).then(results => {
            exports = results.instance.exports;
            memory = results.instance.exports.memory;
        });

        let ptr;
 
        exports.wasmmalloc(ptr,1);
        function get_bar() {
            var bar = exports.bar(ptr);
            document.getElementById("progress").style.width = `${bar}%`;
            console.log("counting now");
        }
        
        function get_bar_loop() {
            exports.reziro(ptr)
            console.log("starting");
            for (let i = 0; i < 100; i++) {
                setTimeout(get_bar, 0);
            }
        }
        exports.wasmfree(ptr);
