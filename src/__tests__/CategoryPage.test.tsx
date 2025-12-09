/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "@/pages/Category";
import { articles } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";

const renderWithRouter = (initialEntry: string) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path="/categoria/:slug" element={<CategoryPage />} />
      </Routes>
    </MemoryRouter>
  );

describe("CategoryPage navigation and pagination", () => {
  it("renderiza categoria válida e lista artigos", () => {
    renderWithRouter("/categoria/viagens");

    const category = getCategoryBySlug("viagens");
    expect(category).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 1, name: category?.label })
    ).toBeInTheDocument();

    const categoryArticles = articles.filter(
      (article) => article.categoryColor === (category?.key ?? "")
    );
    expect(screen.getByText(new RegExp(`${categoryArticles.length} .*artigo`, "i"))).toBeInTheDocument();

    if (categoryArticles.length > 0) {
      expect(screen.getByText(categoryArticles[0].title)).toBeInTheDocument();
    }
  });

  it("desabilita paginação quando há apenas uma página", () => {
    renderWithRouter("/categoria/em-alta?page=2");

    const prevButton = screen.getByRole("button", { name: /Anterior/i });
    const nextButton = screen.getByRole("button", { name: /Proximo/i });

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
