import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Image as SanityImage } from "sanity";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, { apiVersion: "2022-11-15" });

interface productInterface {
  title: string,
  image: SanityImage,
  price: number,
  _id: number,
  category: {name: string},
  sub_category: string,
  quantity: number,
}

export async function POST(request: NextRequest) {
  const body : productInterface[] = await request.json();
  try {
    if (body.length> 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NNsveEIB5NtzU7T7iecV3IV" },
          { shipping_rate: "shr_1NNswPEIB5NtzU7TiSUi57Kb" },
        ],
        line_items: body.map((item: productInterface) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 100,
            },
          };
        }),
        success_url: `${request.headers.get("origin")}/?success=true`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({session});
    } else {
      return NextResponse.json("Invalid request: No data found");
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json(err);
  }
}
