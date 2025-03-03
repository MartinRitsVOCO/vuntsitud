import MobileNavMenu from "./MobileNavMenu";
import { useAppContext } from "../../../context/AppContext";

const MobileHeader = () => {
  const { app, dispatch } = useAppContext();

  return (
    <header className="flex flex-row bg-primary-300 w-screen h-[104px] place-content-between">
      <div className="mt-[31.5px] ml-[24px]">
        <img src="images/logo/logo.svg" alt="Logo" />
      </div>
      <div
        className="h-full px-[24px]"
        onClick={() => dispatch({ type: "switchNavMenu", payload: true })}
      >
        <img
          className="mt-[31.5px]"
          src="images/icons/UI/action-button.svg"
          alt="burgermenu"
        />
      </div>
      {app.navMenuVisible && <MobileNavMenu />}
    </header>
  );
};
export default MobileHeader;
