import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it, vi } from "vitest";

import Sidebar from "@/components/Sidebar";

const pathnameMock = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => pathnameMock(),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    pathnameMock.mockReturnValue("/payments");
  });

  it("shows the redesigned brand and navigation structure", () => {
    render(<Sidebar />);

    expect(screen.getByText("NexoHabitat")).toBeInTheDocument();
    expect(screen.getByText(/panel operativo/i)).toBeInTheDocument();
    expect(screen.getByText(/explorar/i)).toBeInTheDocument();
  });

  it("marks the active route with aria-current", () => {
    render(<Sidebar />);

    expect(screen.getByRole("link", { name: /pagos/i })).toHaveAttribute("aria-current", "page");
  });
});