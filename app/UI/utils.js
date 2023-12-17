//file to hold helper functions

const createObject = (item) => {
  //create div for object
  const newObject = document.createElement("div");
    newObject.className = "createdObject"
  //set dimensions of div
  newObject.style.cssText += `border-color:black;border-width:1px;height:${item.length}px;width:${item.width}px;`;

  //add text for name of item
  newObject.innerHTML = `<p class=objectText>${item.name}</p>`;

  //create event listeners
  //event listener to rotate object on double click
   newObject.addEventListener("dblclick", (e) => {
    const currentHeight = e.target.style.height;
    const currentWidth = e.target.style.width;
    e.target.style.height = currentWidth;
    e.target.style.width = currentHeight;
   })
  





  //append new div to body
  document.body.append(newObject);
}


//exports
export {createObject}