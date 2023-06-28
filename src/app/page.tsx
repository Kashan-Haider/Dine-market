import Image from 'next/image'
import {client} from "@/lib/sanityClient"
import { Image as SanityImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import Header from './components/Header'
import Promotions from './components/Promotions'
import Vintage from './components/Vintage'
import Newsletter from './components/Newsletter'
export const getProductData = async()=>{
const res = await client.fetch(`*[_type=="product"]{
  title,
  image,
  price,
  _id,
  description,
  category -> {name},
}`)
  return res
}

interface productInterface {
  title: string,
  image: SanityImage,
  price: number,
  id: number,
  description: string,
  category: {name: string},
}

export default async function Home() {
  const data : productInterface[] = await getProductData()
  return (
    <div className='px-3 md:px-10 lg:px-24 pt-3 md:pt-7' >
      <Header/>
      <Promotions/>
      <Vintage/>
      <Newsletter/>
    </div>
  )
}
