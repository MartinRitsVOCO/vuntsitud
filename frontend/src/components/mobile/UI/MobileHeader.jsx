import MobileNavMenu from "./MobileNavMenu";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router";

const MobileHeader = () => {
  const { app, dispatch } = useAppContext();

  return (
    <header className="flex flex-row bg-primary-300 w-screen h-[104px] place-content-between">
      <Link to="/"><div className="mt-[31.5px] ml-[24px]">
        <img src="/images/logo/logo.svg" alt="" />
      </div>
      </Link>
      <div
        className="h-full px-[24px]"
        onClick={() => dispatch({ type: "switchModal", payload: "MobileNavMenu" })}
      >
        <img
          className="mt-[31.5px]"
          src="/images/icons/UI/action-button.svg"
          alt=""
        />
      </div>
      {app.modalVisible === "MobileNavMenu" && <MobileNavMenu />}
    </header>
  );
};
export default MobileHeader;
