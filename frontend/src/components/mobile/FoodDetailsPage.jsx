import MobileFooter from "./UI/MobileFooter";
import MobileHeader from "./UI/MobileHeader";
import apiService from "../../services/apiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const FoodDetailsPage = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');

  const fetchFoodData = async () => {
    try {
      const data = await apiService.get('/product/' + id);
      const date = new Date(data.data[0].Lisatud_kuupaev);
      const bestBefore = new Date(date.setDate(date.getDate() + data.data[0].Sailivus_paevad));
      setFormattedDate(bestBefore.toLocaleDateString('et-EE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\./g, '.'));
      setFood(data.data[0]);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  const handleTakeFood = () => {
    apiService.put('/takeProduct/' + id)
  }

  const handleFoodTaken = () => {
    apiService.put('/takeProduct/' + id)
  }

  return (
    <>
      <MobileHeader />
      <div className="flex flex-col m-auto w-[80%] h-[450px] bg-primary-300 mt-[32px] rounded-[5vw] items-center">
        <div className="relative h-[200px] rounded-xl w-[100%] ">
          <img
            src={food.Pilt}
            alt=""
            className="w-full h-full object-cover p-[4vw] rounded-[8vw]"
          />
        </div>
        <div className=" font-[500] text-primary-700 text-5xl">
          <h1>{food.Nimetus}</h1>
        </div>
        <div className="font-[400] text-primary-700 text-xl p-[4vw]">
          <p>
            {food.Kommentaar}
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
            <p>Parim enne: {formattedDate}</p>
          </div>
        </div>
      </div>
      {/* "Võtan" nupp */}
      <div className="flex justify-center h-[32px] mt-[30px] ">         <div></div>
        <div 
          className="flex items-center justify-center bg-primary-500 rounded-2xl text-valge w-[80%] text-2xl"
          onClick={handleTakeFood}
        >
          <p>Võtan selle!</p>
        </div>
      </div>
      {/* "Keegi on ära võtnud" */}
      <div className="flex justify-center mt-[32px] underline font-[500]">
        <p onClick={handleFoodTaken} >Keegi on selle juba ära võtnud!</p>
      </div>
      <MobileFooter />
    </>
  );
};
export default FoodDetailsPage;
