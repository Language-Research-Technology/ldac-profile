const levels = {
  error: 'errors',
  warn: 'warnings',
  info: 'info'
};

function validateEntity(ruleSet, entity, crate, res = {}) {
  const wrapper = { results: res };
  for (const key in levels) {
    if (!res[levels[key]]) res[levels[key]] = [];
  }
  for (let name in ruleSet) {
    const clause = ruleSet[name].clause;
    for (const key in levels) {
      wrapper[key] = function (message = clause) {
        res[levels[key]].push({
          entity: entity['@id'],
          property: name,
          message,
          clause
        });
      };
    }
    ruleSet[name].validate(wrapper, entity[name], entity, crate);
  }
  return res;
};

function resolveType(types, entity) {
  if (!entity['@type']) return;
  const typeset = new Set(types);
  for (const t of entity['@type']) {
    if (typeset.has(t)) return t;
  }
}

module.exports = {validateEntity, resolveType};
