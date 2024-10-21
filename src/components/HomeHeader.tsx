const HomeHeader = () => {
    return ( 

        <>
              <header className="md:mx-auto">
        <section className=" md:w-full  md:px-4 md:py-2">
          <div className="banner bg-[url('https://firebasestorage.googleapis.com/v0/b/potoro-5fe55.appspot.com/o/dessert%2FBanner-desktop.png?alt=media&token=8dd3b28c-559c-487e-8308-84f7059c9294')] bg-cover bg-center h-96  w-full"></div>
        </section>
        <section className=" md:mx-auto md:w-10/12  md:px-4  md:py-2">
          <div className=" w-full banner-cards flex md:px-60 md:justify-center md:mb-24">
            <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20">
              本日精選
            </div>
            <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20"> 人氣推薦
            </div>
            <div className="banner-card vertical-words flex justify-center items-center flex-auto text-center sm:py-16 w-auto md:px-20"> 新品上市
            </div>
          </div>
        </section>
      </header>
        </>
     );
}
 
export default HomeHeader ;