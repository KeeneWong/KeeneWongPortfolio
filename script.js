const navitem = document.querySelectorAll(".navitem");
const getprojectsdiv = document.querySelectorAll(".projectsdiv");


let projectdb = [

  {
    title: "CookingPaPa",
    short: "a simply game with logic of hangman",
    img: "./img/cookingpapa.png",
    long: `Have you ever play hangman~

    If you are a fan of hangman, don't miss cooking papa !!
    
    Cooking PaPa is a word gussing game for both single and multiplayer
    
    It's a story of a kind PaPa trying to cook for his son
    
    What are you waiting for, come and try it out !
    
    Programming Skills used in this project:
    
    Javascript CSS HTML5
    
    User Stories

    This is my first project in GA. The idea of this game was came from hangman. 

    However I do not want to create a game that everyone has been created. 
    
    Therefore I change the theme of it and try to implement a interesting story to the game :)`,

    link: "https://github.com/KeeneWong/cookingpapa"
  },
  {
    title: "Tic Tac Toe",
    short: "First JavaScript game that I created",
    img: "./img/tictactoe.png",
    long: `
    It is my first game created by JavaScript 
    
    Auctually the logic is the same. `,
    link: " https://git.generalassemb.ly/keenewong/tic-tac-toe "
  },
  {
    title: "SoccerAPI",
    short: "a simple API for developer to get data",
    img: "./img/soccerapi.png",
    long: `This API is called soccer api.

    It's a API developed for software developer who want to use soccer teams information.
    
    it's like a database of football team and league.
    
    Just use the endpoint and grab my data.`,
    link: "https://github.com/KeeneWong/SoccerAPI"
  },
  {
    title: "Animeme",
    short: "My first Full-Stack application",
    img: "./img/animeme.png",
    long: `This website is a database of anime and users. the users will be able to create lists of their 
    favorites as well as what anime they are currently watching.

    Prerequisites
    node.js
    Installing
    fork and clone this repo
    
    cd to animeme directory
    
    run npm install`,
    link: "https://github.com/KeeneWong/Animeme"
  }


]




//Nav Bar Button and auto scroll to section
navitem.forEach(item => {
  item.addEventListener("click", function () {
    document
      .querySelector(`.${item.getAttribute("data-scroll")}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

//Display the project detail
getprojectsdiv.forEach(function (div, i) {
  div.addEventListener("click", function () {
    document
      .querySelectorAll(".projectdivExpand")
      .forEach(div => div.classList.add("hidden"));
    document.querySelector(".scrollprojectdivExpand").classList.add("hidden");
    document
      .querySelector(".scrollprojectdivExpand")
      .classList.toggle("hidden");
    document
      .querySelector(`.${div.getAttribute("data-expand")}`)
      .classList.toggle("hidden");
    document
      .querySelector(".scrollprojectdivExpand")
      .scrollIntoView({ behavior: "smooth" });
  });
});


//the icon jump

const icons = document.querySelectorAll('.icon');
icons.forEach(eachicon => {
  eachicon.addEventListener('mouseenter', function () {
    eachicon.classList.add('bounce');
    setTimeout(function () {
      eachicon.classList.remove("bounce");
    }, 300);
  })
})

//the project main display setting
//and also the expand project div

const projectsdivs = document.querySelectorAll(".projectsdiv");
const insideprojectdivExpandlefts = document.querySelectorAll(".insideprojectdivExpandleft");
const insideprojectdivExpandrights = document.querySelectorAll(".insideprojectdivExpandright");


projectdb.forEach((each, i) => {
  let title = document.createElement("h3");
  let short = document.createElement("p");
  let long = document.createElement("div");
  let link = document.createElement("a");
  let button = document.createElement("button");
  // let img = document.createElement("div");
  title.innerText = each.title;
  short.innerText = each.short;
  long.innerText = each.long;
  link.innerText = each.link;
  link.setAttribute("href", each.link)
  button.classList.add("backtoprojectdiv");
  long.classList.add("projectllong");
  button.innerText = "Back";


  // projectsdivs[i].appendChild(img);
  projectsdivs[i].appendChild(title);
  projectsdivs[i].appendChild(short);


  insideprojectdivExpandrights[i].appendChild(title);
  insideprojectdivExpandrights[i].appendChild(link);
  insideprojectdivExpandrights[i].appendChild(long);
  insideprojectdivExpandrights[i].appendChild(button);

  insideprojectdivExpandlefts[i].style.backgroundImage = `url(${projectdb[i].img})`;




})


//BacktoProjectDiv button
document.querySelectorAll(".backtoprojectdiv").forEach(function (backbtn, i) {
  backbtn.addEventListener("click", function () {
    document
      .querySelector(".scrollprojectmain")
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(function () {
      document.querySelectorAll(".projectdivExpand")[i].classList.add("hidden");
      document
        .querySelector(".scrollprojectdivExpand")
        .classList.toggle("hidden");
    }, 500);
  });
});
















//The skill animation bar

// const bar1 = document.querySelector(".bar1");
// document.querySelector(".resumemain")
//   .addEventListener("mouseenter", function() {
//     bar1.classList.add("javascript");
//   });
//   document.querySelector(".resumemain")
//     .addEventListener("mouseleave", function() {
//       bar1.classList.remove("javascript");
//     });

// const bar2 = document.querySelector(".bar2");
// document.querySelector(".resumemain")
//   .addEventListener("mouseenter", function() {
//     bar2.classList.add("htmlcss");
//   });
// document.querySelector(".resumemain")
//   .addEventListener("mouseleave", function() {
//     bar2.classList.remove("htmlcss");
//   });

//   const bar3 = document.querySelector(".bar3");
//   document.querySelector(".resumemain")
//     .addEventListener("mouseenter", function() {
//       bar3.classList.add("csharp");
//     });
//   document.querySelector(".resumemain")
//     .addEventListener("mouseleave", function() {
//       bar3.classList.remove("csharp");
//     });

//     const bar4 = document.querySelector(".bar4");
//     document.querySelector(".resumemain")
//       .addEventListener("mouseenter", function() {
//         bar4.classList.add("nodejs");
//       });
//     document.querySelector(".resumemain")
//       .addEventListener("mouseleave", function() {
//         bar4.classList.remove("nodejs");
//       });