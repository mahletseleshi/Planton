import Faq from "../Faq"
import {useState} from "react"



const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  
    return (
      <div className="flex flex-col items-center mt-32 w-full justify-between">
       <h1 className="text-[#39DA79] mb-10 border-b-4 flex  font-bold text-[20px] border-[#39DA79]">FREQUENTLY ASKED QUESTIONS</h1>
        <h1 className="text-black/10 mt-[-80px] flex  font-bold text-[30px]">FREQUENTLY ASKED QUESTIONS</h1>
         <div className="grid grid-cols-2 gap-4 mt-10  w-[1000px]">
          {Faq.map((faq, index) => (
            <div key={index}>
              <div
                className=" bg-[#39DA79]/10 px-4  flex items-center cursor-pointer"
                onClick={() => toggleFAQ(faq.index)}
              >
                <p className="text-[15px] font-medium">{faq.Question}</p>
                {/* Your SVG code for the arrow */}
              </div>
              {activeIndex === faq.index && (
                <p className="mt-2   bg-[#39DA79]/10 px-4 text-[12px] text-gray-600">{faq.Answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;