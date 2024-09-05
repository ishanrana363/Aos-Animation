import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 500 });
  }, []);

  return (
    <>
      <div className="flex mt-8 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-right"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-out-left"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>

      <div className="flex mt-16 justify-between">
        <div
          className="max-w-[400px] flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-in"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div
          className="max-w-[400px]  flex h-48 bg-[#f8e3b0] text-center my-auto flex-1 justify-center items-center"
          data-aos="zoom-in-up"
        >
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </>
  );
}

export default App;
