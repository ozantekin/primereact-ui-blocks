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
  "copy-button": {
    name: "copy-button",
    files: ["blocks-preview/components/CopyButton.tsx"],
    component: React.lazy(
      () => import("@/pr/blocks-preview/components/CopyButton")
    ),
  },
};

export const registry: Registry = {
  ...example,
};

// Componentleri boş bir fonksiyon ile güncelleme (sadece örnekleme amaçlı)
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
