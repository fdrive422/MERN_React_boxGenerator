import React, { useState } from 'react';

const Form = (props) => {
    const { boxColorArray, setBoxColorArray } = props;
    const [color, setColor] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setBoxColorArray([...boxColorArray, color]);
    }

    return (
        <div>
            <form onSubmit={submitHandler} style={{ margin: "20px" }}>
                <div>
                    <label> Color  </label>
                    <input
                        type="text"
                        name="color"
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <button> Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form; 