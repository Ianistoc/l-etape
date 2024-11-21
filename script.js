var pages = ["index.html", "summary.html", "objectives.html", "forces.html"];
var current_page = 0;
switch (window.location.href.split('/').pop()) {
    case "index.html":
        current_page = 0;
        break;

    case "summary.html":
        current_page = 1;
        break;

    case "objectives.html":
        current_page = 2;
        break;

    case "forces.html":
        current_page = 3;
        break;
}
document.onkeydown = function(e) {
    if(e.key === "ArrowRight") {
        if(current_page < pages.length - 1){
            window.location.href = pages[current_page + 1];
        }
    }

    else if(e.key === "ArrowLeft") {
        if(current_page > 0) {
            window.location.href = pages[current_page - 1];
        }
    }
}