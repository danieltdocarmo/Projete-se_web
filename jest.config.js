module.exports = {
  // Simula o dom do browser para que possa realizar os testes.
  testEnvironment: 'jsdom',

  // Não realizar testes nas seguintes pastas e arquivos
  testPathIgnorePatterns: ['/node_modules', '/.next/'],

  // Realiza o teste de cobertura para verificar se todas as funções e variáveis estão sendo utilizadas
  collectCoverage: true,

  // Informe onde ele deve captar as informações do collectCoverage
  collectCoverageFrom: ['src/components/**/*.tsx', '!src/**/stories.tsx'],

  // Adiciona informações em todos os testes através de arquivos.
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

  // modulePaths: ['<rootDir>/src/'],

  // moduleNameMapper: {
  //   'styled-components':
  //     '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  // },
};
