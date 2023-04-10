let para = document.getElementById("para");
let content = document.getElementById('content')
let loader = document.getElementById('loader')
let btn = document.getElementsByClassName('.btn')


let loadingStatus = false;

function checkLoaderStatus() {
  content.style.display = "none";
  if (loadingStatus == true) {
    loader.classList.add("loader");
  } else {
    loader.classList.remove("loader");
  }
}




function randomQuotes() {
loadingStatus =true
  checkLoaderStatus()

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * data.length);
      document.getElementById("heading").innerText = data[random].text;
      document.getElementById("author").innerText = data[random].author;
      para.classList.remove('none')
      loadingStatus = false
      checkLoaderStatus()
      content.style.display = "block";
    });
}
