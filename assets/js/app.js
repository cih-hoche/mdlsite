/*document.querySelectorAll("a").forEach(function(e) {
    if (window.fetch) {
        e.addEventListener("click", function(t) {
            t.preventDefault();
            var a = this.getAttribute("href");
            fetch(a).then(async function(e) {
                window.history.pushState({}, "", a);
                document.querySelector("html").innerHTML = await e.text()
            });
        });
    }
})*/