import { useState } from "react";
import ContextualToolbar from "./contextualToolbar/contextualToolbar";
import ToolbarTabs from "./contextualToolbar/toolbarTabs";
import CalendarWidget from "./calendarWidget/calendarWidget";
import EngineeringSync from "./calendarWidget/EngineeringSync";

const Container = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3)); // Prevent going beyond step 3
  };

  const handlePrevious = () => {
    setStep(1); // Goes back to step 1
  };

  return (
    <article
      className={`h-max flex ${step === 1 ? "gap-[342px]" : "gap-[220px]"}`}
    >
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
