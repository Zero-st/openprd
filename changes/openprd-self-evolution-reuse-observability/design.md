# 设计

## 背景

当前多个项目已经出现有产出无复用的迹象，需要把自动注入、adoption 指标和 blind worker 验证补齐，才能判断 OpenPrd 自进化是否真正落地。

## 目标

- 让项目级 knowledge skill 自动进入上下文复用链路
- 让 knowledge adoption 可观察
- 让 growth 自动补齐账本和事件流可观察
- 用临时项目盲测 worker 的端到端表现

## 范围

- run/context knowledge skill 匹配与注入
- knowledge adoption 事件与计数
- growth ledger 与 observability
- 临时项目 blind worker 验证

## 约束

- 待补充

## 业务护栏

- 待补充

## 风险与开放问题

- 问题: 不要破坏现有 requirement gate 和 session routing
- 问题: 不要误把弱匹配的 knowledge skill 注入上下文
- 问题: 不要让 growth 账本和自动补齐状态再次漂移
