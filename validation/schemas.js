const Joi = require('joi');

const balanceSchema = Joi.object({
  title: Joi.string().required().min(5).max(255),
  description1: Joi.string().required().min(10).max(1000),
  description2: Joi.string().required().min(10).max(1000),
  description3: Joi.string().required().min(10).max(1000),
  description4: Joi.string().required().min(10).max(1000)
});

const crucifixionSchema = Joi.object({
  title: Joi.string().required().min(5).max(255),
  descriptions: Joi.array().items(Joi.string().min(10).max(1000)).required()
});

const erosionSchema = Joi.object({
  description: Joi.string().required().min(10).max(2000)
});

const feastsSchema = Joi.object({
  title: Joi.string().required().min(5).max(255),
  content: Joi.object().required()
});

const nationSchema = Joi.object({
  title: Joi.string().required().min(5).max(255),
  description1: Joi.string().required().min(10).max(1000),
  description2: Joi.string().required().min(10).max(1000),
  description3: Joi.string().required().min(10).max(1000)
});

module.exports = {
  balanceSchema,
  crucifixionSchema,
  erosionSchema,
  feastsSchema,
  nationSchema
};