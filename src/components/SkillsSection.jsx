import { FaCode, FaPalette, FaReact, FaFigma, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiLatex,
  SiNextdotjs,
  SiGithub,
  SiWordpress,
  SiDocker
} from "react-icons/si";

export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-8xl font-bold mb-4 mx-w-5xl mx-auto text-center">
        Things I'm Good At
      </h2>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-300 mx-auto mb-12  mx-w-5xl mx-auto text-center">
        Skills, passions, and tools I use to bring ideas to life
      </p>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Development */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <FaCode className="text-4xl text-sky-400 mr-4" />
            <h3 className="text-2xl font-semibold">Development</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge icon={<SiJavascript className="text-yellow-300" />} name="JavaScript" />
            <SkillBadge icon={<SiPython className="text-blue-300" />} name="Python" />
            <SkillBadge icon={<SiMysql className="text-blue-400" />} name="SQL" />
            <SkillBadge icon={<SiHtml5 className="text-orange-500" />} name="HTML" />
            <SkillBadge icon={<SiCss3 className="text-blue-500" />} name="CSS" />
            <SkillBadge icon={<SiLatex className="text-white" />} name="LaTeX" />
            <SkillBadge icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
            <SkillBadge icon={<FaReact className="text-sky-400" />} name="React" />
            <SkillBadge icon={<SiNextdotjs className="text-white" />} name="Next.js" />
            <SkillBadge icon={<FaGitAlt className="text-orange-500" />} name="Git" />
            <SkillBadge icon={<SiGithub className="text-white" />} name="GitHub" />
            <SkillBadge icon={<SiWordpress className="text-blue-400" />} name="WordPress" />
            <SkillBadge icon={<SiDocker className="text-blue-400" />} name="Docker" />
          </div>
        </div>

        {/* Designing */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <FaPalette className="text-4xl text-pink-400 mr-4" />
            <h3 className="text-2xl font-semibold">Designing</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge icon={<FaFigma className="text-pink-400" />} name="Figma" />
            
            <SkillBadge icon={<SiAdobepremierepro className="text-purple-400" />} name="Premiere Pro" />
            <SkillBadge icon={<SiCanva className="text-blue-500" />} name="Canva" />

          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable SkillBadge component
function SkillBadge({ icon, name }) {
  return (
    <span className="flex items-center bg-gray-800/50 px-4 py-3 rounded-full border border-gray-700 hover:border-sky-400 transition-colors">
      <span className="mr-2">{icon}</span>
      {name}
    </span>
  );
}