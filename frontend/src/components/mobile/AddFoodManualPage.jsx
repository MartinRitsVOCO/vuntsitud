import MobileFooter from "./UI/MobileFooter";
import MobileHeader from "./UI/MobileHeader";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import apiService from "../../services/apiService"

const AddFoodManualPage = () => {
  const { app, dispatch } = useAppContext();

  const activeButtonClasses =
    "bg-primary-300 rounded-xl flex items-center justify-center w-[159.5px] h-[48px] font-poppins font-[500] text-[20px]/[24px]";
  const inactiveButtonClasses =
    "bg-hall rounded-xl flex items-center justify-center w-[159.5px] h-[48px] font-poppins font-[500] text-[20px]/[24px]";

  const addFoodAPI = async (foodData) => {
    try {
      const response = await apiService.post('/addProduct', foodData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    
  const handleLocationButtonClick = (location) => {
    dispatch({ type: "setSelectedLocation", payload: location });
  };

  const handleAddButtonClick = () => {
    console.log("Add button clicked");
    const foodData = {
      "nimetus": "Vaarika moos",
      "kommentaar": "Isa tehtud, hästi tehtud",
      "kategooria": "Ise-tehtud",
      "asukoht": "Kopli",
      "sailivus_paevad": "30",
      "pilt": "/images/products/moos.jpg",
      "kuupaev": "2025-03-01"
    };
    addFoodAPI(foodData);
  }
  return (
    <>
      <MobileHeader />
      <div className="flex items-center justify-center w-screen  mt-[16px]">
        <div className="w-screen flex justify-center absolute top-[115px] left-[140px] z-10"></div>
        <div className="size-[134px] rounded-[100vw] bg-primary-300 absolute"></div>
        <img
          src="images/illustrations/kiri.svg"
          alt=""
          className=" object-cover w-[242px] h-[171px] z-10"
        />
      </div>
      <div className="font-poppins font-[500] text-[24px]/[24px] flex items-center justify-center mt-[16px]">
        Sisesta toit käsitsi
      </div>
      <div className="w-screen h-[48px] flex flex-row justify-around mt-[32px]">
        <div
          className={
            app.selectedLocation === "Kopli"
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => handleLocationButtonClick("Kopli")}
        >
          Kopli
        </div>
        <div
          className={
            app.selectedLocation === "Põllu"
              ? activeButtonClasses
              : inactiveButtonClasses
          }
          onClick={() => handleLocationButtonClick("Põllu")}
        >
          Põllu
        </div>
      </div>
      <div className="flex-col flex items-center">
        <div className="border-2 border-primary-500 rounded-xl flex items-center  w-[327px] h-[48px] font-poppins font-[500] text-[16px]/[16px] text-primary-500 mt-[16px]">
          <div className="ml-[16px]">Sisesta toidu nimetus</div>
        </div>
      </div>
      <div className="flex-col flex items-center">
        <div className="border-2 border-primary-500 rounded-xl w-[327px] h-[144px] font-poppins font-[500] text-[16px]/[16px] text-primary-500 mt-[16px]">
          <div className="ml-[16px] mt-[16px]">Sisesta toidu kirjeldus</div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[327px] h-[344px] rounded-xl bg-primary-300 mt-[16px]  text-primary-700 font-poppins font-[500] text-[16px]/[16px] ">
          <div className="ml-[16px] mt-[16px]">Kõlblik kuni:</div>
          <div className="flex items-center justify-center mt-[12px]">
            <div className="w-[295px] h-[276px] bg-valge rounded-xl flex items-center justify-center">
              <input
                type="date"
                value="2025-03-04"
                min="2025-01-01"
                max="2026-12-31"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex items-center">
        <div className=" place-content-between rounded-xl flex items-center bg-primary-300 w-[327px] h-[48px] font-poppins font-[500] text-[16px]/[16px] text-primary-500 mt-[16px]">
          <div className="ml-[16px]">Lisa toidust pilt</div>
          <div className="mr-[16px]">
            <img src="images/icons/UI/add photo.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex-col flex items-center">
        <div className=" place-content-between rounded-xl flex items-center bg-primary-300 w-[327px] h-[48px] font-poppins font-[500] text-[16px]/[16px] text-primary-500 mt-[16px]">
          <div className="ml-[16px]">Sisesta kogus</div>
          <div className="mr-[16px] font-poppins font-[500] text-[24px]/[38px]">
            - 1 +
          </div>
        </div>
      </div>
      
      <div className="w-[333px] h-[276px] ml-[37px] mt-[16px]">
        <div className="font-poppins font-[400] text-[16px]">Kategooriad:</div>
      </div>
          <div className="flex flex-row justify-center flex-wrap gap-[16px] ">
            <div className="bg-hall rounded-xl flex flex-row gap-[4px]"> 
                <img className="pl-[16px] h-[32px] "
                src="images/icons/Lihatooted.svg"
                alt=""
              />
              <div className="my-auto mr-[16px] font-poppins font-[400] text-[16px]">Lihatooted</div>
            </div>
          </div>
                    <div className="flex flex-row justify-center flex-wrap gap-[16px] ">
            <div className="bg-hall rounded-xl flex flex-row gap-[4px]"> 
                <img className="pl-[16px] h-[32px] "
                src="images/icons/Magus.svg"
                alt=""
              />
              <div className="my-auto mr-[16px] font-poppins font-[400] text-[16px]">Magus</div>
            </div>
          </div>

      <div className="flex-col flex items-center mt-[16px]">
        <div className="flex items-center justify-center">
          <div
            className="bg-primary-700 rounded-xl flex items-center justify-center w-[327px] h-[48px] font-poppins font-[500] text-[20px]/[24px] text-valge"
            onClick={handleAddButtonClick}
          >
            Lisa toit
          </div>
        </div>
      </div>
      <div className="flex-col flex items-center mt-[16px] mb-[96px]">
        <div className="flex items-center justify-center">
          <div className="bg-valge rounded-xl flex items-center justify-center w-[327px] h-[48px] font-poppins font-[500] text-[20px]/[24px] text-primary-700">
            Sisesta hoopis triipkoodiga
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
};
export default AddFoodManualPage;
