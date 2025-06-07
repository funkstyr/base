import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init", {
    description: "Generate a new package for the Monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message:
          "What is the name of the package? (You can skip the `@base/` prefix)",
      },
    ],
    actions: [
      (answers) => {
        if (
          "name" in answers &&
          typeof answers.name === "string" &&
          answers.name.startsWith("@base/")
        ) {
          answers.name = answers.name.replace("@base/", "");
        }
        return "Config sanitized";
      },
      {
        type: "add",
        path: "packages/{{ kebabCase name }}/package.json",
        templateFile: "templates/init-pkg/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ kebabCase name }}/tsconfig.json",
        templateFile: "templates/init-pkg/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ kebabCase name }}/turbo.json",
        templateFile: "templates/init-pkg/turbo.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ kebabCase name }}/src/index.ts",
        templateFile: "templates/init-pkg/index.ts.hbs",
      },
    ],
  });
}
