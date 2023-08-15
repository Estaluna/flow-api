import Joi from "joi";

// Adding and validating env vars

const envsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().default(8000),
  })
  .unknown(true);

const { value: envVars, error } = envsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(
    `Config validation error: ${error.message}. \n
     This app requires env variables to work properly.`
  );
}

// map env vars and make it visible outside module
export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
};
