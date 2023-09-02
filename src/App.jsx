import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b" id="home">
        <Hero/>
      </section>
      <section className="padding" id="products">
        <PopularProducts/>
      </section>
      <section className="padding" id="about-us">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10" id="services">
        <Services/>
      </section>
      <section className="padding" id="special-offers">
        <SpecialOffers/>
      </section>
      <section className="bg-pale-blue padding" id="customer-reviews">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full" id="contact-us">
        <Subscribe/>
      </section>
      <footer className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </footer>
    </main>
  );
}

