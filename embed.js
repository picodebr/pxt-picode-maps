(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-picode-maps/",
    "verprefix": "",
    "workerjs": "/pxt-picode-maps/worker.js",
    "monacoworkerjs": "/pxt-picode-maps/monacoworker.js",
    "gifworkerjs": "/pxt-picode-maps/gifjs/gif.worker.js",
    "pxtVersion": "5.24.11",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-picode-maps/",
    "commitCdnUrl": "/pxt-picode-maps/",
    "blobCdnUrl": "/pxt-picode-maps/",
    "cdnUrl": "/pxt-picode-maps/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "turtle",
    "simUrl": "/pxt-picode-maps/simulator.html",
    "partsUrl": "/pxt-picode-maps/siminstructions.html",
    "runUrl": "/pxt-picode-maps/run.html",
    "docsUrl": "/pxt-picode-maps/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-picode-maps/highlight.js/highlight.pack.js",
        "/pxt-picode-maps/bluebird.min.js",
        "/pxt-picode-maps/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-picode-maps/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-picode-maps/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-picode-maps/target.js");
    scripts.push("/pxt-picode-maps/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
