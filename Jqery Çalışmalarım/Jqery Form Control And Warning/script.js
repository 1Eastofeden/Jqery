let username = $("#username");
let password = $("#password");
let sendButton = $("#sendbutton");

let usernameValue = "hello";
let passwordValue = "111222";

sendButton.on("click", () => {
  if (username.val() === usernameValue) {
    console.log("username doğru: ", usernameValue);
  } else {
    console.log("yanlış kullanıcı adı");
  }

  if (password.val() === passwordValue) {
    console.log("password doğru: ", passwordValue);
  } else {
    console.log("yanlış şifre");
  }
});
