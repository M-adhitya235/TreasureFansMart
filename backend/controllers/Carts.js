import Product from "../models/ProductModel.js";
import Cart from "../models/CartModel.js";

export const getCart = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      where: {
        userId: req.userId
      },
      include: {
        model: Product,
        attributes: ['uuid', 'name', 'price', 'stock']
      }
    });
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: {
        uuid: req.params.id
      },
      include: {
        model: Product,
        attributes: ['uuid', 'name', 'price']
      }
    });
    if (!cart) return res.status(404).json({ msg: "Data tidak ditemukan" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const createCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ msg: "Produk tidak ditemukan" });

    if (quantity <= 0) return res.status(400).json({ msg: "Kuantitas harus lebih dari 0" });

    if (quantity > product.stock) {
      return res.status(400).json({ msg: "Kuantitas melebihi stok yang tersedia" });
    }

    let cart = await Cart.findOne({
      where: {
        productId: productId,
        userId: req.userId
      }
    });

    if (cart) {
      // Jika produk sudah ada dalam keranjang, tambahkan kuantitas
      cart.quantity += quantity;
      await cart.save();
      return res.status(200).json({ msg: "Kuantitas keranjang diperbarui" });
    } else {
      // Jika produk belum ada dalam keranjang, buat entri baru
      await Cart.create({
        quantity: quantity,
        userId: req.userId,
        productId: productId
      });
      return res.status(201).json({ msg: "Cart berhasil dibuat" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: {
        uuid: req.params.id
      }
    });
    if (!cart) return res.status(404).json({ msg: "Data tidak ditemukan" });

    const { quantity } = req.body;
    await cart.update({ quantity: quantity });

    res.status(200).json({ msg: "Cart berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: {
        uuid: req.params.id
      }
    });
    if (!cart) return res.status(404).json({ msg: "Data tidak ditemukan" });

    await cart.destroy();

    res.status(200).json({ msg: "Cart berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
