// Load the header and footer files
fetch("/html/partials/header.html")
  .then((response) => response.text())
  .then((header) => {
    document.body.insertAdjacentHTML("afterbegin", header);
    return fetch("/html/partials/head.html");
  })
  .then((response) => response.text())
  .then((head) => {
    document.head.insertAdjacentHTML("beforeend", head);
  })
  .catch((error) => console.error("Error loading header or footer:", error));

fetch("/html/partials/footer.html")
  .then((response) => response.text())
  .then((footer) => document.body.insertAdjacentHTML("beforeend", footer))
  .then(() => {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearEl = document.querySelector("#year");
    if (yearEl) {
      yearEl.textContent =
        currentYear === startYear
          ? `${startYear}`
          : `${startYear} - ${currentYear}`;
    }
  });

fetch(
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5671784078924834"
);
