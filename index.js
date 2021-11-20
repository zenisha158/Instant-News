console.log("hello index file!");
function subscribe(){
    confirm("Thank you for subscribing us!");
}

console.log("This is my index js file");
var option = 'in';
let apiKey = 'd093053d72bc40248998159804e0e67d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${option}&apiKey=${apiKey}`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news=`<div class="card mb-3" style="background:url(bubbles.jpg);max-width: 900px;margin-left: 10%;margin-right: 10%; border-radius:15px;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed." style="border-radius:15px;" >
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="card-title">${element["title"]}</h3>
                  <p class="card-text">${element["content"]}</p>
                  <a href="${element['url']}" target="_blank" style="text-decoration : none;" >Read more here</a>  
                </div>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

function myFunction() {
    var no = document.getElementById("no");
    var option = no.options[no.selectedIndex].text;
  //   var txt = document.getElementById("result").value;
  //   txt = txt + option;
    document.getElementById("result").value = option;
// Initialize the news api parameters
// let source = 'the-times-of-india';
let apiKey = 'd093053d72bc40248998159804e0e67d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');
if(option=='United Arab Emirates'){
  option = 'ae';
}else if(option=='Argentina'){
  option = 'ar';
}else if(option=='Austria'){
  option = 'at';
}else if(option=='Australia'){
  option = 'au';
}else if(option=='Belgium'){
  option = 'be';
}else if(option=='Bulgaria'){
  option = 'bg';
}else  if(option=='Brazil'){
  option = 'br';
}else if(option=='Canada'){
  option = 'ca';
}else if(option=='Switzerland'){
  option = 'ch';
}else if(option=='China'){
  option = 'cn';
}else  if(option=='Colombia'){
  option = 'co';
}else  if(option=='Cuba'){
  option = 'cu';
}else  if(option=='Czechi'){
  option = 'cz';
}else   if(option=='Germany'){
  option = 'de';
}else   if(option=='Egypt'){
  option = 'eg';
}else   if(option=='Frence'){
  option = 'fr';
}else   if(option=='United Kingdom of Great Britain and Northern Ireland'){
  option = 'gb';
}else   if(option=='Greece'){
  option = 'gr';
}else   if(option=='Hong Kong'){
  option = 'hk';
}else   if(option=='Hungary'){
  option = 'hu';
}else   if(option=='Indonesia'){
  option = 'id';
}else   if(option=='Ireland'){
  option = 'ie';
}else   if(option=='Israel'){
  option = 'il';
}else   if(option=='India'){
  option = 'in';
}else   if(option=='Italy'){
  option = 'it';
}else   if(option=='Japan'){
  option = 'jp';
}else   if(option=='Korea'){
  option = 'kr';
}else   if(option=='Lithuania'){
  option = 'lt';
}else   if(option=='Latvia'){
  option = 'lv';
}else   if(option=='Czechi'){
  option = 'ma';
}else   if(option=='Mexico'){
  option = 'mx';
}else   if(option=='Malaysia'){
  option = 'my';
}else   if(option=='Nigeria'){
  option = 'ng';
}else   if(option=='Nicaragua'){
  option = 'nl';
}else   if(option=='Norway'){
  option = 'no';
}else   if(option=='Newzealand'){
  option = 'nz';
}else   if(option=='Philippines'){
  option = 'ph';
}else   if(option=='Poland'){
  option = 'pl';
}else   if(option=='Portugal'){
  option = 'pt';
}else   if(option=='Romania'){
  option = 'ro';
}else   if(option=='Serbia'){
  option = 'rs';
}else   if(option=='Russian Federation'){
  option = 'ru';
}else   if(option=='South Africa'){
  option = 'sa';
}else   if(option=='Sweden'){
  option = 'se';
}else   if(option=='Singapore'){
  option = 'sg';
}else   if(option=='Slovenia'){
  option = 'si';
}else   if(option=='Slovakia'){
  option = 'sk';
}else   if(option=='Thailand'){
  option = 'th';
}else    if(option=='Turkey'){
  option = 'tr';
}else   if(option=='Taiwan'){
  option = 'tw';
}else   if(option=='Ukraine'){
  option = 'ua';
}else   if(option=='The United States Of America'){
  option = 'us';
}else    if(option=='Venezuela'){
  option = 've';
}
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${option}&apiKey=${apiKey}`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news=`<div class="card mb-3" style="background:url(bubbles.jpg);max-width: 900px;margin-left: 10%;margin-right: 10%; border-radius:15px;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed!" style="border-radius:15px;">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">${element["title"]}</h5>
                  <p class="card-text">${element["content"]}</p>
                  <a href="${element['url']}" target="_blank" style="text-decoration : none;" >Read more here</a> 
                  
                </div>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

}
