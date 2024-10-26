import QuantitySelector from '../components/QuantitySelector';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { deleteData, increaseAmount, decreaseAmount } from '../state/cartData/cartDataSlice';
import { useEffect, useState } from 'react';
const Cart = () => {
  const cartData = useSelector((state: RootState) => state.cartData.value);
  const dispatch = useDispatch();
  const [shippingFee, setShippingFee] = useState(0)
  const [sum, setSum] = useState(0);
  useEffect(()=>{
    setSum( cartData.reduce((accu, item) => accu + (item.amount*item.price), 0))
    if (sum!==0){
      setShippingFee(300)
    } else{
      setShippingFee(0)
    }
  },[cartData,sum])

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
            {cartData.map((data,index) => (
              <li
                key={data.id}
                className="flex flex-col lg:flex-row justify-between items-center my-2"
              >
                <div className="flex justify-center items-center">
                  <img
                    className="w-[110px] h-[110px] mr-5"
                    src={data.image}
                    alt="shopping item images"
                  />
                  <div className="flex flex-col lg:flex-row items-center">
                    <div className="mr-5">
                      <p>{data.name}</p>
                      <p>{data.price}</p>
                    </div>

                    <QuantitySelector
                      amount={data.amount} // 對應每個商品的數量
                      increase={()=>dispatch(increaseAmount(index))} // 傳遞對應商品的索引
                      decrease={() => dispatch(decreaseAmount(index))} // 傳遞對應商品的索引
                      index={index}
                    />
                  </div>
                </div>

                <div className="flex justify-end py-2 border-b border-b-poetry-5 border-t border-t-poetry-5 lg:border-none lg:justify-between items-center w-full lg:w-auto">
                  <p className="text-dessert-green font-bold text-[1.25rem]">
                    NT${(data.amount*data.price).toLocaleString()}
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
            <p className=" self-center w-[80%]  bg-homebackground-green py-2 text-2xl m-4 text-center border-b border-b-homebackground-green-4 text-dessert-green lg:text-homebackground-green lg:bg-dessert-green font-bold">
              訂單摘要
            </p>
            <div className="flex m-4 justify-between text-dessert-green lg:text-homebackground-green mb-2">
              <p>小記</p> <p>NT$ {sum.toLocaleString()}</p>
            </div>
            <div className="flex m-4 justify-between  text-dessert-green lg:text-homebackground-green  mb-2">
              <p>運費</p> <p>NT$ {shippingFee}</p>
            </div>
            <div className="flex m-4 justify-between  text-dessert-green lg:text-homebackground-green font-bold text-[1.25rem] mb-2">
              <p>總計</p> <p>NT$ {( sum+ shippingFee).toLocaleString()}</p>
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
