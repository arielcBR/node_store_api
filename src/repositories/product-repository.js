'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'title price slug');
}

exports.getBySlug = (slug) => { 
    return Product
        .findOne({
            slug: slug,
            active: true
        });
}

exports.getById = (id) => { 
    return Product
        .findById(id);
}

exports.getByTag = (tag) => { 
    return Product
        .find({
            tags: tag,
            active: true
        });
}

exports.create = (data) => {
    let product = new Product(data);
    return product.save();
}

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                slug: data.slug,
                description: data.description,
                price: data.price
            }
        })
}

exports.delete = (id) => {
    return Product.findOneAndRemove(id);
}