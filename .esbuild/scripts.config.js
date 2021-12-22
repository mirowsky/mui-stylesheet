// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild")
  .build({
    entryPoints: ["./src/scripts/index.ts"],
    bundle: false,
    outdir: "./scripts",
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
