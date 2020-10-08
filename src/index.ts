import * as core from '@actions/core';
import { wait } from './wait';

async function run() {
  try {
    const login: string = core.getInput('login');
    core.info('hi' + login.slice(0, 1));
    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
