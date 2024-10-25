interface MainContentCardProps {
  words1: string;
  words2: string;
  singleSlogan:boolean;
  size?: string;
  alwaysVertical:boolean;
}

const Slogan = ({
  words1,
  words2,
  singleSlogan = true,
  size,
  alwaysVertical = true,
}: MainContentCardProps) => {
  return (
    <>
    {/* 上面這裡是用在不需要order排列整排只有一個slogan的 */}
    {/* 因為在style裡面我有寫，一個vertical-words去控制文字的排版，在RWD的狀態下會有在首頁和甜點頁的slogan顯示不一樣 */}
    {/* 甜點頁是全部都是直向的，首頁需要調整成橫式的，這邊暫時的想法是如果首頁的那邊，在768以上的時候，會套用verticalwords但是以下就不要套用直式(用alwaysVertical來決定) */}
      {singleSlogan ? (
        <div className={`order-1 p-16 md:p-0 md:order-none flex ${alwaysVertical?"flex-row-reverse":"flex-col"} justify-center items-center md:flex-row-reverse `}>
          <p  style={alwaysVertical ? { writingMode: "vertical-lr" } : undefined}className={`vertical-words ${size} text-dessert-green font-bold`}>{words1}</p>
          <p style={alwaysVertical ? { writingMode: "vertical-lr", marginTop:"3rem" } : undefined} className={`md:mt-12 vertical-words ${size}  text-dessert-green font-bold`}>{words2}</p>
        </div>
      ) : (
        // 這邊是用於嵌在有詩的隔壁的slogan
        <div className="order-1 p-10 md:p-0 md:order-none flex flex-col items-center md:items-start md:flex-row-reverse  h-[430px] ">
          <p className={`vertical-words text-dessert-green font-bold  ${size}`}>{words1}</p>
          <p className={`md:mt-5 vertical-words text-dessert-green font-bold ${size}`}>{words2}</p>
        </div>
      )}
    </>
  );
};

export default Slogan;
