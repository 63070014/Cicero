const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/addcarts", async function (req, res, next) {
  const size = req.body.size;
  const amount = req.body.amount;
  const user_id = req.body.user_id;
  const product_id = req.body.product_id;
  console.log(user_id);
  try {
    const [check] = await pool.query(
      "select * from cart_item where user_id = ? and product_id = ? and size = ?",
      [user_id, product_id, size]
    );
    console.log(check);
    if (check[0]) {
        const total = check[0].amount + amount
        if(total == 0){
            await pool.query(
                "delete from cart_item where user_id = ? and product_id = ? and size = ?",
                [user_id, product_id, size]
              );
        }
        const [update] = await pool.query(`UPDATE cart_item SET amount = ? WHERE user_id=? and product_id = ? and size = ?`,[total, user_id, product_id, size])
        res.status(200).json("Update successfully");
        console.log(total)
    }else{
        const [rows] = await pool.query(
          "INSERT INTO cart_item(size, amount, user_id, product_id) VALUES (?, ?, ?, ?)",
          [size, 1, user_id, product_id]
        );
        res.status(200).json("Add cart successfully");
    }
  } catch (er) {
    console.log(er);
  }
});
router.get("/carts/:uid", async function (req, res, next) {
  const user_id = req.params.uid;
  try {
    const [rows] = await pool.query(
      "select * from cart_item as ci join products as p on p.product_id = ci.product_id where user_id = ?",
      [user_id]
    );
    res.status(200).json(rows);
  } catch (er) {
    console.log(er);
  }
});
router.delete("/delcarts/:pid/:uid/:size", async function (req, res, next) {
  const product_id = req.params.pid;
  const user_id = req.params.uid;
  const size = req.params.size;
  try {
    const [get] = await pool.query(
      "select * from cart_item where user_id = ? and product_id = ? and size = ?",
      [user_id, product_id, size]
    );
    console.log(get);
    if (get[0]) {
      const [rows] = await pool.query(
        "delete from cart_item where user_id = ? and product_id = ? and size = ?",
        [user_id, product_id, size]
      );
      res.status(200).send("RemoveCart");
    } else {
      res.status(200).send("CannotFind");
    }
  } catch (err) {
    console.log(err);
  }
});

exports.router = router;
