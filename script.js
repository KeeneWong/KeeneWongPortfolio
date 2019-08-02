const navitem = document.querySelectorAll(".navitem");
const getprojectsdiv = document.querySelectorAll(".projectsdiv");

//Nav Bar Button and auto scroll to section
navitem.forEach(item => {
  item.addEventListener("click", function() {
    document
      .querySelector(`.${item.getAttribute("data-scroll")}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

//Display the project detail
getprojectsdiv.forEach(function(div, i) {
  div.addEventListener("click", function() {
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

//BacktoProjectDiv button
document.querySelectorAll(".backtoprojectdiv").forEach(function(backbtn, i) {
  backbtn.addEventListener("click", function() {
    document
      .querySelector(".scrollprojectmain")
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(function() {
      document.querySelectorAll(".projectdivExpand")[i].classList.add("hidden");
      document
        .querySelector(".scrollprojectdivExpand")
        .classList.toggle("hidden");
    }, 500);
  });
});


//The skill animation bar

const bar1 = document.querySelector(".bar1");
document.querySelector(".resumemain")
  .addEventListener("mouseenter", function() {
    bar1.classList.add("javascript");
  });
  document.querySelector(".resumemain")
    .addEventListener("mouseleave", function() {
      bar1.classList.remove("javascript");
    });

const bar2 = document.querySelector(".bar2");
document.querySelector(".resumemain")
  .addEventListener("mouseenter", function() {
    bar2.classList.add("htmlcss");
  });
document.querySelector(".resumemain")
  .addEventListener("mouseleave", function() {
    bar2.classList.remove("htmlcss");
  });

  const bar3 = document.querySelector(".bar3");
  document.querySelector(".resumemain")
    .addEventListener("mouseenter", function() {
      bar3.classList.add("csharp");
    });
  document.querySelector(".resumemain")
    .addEventListener("mouseleave", function() {
      bar3.classList.remove("csharp");
    });

    const bar4 = document.querySelector(".bar4");
    document.querySelector(".resumemain")
      .addEventListener("mouseenter", function() {
        bar4.classList.add("nodejs");
      });
    document.querySelector(".resumemain")
      .addEventListener("mouseleave", function() {
        bar4.classList.remove("nodejs");
      });


      //the icon jump

      const icons = document.querySelectorAll('.icon');
      icons.forEach(eachicon=>{
        eachicon.addEventListener('mouseenter',function(){
          eachicon.classList.add('bounce');
          setTimeout(function() {
            eachicon.classList.remove("bounce");
          }, 300);
        })
      })
