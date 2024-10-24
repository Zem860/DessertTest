// import { useState } from 'react';

interface QS{
  amount:number,
  increase:(index:number)=>void,
  decrease:(index:number)=>void,
  index:number,
}

const QuantitySelector = ({ amount, increase, decrease, index }:QS) => {
  // const [value, setValue] = useState(0);
  // const increase = () => {
  //   setValue(value + 1);
  // };

  // const decrease = () => {
  //   if (value === 0){
  //       return 
  //   }
  //   setValue(value - 1);
  // };

  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={() => {
            decrease(index);
          }}
          className="px-3 h-[48px] border border-solid active:bg-slate-500"
        >
          -
        </button>
        <input
          readOnly
          className="p-2 w-[48px] h-[48px]"
          type="text"
          placeholder={`${amount}`}
        />
        <button
          onClick={() => {
            increase(index);
          }}
          className="px-3 h-[48px] border border-solid active:bg-slate-500"
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantitySelector;
