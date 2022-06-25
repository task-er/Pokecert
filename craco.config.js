const CracoAlias = require("craco-alias");
const { whenProd } = require("@craco/craco");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
  babel: {
    plugins: [
        ...whenProd(
            () => [
                [
                    'react-remove-properties',
                    {
                        properties: ['data-cy']
                    }
                ]
            ],
            []
        )
    ]
  }
};