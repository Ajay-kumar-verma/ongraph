import React from 'react'
// import axios from 'axios';
function utrust() {
  
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
}).then(res=>res.json()).then(res=>{

  console.log("Received data",res);

  const tkn=res.data.attributes.token;
  const id=res.data.id;
  
  console.log("Token ",tkn);
  console.log("Id",id);


}
  );

  

  fetch('https://merchants.api.utrust.com/api/stores/orders', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Authorization":"Bearer u_live_api_f32f0bb2-ab77-4a24-ad3a-fe679047113b"
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
            "first_name": "John",
            "last_name": "Doe",
            "email": "ajay997354@gmail.com",
            "address1": "118 Main St",
            "address2": "7th Floor",
            "city": "New York",
            "state": "New York",
            "postcode": "10001",
            "country": "US"
          }
        }
      }
    }




  )
}).then(res=>res.json()).then(res=>{

  console.log("account creation data ",res);

  // const tkn=res.data.attributes.token;
  // const id=res.data.id;
  
  // console.log("Token ",tkn);
  // console.log("Id",id);


}
  );






















  
  return (
    <div>
   








    </div>
  )
}

export default utrust