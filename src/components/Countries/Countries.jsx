import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        const loadCountries=async()=>{
            const res=await fetch('https://restcountries.com/v3.1/all')
            const data=await res.json();
            setCountries(data);
            // console.log(data);
        }
        loadCountries()
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country=><Country 
                    key={country.cca3}
                    cuuntry={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;