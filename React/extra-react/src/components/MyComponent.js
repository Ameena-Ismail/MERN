import React from 'react'
import Button from '@material-ui/core/Button';


//without lifting//

const MyComponent=()=> {
    const taps=["Tap 1","Tap 2", "Tap 3"];
    const [msg,setMsg]=useState("");


    const clickhandler=(e,value,i) =>{
        e.preventDefault();
        setMsg(x+ "was taped");

    }


    return (
        <div>
            {

                taps.map((value,i)=>{
                    return<Button variant="contained" color="primary" Key={i} onClick={(e)=>clickhandler(e,value,i)}> 
                    {value}
                    </Button>
                })
            }
            <p>

            </p>
        </div>

    )
}

export default MyComponent