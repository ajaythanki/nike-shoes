import { star } from "../assets/icons";
import Button from "../components/Button";

const ProductHero = ({ imgURL, name, price }) => {
  return (
    <div className="w-full flex sm:h-3/5 xl:flex-row flex-col justify-center pt-28 md:pt-40 h-4/5 gap-10 max-container">
      <div className="relative flex-1 flex justify-center items-center w-full h-full">
        <img
          src={imgURL}
          alt="shoe collection"
          className="object-contain md:w-[610px]"
        />
      </div>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start px-10 w-full z-10">
        <div className="flex gap-3 w-full items-center justify-center xl:justify-start">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat font-bold text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>

        <h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          {name}
        </h1>
        <div className="flex flex-col md:flex-row xl:flex-col items-center xl:items-start gap-4 justify-around w-full">
          
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor
          modi tenetur ut illo perferendis ab? Ullam expedita voluptate
          laudantium veritatis quae numquam accusantium sed? Quidem aliquid
          voluptatum in voluptate!.
        </p>

        <div className="max-sm:w-full flex flex-col xl:flex-row items-center justify-center gap-4">
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            {price}
          </p>
          <Button label="Add to cart" />
        </div>
        </div>

      </div>
    </div>
  );
};

export default ProductHero;