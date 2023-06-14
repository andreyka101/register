function toServer(objToSend) {
  fetch("", {
    credentials: "same-origin",
    mode: "same-origin",
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objToSend),
  });

  console.log(JSON.stringify(objToSend));
  // window.location.href = "/";
  // console.log("go to menu page");
}

function send() {
  const password = document.querySelector("#password").value,
    password2 = document.querySelector("#password2").value,
    errorOut = (text) =>
      (document.querySelector("#errorsOut").innerText = text);

  if (password == "" && password2 == "") {
    errorOut("пароль пустой!!!");
  } else if (password == password2) {
    errorOut("");

    toServer({
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    });
  } else {
    errorOut("пароли не совподают");
  }
}
