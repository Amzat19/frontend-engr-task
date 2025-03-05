const ConnectRepository = () => {
  return (
    <div className="bg-grey9 rounded-[10px] p-3">
      <h2 className="font-medium text-sm mb-2">
        Connect repositories to{" "}
        <span className="bg-purple1 py-0.5 px-1 text-purple2 font-medium text-xs rounded-md">
          acme
        </span>
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="deployment-created" />
          <label
            htmlFor="deployment-created"
            className="font-normal text-[13px] text-grey2"
          >
            Deployment created
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="deployment-error" />
          <label
            htmlFor="deployment-error"
            className="font-normal text-[13px] text-grey2"
          >
            Deployment error
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="deployment-cancelled" />
          <label
            htmlFor="deployment-cancelled"
            className="font-normal text-[13px] text-grey2"
          >
            Deployment cancelled
          </label>
        </div>
        <div className=" flex gap-2 justify-end items-center mt-3">
          <span className="px-2.5 py-1 font-normal text-sm text-black2">
            Cancel
          </span>
          <button className="bg-purple2 px-2.5 py-1.5 text-sm font-normal text-white rounded-lg border border-purple3">
            Connect repositories
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectRepository;
