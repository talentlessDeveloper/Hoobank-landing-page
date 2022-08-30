import Bank from "./components/Bank/Bank";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Num from "./components/Number/Num";
import Product from "./components/Product/Product";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App bg-primary overflow-x-hidden">
      <Header />

      <Hero />

      <Num />

      <Features />

      <Product />

      <Bank />

      <Testimonials />

      <GetStarted />

      <Footer />
    </div>
  );
}

export default App;
