import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false);
    const handleVisited=() => {
        setVisited(!visited);

    }
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ?'visited':'nonvisited'}`}>
            <h3 style={{color: visited?'black':'white'}}>Name : {name?.common}</h3>
            <img style={{height:'150px', weight:'200px'}} src={flags.png} alt="" />
            <p >Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p><br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag
                </button>
                <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>

            <button onClick={handleVisited}>{visited?'Visited':'Not Visited'}</button>
            {
                visited ? <p>You have visited this country</p> : <p>I Want to visit</p>
            }

            
        </div>
    );
};

export default Country;