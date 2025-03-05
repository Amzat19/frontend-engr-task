import { useState } from "react";
import WorkSpaceSharingOnAndOff from "./workspaceSharingOnAndOff";
import CreateWebhook from "./createWebhook";
import ConnectRepository from "./connectRepository";
import CreateNewApiKey from "./createNewApiKey";
import { motion, AnimatePresence } from "framer-motion";

const ToolbarTabs = () => {
  const [activeTab, setActiveTab] = useState("Create Webhook");

  const renderComponent = () => {
    switch (activeTab) {
      case "Create Webhook":
        return <CreateWebhook />;
      case "Connect Repositories":
        return <ConnectRepository />;
      case "Create API Key":
        return <CreateNewApiKey />;
      case "Share Workspace":
        return <WorkSpaceSharingOnAndOff />;
      default:
        return null;
    }
  };

  return (
    <article
      className={`rounded-[18px] p-[18px] bg-white shadow-lg w-[482px] h-max ${
        activeTab === "Create Webhook" ? "mt-[6%]" : "mt-[15%]"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // Ensures Framer Motion detects changes
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>

      <div className="pt-4 flex gap-2 items-center">
        <div className="flex gap-2 items-center overflow-x-scroll w-[390px]">
          {[
            "Create Webhook",
            "Connect Repositories",
            "Create API Key",
            "Share Workspace",
          ].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-[10px] cursor-pointer ${
                activeTab === tab ? "bg-grey9 text-black" : "text-grey2"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <p className="border-l border-grey5 pl-2">H</p>
      </div>
    </article>
  );
};

export default ToolbarTabs;
