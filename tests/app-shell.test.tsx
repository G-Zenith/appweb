import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, it, vi } from "vitest";

import AppShell from "@/components/AppShell";

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

describe("AppShell", () => {
  beforeEach(() => {
    pathnameMock.mockReturnValue("/payments");
  });

  it("opens and closes the mobile navigation drawer", () => {
    render(
      <AppShell>
        <div>Contenido</div>
      </AppShell>
    );

    expect(screen.queryByRole("dialog", { name: /navegación principal/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /abrir navegación/i }));

    expect(screen.getByRole("dialog", { name: /navegación principal/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /cerrar navegación/i }));

    expect(screen.queryByRole("dialog", { name: /navegación principal/i })).not.toBeInTheDocument();
  });

  it("closes the mobile navigation after selecting a destination", () => {
    render(
      <AppShell>
        <div>Contenido</div>
      </AppShell>
    );

    fireEvent.click(screen.getByRole("button", { name: /abrir navegación/i }));

    const dialog = screen.getByRole("dialog", { name: /navegación principal/i });

    fireEvent.click(within(dialog).getByRole("link", { name: /pagos/i }));

    expect(screen.queryByRole("dialog", { name: /navegación principal/i })).not.toBeInTheDocument();
  });
});