const fs = require('fs');
const path = require('path');

const browser = path.join(__dirname, '..', 'dist', 'xcellhost', 'browser');
const source404 = path.join(browser, '404', 'index.html');
const target404 = path.join(browser, '404.html');

if (!fs.existsSync(source404)) {
  console.error(`Cannot create the static 404 page: ${source404} does not exist.`);
  process.exit(1);
}

fs.copyFileSync(source404, target404);
console.log(`Created ${target404} from the prerendered /404/ route.`);
