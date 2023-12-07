import about from "../assets/Group 1.png"


const About = () => {
  return (
    <div className="flex flex-col items-center mt-32">
        <h1 className="text-[#39DA79] mb-10 border-b-4 flex  font-bold text-[20px] border-[#39DA79]">About</h1>
        <h1 className="text-black/10 mt-[-80px] flex  font-bold text-[30px]">About</h1>
        <div className="flex items-center gap-14 justify-between w-full">
        <div className="flex basis-2/5 ">
         <img src={about} alt="about" className="w-full"/>
        </div>

        <div className="flex basis-[60%] flex-col text-[12px]">
           <p className="">Planton is a unique platform that brings together 
            individuals and communities with a shared passion for 
            the environment. Our mission is to inspire and motivate 
            people to plant trees, contributing to a greener and 
            healthier planet. At Planton, anyone can create 
            a project with a specific goal for tree planting. 
            Each project includes a title, description, the number of 
            trees to be planted, the location, and the date. This open 
            platform allows any user to participate, fostering a sense of 
            community and shared responsibility.</p> <p className="mt-3">We believe in recognizing 
            the efforts of our users. That’s why we have a leaderboard that
             showcases those who have planted the most trees.</p> <p className="mt-3"> It’s a fun and 
             friendly competition that encourages more participation. 
             But that’s not all! Planton also hosts contests where users have 
             the opportunity to earn rewards by planting trees.Join us at 
             Planton, where every tree planted is a step towards a sustainable 
             future. Together, we can make a difference!</p>
        </div>
        </div>
    </div>

  )
}

export default About
