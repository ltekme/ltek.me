import { BannerContent } from "@/src/components/Ui";
import Link from 'next/link'

export default function NotFound() {
  return (<BannerContent headingText='Item not found ⚠️'>
    <p>The Item you're looking for is not found or not available.</p>
    Navgate: <Link href={"/"} className='text-accent hover:text-accentHover'>Home</Link>
  </BannerContent>)
}