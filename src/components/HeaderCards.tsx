const HeaderCards = () => {
  const content = ['本日精選', '人氣推薦', '新品上市'];
  const contentImage = [
    'https://bit.ly/2R5tqwD',
    'https://bit.ly/2Dwoxd7',
    'https://bit.ly/2OUteif',
  ];
  return (
    <>
      <section className=" md:mx-auto md:w-10/12  md:px-4  md:py-2">
        <div className=" w-full banner-cards flex md:px-60 md:justify-center md:mb-24">
          {content.map((c, index) => (
            <div
              style={{
                backgroundImage: `url(${contentImage[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.7',
                zIndex: '3',
                writingMode: 'vertical-lr',
                textOrientation: 'upright',
              }}
              key={index}
              className="banner-card flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20"
            >
              <p className="z-10">{c}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeaderCards;
