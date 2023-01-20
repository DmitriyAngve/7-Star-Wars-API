const btn1 = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const mainURL = "https://swapi.dev/api";

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM ready");

  fetch(mainURL)
    .then((rep) => {
      return rep.json();
    })
    .then((json) => {
      console.log(json);
      // Выводим кнопки на экран в зависимости от приходящих свойств с АПИ
      h1.innerHTML = "";
      for (const prop in json) {
        // console.log(`${prop} : ${json[prop]} `);
        const btn = document.createElement("button");
        btn.classList.add("btnz");
        btn.textContent = prop;
        h1.append(btn);
        btn.urlz = json[prop]; // бтн это объект
        btn.addEventListener("click", getData);
      }
    });
});

btn1.addEventListener("click", (e) => {
  console.log("ready");
});

// Фетч по ссылке от клика
function getData(e) {
  //   console.log(e.target);
  const el = e.target;
  getJSON(el.urlz);
}

function getJSON(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      buildPage(data);
    });
}
// Фетч по ссылке от клика

function buildPage(data) {
  console.log(data);
}
