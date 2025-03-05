const CreateWebhook = () => {
  return (
    <div className="">
      <h2 className="font-medium text-sm">Create webhook</h2>
      <div className="bg-grey9 p-3 rounded-xl mt-3">
        <div className="mb-3">
          <p className="font-medium text-sm mb-2 text-black2">Endpoint</p>
          <input
            type="text"
            className="h-10 w-full rounded-[10px] bg-white px-3 placeholder:text-grey10 placeholder:font-normal placeholder:text-sm border-grey5 border"
            placeholder="https://myapp.com/webhooks"
          />
        </div>

        <div className="mb-3">
          <p className="font-medium text-sm mb-2 text-black2">Projects</p>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="teams" />
              <label
                htmlFor="teams"
                className="font-normal text-[13px] text-grey2"
              >
                All teams in{" "}
                <span className="bg-purple1 py-0.5 px-1 text-purple2 font-medium text-xs">
                  acme
                </span>
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="tagged" />
              <label
                htmlFor="tagged"
                className="font-normal text-[13px] text-grey2"
              >
                Tagged projects
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2 text-black2">Events</p>
          <div className="bg-grey8 rounded-[10px] p-3 grid grid-cols-2 gap-2">
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
              <input type="checkbox" id="project-created" />
              <label
                htmlFor="project-created"
                className="font-normal text-[13px] text-grey2"
              >
                Project created
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
              <input type="checkbox" id="project-deleted" />
              <label
                htmlFor="project-deleted"
                className="font-normal text-[13px] text-grey2"
              >
                Project deleted
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
          </div>
          <div className=" flex gap-2 justify-end items-center mt-3">
            <span className="px-2.5 py-1 font-normal text-sm text-black2">
              Cancel
            </span>
            <button className="bg-purple2 px-2.5 py-1.5 text-sm font-normal text-white rounded-lg border border-purple3">
              Create Webhook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWebhook;
