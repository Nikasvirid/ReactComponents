/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { describe, it } from "vitest";
// eslint-disable-next-line prettier/prettier
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/newline-after-import, import/no-named-as-default
import App from "./App";
describe ("App", () =>{
    it("Renders hello world", () => {
        /// ARRANGE
        render( <App />);
        /// ACT
        /// EXPECT
        expect(screen.getAllByRole("heading", {
            level: 1
        })).toHaveTextContent("Hello WORLD");
    });
} );