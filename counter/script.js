
let counter = 0;

$("#up").on("click", () => {
    for (i = 0; i < 1; i++) {
        counter++
        $('h4').html(counter)
    }
}); $('#up').on("mouseenter", () => {
    $('#up').css("background-color", "#104e8b")
    $('#up').css("border-color", "#104e8b")
    $('h4').css("color", "#104e8b")
}); $('#up').on("mouseleave", () => {
    $('#up').css("background-color", "#198754")
    $('#up').css("border-color", "#198754")
    $('h4').css("color", "black")
}) 

$("#low").on("click", () => {
    for (i = 0; i < 1; i++) {
        counter--
        $('h4').html(counter)
    }
}); $('#low').on("mouseenter", () => {
    $('#low').css("background-color", "#8b3a3a")
    $('#low').css("border-color", "#8b3a3a")
    $('h4').css("color", "#8b3a3a")
}); $('#low').on("mouseleave", () => {
    $('#low').css("background-color", "#198754")
    $('#low').css("border-color", "#198754")
    $('h4').css("color", "black")
}) 

$("#reset").on("click", () => {
    for (i = 0; i < 1; i++) {
        counter = 0;
        $('h4').html(counter)
    }
}); $('#reset').on("mouseenter", () => {
    $('#reset').css("background-color", "#7a67ee")
    $('#reset').css("border-color", "#7a67ee")
    $('h4').css("color", "#7a67ee")
}); $('#reset').on("mouseleave", () => {
    $('#reset').css("background-color", "#198754")
    $('#reset').css("border-color", "#198754")
    $('h4').css("color", "black")
}) 