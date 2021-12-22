// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild")
  .build({
    entryPoints: ["./src/core/index.ts"],
    bundle: false,
    outdir: "./dist",
    tsconfig: "./tsconfig.json",
    sourcemap: "both",
    loader: {
      ".ts": "ts",
    },
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
