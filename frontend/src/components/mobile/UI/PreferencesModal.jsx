import { useAppContext } from "../../../context/AppContext";

const PreferencesModal = () => {
  const { dispatch } = useAppContext();

  return (
    <div className="flex bg-valge h-screen w-screen fixed top-0 left-0 z-20 ">
      <div className="bg-valge h-[30%] w-[100%] flex m-auto pl-[30px] ">
        <div className="flex-column ml-[12px]">
          <div className="font-bold font-[500] text-3xl ">
            <h1>Seaded</h1>
            <div
                onClick={() =>
                  dispatch({ type: "switchModal", payload: false })
                }
                className="relative left-[250px] -top-[30px] bg-primary-500 rounded-[100%] w-[40px] h-[40px]"
            >
              <div className="relative top-[5px] flex items-center align-middle w-[30px] m-auto">
                <img src="/images/icons/UI/add-button.svg"/>
              </div>
            </div>
          </div>
          <div className=" font-[400] text-xl  ">
            <p>
              Soovin saada teateid lisatud <br />
              toidu kohta asukohapõhiselt:
            </p>
          </div>
          <div className=" ">
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="kopli"
                  className="bg-green-500 border-green-500 mt-[20px]"
                  name="Koolimaja"
                  value="KOPLI"
                />
                <label for="kopli">KOPLI</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="põllu"
                  className="bg-green-500 border-green-500 mt-[20px]"
                  name="Koolimaja"
                  value="PÕLLU"
                />
                <label for="Põllu">PÕLLU</label>
              </li>
            </ul>
          </div>
          <div className="bg-primary-500 h-[40px] rounded-2xl mt-[20px]">
            <div className="flex justify-center  m-auto text-white  relative top-[5px]">
              <h1>Kinnita</h1>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
export default PreferencesModal;
