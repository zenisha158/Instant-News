console.log("hello index file!");
function subscribe(){
    confirm("Thank you for subscribing us!");
}

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '4d39917902cf48a89578da6000dd02aa'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.open('GET',`https://newsapi.org/v2/top-headlines?category=technology&apiKey=4d39917902cf48a89578da6000dd02aa`,true);
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news=`<div class="card mb-3" style="background:url(technology.jpg);max-width: 900px; margin-left: 10%;margin-right: 10%;border-radius:15px;background-repeat:no-repeat; background-size: cover; background-position:center;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed" style="border-radius:15px;">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="card-title" style="font-weight:600;">${element["title"]}</h3>
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


