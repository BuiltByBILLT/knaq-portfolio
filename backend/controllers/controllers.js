import Stripe from 'stripe'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
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

export const manualWaitlist = async (req, res, next) => {
    const email = req.body.email
    const __dirname = path.resolve()
    fs.appendFileSync(path.resolve(__dirname, 'backend', 'data', 'waitlist.txt'), email)
    fs.appendFileSync(path.resolve(__dirname, 'backend', 'data', 'waitlist.txt'), `\n`)
    console.log(email)
    res.send("success")
}