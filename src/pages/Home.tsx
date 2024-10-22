import HomeHeader from '../components/HomeHeader';
import MainContentCard from '../components/MainContentCard';
import Slogan from '../components/Slogan';
import Card from '../components/Card';
import EmailBar from '../components/EmailBar';
import Footer from '../components/Footer';
import { imagesLinksHompage } from '../components/ImageData';
const Home = () => {
  return (
    <>
      <HomeHeader />
      <MainContentCard reverse={true} />
      <MainContentCard reverse={false} />
      <div className="flex justify-center items-center">
        <Slogan words1={'想吃甜點———'} words2={'是不需要理由的'} size="text-5xl" singleSlogan />
      </div>
      <div className=" p-6 md:p-0 my-24 mx-auto text-center justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imagesLinksHompage.map((image, index) => (
        index===0?<Card key={index} bgBackground={image} />:
        <div className=" hidden md:block">
          <Card key={index} bgBackground={image} />
        </div>
      ))}
        
        
        {/* <Card />
        <div className=" hidden md:block">
          <Card />
        </div>
        <div className=" hidden md:block">
          <Card />
        </div> */}
      </div>
      <EmailBar />
      <Footer />
    </>
  );
};

export default Home;
<></>;
