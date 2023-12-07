import logo from "../assets/Planton Logo Black.png"



const NavBar = () => {
  return (
    <div className="flex font-semibold items-center px-2 py-1   bg-[#B0F0C9]">
        <nav className="flex items-center justify-between w-full">
            <div>
               <img src={logo} alt="logo"></img>
            </div>
            <ul className="flex items-center gap-10">
                 <li>Home</li>
                 <li>About</li>
                 <li>Projects</li>
                 <li>Leaderboard</li>
                 <li>Contact</li>
            </ul>
            <div className="text-white ">
               <button className="bg-black px-4 py-2 rounded-md">Sign In</button>
            </div>

        </nav>
    </div>
  )
}

export default NavBar
