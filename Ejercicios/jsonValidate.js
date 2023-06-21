const Ajv = require("ajv")
const ajv = new Ajv() 

const jsonEjemplo= {
    id: 1,
    nombre: "Ismael"
  }

const schema = {
  type: "object",
  properties: {
    id: {type: "integer"},
    nombre: {type: "string"}
  },
  required: ["id"],
  additionalProperties: false
}

function jsonValidate(json,schema) {
    const validate = ajv.compile(schema) //Creo funcion validacion
    return valid = validate(json) //uso la funcion creada con un json de ejemplo

}


console.log(jsonValidate(jsonEjemplo,schema))
