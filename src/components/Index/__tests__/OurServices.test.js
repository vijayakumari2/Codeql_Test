import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import "@testing-library/jest-dom"
import OurServices from "../OurServices"

describe("OurServices Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <OurServices />
      </Router>
    )
  })

  test("renders the 'Business Domain Experience' section correctly", () => {
    expect(screen.getByText("Business Domain Experience")).toBeInTheDocument()
    expect(
      screen.getByText(/We've worked across a wide range of industries/)
    ).toBeInTheDocument()

    const listItems = [
      "Carbon Market",
      "GreenIT",
      "Audit & Taxation",
      "Pensions",
      "Payments",
      "Engineering",
      "Logistic",
      "E-Commerce",
      "Supply Chain Management",
      "Open Banking & Finance",
    ]

    listItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  test("renders the 'Technology Expertise' section correctly", () => {
    expect(screen.getByText("Technology Expertise")).toBeInTheDocument()
    expect(
      screen.getByText(
        /We leverage the spectrum of our engineering and consulting resources/
      )
    ).toBeInTheDocument()

    const listItems = [
      "Cloud Native",
      "Data Analytics",
      "Multi-cloud",
      "Microservices",
      "Event Driven",
      "CIAM",
      "API-LED Connectivity",
      "Bespoke Software",
      "Blockchain",
      "AI & ML",
      "Application Modernization",
    ]

    listItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  test("renders the 'Delivery Excellence' section correctly", () => {
    expect(screen.getByText("Delivery Excellence")).toBeInTheDocument()
    expect(
      screen.getByText(/We work side-by-side with our clients/)
    ).toBeInTheDocument()

    const listItems = [
      "Agile",
      "On-time",
      "Quality Assurance",
      "ROI",
      "Standards",
      "Compliant",
      "Self-Sufficiency",
      "Future-Proof",
    ]

    listItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
