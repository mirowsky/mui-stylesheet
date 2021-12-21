require("esbuild")
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outfile: "./dist/bundle.js",
    tsconfig: "./tsconfig.json",
    sourcemap: "both",
    loader: {
      ".ts": "ts",
    },
  })
  .catch((error) => {
    console.log(err);
    process.exit(1);
  });
