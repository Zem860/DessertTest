import { useState } from 'react';
const QuantitySelector = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    if (value === 0){
        return 
    }
    setValue(value - 1);
  };

  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={() => {
            decrease();
          }}
          className="px-3 border border-solid active:bg-slate-500"
        >
          -
        </button>
        <input
          readOnly
          className="p-2 w-[48px] h-[48px]"
          type="text"
          placeholder={`${value}`}
        />
        <button
          onClick={() => {
            increase();
          }}
          className="px-3 border border-solid active:bg-slate-500"
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantitySelector;
