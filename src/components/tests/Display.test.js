import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {fetchShow as mockFetchShow } from "../../api/fetchShow";
import Display from "../Display";
import userEvent from "@testing-library/user-event";
import Show from "../Show";


jest.mock("axios");

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

test("renders without and props passed", () => {
  render(<Display />);
});


test("when the fetch button is pressed, the show component will display", async ()=> {
    render(<Display />);
    const btn = screen.getByText(/Press to/i)
    expect (btn).toBeDefined();
    userEvent.click(btn)
    await waitFor(() => expect(screen.getAllByTestId(/container/i)).toHaveLength(3));
} )
///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
