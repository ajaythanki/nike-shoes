import { Hero } from "../sections"
import Nav from "./Nav"

const Product = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b" id="home">
        <Hero/>
      </section>
    </main>
  )
}

export default Product