// import AllProjectsD from "@/components/projects/AllProjects";
// import AllProjectsS from "@/components/projects/AllProjects";
import { AllProjectsD, AllProjectsS } from "@/components/projects/AllProjects";
import HeaderProject from "@/components/projects/HeaderProject";

const page = () => {
  return (
    <>
      <HeaderProject />
      <div className="flex flex-col md:flex-row justify-between mr-10 ml-10">
        <AllProjectsS />
        <AllProjectsD />
      </div>
      <div className="flex justify-center mb-5">
        <a
          className=" dark:bg-blue-950 bg-blue-400 dark:hover:bg-green-950 hover:bg-green-400 flex justify-center w-32 text-center items-center rounded-md h-10"
          href="/"
        >
          Back to Home
        </a>
      </div>
    </>
  );
};

export default page;
