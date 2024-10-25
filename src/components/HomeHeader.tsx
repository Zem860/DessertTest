import HeaderCards from './HeaderCards';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RadioLine from './RadioLine';
const HomeHeader = () => {
  const location = useLocation();
  const HomepageBannerPhoto = 'https://bit.ly/2OhbMHr';
  const SweetBannerPhoto = 'https://bit.ly/2Qodh3Z';
  const bgBackground =
    location.pathname === '/' ? HomepageBannerPhoto : SweetBannerPhoto;
  const isSuccess = location.pathname === '/success';

  return (
    <>
      {isSuccess ? (
        <header className="md:mx-auto md:w-[80%] md:mb-20  ">
          <section className=" md:w-full  ">
            <div className="relative banner bg-cover bg-center h-screen  w-full bg-[url(https://bit.ly/2P7GhNd)]"></div>
            <div className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%] ">
              <div className="flex flex-col justify-center items-center">
                <RadioLine
                  icons={['check_circle', 'check_circle', 'check_circle']}
                />
                <p className="text-5xl font-bold text-dessert-green py-6">
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
        <header className="md:mx-auto">
          <section className=" md:w-full md:px-4 md:py-2">
            <div
              className="banner bg-cover bg-center h-[496px]  w-full"
              style={{ backgroundImage: `url(${bgBackground})` }}
            ></div>
          </section>
          {location.pathname === '/' && <HeaderCards />}
        </header>
      )}
    </>
  );
};

export default HomeHeader;
