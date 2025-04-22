// const numSteps = 20.0;

// let boxElement;
// let prevRatio = 0.0;
// let increasingColor = "rgb(40 40 190 / ratio)";
// let decreasingColor = "rgb(190 40 40 / ratio)";

// // Set things up
// window.addEventListener(
//   "load",
//   (event) => {
//     boxElement = document.querySelector("#box");

//     createObserver();
//   },
//   false
// );

// function createObserver() {
//   let observer;

//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList(),
//   };

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.backgroundColor = increasingColor.replace(
//         "ratio",
//         entry.intersectionRatio
//       );
//     } else {
//       entry.target.style.backgroundColor = decreasingColor.replace(
//         "ratio",
//         entry.intersectionRatio
//       );
//     }

//     prevRatio = entry.intersectionRatio;
//   });
// }
// function buildThresholdList() {
//   let thresholds = [];
//   let numSteps = 20;

//   for (let i = 1.0; i <= numSteps; i++) {
//     let ratio = i / numSteps;
//     thresholds.push(ratio);
//   }

//   thresholds.push(0);
//   return thresholds;
// }

// const btnElement = document.querySelector("#myButton");

// btnElement.addEventListener(
//   "click",
//   () => {
//     console.log("Button clicked!");
//   },
//   { once: true }
// );

// window.addEventListener("scroll", (e) => {
//   console.log("Scrolling...");
// }, { passive: false });

window.addEventListener(
  "scroll",
  (e) => {
    // e.preventDefault(); // 🚫 This doesn't even work for scroll
    console.log("Trying to stop scroll");
  } /*{ passive: true }*/
);

document.getElementById("myLink").addEventListener("click", function (event) {
  event.preventDefault(); // stops the link from going to example.com
  console.log("Default behavior stopped");
});
