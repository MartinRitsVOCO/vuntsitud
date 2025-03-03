import MobileFooter from "./UI/MobileFooter";
import MobileHeader from "./UI/MobileHeader";
const FoodDetailsPage = () => {
  return (
    <>
      <MobileHeader />
      <div className="flex flex-col m-auto w-[80%] h-[450px] bg-primary-300  relative top-16 rounded-[5vw] items-center">
        <div className="relative h-[200px] rounded-xl w-[100%] ">
          <img
            src="/images/products/donits.jpg"
            alt="soorikud"
            className="w-full h-full object-cover p-[4vw] rounded-[8vw]"
          />
        </div>
        <div className=" font-[500] text-primary-700 text-5xl">
          <h1>Sõõrikud</h1>
        </div>
        <div className="font-[400] text-primary-700 text-xl p-[4vw]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit.
          </p>
        </div>
        <div className="justify-center font-[500] text-xl">
          <div className="flex flex-row gap-[10px]">
            <div>
              <img
                src="/images/icons/UI/Vector-1.svg"
                alt=""
                className="w-[25px]"
              />
            </div>
            <p>Parim enne: 01.03.2025</p>
          </div>
        </div>
      </div>
      {/* "Võtan" nupp */}
      <div className="flex justify-center h-[45px] mt-[100px] ">         <div></div>
        <div className="flex items-center justify-center bg-primary-500 rounded-2xl text-valge w-[80%] text-2xl">
          <p>Võtan selle!</p>
        </div>
      </div>
      {/* "Keegi on ära võtnud" */}
      <div className="h-[150px] flex justify-center mt-[30px] underline font-[500]">
      <p>Keegi on selle juba ära võtnud!</p>
      </div>
      <MobileFooter />
    </>
  );
};
export default FoodDetailsPage;
