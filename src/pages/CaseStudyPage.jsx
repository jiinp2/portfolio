import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCaseStudyBySlug, hasCaseStudy } from "../components/CaseStudy";
import { projects } from "../data/projects";

function CaseStudyPage() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((entry) => entry.slug === projectSlug);
  const CaseStudyView = projectSlug ? getCaseStudyBySlug(projectSlug) : null;

  useEffect(() => {
    if (!projectSlug) {
      navigate("/", { replace: true });
      return;
    }

    if (!project) {
      navigate("/", { replace: true });
      return;
    }

    if (project.url) {
      window.location.replace(project.url);
      return;
    }

    if (!hasCaseStudy(project.name)) {
      navigate("/", { replace: true });
    }
  }, [navigate, project, projectSlug]);

  if (!CaseStudyView) {
    return null;
  }

  return <CaseStudyView />;
}

export default CaseStudyPage;
