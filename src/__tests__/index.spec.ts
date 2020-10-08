import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_TOKEN'] = 'asdfasdfasdfasdfasdf';
  const ip = path.join(__dirname, '../../', 'lib', 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
});
