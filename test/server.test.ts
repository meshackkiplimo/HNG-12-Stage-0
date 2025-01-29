import request from "supertest";
import app from "../src/server"; 

describe("HNG12 Public API Tests", () => {
  it("should return a valid JSON response", async () => {
    const response = await request(app).get("/");
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("current_datetime");
    expect(response.body).toHaveProperty("github_url");
  });

  it("should return a valid email format", async () => {
    const response = await request(app).get("/");
    expect(response.body.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("should return a valid ISO 8601 date format", async () => {
    const response = await request(app).get("/");
    expect(new Date(response.body.current_datetime).toISOString()).toBe(response.body.current_datetime);
  });

  it("should return a valid GitHub URL", async () => {
    const response = await request(app).get("/");
    expect(response.body.github_url).toMatch(/^https:\/\/github\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+$/);
  });
});
