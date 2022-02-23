import React from 'react';

const Box = (props) => {
    const { boxColorArray } = props;

    return (
        <div>
            {
                boxColorArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "20px",
                        height: "150px",
                        width: "150px",
                        borderRadius: "5px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
}

export default Box;