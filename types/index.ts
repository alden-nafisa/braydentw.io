export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type Skill = {
  title: string;
  icon: string;
  style?: Record<string, string>;
};

export type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export type Design = {
  label: string;
  img: string;
  link: string;
};
