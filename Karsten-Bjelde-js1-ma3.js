// question 1
const afunc = (a, b) => {
  return a - b;
};

// question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";
const error = "error.html";

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    logEachGame(json);
  })
  .catch(function(error) {
    redirect(error);
  });

function logEachGame(json) {
  for (let index = 0; index < json.results.length; index++) {
    console.log(json.results[index].name);
  }
}
function redirect() {
  document.location.href = "error.html";
}

// question 3
var words = "These cats are outrageous.";
const changeWord = words.replace("cats", "giraffes");

// question 4
const userURL = new URL("https://my.site.com/?userId=9");
const params = new URLSearchParams(userURL.search);
let id;
id = params.get("userId");

if (params.get("userId")) {
  if (10 <= id) {
    //document.location = "second.html";
  } else if (10 > id) {
    //document.location = "first.html";
  }
} else {
  //document.location = "third.html";
}

// question 5
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);

// question 6
const unList = document.querySelector(".animals");
const create = document.createElement("li");
const cow = document.querySelector(".cows");

create.className = "parrots";
create.innerText = "Parrots";
unList.appendChild(create);
create.after(cow);

// question 7
const URRL = "https://api.rawg.io/api/games/3801";

fetch(URRL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    selectDiv(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function selectDiv(json) {
  const rate = document.querySelector(".rating");
  rate.innerText = json.rating;
}
