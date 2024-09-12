import * as React from "react";

interface ComponentDataProps {
  name: string;
  files: string[];
  component?: React.LazyExoticComponent<React.ComponentType<any>>;
}

interface RegistryProps {
  [key: string]: ComponentDataProps;
}

const example: RegistryProps = {
  ReviewAndImageSection: {
    name: "ReviewAndImageSection",
    files: ["preview/blocks/components/hero-header/ReviewAndImageSection.tsx"],
    component: React.lazy(
      () =>
        import(
          "@/pr/preview/blocks/components/hero-header/ReviewAndImageSection"
        )
    ),
  },
  HeroWithCallToAction: {
    name: "HeroWithCallToAction",
    files: [
      "preview/blocks/components/call-to-actions/HeroWithCallToAction.tsx",
    ],
    component: React.lazy(
      () =>
        import(
          "@/pr/preview/blocks/components/call-to-actions/HeroWithCallToAction"
        )
    ),
  },
  HeroSignupForm: {
    name: "HeroSignupForm",
    files: ["preview/blocks/components/authentication/HeroSignupForm.tsx"],
    component: React.lazy(
      () =>
        import("@/pr/preview/blocks/components/authentication/HeroSignupForm")
    ),
  },
  FeatureDetailsWithIcons: {
    name: "HeroSignupForm",
    files: [
      "preview/blocks/components/features-section/FeatureDetailsWithIcons.tsx",
    ],
    component: React.lazy(
      () =>
        import(
          "@/pr/preview/blocks/components/features-section/FeatureDetailsWithIcons"
        )
    ),
  },
};

export const registry: RegistryProps = {
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));

const updatedExample: RegistryProps = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {}
);

export const downloadRegistryProps: RegistryProps = { ...updatedExample };

export type ComponentName = keyof typeof example;
