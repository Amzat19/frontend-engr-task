type ContextualToolbarProps = {
  onPrevious: () => void;
};

const ContextualToolbar = ({ onPrevious }: ContextualToolbarProps) => {
  const languages = ["React", "Tailwind css", "Motion (prev. framer motion)"];

  return (
    <div className="mt-[10%]">
      <div>
        <h1 className="font-medium text-base mb-3 text-grey3">
          Contextual toolbar
        </h1>
        <p className="font-normal text-sm w-[351px] text-grey2 mb-2">
          A toolbar that suggests and enables actions based on users'
          navigation.
        </p>
        <p className="font-normal text-sm w-[351px] text-grey2">
          Suggestions are related to the current page and users can perform
          actions inside the component, without changing to another page or
          context.
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
        className="px-2.5 py-1.5 border border-black1 text-black2 w-max rounded-lg font-medium text-sm mt-[25%] block cursor-pointer"
        onClick={onPrevious}
      >
        Previous task
      </span>
    </div>
  );
};

export default ContextualToolbar;
