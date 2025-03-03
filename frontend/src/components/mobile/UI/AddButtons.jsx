const AddButtons = () => {
  return (
    <div className="absolute bottom-[85px] w-screen flex justify-center gap-5 ">
        {/* barcode */}
        <div className="flex justify-center bg-primary-300 size-[70px] rounded-[100vw] drop-shadow-[0_10px_35px_rgba(0,0,0,0.80)]">
          <div className="self-center ">
            <img src="/images/icons/UI/barcode-scanner_2626836 1.svg" alt="barcode"/>
          </div>
        </div>
        {/* by hand */}
        <div className="flex justify-center bg-primary-300 size-[70px] rounded-[100vw] drop-shadow-[0_10px_35px_rgba(0,0,0,0.80)]">
          <div className="self-center">
            <img src="/images/icons/UI/edit file.svg" alt="by hand"/>
          </div>
        </div>
    </div>
  )
}
export default AddButtons