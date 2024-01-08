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

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "INV-" + date,
              },
              unit_amount: body?.amount * 100 || 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        cancel_url: `${host}`,
        success_url: `${host}/landing`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ error: "Error checkout session" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}