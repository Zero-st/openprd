# OpenPrd 自进化复用链路与 blind worker 验证

## 背景与原因

项目级 knowledge skill 与 growth 账本已经有产出，但缺少自动复用和可观察 adoption，无法证明自进化真的生效。

## 变更内容

- run/context knowledge skill 匹配与注入
- knowledge adoption 事件与计数
- growth ledger 与 observability
- 临时项目 blind worker 验证
- 为 knowledge skill 建立可命中的索引与匹配规则
- 在 run/context 与 hook 中自动带入命中的 skill
- 记录 knowledge skill hit/reference/injected adoption 事件
- 为 growth 增加 ledger 和 recent events 视图
- 提供临时项目 blind worker 验证流程与结果留痕
- 命中的 knowledge skill 会自动进入 run/context 与 hook 文本
- knowledge skill adoption 指标可落盘
- growth 自动补齐账本完整记录 observe/apply/reconcile
- 可以用单独 worker 在临时项目完成一次盲测

## 能力范围

- `agent-requirements`: OpenPrd 自进化复用链路与 blind worker 验证 需求。

## 影响范围

- 主要用户: OpenPrd 维护者
- 主要用户: Agent 操作者
