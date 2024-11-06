import HomeHeader from '../components/HomeHeader';
import Card from '../components/Card';
import { imagesLinksSweet } from '../data/ImageData';
const Sweet = () => {
  return (
    <>
      <HomeHeader />
      <section className=" md:mx-auto flex flex-col justify-around md:flex-row lg:md:flex-row  md:px-[5.2rem]  md:py-10">
        <div className="left flex">
          <ul className="category w-full md:w-[300px] ">
            <li
              className="h-[65px] bg-dessert-green font-bold
             flex justify-center items-center text-2xl text-white"
            >
              <a href="#">所有甜點(48)</a>
            </li>
            <li className="h-[65px] bg-homebackground-green font-bold text-dessert-green flex justify-center items-center text-2xl">
              <a href="#">本日精選(10)</a>
            </li>
            <li className="h-[65px] font-bold text-dessert-green flex justify-center items-center text-2xl">
              <a href="#">人氣推薦(26)</a>
            </li>
            <li className="h-[65px] font-bold text-dessert-green flex justify-center items-center text-2xl">
              <a href="#">新品上市(12)</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="flex flex-wrap justify-center px-10 md:px-0 gap-5 lg:grid lg:grid-cols-2 lg:gap-20">
            {imagesLinksSweet.map((image, index) => (
              <Card key={index} bgBackground={image} />
            ))}
          </div>

          <div className="pages flex justify-center md:justify-end  my-14">
            <div className="pagination flex">
              <div className="w-[60px] h-[60px] border border-solid flex items-center justify-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Farrow_left.png?alt=media&token=62e15b36-0acd-4aa8-8d0c-656b8472e9a0"
                  alt="left arrow"
                />
              </div>
              <div className="w-[60px] h-[60px] text-white bg-dessert-green border border-solid flex items-center justify-center">
                <p>1</p>
              </div>
              <div className="w-[60px] h-[60px] border border-solid flex items-center justify-center">
                <p>2</p>
              </div>
              <div className="w-[60px] h-[60px] border border-solid flex items-center justify-center">
                <p>3</p>
              </div>
              <div className="w-[60px] h-[60px] border border-solid flex items-center justify-center">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Farrow_right.png?alt=media&token=6824a21d-4f8b-4f6f-bf58-d8be85e20f08"
                  alt="right arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sweet;
