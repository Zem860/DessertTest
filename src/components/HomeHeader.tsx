import HeaderCards from './HeaderCards';
import { useLocation } from 'react-router-dom';

const HomeHeader = () => {
  const location = useLocation();
  const HomepageBannerPhoto = 'https://bit.ly/2OhbMHr'
  const SweetBannerPhoto = 'https://bit.ly/2Qodh3Z';
  const bgBackground = location.pathname === '/'?HomepageBannerPhoto:SweetBannerPhoto

  return (
    <>
      <header className="md:mx-auto">
        <section className=" md:w-full md:px-4 md:py-2">
          <div className="banner bg-cover bg-center h-[496px]  w-full" style={{"backgroundImage":`url(${bgBackground})`}}></div>
        </section>
        {location.pathname === '/' && <HeaderCards />}
      </header>
    </>
  );
};

export default HomeHeader;
