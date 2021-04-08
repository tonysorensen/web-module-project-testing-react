import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Show from "./../Show";
import Loading from "../Loading";

const testShow = {
  //add in approprate test data structure here.
  name: "",
  summary: "",
  seasons: [
    {
      id: 1,
      name: "Season 1",
      episodes: [],
    },
    {
      id: 2,
      name: "Season 2",
      episodes: [],
    },
    {
      id: 3,
      name: "Season 3",
      episodes: [],
    },
  ],
};

// console.log(testShow)
test("renders testShow and no selected Season without errors", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
  expect();
});

test("renders Loading component when prop show is null", () => {});
render(<Show show={null} />);
const loading = screen.getByTestId("loading-container");
expect(loading).toBeDefined();

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
  const numberOfSeasons = screen.getAllByTestId("season-option");
  expect(numberOfSeasons).toHaveLength(3);
});

test("handleSelect is called when an season is selected", () => {
  const mockHandleSelect = jest.fn(() => {});
  render(
    <Show
      show={testShow}
      selectedSeason={"none"}
      handleSelect={mockHandleSelect}
    />
  );
  const selectedSeason = screen.getByTestId("select");
  expect(selectedSeason).toBeDefined();
  userEvent.click(selectedSeason);
  const options = screen.getAllByTestId("season-option");
  expect(options).toBeDefined();
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  render(<Show show={testShow} selectedSeason={"1"} />);
  const selectedSeason = screen.getByTestId("select");
  expect(selectedSeason).toBeDefined();
  userEvent.click(selectedSeason);
  const options = screen.getAllByTestId("episodes-container");
  expect(options).toHaveLength(1);
//   userEvent.selectOptions(screen.getAllByTestId("season-option"),[screen.getByText(/1/)])
//   userEvent.selectOptions(screen.getByTestId('select'), ['1'])

//   const episodes = screen.getByTestId("episodes-container");
//   expect(episodes).toBeDefined();
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
