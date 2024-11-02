import HeaderCards from './HeaderCards';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RadioLine from './RadioLine';
import Slogan from './Slogan';
const HomeHeader = () => {
  const location = useLocation();
  const HomepageBannerPhoto = 'https://bit.ly/2OhbMHr';
  const SweetBannerPhoto = 'https://bit.ly/2Qodh3Z';
  const isHomePage = location.pathname === '/';
  const bgBackground = isHomePage ? HomepageBannerPhoto : SweetBannerPhoto;
  const isSuccess = location.pathname === '/success';

  return (
    // 只給付款成功的頁面
    <div className={isSuccess?'w-full md:px-[4.2rem]':'px-[4.2rem]'}>
      {isSuccess ? (
        <header className="md:mx-auto md:mb-20 ">
          <section className=" md:w-full  ">
            <div className="relative banner bg-cover bg-center h-screen  w-full bg-[url(https://bit.ly/2P7GhNd)]"></div>
            <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] ">
              <div className="flex flex-col justify-center items-center">
                <RadioLine
                  icons={['check_circle', 'check_circle', 'check_circle']}
                />
                <p className=" text-4xl md:text-5xl font-bold text-dessert-green py-6">
                  付款成功
                </p>

                <Link to="/">
                  <button className="py-4 px-20 bg-btn-yellow hidden md:block">
                    繼續逛逛
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <Link to="/">
            <button className="py-4 px-20 bg-btn-yellow w-full md:hidden">
              繼續逛逛
            </button>
          </Link>
        </header>
      ) : (
        // 給homepage和甜點頁
        <header className="md:mx-auto">
          <section className=" md:w-full md:px-4 ">
            <div
              className="banner relative bg-cover bg-center h-[496px] flex justify-end md:px-32 md:py-6 w-full"
              style={{ backgroundImage: `url(${bgBackground})` }}
              
            >{!isHomePage && (
              <div className="absolute">
                <Slogan
                  words1={'想吃甜點———'}
                  words2={'是不需要理由的'}
                  size="text-4xl"
                  singleSlogan
                  alwaysVertical
                />
              </div>
            )}</div>
            
          </section>
          {location.pathname === '/' && <HeaderCards />}
        </header>
      )}
    </div>
  );
};

export default HomeHeader;
