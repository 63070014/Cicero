const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/product", async function (req, res, next) {
  try {
    let sql = 'SELECT * from products'
    const [rows] = await pool.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err)
  }
});
router.get("/product/:id", async function (req, res, next) {
  try {
    const product_id = req.params.id
    console.log(product_id)
    const [rows] = await pool.query('SELECT * from products where product_id = ?', [product_id]);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err) 
  }
});

exports.router = router;
