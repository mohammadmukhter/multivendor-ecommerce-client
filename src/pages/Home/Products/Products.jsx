import img from "../../../assets/banner/chicken-red-curry-black-cup (1).jpg";

const Products = () => {
  return (
    <div className="shadow-[2px_3px_3px_3px_rgba(0,199,100,0.05)] bg-white px-4 py-8 my-12 rounded-md">
      <div className="text-xl mb-4 flex justify-between">
        <h2>products</h2>
        <button className="bg-transparent border-[1px] rounded-md  text-gray-900 px-3 py-1 uppercase font-semibold hover:bg-gray-900 hover:text-white">
          show more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="p-4">
            <h2 className="card-title">mobile 350</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100  rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100  rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100  rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
          <figure className="p-4 ">
            <img className="rounded-md" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>$20000</p>
            <p>33pc left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
