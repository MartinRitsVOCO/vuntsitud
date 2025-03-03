import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router";

const MobileNavMenu = () => {
  const { dispatch } = useAppContext();

  return (
    <nav className="bg-valge h-screen w-screen absolute top-0 left-0 z-10 ">
      <div className="flex flex-col flex-wrap items-center h-full">
        <header className="flex flex-row bg-valge w-screen h-[104px] place-content-between mb-[20px]">
          <div className="mt-[31.5px] ml-[24px]">
            <img src="images/logo/logo.svg" alt="Logo" />
          </div>
          <div
            className="h-full px-[24px] "
            onClick={() => dispatch({ type: "switchNavMenu", payload: false })}
          >
            <img
              className="mt-[31.5px]"
              src="images/icons/UI/action-button-black.svg"
              alt="close"
            />
          </div>
        </header>
        <div>
          <div className="w-[327px] h-[176px] gap-[16px] flex flex-col">
            <a href="https://www.foodsharing.ee/faq.html#faq"><div className="border-2 border-primary-500 rounded-xl flex items-center justify-center w-[327px] h-[48px] font-poppins font-[500] text-[20px]/[24px] text-primary-700">KKK</div></a>
            <Link to="/feedback"><div className="border-2 border-primary-500 rounded-xl flex items-center justify-center w-[327px] h-[48px] font-poppins font-[500] text-[20px]/[24px] text-primary-700">Anna tagasisidet</div></Link>
            <a href="https://www.facebook.com/foodsharingtartu"><div className="border-2 border-primary-500 rounded-xl flex items-center justify-center w-[327px] h-[48px] font-poppins font-[500] text-[20px]/[24px] text-primary-700">Võta ühendust</div></a>
          </div>
          <div className="flex items-center justify-center w-full  mt-[41px]"  >
            <div className="size-[134px] rounded-[100vw] bg-primary-300 flex items-center justify-center pt-[45px]">
              <img src="images/illustrations/syda.svg" alt="Südame logo" className="w-[128px] "/>
            </div>
            </div>
          </div>
      </div>
    </nav>
  );
};
export default MobileNavMenu;
