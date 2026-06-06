const PRODUCT_TYPE_LABELS = {
  base: '通用产品或工程场景',
  consumer: '面向个人消费者场景',
  b2b: '面向企业服务场景',
  agent: '以 Agent 为主要使用场景',
};

function withCode(label, code, includeCode) {
  return includeCode ? `${label}（${code}）` : label;
}

export function formatProductTypeDisplay(productType, options = {}) {
  const { includeCode = false, fallback = '待确认' } = options;
  const label = PRODUCT_TYPE_LABELS[productType];
  return label ? withCode(label, productType, includeCode) : fallback;
}

export function formatTemplatePackDisplay(templatePack, options = {}) {
  const { includeCode = false, fallback = '待确认' } = options;
  const label = PRODUCT_TYPE_LABELS[templatePack];
  if (label) return withCode(label, templatePack, includeCode);
  if (templatePack === null || templatePack === undefined || `${templatePack}`.trim() === "") return fallback;
  return includeCode ? `${templatePack}（custom）` : `${templatePack}`;
}

export function formatProductTypeSentence(productType, options = {}) {
  const { inferred = false } = options;
  switch (productType) {
    case 'consumer':
      return inferred ? '从当前描述看，更像面向个人消费者场景的产品。' : '当前更像面向个人消费者场景的产品。';
    case 'b2b':
      return inferred ? '从当前描述看，更像面向企业服务场景的产品。' : '当前更像面向企业服务场景的产品。';
    case 'agent':
      return inferred ? '从当前描述看，更像以 Agent 为主要使用场景的产品。' : '当前更像以 Agent 为主要使用场景的产品。';
    case 'base':
      return inferred ? '从当前描述看，更像通用产品或工程场景。' : '当前更像通用产品或工程场景。';
    default:
      return inferred ? '从当前描述看，产品场景仍待确认。' : '产品场景仍待确认。';
  }
}

export function formatProductTypeOptions(options = {}) {
  const { includeBase = false, includeCode = false } = options;
  const values = [];
  if (includeBase) values.push(withCode(PRODUCT_TYPE_LABELS.base, 'base', includeCode));
  values.push(withCode(PRODUCT_TYPE_LABELS.consumer, 'consumer', includeCode));
  values.push(withCode(PRODUCT_TYPE_LABELS.b2b, 'b2b', includeCode));
  values.push(withCode(PRODUCT_TYPE_LABELS.agent, 'agent', includeCode));
  return values.join(' / ');
}

export function formatProductTypeQuestion() {
  return '这是更偏向面向个人消费者场景的产品、面向企业服务场景的产品，还是以 Agent 为主要使用场景的产品？';
}

export function getProductTypeSectionTitle(productType) {
  switch (productType) {
    case 'consumer':
      return '个人消费者场景专项';
    case 'b2b':
      return '企业服务场景专项';
    case 'agent':
      return 'Agent 使用场景专项';
    case 'base':
      return '通用场景专项';
    default:
      return '产品场景专项';
  }
}
