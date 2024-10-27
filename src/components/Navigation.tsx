import HamburgerBtn from './HamburgerBtn'; // 引入漢堡按鈕元件
import { Link } from 'react-router-dom';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
const Navigation = () => {
  // 控制菜單的開
  const cartData = useSelector((state: RootState) => state.cartData.value);

  return (
    <>
      <nav className="flex mx-auto w-10/12 px-4 py-2">
        <ul className=" w-full md: flex items-center justify-between ">
          <div className="flex md:hidden">
            <HamburgerBtn />
          </div>
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/">
              <img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Flogo-all-dark.svg?alt=media&token=5733c4ed-5a3e-47ca-a60f-68b32ef438b6'
                }
                alt="Logo"
                className="h-8"
              />
            </Link>
          </div>
          <div className="flex nav-items space-x-4 text-dessert-green font-bold">
            <li className="hidden md:block">
              <Link to="/">首頁</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/Sweet">甜點</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/Login">登入</Link>
            </li>
            <li className="relative">
              <Link to="/cart">
                <img
                  className="w-8 h-8"
                  src={
                    'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fshopping_cart.png?alt=media&token=b88f926b-edeb-4b29-a397-1638b4f6300c'
                  }
                  alt="shopping cart logo"
                />
                <div className="reddot bg-red-600 absolute rounded-full w-4 h-4 top-2 right-2">
                  <p className="absolute text-white top-[-1] left-1  text-[0.75rem]">
                    {cartData.length}
                  </p>
                </div>
              </Link>
            </li>
          </div>
          {/* <div className="block md:hidden">
            <li>
              <img 
                src={
                  'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fshopping_cart.png?alt=media&token=b88f926b-edeb-4b29-a397-1638b4f6300c'
                }
                alt="shopping cart logo"
              />
              <div className='reddot bg-emerald-400 absolute rounded-full w-5 h-5 top-0'></div>
            </li>
          </div> */}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
