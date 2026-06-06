import test from 'node:test';

import { loadWorkspace } from '../src/workspace-core.js';
import { readSessionBinding } from '../src/session-binding.js';
import {
  assert,
  fs,
  initWorkspace,
  makeTempProject,
  path,
  reviewWorkspace,
  synthesizeWorkspace,
} from './helpers/openprd-test-helpers.js';

test('review accepts an explicit version when the active requirement lane has no session state yet', async () => {
  const project = await makeTempProject();
  await initWorkspace(project, { templatePack: 'agent' });

  const synthesized = await synthesizeWorkspace(project, {
    title: 'OpenPrd review lane sync',
    owner: 'OpenPrd',
    problemStatement: '评审确认需要在 session lane 还没写出 scoped state 时继续可用。',
    whyNow: '当前显式 version 的确认命令会被误判成没有 synthesized PRD。',
    goals: ['允许显式版本确认命令继续生效'],
    primaryFlows: ['用户确认当前稳定评审稿并继续'],
    functional: ['支持 session lane 空状态下的 review 确认'],
    productType: 'agent',
  });

  const sessionId = '019e9a63-39ab-7d81-93d0-8dd4a3c9c113';
  const harnessDir = path.join(project, '.openprd', 'harness');
  const gate = {
    version: 1,
    active: true,
    status: 'prd-review-required',
    sessionId,
    promptPreview: '确认当前稳定评审稿并继续',
    openedAt: '2026-06-06 01:20:00',
    updatedAt: '2026-06-06 01:20:00',
  };
  await fs.mkdir(path.join(harnessDir, 'requirement-gates'), { recursive: true });
  await fs.writeFile(path.join(harnessDir, 'requirement-gate.json'), `${JSON.stringify(gate, null, 2)}\n`);
  await fs.writeFile(path.join(harnessDir, 'requirement-gates', `${sessionId}.json`), `${JSON.stringify(gate, null, 2)}\n`);

  const loaded = await loadWorkspace(project);
  assert.equal(loaded.data.currentSessionId, sessionId);
  assert.deepEqual(loaded.data.currentState, {});
  assert.equal(loaded.data.workspaceCurrentState.reviewStatus.versionId, synthesized.snapshot.versionId);

  const confirmed = await reviewWorkspace(project, {
    mark: 'confirmed',
    version: synthesized.snapshot.versionId,
    digest: synthesized.snapshot.digest,
    workUnit: synthesized.workUnitId,
    notes: '用户明确回复：确认当前稳定评审稿并继续',
  });
  assert.equal(confirmed.ok, true);
  assert.equal(confirmed.status, 'confirmed');
  assert.equal(confirmed.workUnit.status, 'confirmed');

  const reloaded = await loadWorkspace(project);
  assert.equal(reloaded.data.currentSessionId, sessionId);
  assert.equal(reloaded.data.currentState.reviewStatus.versionId, synthesized.snapshot.versionId);
  assert.equal(reloaded.data.currentState.reviewStatus.status, 'confirmed');

  const sessionBinding = await readSessionBinding(project, sessionId);
  assert.equal(sessionBinding?.versionId, synthesized.snapshot.versionId);
  assert.equal(sessionBinding?.workUnitId, synthesized.workUnitId);
  assert.equal(sessionBinding?.reviewStatus, 'confirmed');
});
