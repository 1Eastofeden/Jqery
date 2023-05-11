// JQery efektleri

// $("#hide").click(function(){
//     $('#hide').hide(1000);
//   });
  
//   $("#show").click(function(){
//     $('#hide').show(1000);
// }); // show() hide() gizle göster 

// $('button').on("click", () => {
//     setInterval( () => {
//         $('p').fadeOut(1000);
//         $('p').fadeIn(1000);
//     } ,1000)
// }) fadeOut() gizler fadeIn() gösterir

// $('button').on("click", () => {
//     $("#slide").slideDown();
//     $("#slide").slideUp();
// }) // slideDown() bir öğeyi aşşağıya sürükler slideUp() bir öğeyi yukarıya sürükler

// $('button').on("click", () => {
//     $(".animasyon").animate({height: '300px', opacity: '0.4'}, "slow");
// }) # JQery ile animasyon oluşturmak

// $('button').on("click", () => {
//     let time = setInterval(() => {
//         $(".animasyon").animate({height: '300px', opacity: '0.4'}, "slow");
//         $(".animasyon").slideDown(5000)
//     }) 
//     $('button').on("dblclick", () => {
//         clearInterval(time)
//     })
// })

// function genel() {
//     $('h4').hide("slow", () => {
//         alert("hello is hiden now")
//     })
// } # sayfa yukelndıgınde h4'ü gizle ve alert ver callback 

// function genel() {
//     $('h4').hide()
//     setTimeout(() => {
//         $('h4').show(2000)
//         $('h4').css("color", "pink")
//     } ,3000)
// } # sayfa yukelndıgınde h4'ü gizle ve 2sn sonra göster rengini değiştir

// $('p').on("click", () => {
//     $('p').text("hello world")
// }) # text() tagın içeriğini değiştirir

// function genel() {
//     let text = "<p>hi</p>"
//     $('p').append(text)
//     //
//     $('p').on("click", () => {
//         $('p').append("love you")
//     })
// }

