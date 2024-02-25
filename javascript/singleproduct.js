// increase and decrease product
document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const decreaseBtn = document.getElementById("decreaseBtn");
  const increaseBtn = document.getElementById("increaseBtn");

  decreaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(numberInput.value, 10);
    if (currentValue > 0) {
      numberInput.value = currentValue - 1;
    }
  });

  increaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(numberInput.value, 10);
    numberInput.value = currentValue + 1;
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
