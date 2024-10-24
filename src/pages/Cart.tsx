import QuantitySelector from '../components/QuantitySelector';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { deleteData } from '../state/cartData/cartDataSlice';
const Cart = () => {
  const cartData = useSelector((state: RootState) => state.cartData.value);
  const dispatch = useDispatch();
  const [amounts, setAmounts] = useState(cartData.map(() => 0));

  const increase = (index: number) => {
    const newAmounts = [...amounts];
    newAmounts[index] += 1;
    setAmounts(newAmounts);
  };

  const decrease = (index: number) => {
    if (amounts[index] === 0) {
      return;
    }
    const newAmounts = [...amounts];
    newAmounts[index] -= 1;
    setAmounts(newAmounts);
  };

  const sum = () => amounts.reduce((accu, a) => (accu += a)) * 450;

  return (
    <>
      <div className="m-20 h-90 flex flex-col lg:flex-row justify-around">
        <div className="left w-full lg:w-[50%]">
          <div
            className="w-full flex justify-center items-center text-[24px] font-bold bg-homebackground-green
           text-dessert-green"
          >
            您的購物車
          </div>
          <ul className=" flex flex-col">
            {cartData.map((image, index) => (
              <li
                key={index}
                className="flex flex-col lg:flex-row justify-between items-center my-2"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="w-[110px] h-[110px] mr-5"
                    src={image}
                    alt="shopping item images"
                  />
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="mr-5">
                      <p>焦糖瑪卡龍</p>
                      <p>NT$450</p>
                    </div>

                    <QuantitySelector
                      amount={amounts[index]} // 對應每個商品的數量
                      increase={() => increase(index)} // 傳遞對應商品的索引
                      decrease={() => decrease(index)} // 傳遞對應商品的索引
                      index={index}
                    />
                  </div>
                </div>

                <div className="flex justify-end py-2 border-b border-b-poetry-5 border-t border-t-poetry-5 lg:border-none lg:justify-between items-center w-full lg:w-auto">
                  <p className="text-dessert-green font-bold text-[1.25rem]">
                    NT${(Number(amounts[index]) * 450).toLocaleString()}
                  </p>
                  <span
                    className="cursor-pointer material-icons lg:block hidden"
                    onClick={() => {
                      dispatch(deleteData(index));
                    }}
                  >
                    delete_outline
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="bg-white lg:bg-dessert-green w-full lg:w-[300px] flex flex-col justify-center">
            <p className=" self-center w-[80%] lg:w-auto bg-homebackground-green py-2 text-2xl m-4 text-center border-b border-b-homebackground-green-4 text-dessert-green lg:text-homebackground-green lg:bg-dessert-green font-bold">
              訂單摘要
            </p>
            <div className="flex m-4 justify-between text-dessert-green lg:text-homebackground-green mb-2">
              <p>小記</p> <p>{sum().toLocaleString()}</p>
            </div>
            <div className="flex m-4 justify-between  text-dessert-green lg:text-homebackground-green  mb-2">
              <p>運費</p> <p>300</p>
            </div>
            <div className="flex m-4 justify-between  text-dessert-green lg:text-homebackground-green font-bold text-[1.25rem] mb-2">
              <p>總計</p> <p>{(sum() + 300).toLocaleString()}</p>
            </div>
            <Link to="/checkout">
              <button type="button" className="bg-btn-yellow px-5 py-3 w-full">
                結帳
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
