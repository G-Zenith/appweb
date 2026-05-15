import { render, screen } from "@testing-library/react";

import Dashboard from "@/app/page";

describe("Dashboard", () => {
  it("presents the new operations-focused hero content", () => {
    render(<Dashboard />);

    expect(
      screen.getByRole("heading", { name: /centro de operaciones/i, level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/radar operativo/i)).toBeInTheDocument();
    expect(screen.getByText(/cobranza del mes/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /crear comunicado/i })).toBeInTheDocument();
  });
});