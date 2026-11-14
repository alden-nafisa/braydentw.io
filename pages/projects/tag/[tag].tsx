import Page from "components/utility/Page";

import { GetStaticProps, GetStaticPaths } from "next";
import { allKebabTags, allTags } from "@/data/content/projects";
import { Project } from "@/types";

import projects from "@/data/content/projects";

import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const uniqueAllTags = Array.from(new Set(projects.flatMap((project) => project.tags)));
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = String(params?.tag ?? "");
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
};

type PostPageProps = {
  filteredProjects: Project[];
  tag: string;
};

function PostPage({ filteredProjects, tag }: PostPageProps) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darker hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
      {/* <More /> */}
    </Page>
  );
}

export default PostPage;
