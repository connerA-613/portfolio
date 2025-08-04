import { JSX } from 'react';
import {
    SiReact,
    SiNextdotjs,
    SiSupabase,
    SiTailwindcss,
    SiFirebase,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiPostgresql,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiMui,
    SiBootstrap,
} from 'react-icons/si';


export const techIconMap: Record<string, JSX.Element> = {
  React: <SiReact title="React" className="text-blue-500" />,
  Next: <SiNextdotjs title="Next.js" className="text-black" />,
  Supabase: <SiSupabase title="Supabase" className="text-green-500" />,
  Tailwind: <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />,
  Firebase: <SiFirebase title="Firebase" className="text-yellow-400" />,
  TypeScript: <SiTypescript title="TypeScript" className="text-blue-600" />,
  JavaScript: <SiJavascript title="JavaScript" className="text-yellow-500" />,
  Python: <SiPython title="Python" className="text-blue-400" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" className="text-indigo-500" />,
  Node: <SiNodedotjs title="Node.js" className="text-green-400" />,
  HTML: <SiHtml5 title="HTML" className="text-orange-500" />,
  CSS: <SiCss3 title="CSS" className="text-blue-300" />,
  MUI: <SiMui title="Material UI" className="text-purple-500" />,
  Bootstrap: <SiBootstrap title="Bootstrap" className="text-purple-600" />,
};