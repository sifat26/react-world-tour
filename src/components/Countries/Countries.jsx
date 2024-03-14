import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
      // console.log(data);
    };
    loadCountries();
  }, []);

  const handleVisitedCountry= country=>{
    console.log('Visisted country');
    // console.log(country);
    const newVisitedCountry = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountry);
  }
  // console.log(visitedCountries)
  const handleVisitedFlag=flag=>{
    // console.log('Flag adding');
    // console.log(flag);
    const newVisitedFlag = [...visitedFlags,flag]
    setVisitedFlags(newVisitedFlag);

  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Contries: {visitedCountries.length}</h5>
        <ul>
        {
          visitedCountries.map(country=>
            // eslint-disable-next-line react/jsx-key
            <li>{country.name.common}</li>

          )
        }
        </ul>
        <div className="flag-container">
          {
            visitedFlags.map(flag=>
              // eslint-disable-next-line react/jsx-key
              <img src={flag}></img>)
          }
          
        </div>
        
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlag={handleVisitedFlag}
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
