const CreateNewApiKey = () => {
  return (
    <div className="bg-grey9 rounded-[10px] p-3">
      <h2 className="font-medium text-sm mb-2">Create new API key</h2>
      <p className="text-[13px] font-normal text-grey2">
        Your secret API Key will be shared with all users belonging to your
        organization.
      </p>
      <input
        type="text"
        className="h-10 w-full rounded-[10px] bg-white px-3 placeholder:text-grey10 placeholder:font-normal placeholder:text-sm border-grey5 border mt-2  focus:border-purple5 focus:ring-2 focus:ring-purple1 focus:outline-none"
        placeholder="API key name"
      />
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

export default CreateNewApiKey;
