## 新增需求

### 需求：OpenPrd 自进化复用链路与 blind worker 验证
项目级 knowledge skill 与 growth 账本已经有产出，但缺少自动复用和可观察 adoption，无法证明自进化真的生效。

#### 场景：主流程成功
- **当** Agent 读取 run . --context 时自动拿到命中的项目级 knowledge skill
- **则** 命中的 knowledge skill 会自动进入 run/context 与 hook 文本

#### 场景：边界情况保持可见
- **当** 出现边界情况
- **则** 产品应保持该情况明确可见，以支持实现和验证

#### 场景：失败模式得到处理
- **当** 出现失败模式
- **则** 产品应提供有边界且可评审的结果
