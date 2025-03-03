import MobileFooter from "./UI/MobileFooter";
import MobileHeader from "./UI/MobileHeader";
import { Link } from "react-router";

const FeedbackPage = () => {
  return (
    <>
      <MobileHeader />
      <div className="flex items-center justify-center w-screen ">
        <div className="w-screen flex justify-center absolute top-[115px] left-[140px] z-10">
         <Link to="/"><div className="size-[70px] rounded-[100vw] bg-primary-500 flex justify-center rotate-45">
            <div className="flex justify-center w-[32px]">
              <img src="/images/icons/UI/add-button-1.svg" alt="close" />
            </div>
          </div></Link> 
        </div>
        <div className="size-[134px] rounded-[100vw] bg-primary-300 absolute"></div>
        <img
          src="images/illustrations/yhendus.svg"
          alt="Käed puutumas teineteist"
          className=" object-cover w-[242px] h-[171px] z-10"
        />
      </div>
      <MobileFooter />
    </>
  );
};
export default FeedbackPage;
