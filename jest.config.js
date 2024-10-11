export default {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Usar babel-jest para transformar archivos JS/TS
    },
    testEnvironment: 'node',  // Usar el entorno de prueba de Node.js
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],  // Extensiones de archivo a reconocer
    transformIgnorePatterns: [
      '/node_modules/(?!supertest|other-modules-you-use)/',  // Ignorar node_modules, excepto los que necesiten transformación
    ],
  };
  