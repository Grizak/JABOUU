// Create the list with utils
const allUtils = [
  {
    name: "Coorinate Converter",
    file: "coord-dec-DMS-con",
    desc: "Convert between decimal coordinates and DMS (Degrees Minutes Seconds) coordinates",
  },
  {
    name: "Color converter",
    file: "colors",
    desc: "Convert between RGB, hex and HSL",
  },
  {
    name: "Number Converter",
    file: "number-con",
    desc: "Convert between hexdecimal, decimal and binary with ease!",
  },
];

window.onload = function () {
  const utilsEl = document.querySelector("#utils");
  if (utilsEl) {
    allUtils.forEach((util) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h2><a href="/html/Utils/${util.file}.html" target="_self">${util.name}</a></h2>
      <p>${util.desc}</p>
    `;
      utilsEl.appendChild(li);
    });
  }
};
