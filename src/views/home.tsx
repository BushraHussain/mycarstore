import Features from "../../components/features"
import Footer from "../../components/footer"
import { Hero } from "../../components/hero"
import Newsletter from "../../components/newsletter"
import Products from "../../components/products"
import Promotion from "../../components/promotion"
export default function HomeView() {
    return(
        <div>
            <Hero />
            <Promotion />
            <Products />
            <Features />
            <Newsletter />
        </div>
        
    )
}