import { useAppContext } from "../../../context/AppContext";
import { useCallback } from "react";
import AddButtons from "./AddButtons";

const MobileFooter = () => {
  const { app, dispatch } = useAppContext();

  const handleClick = useCallback(() => {
    dispatch({ type: "switchAddButtons", payload: !app.addButtonsVisible });
  }, [app.addButtonsVisible, dispatch]);

  const addButtonClosedClasses =
    "size-[70px] rounded-[100vw] bg-primary-500 flex justify-center";
  const addButtonOpenClasses =
    "size-[70px] rounded-[100vw] bg-primary-500 flex justify-center rotate-45";

  return (
    <div className="bg-primary-300 w-screen h-[70px] fixed bottom-0 drop-shadow-[0px_40px_5px_rgba(0,0,0,0.00)]"> {/* dropshadow needs alignment */}
      {/* notification and settings row */}
      <div className="flex flex-row justify-around my-auto items-center h-full">
        {/* notification and settings buttons */}
        <div>
          <img src="/images/icons/UI/Group.svg" alt="notification" />
        </div>
        <div>
          <img src="/images/icons/UI/gear_7045377 1.svg" alt="settings" />
        </div>
      </div>
      {/* add button */}
      <div className="absolute bottom-[22px] w-screen flex justify-center">
        <div
          className={
            app.addButtonsVisible
              ? addButtonOpenClasses
              : addButtonClosedClasses
          }
          onClick={handleClick}
        >
          <div className="flex justify-center w-[32px]">
            <img src="/images/icons/UI/add-button-1.svg" alt="" />
          </div>
        </div>
      </div>
      {app.addButtonsVisible && <AddButtons />}
    </div>
  );
};
export default MobileFooter;
