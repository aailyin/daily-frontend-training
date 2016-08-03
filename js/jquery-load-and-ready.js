// jQuery - What are differences between $(document).ready and $(window).load?

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    alert("document is ready");
});


$(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    alert("window is loaded");
});

$(function(){
});                  // This is equivalent of 'load'.
