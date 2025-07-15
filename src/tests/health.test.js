const request = require("supertest");
const app = require("../app");

describe("GET /api/health", () => {
  it("debería responder con estado 200 y mensaje de salud correcto", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      status: "OK",
      message: "API funcionando correctamente",
    });
  });

  it("debería devolver 404 si la ruta no existe", async () => {
    const res = await request(app).get("/api/no-existe");
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ error: "Ruta no encontrada" });
  });
});
