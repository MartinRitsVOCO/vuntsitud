import { Link } from "react-router";

const FoodCard = ( {food} ) => {
    const date = new Date(food.Lisatud_kuupaev);
    const bestBefore = new Date(date.setDate(date.getDate() + food.Sailivus_paevad));
    const formattedDate = bestBefore.toLocaleDateString('et-EE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\./g, '.');
  return (
    <Link to={`/food/${food.ID}`}>
        <div className="w-[129px] h-[162px] bg-primary-300 rounded-xl  ">
            <div className="w-full h-[104px] relative " >
            <div className="rounded-tl-lg rounded-br-lg size-8 bg-primary-300 absolute top-0 left-0 " >
                <div className="h-full w-full p-[8px]">
                    <img src={"/images/icons/"+food.Kategooria+".svg"} alt="" /></div>
            </div>
                <img src={food.Pilt} alt="" className="w-full h-full object-cover border-[8px] rounded-xl border-primary-300"/>
                <div className="">
                    <div className="font-bold font-[500] ml-[8px]">{food.Nimetus}</div>
                    <div className="font-[200] mx-[8px] flex flex-row">
                        <img src="images/icons/UI/Vector-1.svg " alt="" />
                        <div className="mx-[8px]">{formattedDate}</div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
export default FoodCard


//x24//