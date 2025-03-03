const FoodCard = () => {
  return (
    <div className="px-8">
    <div className="w-[129px] h-[162px] bg-primary-300 rounded-xl ">
        <div className="w-full h-[104px] relative">
        <div className="rounded-tl-lg rounded-br-lg size-8 bg-primary-300 absolute top-0 left-0">
            <div className="h-full w-full p-[5px]">
                <img src="images/icons/Magus.svg" alt="magustoit" /></div>
        </div>
            <img src="images/products/donits.jpg" alt="soorikud" className="w-full h-full object-cover border-[8px] rounded-xl border-primary-300"/>
            <div className="w-[129] h-[50]">
                <div className="w-[105] h-[14] font-bold font-[500] ml-[8px]">Sõõrikud</div>
                <div className="w-[105] h-[16] font-[200] mx-[8px] flex flex-row">
                    <img src="images/icons/UI/Vector-1.svg " alt="liivakell" />
                    <div className="mx-[8px]">27.02.2025</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default FoodCard


//x24//