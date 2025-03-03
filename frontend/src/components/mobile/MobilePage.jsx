import { useAppContext } from "../../context/AppContext"

const MobilePage = () => {
  const { app } = useAppContext();

  return (
    <div>{ app.mobileContent }</div>
  )
}
export default MobilePage