import { Toaster } from "react-hot-toast";
import Container from "./components/container";

function App() {
  return (
    <>
      <main className="mx-auto w-[93.5%] h-screen">
        <section className="border border-grey1 rounded-4xl h-[90%] mt-[68px]">
          <div className="px-[102px] h-full">
            <Container />
          </div>
        </section>
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FCFCFC",
            color: "#292929",
            // padding: "6px",
            paddingRight: "100px",
            borderRadius: "12px",
            // width: "440px",
            height: "44px",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
          },
        }}
      />
    </>
  );
}

export default App;
