
$(document).ready(function(){

    const copyRightYear = $("#cp-year");
    const date = new Date();
    const year = date.getFullYear();

    copyRightYear.text(year);

});