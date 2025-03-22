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