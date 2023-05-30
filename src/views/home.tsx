import Features from "../../components/features"
import { Hero } from "../../components/hero"
import Products from "../../components/products"
import Promotion from "../../components/promotion"
export default function HomeView() {
    return(
        <div>
            <Hero />
            <Promotion />
            <Products />
            <Features />
        </div>
        
    )
}