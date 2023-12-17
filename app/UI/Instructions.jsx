import { useState } from "react";

const Instructions = () => {
    const [hidden, setHidden] = useState(true);

    return (
        //there's a button to click which displays the instructions, and following the instructions is a button to hide them
      <div className="m-2">
        {/* ternary operator to hide/display instructions */}
        {hidden ?
        <button onClick={() => {
            setHidden(false)
        }}>Click here for instructions</button>
        :
        <>
        <h1>Welcome to the room organization tool!</h1>
        <ul>
          <li>
            To get started, first create an object with the dimensions of your
            room. You can add multiple and align them if your room is not a
            perfect rectangle.
          </li>
          <li>
            Next, create objects for your room. Include a name and the
            length/width in total inches.
          </li>
          <li>
            Once created, you can drag the objects around your
            room to position them. Double-clicking an object will rotate it 90 degrees.
          </li>
        </ul>
        <button onClick={() => {
            setHidden(true)
        }}>Hide instructions</button>
        </>
        //button that hides instructions ^
        }

      </div>
    );
}

export default Instructions;