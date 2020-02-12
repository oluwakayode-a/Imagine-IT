const speakers = [
  {
    id: "speaker1",
    picture: "download.jpeg",
    name: "lore damilola ",
    info:
      "<h3>hdiihidkjd</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut cumque laudantium ipsum, enim ad ex dignissimos autem inventore sequi nihil. Modi quaerat consectetur reiciendis voluptatibus quam recusandae quia magni.</p>"
  },
  {
    id: "speaker2",
    picture: "download.jpeg",
    name: "lore damilola ",
    info:
      "<h3>hdiihidkjd</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut cumque laudantium ipsum, enim ad ex dignissimos autem inventore sequi nihil. Modi quaerat consectetur reiciendis voluptatibus quam recusandae quia magni.</p>"
  },
  {
    id: "speaker3",
    picture: "download.jpeg",
    name: "lore damilola ",
    info:
      "<h3>hdiihidkjd</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut cumque laudantium ipsum, enim ad ex dignissimos autem inventore sequi nihil. Modi quaerat consectetur reiciendis voluptatibus quam recusandae quia magni.</p>"
  },
  {
    id: "speaker4",
    picture: "download.jpeg",
    name: "lore damilola ",

    info:
      "<h3>hdiihidkjd</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut cumque laudantium ipsum, enim ad ex dignissimos autem inventore sequi nihil. Modi quaerat consectetur reiciendis voluptatibus quam recusandae quia magni.</p>"
  },
  {
    id: "speaker5",
    picture: "download.jpeg",
    name: "lore damilola ",
    info:
      "<h3>hdiihidkjd</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut cumque laudantium ipsum, enim ad ex dignissimos autem inventore sequi nihil. Modi quaerat consectetur reiciendis voluptatibus quam recusandae quia magni.</p>"
  }
];

const top4GeneralDiv = document.querySelector(".top4-generalDiv");
const about = document.querySelector("#about");
$(document).ready(function() {
  $("about").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
});

document.querySelector(".toggle").addEventListener("click", function(e) {
  document.querySelector(".menu").classList.toggle("active");
});
const li = document.querySelectorAll(".nav-menu li");

li.forEach(li => {
  li.addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
  });
});

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));

  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

var body = document.body,
  overlay = document.querySelector(".overlay"),
  overlayBtts = document.querySelectorAll('button[class$="overlay"]');

overlayBtts.forEach(link => {
  link.addEventListener("click", function(e) {
    var overlayOpen = this.className === "open-overlay";
    overlay.setAttribute("aria-hidden", !overlayOpen);
    body.classList.toggle("noscroll", overlayOpen);
    overlay.scrollTop = 0;
    let element = e.target.id;
    let pickSpeakers = speakers.filter(speaker => speaker.id == element);
    console.log(pickSpeakers);
    document.querySelector(".info-div").innerHTML = `
    <div class="img-display"><img src=${pickSpeakers[0].picture} class="display-fullImage"/></div>
    <h2>${pickSpeakers[0].name}</h2
    <div>${pickSpeakers[0].info}</div>
    `;
  });
});

// var submitData = document.getElementById("submitData");

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

var deadline = "February 28 2020 23:59:59 GMT+0100";

function getTimeRemaining(endTime) {
  let time = Date.parse(endTime) - Date.parse(new Date());

  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let day = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    total: time,
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
function updateClock() {
  var times = getTimeRemaining(deadline);
  days.innerHTML = ("0" + times.day).slice(-2);
  hours.innerHTML = ("0" + times.hours).slice(-2);
  minutes.innerHTML = ("0" + times.minutes).slice(-2);
  seconds.innerHTML = ("0" + times.seconds).slice(-2);
  if (times.total <= 0) {
    clearInterval(timeInterval);
  }
}
updateClock();

var timeInterval = setInterval(updateClock, 1000);

var form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  var firstName = document.querySelector(".firstName").value;
  var lastName = document.querySelector(".lastName").value;
  var nameOfSchool = document.querySelector(".nameOfSchool").value;
  var schoolAddress = document.querySelector(".schoolAddress").value;

  var homeAddress = document.querySelector(".homeAddress").value;
  var returnDestination = document.querySelector(".returnDestination").value;
  var parentPhoneNumber = document.querySelector(".parentPhoneNumber").value;
  var stateOfResidence = document.querySelector(".stateOfResidence").value;
  var allergies = document.querySelector(".allergies").value;
  e.preventDefault();
  class Information {
    constructor(
      firstName,
      lastName,
      homeAddress,
      returnDestination,
      parentPhoneNumber,
      stateOfResidence,
      nameOfSchool,
      schoolAddress,
      allergies
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.homeAddress = homeAddress;
      this.returnDestination = returnDestination;
      this.parentPhoneNumber = parentPhoneNumber;
      this.stateOfResidence = stateOfResidence;
      this.nameOfSchool = nameOfSchool;
      this.schoolAddress = schoolAddress;
      this.allergies = allergies;
    }
  }

  var newInfo = new Information(
    firstName,
    lastName,
    homeAddress,
    returnDestination,
    parentPhoneNumber,
    stateOfResidence,
    nameOfSchool,
    schoolAddress,
    allergies
  );
});
