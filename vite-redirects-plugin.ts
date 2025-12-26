import type { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";

export function redirectsPlugin(): Plugin {
  return {
    name: "redirects-plugin",
    configureServer(server) {
      server.middlewares.use("/api/redirects", async (req, res, next) => {
        if (req.method === "GET") {
          try {
            const redirectsPath = path.resolve(process.cwd(), "src/data/redirects.json");
            const data = fs.existsSync(redirectsPath)
              ? JSON.parse(fs.readFileSync(redirectsPath, "utf-8"))
              : [];
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to read redirects data" }));
          }
        } else if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const redirectsPath = path.resolve(process.cwd(), "src/data/redirects.json");
              const data = JSON.parse(body);
              fs.writeFileSync(redirectsPath, JSON.stringify(data, null, 2));
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Failed to save redirects data" }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

