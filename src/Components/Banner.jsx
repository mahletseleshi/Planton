import city from "../assets/green city 3d.png"

const Banner = () => {
  return (
    <div className="flex items-center bg-gradient-to-r h-[150px] px-10 py-8 from-[#74E5A1] mt-32 justify-between">
        <div className="flex items-center flex-col">
            <h1 className="font-bold text-[18px] capitalize">
            Join us at Planton, where every tree planted is a step towards a sustainable future. Together, we can make a difference!
            </h1>

            <button className="mt-5 rounded-md bg-black flex items-center px-4 py-2 text-gray-100 ">Browse Projects</button>
        </div>

        <div>
            <img src ={city} alt="city"/>
        </div>
      
    </div>
  )
}

export default Banner
