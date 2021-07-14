import React,{ Component } from "react";
import Adv from "../adv/adv";
import Sub from "../sub/sub";
import'./main.css';
class Main extends Component{
    render(){
        return(
            <div className='right' >
                <Sub/>
                <Sub/>
                <Sub/>
                <Adv/>
            </div>
        );
    }
}
export default Main;