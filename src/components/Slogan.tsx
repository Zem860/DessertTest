interface MainContentCardProps {
  words1: string;
  words2: string;
  singleSlogan:boolean;
  size?: string;
}

const Slogan = ({
  words1,
  words2,
  singleSlogan = true,
  size,
}: MainContentCardProps) => {
  return (
    <>
      {singleSlogan ? (
        <div className="order-1 p-16 md:p-0 md:order-none flex flex-col items-center md:flex-row-reverse ">
          <p className={`vertical-words ${size} text-dessert-green font-bold`}>{words1}</p>
          <p className={`vertical-words ${size}  text-dessert-green font-bold`}>{words2}</p>
        </div>
      ) : (
        <div className="order-1 p-10 md:p-0 md:order-none flex flex-col items-center md:flex-row-reverse  h-[460px] ">
          <p className={`vertical-words text-dessert-green font-bold  ${size}`}>{words1}</p>
          <p className={`vertical-words text-dessert-green font-bold ${size}`}>{words2}</p>
        </div>
      )}
    </>
  );
};

export default Slogan;
