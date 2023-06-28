// import { NextResponse, NextRequest } from "next/server";
// import { db, cartTable } from "@/lib/drizzle";
// import { v4 as uuid } from "uuid";
// import { cookies } from "next/headers";

// export const GET = async (request: NextRequest) => {
//   try {
//     const res = await db.select().from(cartTable);
//     return res;
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json("Error Message received");
//   }
// };

// export const POST = async (request: NextRequest) => {
//   const uid = uuid();
//   const setCookies = cookies();
//   if (!cookies().has("user")) {
//     setCookies.set("user", uid);
//   }
//   const req = await request.json();
//   try {
//     const res = await db.insert(cartTable).values({
//       product_id: req.product_id,
//       user_id: cookies().get('user')?.value as string,
//       quantity: req.quantity,
//     });
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
