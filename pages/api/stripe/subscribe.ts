import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next"

//@ts-ignore
const stripe = new Stripe(process.env.NEXT_STRIPE_API_KEY);
const host = process.env.NEXTAUTH_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  if (method === "POST") {
    try {
      const date = new Date().toISOString();
      const quantity = 1
      const { name, email, id, productId, priceId, recurring } = req.body
      const success_url = process.env.NEXTAUTH_URL + "/all-template"
      const failed_url = process.env.NEXTAUTH_URL + "/subscription"
      const metadata = {}
      const customer = await stripe.customers.create({
        email,
       name,
        metadata: {
          user_id: email, // Or anything else
        },
      })
      console.log('customer',customer)


      const session = await stripe.checkout.sessions.create({
   
  success_url: success_url,
  payment_method_types: ["card"],
  billing_address_collection: "required",
  customer: customer?.id,
  customer_update: {
    address: "auto",
  },
  line_items: [
    {
      price: priceId,
      
      quantity: 1,
    },
  ],
  mode: 'subscription',

      });
      console.log('session',session)

      // res.status(200).json({ sessionId: session.id });
      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      // console.log('here',error)
      res.status(500).json({ error: "Error checkout session" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}