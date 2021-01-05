// =================================
// Нужно сделать:
// 1. Темная тема (доработать выключение/включение)
// 2. Память
// 3. Детект адблок
// 4. Вывод адреса на странице + ip - ГОТОВО!!!
// 5. Переделать клавишу DEL в backspace - ГОТОВО!!!
// 6. Кнопки работают с клавиатуры
// ==================================

console.log("hello"); //Приветствие

//Парсим адрес вкладки в консоль
let adress = document.documentURI;
console.log("Адрес страницы " + adress);

//Рисуем адрес в див
let urlDRAW = document.querySelector(".box__url"); //выбор дива куда рисовать
window.onload = function () {
  urlDRAW.innerHTML = "Текущий URL:  " + adress;
};

// ===================================================

let clearBTN = document.querySelector(".clear"); //кнопка "очистить поле"
let delBTN = document.querySelector(".del"); //кнопка удалить последний символ
let inputHTML = document.querySelector(".window"); //input
let block = document.querySelector(".body"); //body
let adb = document.querySelector(".alert-adb");
let adbBTN = document.querySelector(".alert-adb__btn");
let content = document.querySelector(".calculator");
let load = document.querySelector(".load"); //сюда рисуем сплэш загрузки
let old = document.querySelector(".old");
let fifa = document.querySelector(".fifa");

//Передаем значение с клавиш в input
function insert(num) {
  inputHTML.value = inputHTML.value + num;
}

//Удаляем последний символ
delBTN.onclick = function () {
  document.querySelector(".del");
  console.log(delBTN);

  if (inputHTML !== "") {
    inputHTML.value = inputHTML.value.slice(0, -1);
  }
};

//Чистим input клавишей "C"
clearBTN.onclick = function () {
  document.querySelector(".clear");
  console.log(clearBTN);

  if (clearBTN.onclick !== "") {
    inputHTML.value = "";
  }
};

function equal() {
  let exp = inputHTML.value;
  if (exp) {
    inputHTML.value = eval(exp);
  }
}

//Блок детект адблок
let telo = document.querySelector(".telo");

if (telo.clientHeight === 0) {
  console.log("детект адблок");
  content.style.display = "none";
  adb.style = "display=flex";
} else {
  console.log("адблок не обнаружен");
}

//Закрываем окно с предупреждением адблок
adbBTN.onclick = function (event) {
  console.log("клик по кнопке закрыть");
  content.style = "display=flex";
  adb.style.display = "none";
};

//Прогресс bar загрузки
function splash() {
  load.innerHTML = `<span class='splash'>Подождите, идет загрузка приложения...</span>`;
  (load.style.display = "flex"),
    (load.style.alignItems = "center"),
    (load.justifyContent = "center");
  // load.style.display = "none"
}
setTimeout(splash, 2000);

//Удаляем прогресс bar загрузки через пару сек
setTimeout(function () {
  load.remove();
}, 5000);

//вкл окно адблок
setTimeout(() => {
  adb.style.display = "flex";
}, 5000);

//Темная тема
let darkBTN = document.querySelector(".dark");
darkBTN.addEventListener("click", function () {
  console.log(darkBTN);
  if (darkBTN.checked !== true) {
    document.querySelector(".fifa").href = "style.css";
    localStorage.darkBTN = false;
  } else {
    document.querySelector(".fifa").href = "dark.css";
    localStorage.darkBTN = true;
  }
});

//Память
const app = document.querySelector(".memory__window");
let vfvf = inputHTML;
app.innerHTML = vfvf;
