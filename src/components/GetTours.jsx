import React, { useState } from 'react'
import './GetTours.css';

function GetTours() {

    const [getTours, setgetTours] = useState([])



    const url = 'https://course-api.com/react-tours-project';

        const fetchData = async () =>{
        const response = await fetch(url);
        const data = await response.json();

        setgetTours(data);
        console.log(data[0]);
    }

    const delTour = (id)=> {
        const newTours = getTours.filter((tour) => tour.id !== id);

        setgetTours(newTours);
    }
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

    let tours = getTours.map(creatTours);

    return (
    
        <ul className='tour-contianer'>
            <h1 className="title">Our Tours
                <hr />
            </h1>
            
            {tours}         
        </ul>
    )
    
}

export default GetTours
