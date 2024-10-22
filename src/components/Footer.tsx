import Slogan from './Slogan';
const Footer = () => {
  return (
    <>
      <div className="py-8 px-10 bg-[#EAF0ED] flex flex-col md:flex-row md:justify-around">
        <div className="flex flex-col justify-between space-y-16">
          <img
            className="w-[171px] h-[27px] "
            src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Flogotype-lg-dark.svg?alt=media&token=ed1e0d0b-c6c4-4386-bb59-a8ce0480129f"
            alt="Sweetaste Logo"
          />
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <p className="text-dessert-green">07-1234-5678</p>
              <p className="text-dessert-green">sweetaste@email.com</p>
              <p className="text-dessert-green">
                800 高雄市新興區幸福路 520 號
              </p>
            </div>
            <div className="flex space-x-3">
              <img
                className="w-[32px] h-[32px]"
                src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fic-facebook.svg?alt=media&token=59faa675-6cee-451e-b6d3-c2996fe0063b"
                alt="facebook icon"
              />
              <img
                className="w-[32px] h-[32px]"
                src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fic-line%40.svg?alt=media&token=20b82569-65a7-4449-a4a9-38439f021eb2"
                alt="line icon"
              />
            </div>
          </div>
        </div>
        <div className="space-y-5">
            <div className='hidden md:block'>
          <Slogan
            words1={'今天是個———'}
            words2={'吃甜點的日子'}
            size="text-3xl"
            singleSlogan
          />
          </div>

          <p className="text-dessert-green">
            © 2018 Sweetaste* All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
