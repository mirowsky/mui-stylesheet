// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild")
  .build({
    entryPoints: ["./src/core/index.ts"],
    bundle: true,
    outfile: "./dist/index.cjs",
    tsconfig: "./tsconfig.json",
    sourcemap: "both",
    format: "cjs",
    loader: {
      ".ts": "ts",
    },
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
