import Script from 'next/script';
import React from 'react'
import axios from 'axios';
import Razorpay from 'razorpay';

function page(request) {
    console.log(request.params.id)
    const makePayment = async ()=> {
        const {data} = await axios.post("http://localhost:3000/api/razorpay", {id : request.params.id});
        console.log(data);
        const options = {
            key_id : process.env.RAZORPAY_KEY,
            key_secret : process.env.RAZORPAY_SECRET,
            name : "Kalua",
            currency : data.currency,
            amount : data.amount,
            order_id : data.id,
            description : "Thank you",
            handler : function(response){},
            prefill : {
                name : "Aditya",
                email : "adi@gmail.com",
                contact : 9876543210,
            }
        };

        var paymentObj = await new Razorpay(options);

        paymentObj.open();        

    }
    makePayment();
  return (
    <>
    <Script src="http://checkout.razorpay.com/v1/checkout.js"/>
    </>
  )
}

export default page
