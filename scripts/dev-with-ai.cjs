const { spawn } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const children = [
  spawn(process.execPath, [path.join(root, 'server/dist/index.js')], { cwd: root, stdio: 'inherit', windowsHide: true }),
  spawn(process.execPath, [path.join(root, 'node_modules/@angular/cli/bin/ng.js'), 'serve', ...process.argv.slice(2)], { cwd: root, stdio: 'inherit', windowsHide: true }),
];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  children.forEach(child => child.kill());
  process.exitCode = code;
}
for (const child of children) {
  child.on('error', () => stop(1));
  child.on('exit', code => stop(code ?? 1));
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
