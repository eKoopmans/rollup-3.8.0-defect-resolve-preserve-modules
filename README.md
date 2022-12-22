# rollup-3.8.0-defect-resolve-preserve-modules

In rollup@3.8.0, a defect was introduced where build fails with the below error:

```
$ npm run build

> rollup-3.8.0-defect-resolve-preserve-modules@1.0.0 build
> rollup -c rollup.config.js


index.js → build...
[!] TypeError: Cannot destructure property 'imports' of 'chunkDep' as it is undefined.
    at Chunk.getChunkExportDeclarations (C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:15788:33)
    at Chunk.render (C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:15635:67)
    at C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:16889:72
    at Array.map (<anonymous>)
    at renderChunks (C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:16889:53)
    at Bundle.generate (C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:17102:19)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:25229:27
    at async catchUnfinishedHookActions (C:\D2L\test\2022-12-22-rollup-bug\node_modules\rollup\dist\shared\rollup.js:24367:20)
    at async Promise.all (index 0)
```

The same build works fine in rollup@3.7.5.

## This repo

This repo is a minimal reproducible example of the defect. The key ingredients seem to be the combination of:

1. `preserveModules: true` in the output config
2. The `resolve()` plugin
3. Specific dependencies - I have only reproduced it with `lit`, and can confirm that other dependencies (e.g. `uuid`) do not reproduce the defect on their own
