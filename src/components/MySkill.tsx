import { FaGem } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiGooglechrome,
  SiWhatsapp,
  SiReact,
  SiPinterest,
  SiMongodb,
  SiFirebase,
  SiMaterialdesign,
  SiMysql,
  SiTypescript,
  SiJest,
  SiTestinglibrary,
  SiCanva,
  SiAdobeacrobatreader,
} from "react-icons/si";
import Title from "./Shared/Title";

const MySkill = () => {
  return (
    <div className="my-12 bg-[#212428] shadow-lg shadow-[#1B1E23] p-12">
      <Title>About My Skill</Title>
      <h3 className="uppercase text-[#878E99] font-semibold my-4">
        Primary skills on
      </h3>
      <div className="grid grid-cols-8 gap-2 md:gap-5 md:text-3xl">
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
            <SiHtml5 className="text-orange-600" title="HTML" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiReact className="text-cyan-400" title="React" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
            <FaGem className="text-purple-500" title="Diamond" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
          <SiFigma className="text-pink-500" title="Figma" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
            <SiAdobeillustrator className="text-orange-500" title="Illustrator" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiGooglechrome className="text-yellow-500" title="Chrome" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
               <SiTypescript className="text-blue-500" title="TypeScript" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
           <SiJavascript className="text-yellow-400" title="JavaScript" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
           <SiNextdotjs className="text-black" title="Next.js" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
            <SiRedux className="text-purple-600" title="Redux" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiAdobephotoshop className="text-blue-500" title="Photoshop" />
        </div>
      </div>
      <h3 className="uppercase text-[#878E99] font-semibold my-4">
        Secondary skills on
      </h3>
      <div className="grid grid-cols-8 gap-5 text-3xl">
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
           <SiPinterest className="text-red-600" title="Pinterest" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
              <SiMongodb className="text-green-600" title="MongoDB" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
              <SiFirebase className="text-yellow-500" title="Firebase" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
           <SiMaterialdesign className="text-blue-600" title="Material Design" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
          <SiMysql className="text-blue-600" title="MySQL" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
            <SiAdobeacrobatreader className="text-orange-500" title="Illustrator" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiCanva className="text-yellow-500" title="Chrome" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiWhatsapp className="text-green-500" title="WhatsApp" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin" >
            <SiTestinglibrary className="text-purple-600" title="Redux" />
        </div>
        <div className="p-4 bg-[#212428] shadow-lg shadow-[#1B1E23] flex justify-center items-center hover:animate-spin">
             <SiJest className="text-blue-500" title="Photoshop" />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
