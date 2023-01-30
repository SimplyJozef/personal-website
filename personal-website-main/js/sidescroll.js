$(function() {

    $("body, html").mousewheel(function(event, delta) {
    
       this.scrollLeft -= (delta * 50);
    });
});