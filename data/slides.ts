export type Slide = {
  id: string;
  component: string;
};

export const slides: Slide[] = [
  {
    id: "logo",
    component: "LogoSlide",
  },
  {
    id: "etymology",
    component: "EtymologySlide",
  },
  {
    id: "macaly-description",
    component: "MacalyDescriptionSlide",
  },
  {
    id: "image",
    component: "ImageSlide",
  },
  {
    id: "competitors",
    component: "CompetitorsSlide",
  },
  {
    id: "tweet-image",
    component: "TweetImageSlide",
  },
  {
    id: "differences",
    component: "DifferencesSlide",
  },
  {
    id: "macaly-interface",
    component: "MacalyInterfaceSlide",
  },
  {
    id: "iphone-interface",
    component: "iPhoneInterfaceSlide",
  },
  {
    id: "ambient-agent",
    component: "AmbientAgentSlide",
  },
  {
    id: "github-issue",
    component: "GitHubIssueSlide",
  },
  {
    id: "github-pr",
    component: "GitHubPRSlide",
  },
  {
    id: "langtail",
    component: "LangtailSlide",
  },
  {
    id: "langtail-interface",
    component: "LangtailInterfaceSlide",
  },
  {
    id: "venn-diagram",
    component: "VennDiagramSlide",
  },
  {
    id: "generated-by",
    component: "GeneratedBySlide",
  },
];