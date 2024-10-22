import Footer from '../components/Footer';
import { passportImg } from '../components/ImageData';
const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mx-20 flex flex-row justify-center items-center py-3">
        <div className="Login bg-dessert-green w-[390px] h-[380px] flex flex-col justify-between">
          <p className=" text-center px-5 py-3 text-[36px] text-homebackground-green">
            會員登入
          </p>
          <div className="flex flex-col justify-between">
            <div className='flex flex-row md:hidden'>
            {passportImg.map((image, index) => (
              <div
                key={index}
                className=" border border-solid p-6 w-full cursor-pointer bg-white flex"
              >
                <img
                  src={image}
                  alt={`社群帳號按鈕-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            </div>
            <input
              type="text"
              className=" h-12 my-2 mx-6 pl-16 bg-no-repeat bg-left"
              placeholder="請輸入您的電子郵件"
              style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2FaccountHead.png?alt=media&token=730d95d2-6812-4de1-b55b-b162f8b0c3c1')`, // 放入你的圖片URL
                backgroundSize: '20px', // 控制圖片大小
                backgroundPosition: '10px center', // 控制圖片的位置
              }}
            />
            <input
              type="text"
              className="h-12 my-2 mx-6 pl-16 bg-no-repeat bg-left"
              placeholder="請輸入使用者密碼"
              style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2FKey.png?alt=media&token=12c3f869-8d04-4903-b47e-bae0788cada6')`, // 放入你的圖片URL
                backgroundSize: '20px', // 控制圖片大小
                backgroundPosition: '10px center', // 控制圖片的位置
              }}
            />
            <div className="checkInput mx-6">
              <input type="checkbox" id="check" className="mr-2 " />
              <label htmlFor="check">記住我</label>
            </div>
          </div>
          <div>
            <p className="cursor-pointer text-2xl flex justify-center items-center bg-[#FFE180] w-full py-5">
              登入帳號
            </p>
          </div>
        </div>
        <div className="py-16">
          <div className=" hidden Passport md:flex md:flex-col md:justify-evenly md:items-center bg-homebackground-green w-[390px] h-[350px]">
            <p className=" text-center px-5 p-3 text-[24px] text-poetry">
              ———連結社群帳號———
            </p>
            {passportImg.map((image, index) => (
              <div
                key={index}
                className=" cursor-pointer w-[330px] h-[56px] bg-white flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`社群帳號按鈕-${index}`}
                  className="w-[50%] h-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
