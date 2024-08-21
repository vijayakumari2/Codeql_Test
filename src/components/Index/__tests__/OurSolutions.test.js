import React from "react"
import { render, screen, within } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import OurSolutions from "../OurSolutions"
import "@testing-library/jest-dom"

describe("Our Services Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <OurSolutions />
      </Router>
    )
  })

  test("renders the section title correctly", () => {
    expect(screen.getByText("Our Services")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Enhance digital presence and drive growth with our services."
      )
    ).toBeInTheDocument()
  })

  const services = [
    {
      title: "Consulting & Advisory",
      link: "/services/consulting-advisory#consulting-advisory",
    },
    {
      title: "Cloud Adoption",
      link: "/services/cloud-adoption#cloud-adoption",
    },
    {
      title: "API Enablement",
      link: "/services/api-enablement#api-enablement",
    },
    {
      title: "Software Development",
      link: "/services/software-development#software-development",
    },
    { title: "Blockchain", link: "/services/block-chain#block-chain" },
    { title: "AI & ML", link: "/services/ai-ml#ai-ml" },
    {
      title: "Quality Assurance",
      link: "/services/quality-assurance#quality-assurance",
    },
    { title: "DevOps Practices", link: "/services/devops#devops" },
  ]

  services.forEach(service => {
    test(`renders the ${service.title} service box correctly`, () => {
      // Find the service box by title
      const serviceBox = screen
        .getByText(service.title)
        .closest(".single-boxes-item")
      expect(serviceBox).toBeInTheDocument()

      // Check that the "Read More" link is present within the service box
      const readMoreLink = within(serviceBox).getByRole("link", {
        name: /Read More/i,
      })
      expect(readMoreLink).toBeInTheDocument()
      expect(readMoreLink).toHaveAttribute("href", service.link)

      // Check that the image is present within the service box
      const serviceImage = within(serviceBox).getByAltText("banner")
      expect(serviceImage).toBeInTheDocument()
      expect(serviceImage).toHaveAttribute("width", "20%")
    })
  })
})
