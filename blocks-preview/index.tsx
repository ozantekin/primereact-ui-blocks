import * as React from "react";

interface ComponentData {
  name: string;
  files: string[];
  component?: React.LazyExoticComponent<React.ComponentType<any>>;
}

interface Registry {
  [key: string]: ComponentData;
}

const example: Registry = {
  ReviewAndImageSection: {
    name: "ReviewAndImageSection",
    files: ["blocks-preview/components/ReviewAndImageSection.tsx"],
    component: React.lazy(
      () => import("@/pr/blocks-preview/components/ReviewAndImageSection")
    ),
  },
};

export const registry: Registry = {
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));

const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {}
);

export const downloadRegistry: Registry = { ...updatedExample };

export type ComponentName = keyof typeof example;
