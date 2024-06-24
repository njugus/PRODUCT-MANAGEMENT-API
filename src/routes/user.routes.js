import { Router } from 'express';
import pool from '../data.config.js';

const router = Router();

router.get("/", async(req, res) => {
    try{
        const result = await pool.query("SELECT * FROM products");
        res.json(result.rows);
    } catch(err){
        res.status(500).json({success : false, message : err.message});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id }  = req.params;
        const result = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]); 
        } else {
            res.status(404).json({ success: false, message: "Product not found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { productThumbnail, productTitle, productDescription, productCost, onOffer } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [productThumbnail, productTitle, productDescription, productCost, onOffer]
      );
      res.status(201).json({ success: true, product: result.rows[0] });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });

router.patch("/:id", async(req, res) => {
    const { id } = req.params;
    const { onOffer } = req.body;
    try{
        const result = await pool.query("UPDATE products SET onOffer = $2  WHERE product_id = $1 RETURNING *", [id, onOffer]); 
        if(result.rows.length == 0){
            res.status(404).json({ success: false, message : 'Product Not Found'});
        }
        else{
            res.status(200).json({ success : true, product : result.rows[0]});
        }
    }
    catch(err){
        res.status(500).json({ success: false, message : err.message });
    }
});

router.delete("/:id", async(req, res) => {
    const{ id } = req.params;
    try{
        const result = await pool.query("DELETE FROM products WHERE product_id = $1", [id]);
        if(result.rowCount > 0){
            res.json({success : true, message : "Product Deleted Successfully"});
        }
        else{
            res.status(404).json({success : false, message : "Product Not Found"});
        }

    } catch(err){
        res.status(500).json({success : false, message : err.message});
    }
});

export default router;
