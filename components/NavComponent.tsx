

interface NavComponentProp {
  textOrLogo: JSX.Element;
}

const NavComponent = ({ textOrLogo }: NavComponentProp) => {

  return (
    <div className="flex w-full h-14 bg-blue-500 items-center justify-between shadow-md">
      <div className="p-5">
        {textOrLogo}
      </div>
      <div className="flex invisible sm:visible">
        <span className="text-blue-50 hover:bg-blue-400 hover:border-b-2 hover:border-blue-800 hover:cursor-pointer p-5">
            About
        </span>
        <span className="text-blue-50 hover:bg-blue-400 hover:border-b-2 hover:border-blue-800 hover:cursor-pointer p-5">
            Login
        </span>
      </div>
    </div>
  )
}

export default NavComponent;
