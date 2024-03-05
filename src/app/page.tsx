import Header from "@/components/Header/header";
import PromoHome from "@/components/promoHome/promoHome";
import About from "@/components/about/about";
import Features from "@/components/features/Features";
import Plan from "@/components/plan/Plan";
import Network from "@/components/network/Network";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <PromoHome/>
        <About/>
        <Features/>
        <Plan/>
        <Network/>
        <Footer/>
      </div>
    </main>
  );
}
