import RadioLine from '../components/RadioLine';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Confirm = () => {
  const cartData = useSelector((state: RootState) => state.cartData.value);
  return (
    <>
      <div className="w-full md:w-[80%] md:mx-auto md:mt-20">
        <div className="flex justify-between items-stretch gap-6  md:mb-20">
          <div className="flex flex-col w-full md:w-[50%] ">
            <div className=" flex flex-col  justify-around p-8 bg-dessert-green h-full">
              <div className="firstRow flex justify-around w-full mb-4">
                <p className="text-homebackground-green text-4xl">運送</p>
                <RadioLine
                  icons={[
                    'check_circle',
                    'check_circle',
                    'radio_button_checked',
                  ]}
                />
              </div>
              <div className="secondRow flex justify-around w-full">
                <div className="flex justify-center items-center py-5 text-dessert-green w-full border border-homebackground-green-4 bg-homebackground-green">
                  電子發票
                </div>
                <div className=" flex justify-center items-center py-5 text-homebackground-green w-full border border-homebackground-green-4">
                  郵寄發票
                </div>
              </div>
              <div className="thirdRow w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="telephone"
                    className="text-homebackground-green text-2xl mb-2"
                  >
                    電子郵件信箱
                  </label>
                  <input
                    className="h-[3rem] px-4"
                    type="text"
                    id="telephone"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="fourthRow w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="telephone"
                    className="text-homebackground-green text-2xl mb-2 "
                  >
                    統一編號
                  </label>
                  <input
                    className="h-[3rem] px-4"
                    type="text"
                    id="telephone"
                    placeholder="12345678"
                  />
                </div>
              </div>

             
            </div>
            <div className="w-full">
              <Link to="/success">
                <button className=" py-4 w-full bg-btn-yellow text-dessert-green text-3xl">
                  確認結帳
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
                  {cartData.map((data, index) => (
                    <li
                      key={index}
                      className="flex mb-2 justify-between items-center"
                    >
                      <img
                        className="w-[120px] h-[80px]"
                        src={data.image}
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

export default Confirm;
