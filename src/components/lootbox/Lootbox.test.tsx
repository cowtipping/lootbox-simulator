import Lootbox from "./Lootbox";
import { render, screen, fireEvent } from "@testing-library/react";
//import userEvent from '@testing-library/user-event';

describe("basic rendering", () => {
  it("has Footer contains LinkedIn, GitHub and Portfolio links", () => {
    render(<Lootbox />);
    const linkElement = screen.getByText(/LinkedIn/i);
    expect(linkElement).toBeInTheDocument();

    const linkElement2 = screen.getByText(/GitHub/i);
    expect(linkElement2).toBeInTheDocument();

    const linkElement3 = screen.getByText(/Portfolio/i);
    expect(linkElement3).toBeInTheDocument();
  });

  it("shows an image", () => {
    render(<Lootbox />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  it("has a button to open lootbox", () => {
    render(<Lootbox />);
    const btnElement = screen.getByRole("button", { name: "OPEN LOOT BOX" });
    expect(btnElement).toBeInTheDocument();
  });

  it("has a button to toggle sound", () => {
    render(<Lootbox />);
    const btnElement = screen.getByRole("button", { name: "toggle sound" });
    expect(btnElement).toBeInTheDocument();
  });
});

describe("user events", () => {
  it("decrements the number of loot boxes when button is clicked", () => {
    const { getByText } = render(<Lootbox />);
    const openLootBoxButton = getByText("OPEN LOOT BOX");
    const lootBoxCount = getByText("Loot boxes left: 5");
    fireEvent.click(openLootBoxButton);
    expect(lootBoxCount.textContent).toEqual("Loot boxes left: 4");
  });
});
