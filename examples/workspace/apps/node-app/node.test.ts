import { execSync } from "child_process";
import { describe, it, expect } from "vitest";

describe("dotenv-run should give the expected output", () => {
  it("empty", () => {
    const actual = execSync(
      "node ../../node_modules/@dotenv-run/cli/dist/index.js -- node -e 'console.log(process.env.API_USERS)'",
      { encoding: "utf8" }
    );
    expect(actual).not.toContain("https://dotenv-run");
  });

  it("dev", () => {
    const actual = execSync(
      "NODE_ENV=dev node ../../node_modules/@dotenv-run/cli/dist/index.js -- node -e 'console.log(process.env.API_USERS)'",
      { encoding: "utf8" }
    );
    expect(actual).toContain("https://dotenv-run.dev/");
  });

  it("prod", () => {
    const actual = execSync(
      "NODE_ENV=prod node ../../node_modules/@dotenv-run/cli/dist/index.js -- node -e 'console.log(process.env.API_USERS)'",
      { encoding: "utf8" }
    );
    expect(actual).toContain("https://dotenv-run.app/");
  });
});
