$(document).ready(function() {
  $("li").click(function() {
    let id = $(this).attr("id");
    if (id == undefined) {
      return;
    } else {
      $("html, body").animate(
        {
          scrollTop: $(`#${id}1`).offset().top
        },
        500
      );
    }
  });
});

document.querySelector(".nav-btn").addEventListener("click", function(e) {
  document.querySelector(".menu").classList.toggle("active");
});
const li = document.querySelectorAll(".nav-menu li");

li.forEach(li => {
  li.addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
  });
});

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

let counterSection = document.querySelector(".counter-section").offsetWidth;

var button = document.getElementById("slide");
button.onclick = function() {
  var container = document.getElementById("container");
  scrollAmount = 0;
  var slideTimer = setInterval(function() {
    container.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= counterSection) {
      window.clearInterval(slideTimer);
    }
  }, 15);
};

var back = document.getElementById("slideBack");
back.onclick = function() {
  var container = document.getElementById("container");
  scrollAmount = 0;
  var slideTimer = setInterval(function() {
    container.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= counterSection) {
      window.clearInterval(slideTimer);
    }
  }, 15);
};

$(function() {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (
      isScrolledIntoView($this) &&
      !$this.data("isCounting") &&
      current < $this.data("count")
    ) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function() {
        $this.data("isCounting", false);
        count($this);
      }, 50);
    }
  }

  $(".c-section4").each(function() {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".c-section4").each(function() {
      count($(this));
    });
  }

  $(window).scroll(function() {
    startCount();
  });

  startCount();
});
