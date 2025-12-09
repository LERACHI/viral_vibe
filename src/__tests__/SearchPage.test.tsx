/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchPage from "@/pages/Search";
import { articles } from "@/data/articles";

const renderWithRouter = (initialEntry: string) =>
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path="/buscar" element={<SearchPage />} />
      </Routes>
    </MemoryRouter>
  );

describe("SearchPage navigation and filters", () => {
  it("mostra total de artigos e resultados por padrão", () => {
    renderWithRouter("/buscar");

    const total = articles.length;
    expect(
      screen.getByText(
        `${total} ${total === 1 ? "artigo encontrado" : "artigos encontrados"}`
      )
    ).toBeInTheDocument();

    // garante que os cards renderizaram
    const firstTitle = articles[0].title;
    expect(screen.getByText(firstTitle)).toBeInTheDocument();
  });

  it("filtra por categoria via querystring", () => {
    renderWithRouter("/buscar?category=travel");
    const travelArticles = articles.filter(
      (article) => article.categoryColor === "travel"
    );

    expect(
      screen.getByText(
        `${travelArticles.length} ${
          travelArticles.length === 1 ? "artigo encontrado" : "artigos encontrados"
        }`
      )
    ).toBeInTheDocument();

    if (travelArticles.length > 0) {
      expect(screen.getByText(travelArticles[0].title)).toBeInTheDocument();
    }
  });

  it("ordena por data mais recente quando sort=recent", () => {
    renderWithRouter("/buscar?sort=recent");

    const sorted = [...articles].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    const firstResultTitle = sorted[0].title;
    // primeiro card exibido deve ser o mais recente
    expect(screen.getAllByRole("heading", { level: 3 })[0]).toHaveTextContent(
      firstResultTitle
    );
  });
});
