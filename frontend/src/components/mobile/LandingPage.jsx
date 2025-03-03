import FoodCard from "./UI/FoodCard"
import MobileFooter from "./UI/MobileFooter"
import MobileHeader from "./UI/MobileHeader"

const LandingPage = () => {
  return (
    <>
      <MobileHeader />
      <div className="w-screen relative flex flex-col gap-[16px]">
        <div className="w-screen h-[239px] bg-primary-300">
          <img
            src="/images/illustrations/kylmik.PNG" alt=""
            className="h-full ml-auto"
          />
          <p className="absolute top-[39px] left-[26px] w-[162px] font-poppins font-[500] text-[32px]/[38px]">
            Mille järgi sul täna isu on?
          </p>
        </div>
        <div className="w-screen h-[48px]">

        </div>
        <div>
          <FoodCard />
        </div>
      </div>
      <MobileFooter />
    </>
  )
}
export default LandingPage