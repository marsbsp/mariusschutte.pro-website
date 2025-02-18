$(document).ready(function(){

    const dropDownItems = [$("#ddi-1"), $("#ddi-2"), $("#ddi-3"), $("#ddi-4"), $("#ddi-5"), $("#ddi-6"), $("#ddi-7"), $("#ddi-8"), $("#ddi-9"), $("#ddi-10"), $("#ddi-11"), $("#ddi-12")];    
    const dropDownArrows = [$("#dda-1"), $("#dda-2"), $("#dda-3"), $("#dda-4"), $("#dda-5"), $("#dda-6"), $("#dda-7"), $("#dda-8"), $("#dda-9"), $("#dda-10"), $("#dda-11"), $("#dda-12")];    
    const dropDownContent = [$("#ddc-1"), $("#ddc-2"), $("#ddc-3"), $("#ddc-4"), $("#ddc-5"), $("#ddc-6"), $("#ddc-7"), $("#ddc-8"), $("#ddc-9"), $("#ddc-10"), $("#ddc-11"), $("#ddc-12")];
    
    for (let i = 0; i < dropDownItems.length; i++) {
        dropDownItems[i].click(function(event) {
            event.preventDefault();

            for (let x = 0; x < dropDownItems.length; x ++) {
                if (x != i) {
                    dropDownContent[x].hide();
                    dropDownArrows[x].removeClass("rotated");
                }
            }
            dropDownContent[i].toggle();
            dropDownArrows[i].toggleClass("rotated");
        });
    }

});