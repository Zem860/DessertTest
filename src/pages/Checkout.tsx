import RadioLine from '../components/RadioLine';
import Footer from '../components/Footer';
const Checkout = () => {
  return (
    <>
      <div className="w-[80%] mx-auto flex flex-col mt-20 ">
        <div className=" w-[50%] flex flex-col items-center p-8 bg-dessert-green">
          <div className="firstRow flex justify-around w-full">
            <p className="text-homebackground-green text-4xl">運送</p>
            <RadioLine />
          </div>

          <div className="secondRow flex  justify-around w-full mb-3">
            <div className="flex flex-col">
              <label
                htmlFor="family name"
                className="text-homebackground-green text-2xl mb-2"
              >
                姓氏
              </label>
              <input
                className="w-[15rem] h-[3rem]"
                type="text"
                id="family name"
                placeholder="王"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-homebackground-green text-2xl mb-2"
              >
                名字
              </label>
              <input
                className="w-[15rem] h-[3rem]"
                type="text"
                id="name"
                placeholder="小明"
              />
            </div>
          </div>

          <div className="thirdRow mb-3">
            <div className="flex flex-col">
              <label
                htmlFor="telephone"
                className="text-homebackground-green text-2xl mb-2"
              >
                電話
              </label>
              <input
                className="w-[32rem] h-[3rem]"
                type="text"
                id="telephone"
                placeholder="0912-345-678"
              />
            </div>
          </div>

          <div className="fourthRow mb-3">
            <div className="flex flex-col">
              <label
                htmlFor="address3"
                className="text-homebackground-green text-2xl mb-2"
              >
                地址
              </label>
              <div className="flex justify-between">
                <div className="relative">
                  <input
                    type="text"
                    className=" border border-gray-300 py-2 px-4 w-full pr-10"
                    placeholder="選擇選項"
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
                    className="border border-gray-300 py-2 px-4 w-full pr-10"
                    placeholder="選擇選項"
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
              <input
                className="w-[32rem] h-[3rem] mt-3"
                type="text"
                id="address3"
                placeholder="幸福路520號"
              />
            </div>
          </div>
          
        </div>
        <button  className=' py-4 w-[50%] bg-btn-yellow text-dessert-green text-5xl'>下一步</button>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
