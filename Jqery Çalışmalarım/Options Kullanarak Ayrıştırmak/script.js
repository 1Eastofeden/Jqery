
$("#yıl").on("change", function() {
    var selectedVal = $(this).val();
    var elementsToHide = [];
    if (selectedVal === "2012") {
      elementsToHide = ["b", "c"];
    } else if (selectedVal === "2013") {
      elementsToHide = ["a", "c"];
    } else if (selectedVal === "2014") {
      elementsToHide = ["a", "b"];
    }
    elementsToHide.forEach(function(elementId) {
      $("#" + elementId).hide();
    });
});

$("#yıl").on("change", () => {
    var selectedValue = $("#yıl").val();
    $(".h4" + selectedValue).show();
    $(".h4:not(.h4" + selectedValue + ")").hide();
});
