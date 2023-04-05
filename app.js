let para = document.getElementById("para");

function randomQuotes() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * data.length);
      document.getElementById("heading").innerText = data[random].text;
      document.getElementById("author").innerText = data[random].author;
      para.classList.remove('none')
    });
}
