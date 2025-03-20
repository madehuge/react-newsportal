import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const API_URL =
  "https://newsapi.org/v2/everything?q=tesla&from=2025-02-20&sortBy=publishedAt&apiKey=fcc71b08506b446081f5842049a8e306";

// Function to generate a slug from the title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <Container>
      <div className="search-results">
        <h2>
          Search Results for: <span>{query}</span>
        </h2>
        <p>Show search results based on query here...</p>
      </div>
      {loading ? (
        <Spinner animation="border" className="d-block mx-auto" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
          {currentArticles.map((article, index) => {
            const slug = generateSlug(article.title);
            return (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                      {article.description
                        ? article.description.substring(0, 100) + "..."
                        : "No description available."}
                    </Card.Text>
                    <Link
                      to={`/news/${slug}`}
                      state={{ article }}
                      className="btn btn-primary"
                    >
                      Read More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
}
