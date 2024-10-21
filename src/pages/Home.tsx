import HomeHeader from '../components/HomeHeader';
import MainContentCard from '../components/MainContentCard';
import Slogan from '../components/Slogan';
import Card from '../components/Card';
import EmailBar from '../components/EmailBar';
const Home = () => {
  return (
    <>
      <HomeHeader />
      <MainContentCard reverse={true} />
      <MainContentCard reverse={false} />
      <div className="flex justify-center items-center">
        <Slogan words1={'想吃甜點———'} words2={'是不需要理由的'} singleSlogan />
      </div>
      <div className=" p-6 md:p-0 my-24 mx-auto text-center justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <div className=" hidden md:block">
          <Card />
        </div>
        <div className=" hidden md:block">
          <Card />
        </div>
      </div>
      <EmailBar />
      <div></div>
    </>
  );
};

export default Home;
<></>;
