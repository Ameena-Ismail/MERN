import React, { useState } from 'react';

const Box = props => {

    const [boxState, setBoxState] = useState({
        color: "",
        colorList: []
    })

    const colorChange = event => {
        setBoxState({
            ...boxState,
            color: event.target.value
        })
    }

    const submitButton = event => {
        event.preventDefault();
        let newColorList = boxState.colorList.slice();
        newColorList.push(boxState.color);
        setBoxState({
            color: "",
            colorList: newColorList
        })
    }
    return (
        <div>
            <div>
                <form onSubmit={submitButton}>
                    <label>Color: </label>
                    <input value={boxState.color} type="text" onChange={colorChange} />
                    <input type="submit" value="add" />
                </form>
            </div>
            <div style={{display:"flex"}}>
                {
                    boxState.colorList.map((color , i)=>{
                        return(
                            <div key={i} style={{backgroundColor:color, width:"300px", height: "300px", margin: "5px", border: "solid 2px black" }}></div>
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default Box;