/* eslint-disable no-console */
// const pool = require('../index');
const dbQuery = require('../db/dbQuery');

const selectProducts = async (req, res) => {
  console.log('Holaaaa');
  const selectProductsQuery = `SELECT product.id, product.name, product.price, product.image, product_type.title, product.dateentry
    FROM product 
    JOIN p_product_type ON product.id = p_product_type.product_id
    JOIN product_type ON p_product_type.type_id = product_type.id`;
  try {
    const queryResponse = await dbQuery(selectProductsQuery);
    return res.status(200).json(queryResponse.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Transacción fallida' });
  }
};

module.exports = { selectProducts };
