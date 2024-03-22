// import AllProjectsD from "@/components/projects/AllProjects";
// import AllProjectsS from "@/components/projects/AllProjects";
import GoToTheTop from "@/components/GoToTheTop";
import { AllProjectsD, AllProjectsS } from "@/components/projects/AllProjects";
import HeaderProject from "@/components/projects/HeaderProject";

export const metadata = {
  title: "My All Personal Projects | Md Tanvir Ahamed Shanto",
  description:
    "Md Tanvir Ahamed Shanto is a full-stack developer with 1 years of experience.",
};

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
      <GoToTheTop />
    </>
  );
};

export default page;
