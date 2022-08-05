import React from 'react'
import { useState } from 'react';
// import axios from 'axios';
function Utrust() {

  const [userDate , setuserData] = useState({});
   const [response,setresponse]=useState("");

   fetch('https://merchants.api.utrust.com/api/session', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        "type": "session",
        "attributes": {
          "email": "ajay997354@gmail.com",
          "password": "Ajay1234@"
        }
      }
    })
  }).then(res => res.json()).then(res => {

    // console.log("Received data", res);

    // const tkn = res.data.attributes.token;
    // const id = res.data.id;

    // console.log("Token ", tkn);
    // console.log("Id", id);


  }
  );

  const order=()=>{

  fetch('https://merchants.api.utrust.com/api/stores/orders', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": "Bearer u_live_api_f32f0bb2-ab77-4a24-ad3a-fe679047113b"
    },
    body: JSON.stringify(
      {
        data: {
          "type": "orders",
          "attributes": {
            "order": {
              "reference": "order-1977",
              "amount": {
                "total": "1090.00",
                "currency": "USD",
                "details": {
                  "subtotal": "98.00",
                  "shipping": "10.00",
                  "tax": "3.00",
                  "discount": "2.00"
                }
              },
              "return_urls": {
                "return_url": "http://example.com/return",
                "cancel_url": "http://example.com/cancel",
                "callback_url": "http://example.com/callback"
              },
              "line_items": [
                {
                  "sku": "tsh-6110",
                  "name": "T-Shirt White Large",
                  "price": "100.00",
                  "currency": "USD",
                  "quantity": 5
                }
              ]
            },
            "customer": {
              "first_name": userDate.fname,
              "last_name": userDate.lname,
              "email": "ajay997354@gmail.com",
              "address1": userDate.addr,
              "address2": "7th Floor",
              "city": userDate.city,
              "state": userDate.state,
              "postcode": userDate.pascode,
              "country": "US"
            }
          }
        }
      }




    )
  }).then(res => res.json()).then(res => {
      
  // console.log(res);

if(res?.errors){
  console.error("dkgvfdhfd",res?.errors)
}else{
  console.log("work done",res)
}
    // setresponse(res);
    // console.log("account creation data ", res);

    // const tkn=res.data.attributes.token;
    // const id=res.data.id;

    // console.log("Token ",tkn);
    // console.log("Id",id);


  }
  );

  }







// let fun;

const updateData=(e)=>{
  e.preventDefault();
let data=userDate;
data[e.target.name]=e.target.value;

setuserData(data);
// clearTimeout(fun);
console.log("check",userDate);

// setName("rahuilt");
}












  return (
    <div>
    <div> {JSON.stringify(response)} </div>

    <input type="text" name="fname" value={userDate.fname} placeholder="Enter your first name "  onChange={e=>{updateData(e)}} />
    
    <input type="text" name="lname" value={userDate.lname}  placeholder="Enter your second name " onChange={e=>{updateData(e)}} />
    
    <input type="email" name="email" value={userDate.email} placeholder="Enter your email  "  onChange={e=>{updateData(e)}} />

    <input type="text" name="addr" value={userDate.addr} placeholder="Enter your  address "  onChange={e=>{updateData(e)}} />
    
    <input type="text" name="city" value={userDate.city} placeholder="Enter your  city "   onChange={e=>{updateData(e)}} />
    
    <input type="text" name="state" value={userDate.state} placeholder="Enter state "  onChange={e=>{updateData(e)}} />
    
    <input type="text" name="pascode" value={userDate.pascode} placeholder="Enter passcode "   onChange={e=>{updateData(e)}} />
    
    <input type="text" name="country" value={userDate.country} placeholder="Enter country "  onChange={e=>{updateData(e)}} />
     
    
   <input type="button" value="place order " onClick={()=>order()}  />









    </div>
  )
}

export default Utrust