import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';


//bruker:setter input via setInput
//contrylistDefault - denne er alltid originallisten med all dataen
//countrylist - det er denne som blir rendret




const SearchPage = (props:any) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState( [{name:""}] );
  const [countryList, setCountryList] = useState([{name:""}]);

  //denne henter all dataen via APIet
  // await: venter til har fetchet ferdig data før gjør en .then 
  

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

//input er inputen -> 

  const updateInput = async (input: any) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
  
  

  //får inn en input, og kjører en onChange funksjon (searchbar har to props)
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage;