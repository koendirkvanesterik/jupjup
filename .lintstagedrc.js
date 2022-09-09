module.exports = {
  '**/*.js': ['prettier --write'],
  '**/*.json': ['prettier --write'],
  '**/*.md{,x}': ['prettier --write'],
  '**/*.ts{,x}': ['eslint --cache --fix', 'prettier --write'],
  '**/*.y{,a}ml': ['prettier --write'],
}
