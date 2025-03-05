import { useState } from "react";
import toast from "react-hot-toast";

const WorkSpaceSharingOnAndOff = () => {
  const [isSharing, setIsSharing] = useState(true);
  const link = "/mylink.com";

  // Function to copy link
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link to secret key copied!");
  };

  return (
    <div className="bg-grey9 rounded-[10px] p-3">
      {isSharing ? (
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-sm mb-2">Sharing is on</h2>
          <div
            className="w-8 h-[18px] bg-purple4 rounded-[99px] p-0.5 cursor-pointer"
            onClick={() => setIsSharing(false)}
          >
            <span className="w-3.5 h-3.5 bg-white block rounded-full ml-3.5"></span>
          </div>
        </div>
      ) : (
        <h2 className="font-medium text-sm mb-2">Sharing is off</h2>
      )}
      {isSharing ? (
        <div>
          <input
            type="text"
            value="/mylink.com"
            className="h-10 w-full rounded-[10px] text-xs font-normal bg-white px-3 placeholder:text-grey10 placeholder:font-normal placeholder:text-sm border-grey5 border"
          />
          <button
            className="bg-white font-medium text-sm px-2.5 py-1.5 mt-2 rounded-lg shadow-sm cursor-pointer"
            onClick={() => handleCopy()}
          >
            Copy Link
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <p className="text-[13px] font-normal text-grey2 w-[390px]">
            To share your workspace with other people you need to publish it
            first.
          </p>
          <div
            className="w-8 h-[18px] bg-grey7 rounded-[99px] p-0.5 cursor-pointer"
            onClick={() => setIsSharing(true)}
          >
            <span className="w-3.5 h-3.5 bg-white block rounded-full"></span>
          </div>
        </div>
      )}

      <div className=" flex gap-2 justify-end items-center mt-3">
        <span className="px-2.5 py-1 font-normal text-sm text-black2">
          Cancel
        </span>
        <button className="bg-purple2 px-2.5 py-1.5 text-sm font-normal text-white rounded-lg border border-purple3">
          Create secret key
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceSharingOnAndOff;
