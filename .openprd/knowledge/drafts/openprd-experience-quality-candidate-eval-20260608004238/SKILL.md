---
name: openprd-experience-quality-candidate-eval-20260608004238
description: Use when the current task overlaps this draft project experience and you should verify fit before reusing it.
use_when: Use when the current task overlaps this draft project experience and you should verify fit before reusing it.
---

# openprd-experience-quality-candidate-eval-20260608004238

> 状态：draft
> 候选目录：`.openprd/knowledge/candidates/candidate-eval-20260608004238`
> Promote：`openprd quality . --learn --from .openprd/knowledge/candidates/candidate-eval-20260608004238`

## 触发条件

- 本轮结果里已经出现可复用的症状、排查线索或根因模式，不应该只留在当前对话里。
- 这次改动直接影响 Agent / harness / hook / skill 行为，后续很容易再次踩到同类判断问题。
- feature-coverage
- 症状: 质量门禁需要关注: feature-coverage
- doctor-green: doctor passed
- quality-verify: quality needs-attention | attention gates: feature-coverage | touched: README.md, package.json, scripts/dev-check-wrapup-copy.mjs, scripts/openprd-codex-isolated-worker.mjs, scripts/openprd-dev-check.mjs, scripts/openprd-github-release-notes.mjs
- dev-check: dev-check attention=2, warning=5 | touched: src/brainstorm.js, src/brainstorm-artifacts.js, src/brainstorm-presentation.js, src/workspace-workflow.js, src/run-harness.js, src/cli/run-print.js
- dev-check: dev-check attention=1, warning=0 | touched: scripts/openprd-codex-isolated-worker.mjs, test/openprd.test.js

## 适用范围

- 抽象模式: 质量缺口反复出现，通常是因为可观测性、护栏、测试与复盘知识被分散维护，没有进入同一套项目级诊断闭环。
- 适用于项目源码或核心流程已经落地、需要把实现经验固化为项目知识的任务。
- 特别适用于 Agent、hook、harness、quality 或 growth 工作流改动，避免下次再次靠聊天上下文兜底。

## 典型输入

- 任务场景: 质量门禁收口（feature-coverage）
- 相关文件: package.json、scripts/dev-check-wrapup-copy.mjs、scripts/openprd-codex-isolated-worker.mjs、scripts/openprd-dev-check.mjs、scripts/openprd-github-release-notes.mjs、scripts/openprd-review-presentation.mjs
- 已有证据类型: quality-report
- 验证信号: doctor-green、quality-verify、dev-check

## 典型输出

- 项目经验候选与诊断包
- 待确认的项目经验草案
- 验证结论: doctor passed
- 可复用的验证链路与收尾动作

## 下次触发时先看什么

- `package.json`
- `scripts/dev-check-wrapup-copy.mjs`
- `scripts/openprd-codex-isolated-worker.mjs`
- `scripts/openprd-dev-check.mjs`
- `scripts/openprd-github-release-notes.mjs`
- `scripts/openprd-review-presentation.mjs`
- `scripts/quality-perf-check.mjs`
- `src/agent-integration.js`
- `src/benchmark/constants.js`
- `src/benchmark/operations.js`
- `src/benchmark/registry.js`
- `.openprd/quality/reports/eval-20260608004238.json`

## 不要直接套用

- 如果只是文件名、路径或个别词相似，但当前目标和验证方式不同，不要直接套用。
- 如果当前任务还没进入验证或收尾阶段，不要把这条经验当成通用实现模板。
- 如果本轮已经有更新的现场证据，先核对新证据，再决定是否复用旧经验。

## 可复用模式

- 质量门禁未闭环: feature-coverage

## 验证方式

- doctor passed
- quality needs-attention
- dev-check attention=2, warning=5
- dev-check attention=1, warning=0
- dev-check attention=2, warning=4
- 运行 openprd quality . --verify 并确认需要关注的门禁已经闭环。
- 打开 HTML 报告，核对证据链、评估结论和后续动作是否一致。
- 重新执行任务级 verify 命令，并把最终证据路径保留在质量报告里。
