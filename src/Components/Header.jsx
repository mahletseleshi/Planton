import img from "../assets/Forest.png"

const Header = () => {
  return (
    <div className="bg-gradient-to-r px-6 py-2 h-[358px] my-4 from-[#74E5A1] via-[#B0F0C9] to-[#F9E8A3] flex items-center w-full justify-between">
      <div>
        <p className="text-[16px]">Welcome to Planton!</p>
        <h1 className="text-[35px] font-bold">
          Unite, Plant, Thrive - Cultivating a Greener Tomorrow, One Tree at a Time.
        </h1>
        <p className="text-sm">
          Join a Movement, Plant a Tree. Your Action Matters in Building a Sustainable Future!
        </p>
        <div className="flex mt-5 gap-6 text-sm">
          <button className="bg-black text-white  px-4 py-2">Create Project</button>
          <button className="border-2 px-4 py-2 border-black">Browse Project</button>
        </div>
      </div>

      <div>
    <img src={img} className="w-[1600px]" alt="hrader"/>
      </div>
    </div>
  );
};

export default Header;
