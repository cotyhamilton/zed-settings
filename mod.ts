export const settings = {
  languages: {
    TypeScript: {
      language_servers: ["deno", "!typescript-language-server", "!vtsls"],
    },
    TSX: {
      language_servers: ["deno", "!typescript-language-server", "!vtsls"],
    },
    JavaScript: {
      language_servers: ["deno", "!typescript-language-server", "!vtsls"],
    },
  },
  formatter: "language_server",
};

if (import.meta.main) {
  console.log(JSON.stringify(settings, null, 2));
}
