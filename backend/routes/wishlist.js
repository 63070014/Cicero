const express = require("express");
const pool = require("../config");

router = express.Router();

router.post("/likeByUser", async function (req, res, next) {
  const user_id = req.body.user_id;
  const product_id = req.body.product_id;
  console.log(user_id, product_id)
  try {
    const [rows] = await pool.query(
      "SELECT * from wishlist where user_id = ? and product_id = ?",
      [user_id, product_id]
    );
    if (rows.length > 0) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/like/:pid", async function (req, res, next) {
  const product_id = req.params.pid;
  const user_id = req.body.user_id;
  try {
    const [rows] = await pool.query(
      "insert into wishlist (user_id, product_id) values (?, ?)",
      [user_id, product_id]
    );
    res.status(200).send("AddLiked");
  } catch (err) {
    console.log(err);
  }
});
router.delete("/like/:pid", async function (req, res, next) {
  const product_id = req.params.pid;
  const user_id = req.body.user_id;
  try {
    const [get] = await pool.query("select * from wishlist where user_id = ? and product_id = ?", [user_id, product_id])
    console.log(get)
    if (get[0]){
        const [rows] = await pool.query(
          "delete from wishlist where user_id = ? and product_id = ?",
          [user_id, product_id]
        );
        res.status(200).send("RemoveLiked");
    }else{
        res.status(200).send("CannotFind")
    }
  } catch (err) {
    console.log(err);
  }
});

exports.router = router;
