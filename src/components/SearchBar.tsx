import React from "react";

//searchbar:
//props: 

const SearchBar = (props: any) => {
   return (
      <input 
      key="random1"
     value={props.input}
     placeholder={"search country"}

     onChange = {(e) => props.onChange(e.target.value)}
    />
  );
}

// onChange={(e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value)}

export default SearchBar;
   

 