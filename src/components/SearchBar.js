import React,{useState }from 'react';


function SearchBar({onFormSubmit}){
    const [term,setTerm]=useState('');
   
  
      const  onSubmit=event=>{
        event.preventDefault();
   onFormSubmit(term); 
    };

    return (
        <div className="ui segment">
        <form className="ui-from" onSubmit={onSubmit}>
            <div className="field">
                <label>Video Search : </label>
                <input type="text"  value={term} onChange={(event)=>setTerm(event.target.value) }/>
                </div>
                </form>
                </div>

    );
};



export default SearchBar;