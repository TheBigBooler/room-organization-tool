import { useState } from "react";

const Instructions = () => {
    const [hidden, setHidden] = useState(true);

    return (
        
      <div>
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
            Next, create objects for your room. Include a description, and the
            length/width either in feet with inches or total inches.
          </li>
          <li>
            Once created, you can click and hold to drag the objects around your
            room. Double-clicking an object will rotate it 90 degress.
          </li>
        </ul>
        <button onClick={() => {
            setHidden(true)
        }}>Hide instructions</button>
        </>
        }

      </div>
    );
}

export default Instructions;