type CalendarWidgetProps = {
  onNext: () => void;
};

const CalendarWidget = ({ onNext }: CalendarWidgetProps) => {
  const languages = ["React", "Tailwind css", "Motion (prev. framer motion)"];

  return (
    <div className="mt-[15%]">
      <div>
        <h1 className="font-medium text-base mb-2 text-grey3">
          Calendar widget
        </h1>
        <p className="font-normal text-sm w-[351px] text-grey2">
          Calendar widget with clear timezone differences information. Click on
          the widget to interact with it.
        </p>
        <div className="flex gap-2 mt-4">
          {languages.map((language) => (
            <span className="py-1 px-2 bg-grey4 text-grey2 rounded-lg font-normal text-[13px]">
              {language}
            </span>
          ))}
        </div>
      </div>
      <span
        className="px-2.5 py-1.5 border border-black1 text-black2 w-max rounded-lg font-medium text-sm mt-[40%] block cursor-pointer"
        onClick={onNext}
      >
        Next task
      </span>
    </div>
  );
};

export default CalendarWidget;
