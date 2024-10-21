import HamburgerBtn from './HamburgerBtn'; // 引入漢堡按鈕元件

const Navigation = () => {
  // 控制菜單的開

  return (
    <>
      <nav className="flex mx-auto w-10/12 px-4 py-2">
        <ul className=" w-full md: flex items-center justify-between ">
        <div className="flex md:hidden">
          <HamburgerBtn />
        </div>
          <div className="flex items-center">
            {/* Logo */}
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Flogo-all-dark.svg?alt=media&token=5733c4ed-5a3e-47ca-a60f-68b32ef438b6'
              }
              alt="Logo"
              className="h-8"
            />
          </div>
          <div className="hidden md:flex nav-items space-x-4 text-dessert-green font-bold">
            <li>首頁</li>
            <li>甜點</li>
            <li>登入</li>
            <li >
              <img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fshopping_cart.png?alt=media&token=b88f926b-edeb-4b29-a397-1638b4f6300c'
                }
                alt="shopping cart logo"
              />
            </li>
          </div>

          <div className="block md:hidden">
            <li >
              <img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fshopping_cart.png?alt=media&token=b88f926b-edeb-4b29-a397-1638b4f6300c'
                }
                alt="shopping cart logo"
              />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
