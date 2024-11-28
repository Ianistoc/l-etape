var pages = ["index.html", "summary.html", "objectives.html", "forces.html", "plan.html", "preventions.html", "points.html", "proud.html", "conclusion.html"];
var current_page = pages.indexOf(window.location.href.split('/').pop());

document.onkeydown = function(e) {
    if (e.key === "ArrowRight" && current_page < pages.length - 1) {
        document.getElementById("page1").style.transform = 'translateX(-100%)';
        document.getElementById("page2").style.transform = 'translateX(0)';

        setTimeout(function() {
            window.location.href = pages[current_page + 1];
        }, 1000);
    } 
    else if (e.key === "ArrowLeft" && current_page > 0) {
        window.location.href = pages[current_page - 1];
    }
}
