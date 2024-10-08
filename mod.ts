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
        "...",
      ],
    },
    TSX: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
        "...",
      ],
    },
    JavaScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
        "...",
      ],
    },
  },
  formatter: "language_server",
};

/**
 * zed settings for deno language server
 * with tailwindcss eslint formatting
 */
export const tailwindSettings = {
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
        "...",
      ],
    },
    TSX: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "eslint",
        "...",
      ],
      code_actions_on_format: {
        "source.fixAll.eslint": true,
      },
    },
    JavaScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
        "...",
      ],
    },
  },
  formatter: "language_server",
};

if (import.meta.main) {
  switch (Deno.args[0]) {
    case "--tailwind":
      console.log(JSON.stringify(tailwindSettings, null, 2));
      break;
    default:
      console.log(JSON.stringify(settings, null, 2));
      break;
  }
  console.error("%cReload window after saving settings", "color: green;");
}
