
// $("button").addClass("btn btn-success") // // addClass ile class eklemek

// $("button").css("background-color", "red").addBack().css("background-color", "black") // // addBack son eklenen öğeyi şeçer bir önceki özellikleri geçersiz kılar

// $("button").click(() => {
//     $("button").after("<p>hello</p>")
// }) // // tıklama olduktan sonra after kodu ("<p>hello</p>") body'e ekler
  
// // Alpha Vantage API'den belirtilen sembol ve fonksiyona göre hisse senedi fiyat verileri almak için AJAX çağrısı yapılır
// $.ajax({
//     url: "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact",
//     method: "GET",
//     success: (response) => {
//     // İsteğin başarıyla tamamlandığını göstermek için konsola bir başarı mesajı yazdırılır
//         console.log("yanıt başarılı") 
//     }, 
//     error: (exhr, status, error) => {
//         // AJAX isteği hatalı olduğunda burdaki kod çalışır
//         console.log("AJAX hatası : ",  error)
//         console.log("hata kodu : ",  xhr.status)
//         console.log("Hata açıklaması : ",   xhr.statusText) 
//     }
// });

// $(document).ajaxComplete(() => {
//     console.log("istek tamamlandı")
// }) // // AJAX isteği tamamlandığında consol'a ("istek tamamlandı") yazar

// $(document).on("ajaxSend", function(event, jqXHR, ajaxOptions) {
//     // AJAX isteği gönderilmeden önce buradaki kod çalışır
//     $("#loading").show(); // Yükleme göstergesi gösterilir
// });

// // event: AJAX isteği gönderilmeden önce tetiklenen olay nesnesidir. Bu parametre, kullanıcı tanımlı bir fonksiyonun içinde kullanılabilir
// // jqXHR: AJAX isteğini gerçekleştiren XMLHTTPRequest nesnesidir. Bu nesne, AJAX isteği sırasında kullanılabilir ve AJAX isteğine özel özelliklere (örneğin isteğin durumunu belirten "status" özelliği gibi) erişim sağlar
// // ajaxOptions: AJAX isteğinde kullanılan ayarlar nesnesidir. Bu nesne, AJAX isteğinde kullanılan parametreler (örneğin "type", "dataType" ve "url" gibi) hakkında bilgi sağlar

// let element = $("*").css("border", "3px solid red").length; // // Tüm HTML öğelerine 3 piksel kırmızı bir kenarlık ekleyin ve sayılarını `element` değişkeninde saklayın
// $("body").prepend("<h3>" +  element + " elements found</h3>"); // // `element` değişkenindeki öğe sayısını içeren bir metin oluşturun ve sayfada görüntüleyin

// $("body").append(document.createTextNode("hello")) // // append (createTextNode) kullanarak body'e yeni bir tag creatledim ve içeriğini belirttim

// $('a').attr('href', 'https://api.jquery.com/'); // // attr yeni bir değer vermek için kullanılır içeriğini değiştirir

// $('a').removeAttr("color") // // removeAttr ile birlikte a elemtinden değeri kaldırdık

// $("button").on("click", () => {
//     window.open("https://api.jquery.com/")
// }) // // button'a tıkalyınca window.open ile birlikte yönlendirme

// $('button').on("click", () => {
//     let colors = ["red", "purple", "pink", "yellow", "blue", "black", "grey", "brown"];
//     let randomIndex = Math.floor(Math.random() * colors.length);
//     let randomColor = colors[randomIndex];
    
//     $('button').css("background-color", randomColor);

//     if (randomColor === "purple") {
//       $('button').off("click"); // // button'u tıklanmaya kapatır
//     }
// });

// $('button').bind("mouseenter", () => { // // bind (on) gibi kullanılır
//     $('button').css("background-color", "black")
// })

// $('button').bind("mouseleave", ( ) => {
//     $('button').css("background-color", "#198754")
// })

// setInterval(function() {
//     console.log("Her 1 saniyede bir yazdırılır.");
// }, 1000); // her 1 saniyede bir consol'a yazdırır // setInterval() 

// var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number * 2);
// }); // bir dizi eleman üsütnde işlem yapmak için kullanılır // forEach()

// $("button").click(function() {
//     $("div").fadeOut(1000, function() {
//       $(this).fadeIn(1000);
//     });
// }); // yavaş yavaş kaybolmasını sağlar fadeOut() işlevi, seçilen elementin opaklığını yavaş yavaş azaltır fadeIn()  işlevi, seçilen elementin opaklığını yavaş yavaş artırır

// $('button').children().css("background-color", "red") // alt öğelerini alır içindeki öğeleri children()

