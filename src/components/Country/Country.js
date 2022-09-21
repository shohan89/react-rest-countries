import React from 'react';
import "./Country.css"

const Country = (props) => {
  const {population, capital, name, flags} = props.country;
  return (
    <div className='country'>
      <img src= { flags.png } alt="" />
      <h2>Country Name: { name.common }</h2>
      <h4>Capital city: { capital ? capital : "This Country has no Capital!" }</h4>
      <h5>Population: { population ? population : "No one lives here!" }</h5>
    </div>
  );
};

export default Country;