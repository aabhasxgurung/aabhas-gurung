import { Projects } from "@/constnts/project";
import WorkDetail from "../components/WorkDetail";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const project = Projects.find((proj) => proj.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-[100vh] px-6 relative">
      <WorkDetail project={project} />
    </div>
  );
};

export default Page;
