const AddButtons = () => {
  return (
    <div className="absolute bottom-[85px] w-screen flex justify-center gap-5 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
        {/* barcode */}
        <div className="flex justify-center bg-primary-300 size-[70px] rounded-[100vw] ">
          <div className="self-center ">
            <img src="/images/icons/UI/barcode-scanner_2626836 1.svg" alt="notification"/>
          </div>
        </div>
        {/* by hand */}
        <div className="flex justify-center bg-primary-300 size-[70px] rounded-[100vw]">
          <div className="self-center">
            <img src="/images/icons/UI/edit file.svg" alt="notification"/>
          </div>
        </div>
    </div>
  )
}
export default AddButtons