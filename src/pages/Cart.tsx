import Footer from '../components/Footer';
import QuantitySelector from '../components/QuantitySelector';
import { cartImg } from '../components/ImageData';
import { useState } from 'react';
const Cart = () => {
  const [amounts, setAmounts] = useState(cartImg.map(() => 0));
  const increase = (index:number) => {
    const newAmounts = [...amounts]
    newAmounts[index] += 1;
    setAmounts(newAmounts );
  };

  const decrease = (index:number) => {
    if (amounts[index] === 0) {
      return;
    }
    const newAmounts = [...amounts]
    newAmounts[index] -= 1
    setAmounts(newAmounts);
  };

  return (
    <>
      <div className="m-20 h-90 flex md:flex-row">
        <div className="left w-[50%]">
          <div
            className="w-full flex justify-center items-center text-[24px] font-bold bg-homebackground-green
           text-dessert-green"
          >
            您的購物車
          </div>
          <ul >
            {cartImg.map((image, index) => (
              <li key={index} className="flex flex-row justify-between items-center my-2">
                <img  className="w-[110px] h-[110px]"src={image} alt="shopping item images" />
                <div>
                  <p>焦糖瑪卡龍</p>
                  <p>NT$450</p>
                </div>
                <QuantitySelector
                 amount={amounts[index]} // 對應每個商品的數量
                 increase={() => increase(index)} // 傳遞對應商品的索引
                 decrease={() => decrease(index)} // 傳遞對應商品的索引
                 index={index}
                />
                <p>NT${Number(amounts[index])*450}</p>
                <span className="material-icons">delete_outline</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-[50%]"></div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
