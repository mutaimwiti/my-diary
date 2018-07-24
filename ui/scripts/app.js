document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        const href = window.location.href;
        const uri = href.substr(href.lastIndexOf('/') + 1);

            const current = document.querySelector("a[href='" + uri + "']");
            if (current !== null) {
                current.className += ' active';
            }
    }
};
