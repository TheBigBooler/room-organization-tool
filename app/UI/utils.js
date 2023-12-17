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
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    
      newObject.onmousedown = dragMouseDown;
    

    function dragMouseDown(e) {
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      newObject.style.top = newObject.offsetTop - pos2 + "px";
      newObject.style.left = newObject.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  
  





  //append new div to body
  document.body.append(newObject);
}


//exports
export {createObject}