import { spawn } from 'node:child_process';
import { watch, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assetRoots = [join(projectRoot, 'src', 'assets'), join(projectRoot, 'public')];
const angularCli = join(projectRoot, 'node_modules', '@angular', 'cli', 'bin', 'ng.js');
const serveArgs = process.argv.slice(2);
const restartArgs = serveArgs.filter((arg) => arg !== '--open' && arg !== '-o');

function listFiles() {
  const files = new Set();
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (entry.isFile()) files.add(path);
    }
  };
  for (const root of assetRoots) visit(root);
  return files;
}

let knownFiles = listFiles();
let server;
let scanTimer;
let restarting = false;
let stopping = false;

function startServer(firstStart) {
  const args = firstStart ? serveArgs : restartArgs;
  server = spawn(process.execPath, [angularCli, 'serve', ...args], {
    cwd: projectRoot,
    stdio: 'inherit',
  });
  server.on('exit', (code) => {
    if (stopping) return;
    if (restarting) {
      restarting = false;
      startServer(false);
    } else {
      for (const watcher of watchers) watcher.close();
      process.exitCode = code ?? 1;
    }
  });
}

function checkForNewAssets() {
  const currentFiles = listFiles();
  const added = [...currentFiles].some((path) => !knownFiles.has(path));
  knownFiles = currentFiles;
  if (!added || restarting || stopping) return;

  restarting = true;
  console.log('\nNew asset detected. Restarting Angular so it can serve the file...');
  server.kill();
}

const watchers = assetRoots.map((root) =>
  watch(root, { recursive: true }, () => {
    clearTimeout(scanTimer);
    scanTimer = setTimeout(checkForNewAssets, 500);
  }),
);

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    stopping = true;
    clearTimeout(scanTimer);
    for (const watcher of watchers) watcher.close();
    server?.kill(signal);
  });
}

startServer(true);
