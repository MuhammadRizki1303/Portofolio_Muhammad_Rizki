import { notFound } from "next/navigation";

import ProjectDetail from "@/components/ProjectDetail";
import { additionalProjects } from "@/lib/projects";

export function generateStaticParams() {
  return additionalProjects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = additionalProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
