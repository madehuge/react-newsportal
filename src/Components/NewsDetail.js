import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default function NewsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <h2 className="text-center">No article found</h2>;
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
      <Card>
        <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {new Date(article.publishedAt).toDateString()} |{" "}
            {article.source.name}
          </Card.Subtitle>
          <Card.Text>{article.content || "No content available."}</Card.Text>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read Full Article
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}
