import Slogan from './Slogan';
interface MainContentCardProps {
  reverse: boolean;
}
const MainContentCard = ({ reverse }: MainContentCardProps) => {
  const image1 =
    'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fmiddle-pic1.jpg?alt=media&token=adcf1859-fb43-490a-bc99-62d3108ac6b5';
  const image2 =
    'https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fmiddle-pic2.jpg?alt=media&token=c9f96f7f-8983-4682-a67d-78139c33db47';
  const imageShown = reverse ? image1 : image2;
  const isReversed = reverse ? 'md:flex-row' : 'md:flex-row-reverse';

  const defaultSlogan = reverse
    ? ['為甚麼——', '選擇了做甜點?']
    : ['為甚麼——', '一定要吃甜點。'];

  return (
    <section className="mb-[63rem] md:mb-20 md:bg-homebackground-green ">
      <div
        className={`w-full flex flex-col ${isReversed} md:items-center md:justify-around h-96 `}
      >
        <div
          style={{ backgroundImage: `url(${imageShown})` }}
          className={`order-2 w-full h-auto aspect-square md:order-none bg-cover bg-center md:max-w-[420px] md:max-h-[420px] max-w-full`}
        ></div>
        <div className=" order-3 md:order-none bg-homebackground-green h-auto flex flex-col md:justify-between md:flex-row-reverse md:h-72 ">
          <p className=" poetry">
            青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          </p>
          <br />
          <p className=" poetry lg:pr-10">
            是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
          </p>
        </div>
        <Slogan words1={defaultSlogan[0]} words2={defaultSlogan[1]} size="text-4xl" singleSlogan = {false} alwaysVertical = {false}/>
      </div>
    </section>
  );
};

export default MainContentCard;
