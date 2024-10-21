const HeaderCards = () => {
  return (
    <>
      <section className=" md:mx-auto md:w-10/12  md:px-4  md:py-2">
        <div className=" w-full banner-cards flex md:px-60 md:justify-center md:mb-24">
          <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20">
            本日精選
          </div>
          <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20">
            人氣推薦
          </div>
          <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20">
            新品上市
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderCards;
