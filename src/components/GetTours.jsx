import React, { useEffect, useState } from 'react'
import './GetTours.css';

function GetTours() {

    const [getTours, setgetTours] = useState([]);
    const [tourtitle, setTourTitle] = useState(false);

    const [isloaded, setIsLoaded] = useState(false);

   
    const url = 'https://course-api.com/react-tours-project';

        const fetchData = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setgetTours(data);
        setIsLoaded(true);
        setTourTitle(true);
        console.log(data[0]);
    }

    useEffect(()=>{
       
        if(getTours.length===0){
            setTourTitle(false)
        }

    },[getTours]);
    const delTour = (id)=> {
        const newTours = getTours.filter((tour) => tour.id !== id);

        setgetTours(newTours);

    }

    // if(getTours.length===0){
    //     setTourTitle("No More Tours Remaining");
    // }
    const creatTours = (getTours)=>{
        return  <li id={getTours.id}>
                    <img src={getTours.image} alt="" />
                    <div className="details footer">
                        <p className="name-price"><span className="name">{getTours.name}</span><span className="price">{'$' + getTours.price}</span></p>
                        <p className="info">{getTours.info}</p>
                        <button className="del-Btn " onClick={()=>delTour(getTours.id)} >Not Interested</button>
                    </div>
                
                </li>
    }

  

    window.onload = ()=> {
        fetchData()
    }

    const refresh =()=>{
        fetchData()
    }
    let tours = getTours.map(creatTours);

    return (
        <>
        {
            !isloaded?<h1>Loading</h1>:
        
        <ul className='tour-contianer'>
            <h1 className="title">{tourtitle?"Our Tours":"No More Tour Remaining"}
                <hr />
            </h1>
            {
                getTours.length>0?<>{tours}</>:
                <button className="refreshBtn" onClick={refresh}>Refresh</button>
            }
                    
        </ul>
}
        </>
    )
    
}

export default GetTours
