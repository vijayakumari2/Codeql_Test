import React from "react"
import { render } from "@testing-library/react"
import Banner1 from "../Banner1"
import Banner3 from "../Banner3"
import "@testing-library/jest-dom"

test("Banner1 renders the correct title", () => {
  const { getByText } = render(<Banner1 />)
  expect(getByText("Digital Transformation")).toBeInTheDocument()
})

test("Banner3 renders the correct title", () => {
  const { getByText } = render(<Banner3 />)
  expect(getByText("Offshore Engineering Team")).toBeInTheDocument()
})
