import { build } from 'esbuild';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const entryPoints = (path = './src/functions') => {
  return readdirSync(resolve(path)).reduce((agg, entry) => {
    if (entry.endsWith('.spec.ts')) {
      return agg;
    }

    if (entry.endsWith('.ts')) {
      return [...agg, `${path}/${entry}`];
    }

    return [...agg, ...entryPoints(`${path}/${entry}`)];
  }, []);
};

build({
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  platform: 'node',
  bundle: true,
  treeShaking: true,
  minify: false,
});
