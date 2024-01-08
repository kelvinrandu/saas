import Stripe from "stripe"

export const stripe = new Stripe("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", {
  apiVersion: "2023-10-16",
  typescript: true,
})
