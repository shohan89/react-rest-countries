import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
  //? define user state here
  const [ countries, setCountries ] = useState([])
  useEffect( ()=> {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data)) //* setCountries set the countries value to the array[0]
  }, [] )
  return (
    <div>
      <h2>Number of countries: { countries.length }</h2>
    <div className='countries-container'>
      {
        countries.map(country => <Country country= { country } key= { country.cca3 }></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;