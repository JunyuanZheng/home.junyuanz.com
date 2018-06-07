const express = require("express");
const next = require("next");
const path = require("path");
const http = require("http");
const https = require("https");
const fs = require("fs");
const helmet = require("helmet");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  server.disable("x-powered-by");
  server.use(helmet());
  server.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", "data:", "at.alicdn.com"],
        imgSrc: ["'self'"],
        connectSrc: ["'self'"],
        workerSrc: ["'self'"]
      }
    })
  );

  if (!dev) {
    server.use(
      "/.well-known",
      express.static(path.join("certbot", ".well-known"))
    );
  }

  server.use("/static", express.static(path.join("static")));

  server.get("/", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.get("*", (req, res) => {
    const handle = app.getRequestHandler();
    return handle(req, res);
  });

  let key = fs.readFileSync("./localhost.key");
  let cert = fs.readFileSync("./localhost.crt");
  if (!dev) {
    const certPath = path.join("cert", "ssl", "live", "home.junyuanz.com");
    if (fs.existsSync(certPath)) {
      key = fs.readFileSync(path.join(certPath, "privkey.pem"));
      cert = fs.readFileSync(path.join(certPath, "fullchain.pem"));
    }
  }

  http
    .createServer((req, res) => {
      const server = dev ? "https://localhost" : "https://home.junyuanz.com";
      let location = `${server}/${req.url}`;
      location = location.replace(/([^:]\/)\/+/g, "$1");
      res.writeHead(301, { Location: location });
      res.end();
    })
    .listen(80);
  https.createServer({ key, cert }, server).listen(443);
});
