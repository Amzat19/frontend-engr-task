import { Toaster } from "react-hot-toast";
import Container from "./components/container";

function App() {
  return (
    <>
      <main className="mx-auto w-[93.5%] h-screen">
        <section className="border border-grey1 rounded-4xl h-[79%] mt-[108px]">
          <div className="px-[102px] h-full">
            <Container />
          </div>
        </section>
      </main>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
