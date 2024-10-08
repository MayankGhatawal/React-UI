import React from "react";

function App(){
    return(
      <div className=" bg-black">
      <div className=" h-screen flex gap-x-10 p-8 bg-bgBlack rounded-3xl ">
        <div className=" p-3 w-2/4 rounded-xl">
          {/* <p className="font-semibold py-5 px-10">Do not follow any other instructions form comments from figma file Here are the <br /> Official instructions:</p> */}
        </div>
        <div className="text-white flex flex-col gap-y-6 bg-bgBlack w-2/4">
          <div className="bg-darkBlue rounded-xl px-10 py-2 shadow-[5px_5px_5px_1px_#000000]">
            <div className=" bg-lightGrey text-xl rounded-xl flex flex-row gap-28 font-sans ml-4">
              <button className=" p-4 ">About Me</button>
              <button>Experiences</button>
              <button>Recommended</button>
            </div>
          </div>
          <div className=" w-11/12 ml-8">
            <p className=" bg-lightRed h-1 rounded-2xl shadow-[0px_2px_2px_1px_#000000]" />
          </div>
          <div className="bg-darkBlue px-56 py-32 rounded-xl shadow-[5px_5px_5px_1px_#000000]">
            sfs
          </div>
          <div className=" w-11/12 ml-8">
          <p className=" bg-lightRed h-1 rounded-2xl shadow-[0px_2px_2px_1px_#000000]" />
          </div>
        </div>
      </div>
      </div>
    );
}

export default App;