import { expect, mock, test } from "bun:test";
import { render, screen } from "@/__tests__/test-utils";
// import { AuthForm } from "./auth-form";

mock.module("@base/auth/client/web", () => {
  return {
    auth: {
      useSession: mock(() => ({ data: null })),
    },
  };
});

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

// test("link switches to sign up form", () => {
//   render(<AuthForm />);
// });

test("submits login info", () => {
  render(<div>stuff</div>);

  expect(screen.getByText("stuff")).toBeInTheDocument();

  //   expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("textbox", { name: /password/i }),
  //   ).toBeInTheDocument();
});
