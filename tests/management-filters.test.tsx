import { fireEvent, render, screen } from "@testing-library/react";

import MaintenancePage from "@/app/maintenance/page";
import PaymentsPage from "@/app/payments/page";
import TenantsPage from "@/app/tenants/page";
import UnitsPage from "@/app/units/page";

describe("Management page filters", () => {
  it("filters tenants by search query", () => {
    render(<TenantsPage />);

    fireEvent.change(screen.getByLabelText(/buscar inquilino/i), {
      target: { value: "Sara" },
    });

    expect(screen.getByText("Sara Kim")).toBeInTheDocument();
    expect(screen.queryByText("Maria Garcia")).not.toBeInTheDocument();
    expect(screen.queryByText("James Wilson")).not.toBeInTheDocument();
  });

  it("filters units by availability", () => {
    render(<UnitsPage />);

    fireEvent.change(screen.getByLabelText(/filtrar estado de unidades/i), {
      target: { value: "Disponible" },
    });

    expect(screen.getByText("1A")).toBeInTheDocument();
    expect(screen.getByText("9C")).toBeInTheDocument();
    expect(screen.queryByText("Carlos Reyes")).not.toBeInTheDocument();
  });

  it("filters maintenance requests by priority", () => {
    render(<MaintenancePage />);

    fireEvent.change(screen.getByLabelText(/filtrar prioridad/i), {
      target: { value: "Alta" },
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("James Wilson")).toBeInTheDocument();
    expect(screen.queryByText("Tom Brown")).not.toBeInTheDocument();
  });

  it("filters payments by status", () => {
    render(<PaymentsPage />);

    fireEvent.change(screen.getByLabelText(/filtrar estado de facturas/i), {
      target: { value: "Vencido" },
    });

    expect(screen.getByText("Sara Kim")).toBeInTheDocument();
    expect(screen.queryByText("Maria Garcia")).not.toBeInTheDocument();
    expect(screen.queryByText("James Wilson")).not.toBeInTheDocument();
  });
});