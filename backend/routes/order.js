const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/addOrder", async function (req, res, next) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const tel = req.body.tel;
    const email = req.body.email;
    const country = req.body.country;
    const address = req.body.address;
    const province = req.body.province;
    const postcode = req.body.postcode;
    const size = req.body.size;
    const amount = req.body.amount;
    const product_id = req.body.product_id;
    const user_id = req.body.user_id;
    try {
          const [rows] = await pool.query(
            "INSERT INTO orders(firstname, lastname, tel, email, country, address, province, postcode, size, amount, product_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [firstname, lastname, tel, email, country, address, province, postcode, size, amount, product_id, user_id]
          );
          res.status(200).json(rows.insertId);
    } catch (er) {
      console.log(er);
    }
})
router.get("/userOrder/:id", async function (req, res, next) {
  const user_id = req.params.id;
  try {
    const [rows] = await pool.query("select * from orders as o join products as p on o.product_id = p.product_id where user_id = ?", [
      user_id,
    ]);
    res.status(200).json(rows);
  } catch (er) {
    console.log(er);
  }
});
router.get("/confirmOrder/:uid/:oid", async function (req, res, next) {
  const user_id = req.params.uid;
  const order_id = req.params.oid;
  try {
    const [rows] = await pool.query("select * from orders as o join products as p on o.product_id = p.product_id where user_id = ? and order_id = ?", [
      user_id,order_id
    ]);
    res.status(200).json(rows);
  } catch (er) {
    console.log(er);
  }
});

exports.router = router;
