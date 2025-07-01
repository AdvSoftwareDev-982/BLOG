import pytest, time
from httpx import ASGITransport, AsyncClient
from fastapi.testclient import TestClient
from .main import app

client = TestClient(app=app)


def test_blog_creation():
    response = client.post(
        "/blog", json={"title": "Test Blog", "text": "Hello, this is a test blog"}
    )
    assert response.status_code == 200


def test_user_creation():
    response = client.post(
        "/auth/register", json={"email": "user@example.com", "password": "Password1!"}
    )
    assert response.status_code == 201
