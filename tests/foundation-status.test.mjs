import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function text(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('repository is frozen and points to the canonical Today owner', async () => {
  const [statusSource, readme, schemaSource] = await Promise.all([
    text('repository-status.json'),
    text('README.md'),
    text('today-cockpit.schema.json'),
  ]);
  const status = JSON.parse(statusSource);
  const schema = JSON.parse(schemaSource);

  assert.equal(status.lifecycle, 'frozen_predecessor');
  assert.equal(status.canonical_successor, 'chittalaswamysharavan-8991/SharvaOS-Pulse');
  assert.equal(status.accepts_feature_work, false);
  assert.equal(status.data_updates, 'stopped');
  assert.match(readme, /frozen predecessor/i);
  assert.match(readme, /SharvaOS-Pulse/);
  assert.match(schema.update_rule, /stopped/i);
});

test('package gate validates frozen status without deploying', async () => {
  const [packageSource, workflow] = await Promise.all([
    text('package.json'),
    text('.github/workflows/foundation.yml'),
  ]);
  const packageJson = JSON.parse(packageSource);

  assert.equal(packageJson.scripts.test, 'node --test tests/*.test.mjs');
  assert.doesNotMatch(packageJson.scripts.test, /deploy|vercel/i);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /contents:\s*read/);
});
