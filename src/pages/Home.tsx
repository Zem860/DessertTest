import HomeHeader from '../components/HomeHeader';
import MainContentCard from '../components/MainContentCard';
import Slogan from '../components/Slogan';
const Home = () => {
  return (
    <>
      <HomeHeader />
      <MainContentCard reverse={true} />
      <MainContentCard reverse={false} />
      <div className='flex justify-center items-center'><Slogan words1={'想吃甜點———'} words2={'是不需要理由的'} /></div>

    </>
  );
};

export default Home;
<></>;
