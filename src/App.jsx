import figma from "./assets/image 141.png"
import flutter from "./assets/Flutter 1.svg"
import css from "./assets/image 140.png"
import java from "./assets/image 142.png"
import SectionTitle from "./SectionTitle/SectionTitle";

function App() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto bg-[#FF6838] rounded'>
        <div className="relative">
          <div className=" absolute ">
           <div className="ml-[900px]">
            <img className="ml-9 my-5" src={css} alt="" />
            <img className="" src={java} alt="" />
            </div>
            <div className="-mt-[250px]">
            <img className="pt-10 w-16 ml-[400px]" src={figma} alt="" />
            <img className="w-28 ml-[50px]" src={flutter} alt="" />
            <img className="w-20 -mt-5 ml-[300px]" src={css} alt="" />
            </div>
          </div>
        </div>
        <div className="featured-item bg-fixed text-white pt-4 my-20">
          <SectionTitle
            heading={"Embrace the Future of Digital Success"}
          ></SectionTitle>
          <div className="md:flex justify-center items-center pb-20  px-36  bg-opacity-40">
            <div>
              <p className="w-[500px] font-medium p-3">Together, we'll craft a digital strategy that propels your business <span className='pl-[60px]'>to new heights of growth and profitability..</span></p>
            </div>
          </div>
          <div className='flex
          justify-center pb-10 -mt-16'>
            <button className='btn bg-white font-medium rounded-full'>Schedule a Consultation</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
