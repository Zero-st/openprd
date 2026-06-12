# 交接

- 本次内容: OpenPrd loop 隔离 worktree 提交闭环
- 产品场景: 以 Agent 为主要使用场景
- 场景模板: 以 Agent 为主要使用场景
- 负责人: Codex
- 下一步: 完成 review 确认后生成 change 和 tasks，再实现 loop 的隔离 worktree 提交闭环。
- 交接去向: OpenPrd

## 变化摘要

- 新增：支持显式 worktree / branch 配置，或提供隔离运行包装命令
- 新增：支持检测主工作区脏状态，并在 finish --commit 前阻断高风险路径
- 新增：支持基于 write-scope 或 touched files 生成本任务提交集
- 新增：支持在 loop 状态、session 日志和测试报告中记录 commit 关联信息
