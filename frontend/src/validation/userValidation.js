import Joi from "joi";

const nameSchema = Joi.object({
  nome: Joi.string()
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]{3}([A-Za-zÀ-ÖØ-öø-ÿ]| )*$/)
    .required()
    .min(3)
    .messages({
      "string.min": "Nome muito curto",
      "string.empty": "Insira um nome",
      "string.pattern.base": "Nome inválido",
      "string.required": "Insira um nome",
    }),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .required()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .min(3)
    .messages({
      "string.pattern.base": "E-mail inválido",
      "string.empty": "Insira um e-mail",
      "string.required": "Insira um e-mail",
    }),
});

const cpfSchema = Joi.object({
  cpf: Joi.string()
    .required()
    .regex(/^[0-9]{11}$/)
    .min(3)
    .messages({
      "string.pattern.base": "CPF inválido",
      "string.empty": "Insira um CPF",
      "string.required": "Insira um CPF",
    }),
});

const dataSchema = Joi.object({
  data: Joi.date().max("now").required().messages({
    "date.required": "Insira a data de nascimento",
    "date.empty": "Insira a data de nascimento",
    "date.max": "Data inválida",
    "date.base": "Data inválida",
  }),
});

const validateUser = async ({ nome, email, cpf, data }) => {
  let errors = {};

  let result = await nameSchema.validate({ nome });
  if (result.error) errors = { nome: result.error.message };

  result = await cpfSchema.validate({ cpf });
  if (result.error) errors = { ...errors, cpf: result.error.message };

  result = await emailSchema.validate({ email });
  if (result.error) errors = { ...errors, email: result.error.message };

  result = await dataSchema.validate({ data });
  if (result.error) errors = { ...errors, data: result.error.message };

  return errors;
};

export default validateUser;
