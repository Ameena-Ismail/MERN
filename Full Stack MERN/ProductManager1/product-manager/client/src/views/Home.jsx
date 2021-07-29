import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { Link } from '@reach/router';

const Home = props =>{
    const [allGames, setAllgames] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=> setAllgames(res.data))
            .catch(err=> console.log(err))
    },[])
    return(
        <>
        <Form/>
        <br />
        {
            allGames?
            allGames.map((game,i)=>{
                return <div>
                    <Link to={`/products/${game._id}`}>{game.title}</Link></div>
            })
            :""
        }
        </>
    )
}
export default Home