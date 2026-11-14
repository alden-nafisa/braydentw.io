import { kebabCase } from "@/utils/utils";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 0,
    title: "Personal Portfolio",
    desc: "Website portfolio personal Alden untuk menampilkan profil, kemampuan, dan karya digital.",
    img: "/static/projects/yei-learn.png",
    github: "https://github.com/alden-nafisa",
    tags: ["NextJS", "React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 1,
    title: "Eksperimen Web Interaktif",
    desc: "Kumpulan eksperimen antarmuka web untuk mengeksplorasi interaksi, layout, dan responsive design.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/alden-nafisa",
    tags: ["React", "JavaScript", "CSS"],
  },
];

export const allTags: string[] = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects
