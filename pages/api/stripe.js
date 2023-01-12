import Stripe from 'stripe';

const stripe = new Stripe (process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method ==='POST') {
    console.log(req.body.cartItems)
    try {
        const params = {
           submit_type: 'pay',
           mode: 'payment',
           payment_method_types: ['card'],
           billing_address_collection:'auto',
           shipping_options:[{shipping_rate:'shr_1MP9r6BKlAbdVtvC1LqgjL2H'},
          
               {shipping_rate:'shr_1MP44VBKlAbdVtvCI1YyFtul'}],

            line_items: req.body.map((item) =>{
               const img = item.image[0].asset._ref;
               const newImage = img.replace('images-', 'https://cdn.sanity.io/images/wdve9u02/production/')
               .replace('-png','.png');  // change image file type
              
               return {

                price_data:{
                    currency:'ngn',
                    product_data:{
                        name:item.name,
                        images:[newImage],
                    },
                    unit_amount:item.price * 100,
                },
                adjustable_quantity:{
                    enabled:true,
                    // minimum: 1,
                },
                quantity:item.quantity
            
               }
            }),
            
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

