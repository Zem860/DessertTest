import Tag from "./Tag";
const Card = () => {
  return (
    <>
      <div className="w-[300px]">
        <div className="h-[315px] w-[300px] bg-[url('https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fp-2.png?alt=media&token=08c953bf-e5af-4ffa-870d-365c577e14ff')]">
            <Tag></Tag>
  
        </div>
        {/* <img
          className="object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fp-2.png?alt=media&token=08c953bf-e5af-4ffa-870d-365c577e14ff"
          alt=""
        /> */}
        <div className="flex justify-between">
          <div className="p-4 text-center w-full border-[1px]">焦糖瑪卡龍</div>
          <div className="p-4 text-center w-full border-[1px]">NT$450</div>
        </div>
        <div className=" flex justify-between items-center">
          <p className="bg-[#EAF0ED] cursor-pointer text-[#3F5D45] font-bold text-center text-2xl  w-full p-4">加入購物車</p>
        </div>
      </div>
    </>
  );
};

export default Card;
