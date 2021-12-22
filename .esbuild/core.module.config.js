// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild")
  .build({
    entryPoints: ["./src/core/index.ts"],
    bundle: true,
    outfile: "./dist/index.esm.js",
    tsconfig: "./tsconfig.json",
    sourcemap: "both",
    format: "esm",
    loader: {
      ".ts": "ts",
    },
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
