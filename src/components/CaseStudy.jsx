import Rabbu from "./case-studies/Rabbu";
import RabbuPortfolio from "./case-studies/RabbuPortfolio";
import RabbuMarketplace from "./case-studies/RabbuMarketplace";
import Kobo from "./case-studies/Kobo";
import Skiin from "./case-studies/Skiin";
import Maison from "./case-studies/Maison";
import Wattpad from "./case-studies/Wattpad";

/** Keys match `project.name` from `projects` data. */
const CASE_STUDY_COMPONENT_BY_PROJECT_NAME = {
  Maison,
  Rabbu,
  "Rabbu Portfolio": RabbuPortfolio,
  "Rabbu Marketplace": RabbuMarketplace,
  Kobo,
  Skiin,
  "Wattpad Text Scenes": Wattpad,
};

/** Keys match `project.slug` from `projects` data. */
const CASE_STUDY_COMPONENT_BY_SLUG = {
  maison: Maison,
  "rabbu-marketplace": RabbuMarketplace,
  "rabbu-portfolio": RabbuPortfolio,
  kobo: Kobo,
  skiin: Skiin,
  wattpad: Wattpad,
};

function hasCaseStudy(projectName) {
  return Boolean(CASE_STUDY_COMPONENT_BY_PROJECT_NAME[projectName]);
}

function getCaseStudyBySlug(slug) {
  return CASE_STUDY_COMPONENT_BY_SLUG[slug] ?? null;
}

export { hasCaseStudy, getCaseStudyBySlug };
