import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe ("App", () =>{
    it("renders Home", () => {
        /// ARRANGE
        render( 
          <MemoryRouter initialEntries={['/home']}>
            <App />
          </MemoryRouter>
          )
                   
        expect(screen.getByText("Bonjour!")).toBeInTheDocument(); 
    });
    test('renders About',() => {
        render(
          <MemoryRouter initialEntries={['/about']}>
            <App />
          </MemoryRouter>
        );
        expect(screen.getByText('About')).toBeInTheDocument();
    });
    test('renders Error404',()=>{
        render(
            <MemoryRouter initialEntries={['/non-existent-route']}>
            <App />
          </MemoryRouter>
        );
        expect(screen.getByText('NotFoundpage Errr 404! Go')).toBeInTheDocument();
    });
});