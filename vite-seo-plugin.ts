import type { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";

export function seoManagerPlugin(): Plugin {
  return {
    name: "seo-manager-plugin",
    configureServer(server) {
      server.middlewares.use("/api/seo", async (req, res, next) => {
        if (req.method === "GET") {
          try {
            const seoDataPath = path.resolve(process.cwd(), "src/data/seo-data.json");
            const data = fs.existsSync(seoDataPath)
              ? JSON.parse(fs.readFileSync(seoDataPath, "utf-8"))
              : {};
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to read SEO data" }));
          }
        } else if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const seoDataPath = path.resolve(process.cwd(), "src/data/seo-data.json");
              const data = JSON.parse(body);
              fs.writeFileSync(seoDataPath, JSON.stringify(data, null, 2));
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Failed to save SEO data" }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

