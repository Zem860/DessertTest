interface MainContentCardProps {
  words1: string;
  words2: string;
  singleSlogan:boolean;
}

const Slogan = ({
  words1,
  words2,
  singleSlogan = true,
}: MainContentCardProps) => {
  return (
    <>
      {singleSlogan ? (
        <div className="order-1 p-10 md:p-0 md:order-none flex flex-col items-center md:flex-row-reverse  h-[460px] ">
          <p className="vertical-words text-5xl text-dessert-green font-bold">{words1}</p>
          <p className="vertical-words text-5xl  text-dessert-green font-bold">{words2}</p>
        </div>
      ) : (
        <div className="order-1 p-10 md:p-0 md:order-none flex flex-col items-center md:flex-row-reverse  h-[460px] ">
          <p className="vertical-words text-5xl">{words1}</p>
          <p className="vertical-words text-5xl">{words2}</p>
        </div>
      )}
    </>
  );
};

export default Slogan;
