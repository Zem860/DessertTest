import RadioLine from '../components/RadioLine';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Payment = () => {
  const cartData = useSelector((state: RootState) => state.cartData.value);
  return (
    <>
      <div className="w-full md:w-[80%] md:mx-auto md:mt-20">
        <div className="flex justify-between items-stretch gap-6  md:mb-20">
          <div className="flex flex-col w-full md:w-[50%] ">
            <div className=" flex flex-col  justify-around p-8 bg-dessert-green h-full">
              <div className="firstRow flex justify-around w-full">
                <p className="text-homebackground-green text-4xl">付款</p>
                <RadioLine
                  icons={[
                    'check_circle',
                    'radio_button_checked',
                    'radio_button_unchecked',
                  ]}
                />
              </div>

              <div className="secondRow w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="credit card number"
                    className="text-homebackground-green text-2xl mb-2"
                  >
                    信用卡卡號
                  </label>
                  <div className="relative">
                    <input
                      className="h-[3rem] w-full px-4"
                      type="text"
                      id="credit card number"
                      placeholder="9012-3456-7890-1234"
                      
                    />
                    <span className="invisible md:visible absolute material-icons-outlined top-1/4 right-3">
                      credit_card
                    </span>
                  </div>
                </div>
              </div>
              <div className=" thirdRow flex flex-col">
                <label
                  htmlFor="card holder"
                  className="text-homebackground-green text-2xl mb-2"
                >
                  持卡人姓名
                </label>
                <div className="thirdRow flex  justify-between gap-3 w-full">
                  <input
                    className="h-[3rem] w-full px-4"
                    type="text"
                    id="cardNumber1"
                    placeholder="王"
                  />
                  <input
                    className=" h-[3rem]  w-full px-4"
                    type="text"
                    id="cardNumber2"
                    placeholder="小明"
                  />
                </div>
              </div>
              <div className="fourthRow w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="due date"
                    className="text-homebackground-green text-2xl mb-2"
                  >
                    有效期限
                  </label>
                  <div className="flex justify-between gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        className=" border border-gray-300 py-2 w-full px-4"
                        placeholder="月"
                      />
                      <div className="flex flex-col items-center">
                        <span className=" cursor-pointer material-icons-outlined absolute right-3 top-1/3 transform -translate-y-1/2">
                          arrow_drop_up
                        </span>
                        <span className=" cursor-pointer material-icons-outlined absolute right-3 top-1/3 ">
                          arrow_drop_down
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="border border-gray-300 py-2 w-full px-4"
                        placeholder="年"
                      />
                      <div className="flex flex-col items-center">
                        <span className="cursor-pointer material-icons-outlined absolute right-3 top-1/3 transform -translate-y-1/2">
                          arrow_drop_up
                        </span>
                        <span className=" cursor-pointer material-icons-outlined absolute right-3 top-1/3 ">
                          arrow_drop_down
                        </span>
                      </div>
                    </div>
                  </div>
                  <label
                    htmlFor="CVV"
                    className="text-homebackground-green text-2xl mb-2"
                  >
                    背面末三碼
                  </label>
                  <div className="flex justify-between gap-3">
                    <div className="relative">
                      <input
                        id="CVV"
                        type="text"
                        className=" border border-gray-300 py-2 w-full px-4"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Link to="/confirm">
                <button className=" py-4 w-full bg-btn-yellow text-dessert-green text-5xl">
                  下一步
                </button>
              </Link>
            </div>
          </div>
          <div className=" w-[50%] hidden md:flex flex-col basis-[300px] items-center  ">
            <div className="upperBox flex flex-col w-full border mb-6 border-poetry ">
              <div className="mb-5 text-poetry text-3xl text-center py-2 bg-homebackground-green w-full">
                <p>訂單查詢</p>
              </div>
              <div className="px-8">
                <div className="flex justify-between mb-5 text-poetry">
                  <p>小計</p>
                  <p>NT$ 2,700</p>
                </div>
                <div className="flex justify-between mb-5 text-poetry">
                  <p>運費</p>
                  <p>NT$ 300</p>
                </div>
                <div className="flex justify-between mb-5 text-[1.25rem] text-poetry font-bold">
                  <p>總計</p>
                  <p>NT$ 3,000</p>
                </div>
              </div>
            </div>
            <div className="upperBox flex flex-col w-full border border-poetry">
              <div className="mb-5 text-poetry text-3xl text-center py-2 bg-homebackground-green w-full">
                <p>購物清單</p>
              </div>
              <div className="content p-6">
                <ul className="flex flex-col justify-between">
                  {cartData.map((image, index) => (
                    <li
                      key={index}
                      className="flex mb-2 justify-between items-center"
                    >
                      <img
                        className="w-[120px] h-[80px]"
                        src={image}
                        alt="sweets image"
                      />
                      <div className="content text-poetry">
                        <p>焦糖馬卡龍（2）</p>
                        <p className="font-bold text-[1.2rem]">NT$ 900</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
