import { headerCardsContentImage } from "../data/ImageData";
const HeaderCards = () => {
  const content = ['本日精選', '人氣推薦', '新品上市'];
  return (
    <>
      <section className="md:mx-auto md:w-10/12  md:px-4  md:py-2">
        <div className=" banner-cards flex w-[100%] md:px-60 justify-center md:mb-24">
          {content.map((c, index) => (
            <div
              style={{
                backgroundImage: `url(${headerCardsContentImage[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.7',
                zIndex: '3',
                writingMode: 'vertical-lr',
                textOrientation: 'upright',
              }}
              key={index}
              className="banner-card flex justify-center items-center w-full md:flex-auto text-center sm:py-16 md:w-auto md:px-20"
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
