import FoodCard from "./UI/FoodCard"
import MobileFooter from "./UI/MobileFooter"
import MobileHeader from "./UI/MobileHeader"
import apiService from "../../services/apiService"
import { useEffect, useState } from "react"
import { useParams } from "react-router";

const AllFoodsPage = () => {
  const { location } = useParams();
  const [foods, setFoods] = useState([]);

  const fetchFoodsFromLocation = async () => {
    try {
      const data = await apiService.get('/products/' + location);
      setFoods(data.data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  useEffect(() => {
    fetchFoodsFromLocation();
  }, []);

  return (
    <>
      <MobileHeader />
      <div className="flex flex-row flex-wrap justify-center w-screen gap-[16px] mx-auto mt-[16px] mb-[96px]">
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
      <MobileFooter />
    </>
  )
}
export default AllFoodsPage