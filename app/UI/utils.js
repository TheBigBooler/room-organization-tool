//file to hold helper functions
import { isMobile } from "react-device-detect";

const createObject = (item) => {
  //create div for object
  const newObject = document.createElement("div");
  newObject.className = "createdObject";
  //set dimensions of div
  newObject.style.cssText += `border-color:black;border-width:1px;height:${item.length}px;width:${item.width}px;`;

  //add text for name of item
  newObject.innerHTML = `<p class=objectText>${item.name}</p>`;

  //create event listeners
  //event listener to rotate object on double click
  //use react device detect to check if user is on mobile device to determine proper event listener
  if (isMobile) {
    let lastClick = 0;
    newObject.addEventListener("touchstart", (e) => {
    //   e.preventDefault(); // to disable browser default zoom on double tap (also cancels out hover event)
      let date = new Date();
      let time = date.getTime();
      const time_between_taps = 200; // 200ms
      if (time - lastClick < time_between_taps) {
        const currentHeight = e.target.style.height;
        const currentWidth = e.target.style.width;
        e.target.style.height = currentWidth;
        e.target.style.width = currentHeight;
      }
      lastClick = time;
    });
  } else {
    newObject.addEventListener("dblclick", (e) => {
      const currentHeight = e.target.style.height;
      const currentWidth = e.target.style.width;
      e.target.style.height = currentWidth;
      e.target.style.width = currentHeight;
    });
  }

  //append new div to body
  document.body.append(newObject);
};

//exports
export { createObject };
