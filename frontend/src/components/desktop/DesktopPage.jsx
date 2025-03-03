import { useAppContext } from "../../context/AppContext"

const DesktopPage = () => {
  const { app } = useAppContext();

  return (
    <div className="w-screen h-screen flex justify-center items-center text-5xl">
      { app.desktopContent }
    </div>
  )
}
export default DesktopPage