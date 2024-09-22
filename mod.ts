/** zed settings for deno language server */
export const settings = {
  lsp: {
    deno: {
      settings: {
        deno: {
          enable: true,
        },
      },
    },
  },
  languages: {
    TypeScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
    },
    TSX: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
    },
    JavaScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
    },
  },
  formatter: "language_server",
};

if (import.meta.main) {
  console.log(JSON.stringify(settings, null, 2));
  console.error("%cReload window after saving settings", "color: green;");
}
