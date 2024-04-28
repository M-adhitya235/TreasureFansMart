import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

// export const getProducts = async (req, res) =>{
//     try {
//         let response;
//         if(req.role === "admin"){
//             response = await Product.findAll({
//                 attributes:['uuid','name','price'],
//                 include:[{
//                     model: User,
//                     attributes:['name','email']
//                 }]
//             });
//         }else{
//             response = await Product.findAll({
//                 attributes:['uuid','name','price'],
//                 where:{
//                     userId: req.userId
//                 },
//                 include:[{
//                     model: User,
//                     attributes:['name','email']
//                 }]
//             });
//         }
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message});
//     }
// }

export const getProducts = async (req, res) =>{
    try {
        const response = await Product.findAll({
            attributes:['uuid','name','price'],
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// export const getProductById = async(req, res) =>{
//     try {
//         const product = await Product.findOne({
//             where:{
//                 uuid: req.params.id
//             }
//         });
//         if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
//         let response;
//         if(req.role === "admin"){
//             response = await Product.findOne({
//                 attributes:['uuid','name','price'],
//                 where:{
//                     id: product.id
//                 },
//                 include:[{
//                     model: User,
//                     attributes:['name','email']
//                 }]
//             });
//         }else{
//             response = await Product.findOne({
//                 attributes:['uuid','name','price'],
//                 where:{
//                     [Op.and]:[{id: product.id}, {userId: req.userId}]
//                 },
//                 include:[{
//                     model: User,
//                     attributes:['name','email']
//                 }]
//             });
//         }
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({msg: error.message});
//     }
// }

export const getProductsFilter = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['uuid','name','price'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes:['uuid','name','price', 'stock', 'status'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async(req, res) =>{
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        // if(req.role === "admin"){
            response = await Product.findOne({
                attributes:['id','uuid','name','price', 'stock'],
                where:{
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        // }else{
        //     response = await Product.findOne({
        //         attributes:['uuid','name','price'],
        //         where:{
        //             [Op.and]:[{id: product.id}, {userId: req.userId}]
        //         },
        //         include:[{
        //             model: User,
        //             attributes:['name','email']
        //         }]
        //     });
        // }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProduct = async(req, res) =>{
    const {name, price, stock} = req.body;
    try {
        await Product.create({
            name: name,
            price: price,
            stock: stock,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) =>{
    try {
        const { name, price, stock } = req.body;
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        
        // Mengupdate data produk
        await Product.update({ name, price, stock },{
            where:{
                uuid: req.params.id
            }
        });

        // Memperbarui status produk menjadi "available" jika stok lebih dari nol
        if (stock > 0) {
            await Product.update({ status: 'available' }, {
                where: {
                    uuid: req.params.id
                }
            });
        } else {
            // Jika stok tidak cukup, status diubah menjadi "out_of_stock"
            await Product.update({ status: 'out_of_stock' }, {
                where: {
                    uuid: req.params.id
                }
            });
        }
        
        res.status(200).json({msg: "Product updated successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) =>{
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, price} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}