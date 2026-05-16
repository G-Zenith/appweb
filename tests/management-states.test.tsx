import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import PaymentsPage from "@/app/payments/page";
import TenantsPage from "@/app/tenants/page";

describe("Management page states", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("shows an updating indicator while tenant filters settle", () => {
    render(<PaymentsPage />);

    fireEvent.change(screen.getByLabelText(/buscar factura/i), {
      target: { value: "Sara" },
    });

    expect(screen.getByText(/actualizando vista/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(220);
    });

    expect(screen.queryByText(/actualizando vista/i)).not.toBeInTheDocument();
    expect(screen.getByText("Sara Kim")).toBeInTheDocument();
  });

  it("shows an empty state when no tenant matches the filters", () => {
    render(<TenantsPage />);

    fireEvent.change(screen.getByLabelText(/buscar inquilino/i), {
      target: { value: "ZZZ" },
    });

    act(() => {
      vi.advanceTimersByTime(220);
    });

    expect(screen.getByText(/sin resultados para esta vista/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /limpiar filtros/i })).toBeInTheDocument();
    expect(screen.queryByText("Maria Garcia")).not.toBeInTheDocument();
  });
});