import LandingPage from "@/components/LandingPage";
import MySkill from "@/components/MySkill";
import Title from "@/components/Shared/Title";


export default function Home() {
  return (
    <div className="bg-[#212428]">
      <div>
        <LandingPage />
      </div>
      <div>
        <div className="ml-0 pl-12 lg:ml-[50%]">
          {/* about me section */}
          <div className="mt-5 p-12 bg-[#212428] shadow-lg shadow-[#1B1E23]">
            <Title>About Me</Title>
            <p className="text-[#878E99] font-semibold text-md mt-4">
              Hi I am a Front-End developer & I can build your website as you
              want. I can customize plugin & wordpress theme. And I have two
              years of experience in figma. Now I am able to design your
              portfolio. <br />
              <br /> I have three years of experience with HTML, CSS,
              JavaScript. And I can Design Your web application.
            </p>
          </div>
          {/* ABOUT MY SKILL SECTION */}
          <div className="">
            <MySkill/>
          </div>
          <div>slide 3</div>
          <div>slide 4</div>
        </div>
      </div>
    </div>
  );
}
