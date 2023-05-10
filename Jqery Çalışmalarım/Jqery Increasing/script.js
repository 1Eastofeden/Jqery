
$('button').on("click", () => {
    let up = parseInt($("#up").val());
    let uperr = parseInt($("#uperr").val());
    let all = up + uperr;
    $('h4').html(all);
});