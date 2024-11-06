import Tag from './Tag';
interface Card {
  bgBackground: string;
}

const Card = ({bgBackground}:Card) => {

  return (
    <>
      <div className="w-full md:w-[300px] ">
        <div
          className=" w-full bg-cover bg-center h-[600px] md:h-[315px]"
          style={{ backgroundImage: `url(${bgBackground})` }}
        >
          <div className="flex justify-between items-start">
            <Tag></Tag>
            <img
              className=" mt-3 mr-3 object-contain w-16 md:w-8"
              src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Ffavorite_border.png?alt=media&token=3a3972a7-4351-49b3-ac3e-ecfcb9946ab6"
              alt="favorite icon"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-4 text-center w-full border-[1px] text-[1.5rem] sm:text-[2rem] md:text-[1.2rem] text-[#3F5D45]">
            焦糖瑪卡龍
          </div>
          <div className="p-4 text-center w-full border-[1px] text-[1.5rem] sm:text-[2rem] md:text-[1.2rem] text-[#3F5D45] font-bold">
            NT$450
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <button className="bg-[#EAF0ED] hover:bg-[#3F5D45] hover:text-[#EAF0ED] cursor-pointer text-[#3F5D45] font-bold text-center text-[2.5rem] sm:text-[2.5rem] md:text-2xl  w-full p-4 ">
            加入購物車
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
