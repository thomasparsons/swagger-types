const {generateTSFiles} = require("swagger-ts-generator")

const config = {
  file: "swagger.json"
}

generateTSFiles(
  config.file,
  {
    modelFolder: "./generated/models",
    enumTSFile: "./generated/enums.ts"
  }
)
