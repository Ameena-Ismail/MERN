import React from 'react'
import Button from '@material-ui/core/Button';


const TapsShow = (props) => {

    const taps=["Tap 1","Tap 2","Tap 3"];

    const clickhandler = (e,x,i) =>{
        e.preventDefault();
        // setMsg(x+ " was taped");
        props.data(x+ " was taped");
    }   
    return (
        <div>
            {
                taps.map((value,i)=>{
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickhandler(e,value,i)}>
                    Button {i+1}
                </Button>
                })
            }
        </div>
    )
}

export default TapsShow