module.exports = {
  apps: [
    {
      name: "jzarrtechserver",
      script: "server.js",
      cwd: "/var/www/JzarrTechwebsite/jzarrtechserver",
      env: {
        NODE_ENV: "production",
        PORT: "8787",
      },
    },
  ],
};
