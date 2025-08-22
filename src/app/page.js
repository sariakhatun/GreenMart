import Image from "next/image";
import Banner from "./components/Banner";
import FeaturesSection from "./components/FeaturesSection";
import WhyChoose from "./components/whyChoose";
import products from '../../public/services.json'
import ProductHighlights from "./components/ProductHighlights";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  let session = await getServerSession(authOptions)
  return (
    <div className="font-sans">
      <p className="mt-24 font-bold text-2xl">From client component</p>
      <UserInfo></UserInfo>
      {JSON.stringify(session)}
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <WhyChoose></WhyChoose>
      <ProductHighlights products={products}></ProductHighlights>
      
    </div>
  );
}
