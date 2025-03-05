import { useState } from "react";
import ContextualToolbar from "./contextualToolbar";
import ToolbarTabs from "./toolbarTabs";
import CalendarWidget from "./calendarWidget";
import EngineeringSync from "./EngineeringSync";

const Container = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3)); // Prevent going beyond step 3
  };

  const handlePrevious = () => {
    setStep(1); // Goes back to step 1
  };

  return (
    <article className="h-full flex gap-[342px]">
      {step === 1 && (
        <>
          <CalendarWidget onNext={handleNext} />
          <EngineeringSync />
        </>
      )}
      {step === 2 && (
        <>
          <ContextualToolbar onPrevious={handlePrevious} />
          <ToolbarTabs />
        </>
      )}
    </article>
  );
};

export default Container;
