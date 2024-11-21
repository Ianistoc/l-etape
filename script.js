var pages = ["index.html", "summary.html", "objectives.html", "forces.html", "plan.html", "preventions.html", "points.html"];
var current_page = 0;
switch (window.location.href.split('/').pop()) {
    case pages[0]:
        current_page = 0;
        break;

    case pages[1]:
        current_page = 1;
        break;

    case pages[2]:
        current_page = 2;
        break;

    case pages[3]:
        current_page = 3;
        break;
    
    case pages[4]:
        current_page = 4;
        break;
    
    case pages[5]:
        current_page = 5;
        break;
    
    case pages[6]:
        current_page = 6;
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