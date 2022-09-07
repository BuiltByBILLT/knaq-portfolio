import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()
const stripe = new Stripe(process.env.STRIPE_KEY)

export const stripeCreateSession = async (req, res, next) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: "payment",
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: { name: 'feathers' },
                unit_amount: 1
            },
            quantity: req.body.quantity
        }],
        success_url: process.env.STRIPE_SUCCESS + "/purchase",
        cancel_url: process.env.STRIPE_CANCEL
    })
    res.send(session.url)
}