import { useState } from "react";

const ObjectCreationForm = () => {
    //object to hold values for item name, width, and length
    const [objectToCreate, setObjectToCreate] = useState({
        name: "",
        width: 0,
        length: 0
    });
    //event handler for object creation fields
    const handleChange = (event) => {
      setObjectToCreate((objectToCreate) => ({
        ...objectToCreate,
        [event.target.id]: event.target.value,
      }));
    };

    //event handler for clicking button to create object
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(objectToCreate)
    }

    return (
      <>
        <div className="m-2">
          <h3 className="text-center text-xl">Object Creation</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Item:</label>
              <input
                id="name"
                type="text"
                className="border-2 rounded-md border-black w-1/2 max-w-xs m-2"
                value={objectToCreate.name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="width">Width:</label>
              <input
                id="width"
                type="number"
                className="border-2 rounded-md border-black w-10 m-2"
                value={objectToCreate.width}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="length">Length:</label>
              <input
              id="length"
                type="number"
                className="border-2 rounded-md border-black w-10 m-2"
                value={objectToCreate.length}
                onChange={handleChange}
              ></input>
            </div>
          <button>Create object</button>
          </form>
        </div>
      </>
    );
}

export default ObjectCreationForm;