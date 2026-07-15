import { render, screen } from "@testing-library/react"
import Navbar from "@/components/Navbar"

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
}))

// Mock framer-motion to avoid complex animation rendering issues in tests
jest.mock("framer-motion", () => {
  const React = require("react")
  return {
    motion: {
      div: ({ children, className }: any) => <div className={className}>{children}</div>,
      h1: ({ children, className }: any) => <h1 className={className}>{children}</h1>,
      h2: ({ children, className }: any) => <h2 className={className}>{children}</h2>,
      p: ({ children, className }: any) => <p className={className}>{children}</p>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  }
})

describe("Navbar Component", () => {
  it("renders the logo", () => {
    render(<Navbar />)
    const logo = screen.getByText("David Rio")
    expect(logo).toBeInTheDocument()
  })

  it("renders all navigation links", () => {
    render(<Navbar />)
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument()
  })
})
