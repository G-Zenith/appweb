import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ActionToolbar from "@/components/management/ActionToolbar";
import PageHero from "@/components/management/PageHero";

describe("Management UI components", () => {
  it("renders a reusable page hero with metrics and primary action", () => {
    render(
      <PageHero
        eyebrow="Operación"
        title="Inquilinos"
        description="Resumen editorial de la cartera activa."
        actionLabel="Agregar inquilino"
        metrics={[
          { label: "Activos", value: "36", detail: "Cartera estable", tone: "dark" },
          { label: "Por vencer", value: "04", detail: "Renovar esta semana", tone: "accent" },
        ]}
      />
    );

    expect(screen.getByRole("heading", { name: /inquilinos/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /agregar inquilino/i })).toBeInTheDocument();
    expect(screen.getByText(/cartera estable/i)).toBeInTheDocument();
  });

  it("renders a reusable action toolbar with search, filter and action buttons", () => {
    const onSearchChange = vi.fn();
    const onFilterChange = vi.fn();

    render(
      <ActionToolbar
        resultSummary="Mostrando 2 de 4 perfiles"
        search={{
          id: "tenant-search",
          label: "Buscar inquilino",
          placeholder: "Nombre, unidad o correo",
          value: "",
          onChange: onSearchChange,
        }}
        filter={{
          id: "tenant-filter",
          label: "Filtrar estado",
          value: "Todos",
          options: ["Todos", "Activo", "Por vencer"],
          onChange: onFilterChange,
        }}
        actions={["Exportar", "Resumen"]}
      />
    );

    fireEvent.change(screen.getByLabelText(/buscar inquilino/i), {
      target: { value: "Sara" },
    });
    fireEvent.change(screen.getByLabelText(/filtrar estado/i), {
      target: { value: "Activo" },
    });

    expect(onSearchChange).toHaveBeenCalled();
    expect(onFilterChange).toHaveBeenCalled();
    expect(screen.getByText(/mostrando 2 de 4 perfiles/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /resumen/i })).toBeInTheDocument();
  });
});