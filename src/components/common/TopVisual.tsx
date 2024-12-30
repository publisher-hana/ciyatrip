
const TopVisual = () => {
  return (
    <>
       <div className="img h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-[rgba(16,38,54,.6)]"></div>
          <img src="/ciyatrip/images/back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute lef-0 bottom-0 w-full h-10">
            <img src="/ciyatrip/images/back2.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
    </>
  )
}

export default TopVisual