require("dotenv").config();

const stripe = require('stripe')(process.env.STRIPE_SECRET)


exports.handler = async (event) => {

    try {
        const {amount} = JSON.parse(event.body);
        console.log(amount)
        const paymentIntent = await stripe.paymentIntents.create({
           amount,
           currency: 'inr' ,
           payment_method_types: ["card"]
        })
      
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    }

    catch(error) {
      console.log({error},'error')
 
      return {
        status: 400,
        body: JSON.stringify({error})
      }
    }

}