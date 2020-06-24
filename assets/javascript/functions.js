var generalFunctions = (function() {
    return {
        loadScript: function(path, callback) {
            var done = false;
            var scriptElement = document.createElement('script');
        
            scriptElement.onload = handleLoad;
            scriptElement.onreadystatechange = handleReadyStateChange;
            scriptElement.onerror = handleError;
            scriptElement.src = path;
            document.body.appendChild(scriptElement);
        
            function handleLoad() {
                if (!done) {
                    done = true;
                    callback(path, "ok");
                }
            }
            function handleReadyStateChange() {
                var state;
        
                if (!done) {
                    state = scriptElement.readyState;
                    if (state === "complete") {
                        handleLoad();
                    }
                }
            }
            function handleError() {
                if (!done) {
                    done = true;
                    callback(path, "error");
                }
            }
        }
    };
})();