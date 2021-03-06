//Getting url in order to find otp trending articles
let url = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=QfpGiGVx1k6605VtiCBsCUBbfkZZzTAy";
let trending = document.getElementById("trending");

fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);

  data.results.map(entry => {

    console.log(entry.title);

    //Obtaining article titles
    let a = document.createElement("a");
    a.setAttribute('href',entry.url);
    a.innerHTML = entry.title;

    //Obtaining article abstract
    let p = document.createElement("p");
    p.innerHTML = entry.abstract;

    //Obtaining article image
    let img = document.createElement("img");
    img.setAttribute('src',entry.multimedia[0].url);

    //Appends refs we obtained
    trending.appendChild(img);
    trending.appendChild(a);
    trending.appendChild(p);

  })
})
