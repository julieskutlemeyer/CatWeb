import React from "react";

//{countryList=[]}

//denne får inn en props: liste med countries
//mapper contrylist om til en html-tag som displayer listen
const CountryList = (props: any) => {
   return (
    <>
     { props.countryList.map((data: any,index: any) => {
         if (data) {
           return (
             <div key={data.name}>
               <h1>{data.name}</h1>
        </div>	
           )	
         }
         return null
     }) }
     </>
   );
 }
 


 export default CountryList;