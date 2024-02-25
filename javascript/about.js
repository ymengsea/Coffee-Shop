// video popup
$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});

// Count up section
document.addEventListener("DOMContentLoaded", function () {
  const counters = [
    { id: "countUp1", targetValue: 150, duration: 2000 },
    { id: "countUp2", targetValue: 75, duration: 1500 },
    { id: "countUp3", targetValue: 1000, duration: 2000 },
  ];

  counters.forEach((counter) => {
    const counterElement = document.getElementById(counter.id);
    const step = (counter.targetValue / counter.duration) * 10; // 10ms interval

    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < counter.targetValue) {
        currentValue += step;
        counterElement.textContent = Math.ceil(currentValue);
        setTimeout(updateCounter, 10);
      } else {
        counterElement.textContent = counter.targetValue;
      }
    };

    updateCounter();
  });
});
// wow animation
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
