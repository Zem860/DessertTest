const EmailBar = () => {
  return (
    <>
      <div className="bg-[#3F5D45] flex flex-col md:flex-row md:justify-around items-center py-4">
        <div className="flex items-center mb-5 md:mb-0">
          <img
            className="w-[50px] h-[50px] mr-6 md:mr-4"
            src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Flogo-light.svg?alt=media&token=8d3e7dfa-7c61-4647-8d3a-9728df6e1e7b"
            alt="Logo"
          />
          <p className="text-[#EAF0ED] text-3xl  md:text-lg">訂閱你我的甜蜜郵件</p>
        </div>
        <div className="flex bg-[#EAF0ED] w-[300px] md:w-[300px] h-[50px] items-center justify-between">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img
              className="w-[24px] h-[24px]"
              src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Fmail-24px.png?alt=media&token=db878952-9c18-43f1-9fb4-f607d3a8cdd5"
              alt="email icon"
            />
          </div>
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#FFE180]">
            <img
              className="w-[24px] h-[24px]"
              src="https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2Farrow_forward-24px.png?alt=media&token=308e0506-36e4-4962-99e3-ba5dbcbf6269"
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailBar;
