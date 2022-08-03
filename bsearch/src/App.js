import {useRef, useState,useEffect }from 'react';

function App() {

const data=useRef();
const[response, setResponse]=useState([]);

// useEffect(()=>{
  
// },[])





const   srchFromApi= async (names)=>{
  // let list=await api(names);
 return await [names,names,names,names];
  // return list;
}


// console.log(response);

const searchDomain=()=>{



    let count=0;
  let domainList=data.current.value.split(" ");
  domainList.map(e=>srchFromApi(e).then((res)=>{
   count++;
    console.log(response,count); 
  setResponse([...response,...res]);
  console.log(res,count);

})); 
// console.log(response,"final datas");
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