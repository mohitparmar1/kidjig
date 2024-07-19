

function MobileNav() {
  return (
    <div className="w-[270px] absolute left-20 z-20 backdrop-blur-md flex bg-white h-[300px]">
      <ul className="list-none text-black w-full items-center font-bold justify-start gap-5 flex flex-col cursor-pointer">
        <li className="py-2 px-3 w-full">Home</li>
        <li className="py-2 px-3 w-full">About</li>
        <li className="py-2 px-3 w-full">Careers</li>
        <li className="py-2 px-3 w-full">Training Program</li>
        <li className="py-2 px-3 w-full">Contact Us</li>
      </ul>
    </div>
  );
}

export default MobileNav;
