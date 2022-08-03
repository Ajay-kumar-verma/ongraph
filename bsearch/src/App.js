import {useRef, useState,useEffect }from 'react';

function App() {

const data=useRef();
// const[response, setResponse]=useState([]);


const   srchFromApi= async (list)=>{
 
 return [list, list, list, list];
 
//  let list=await fetch("url&l=list");
//  return list.json();

}


// console.log(response);

const searchDomain=()=>{

  let domainList=data.current.value.split(" ");

  srchFromApi(domainList).then((res)=>{

  console.log(res);


});

}





  return (
    <>
    <input type='text'   ref={data}  />
    <input type="button" value="Search"  
     onClick={()=>searchDomain()}


    
    /> 
    
    </>
    
    );
}

export default App;