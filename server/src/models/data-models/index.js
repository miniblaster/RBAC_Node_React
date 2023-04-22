const User = require('./user');
const Role = require('./role');
const Customer = require('./customer');
const Product = require('./product');
const Resource = require('./resource');
const Permission = require('./permission');
const models = {
    User,
    Role,
    Customer,
    Product,
    Resource,
    Permission
}

module.exports = models;