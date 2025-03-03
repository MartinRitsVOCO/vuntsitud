import FoodCard from "./UI/FoodCard"
import MobileFooter from "./UI/MobileFooter"
import MobileHeader from "./UI/MobileHeader"
import apiService from "../../services/apiService"
import { useAppContext } from "../../context/AppContext"
import { useEffect, useState } from "react"

const LandingPage = () => {
  const { app, dispatch } = useAppContext();
  const [foods, setFoods] = useState([]);

  const activeButtonClasses = "bg-primary-300 rounded-xl flex items-center justify-center w-[159.5px] h-[48px] font-poppins font-[500] text-[20px]/[24px]";
  const inactiveButtonClasses = "bg-hall rounded-xl flex items-center justify-center w-[159.5px] h-[48px] font-poppins font-[500] text-[20px]/[24px]";

  const fetchFoodsFromLocation = async () => {
    try {
      const data = await apiService.get('/products/' + app.selectedLocation);
      setFoods(data.data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  const handleLocationButtonClick = (location) => {
    dispatch({ type: "setSelectedLocation", payload: location });
  };

  useEffect(() => {
    fetchFoodsFromLocation();
  }, [app.selectedLocation]);

  console.log(foods);

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
        <div className="w-screen h-[48px] flex flex-row justify-around">
          <div className={
            app.selectedLocation === "Kopli" ? activeButtonClasses : inactiveButtonClasses
          }
          onClick={
            () => handleLocationButtonClick("Kopli")
          }>Kopli</div>
          <div className={
            app.selectedLocation === "Põllu" ? activeButtonClasses : inactiveButtonClasses
          }
          onClick={
            () => handleLocationButtonClick("Põllu")
          }>Põllu</div>
        </div>
        {foods.length > 0 && (
          <div className="text-center font-poppins font-[500] text-[20px]/[24px] ">Viimati lisatud tooted</div>
        )}
        <div className="overflow-x-auto flex flex-row gap-[8px] px-[12px]">
          {foods.length > 0 ? foods.map((food) => (
            <div key={food.ID} >
              <FoodCard food={food} />
            </div>
          )) : (
            <div className="font-poppins font-[500] text-[32px]/[38px] text-center flex flex-col items-center overflow-hidden gap-[16px]">
              <img src="images/illustrations/supp.svg " alt="" />
              <div>Ups! Praegu pole kapis ühtegi toitu.</div>
            </div>
            )
          }
        </div>
        {foods.length > 0 ? (
          <div className="flex justify-center items-center w-full h-full">
            <p className="font-poppins font-[500] text-[20px]/[24px] rounded-xl bg-primary-500 w-[327px] h-[48px] flex items-center justify-center text-valge">
              Vaata kõiki toite {app.selectedLocation} kapis
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full mt-[26px]">
            <p className="font-poppins font-[500] text-[20px]/[24px] rounded-xl bg-primary-500 w-[327px] h-[48px] flex items-center justify-center text-valge">
              Lisa ise midagi kappi!
            </p>
          </div>
        )}
      </div>
      <MobileFooter />
    </>
  )
}
export default LandingPage