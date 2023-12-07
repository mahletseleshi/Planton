import logo from "../assets/Planton Logo Black.png"


const Footer = () => {
  return (
    <div className="px-10 bg-gradient-to-b gap-y-10 flex mt-32 flex-col items-center justify-center from-white to-[#74E5A1]">
        <img src ={logo} alt="logo" className="w-fit"/>
        <ul className="flex items-center justify-center gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Leaderboard</li>
            <li>Contact</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
        </ul>
      <div className="flex text-sm items-center justify-between w-full">
        <p>Designed and Made with 💖 by Planton</p>
        <p>All Rights Reserved © Planton 2023</p>
      </div>
    </div>
  )
}

export default Footer
