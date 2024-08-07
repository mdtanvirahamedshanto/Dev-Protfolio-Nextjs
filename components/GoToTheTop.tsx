"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const GoToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed mobile:bottom-10 right-5">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="transition-all mb-20 hover:scale-110 flex justify-center items-center bg-white w-[3rem] h-[3rem] rounded-full cursor-pointer shadow-lg border border-slate-300 dark:bg-gray-950 "
        >
          <i className="text-2xl text-blue-accent-700">
            <FaAngleUp />
          </i>
        </div>
      )}
    </div>
  );
};

export default GoToTheTop;
