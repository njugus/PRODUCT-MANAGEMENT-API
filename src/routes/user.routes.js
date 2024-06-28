import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

router.get("/", async(req, res) => {
    try{
        const result = await prisma.products.findMany();
        res.status(200).json(result);
    }
    catch(e){
        res.status(500).json({success : false, message : e.message});
    }
    


});
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const product = await prisma.products.findUnique({
            where: {
                id: id, 
            },
        });

        if (product) {
            res.json(product);
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
        const result = await prisma.products.create({
            data: {
                productThumbnail: productThumbnail, 
                productTitle: productTitle,
                productDescription: productDescription,
                productCost: productCost,
                onOffer: onOffer
            }
        });

        res.status(201).json({ success: true, product: result });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { onOffer } = req.body;

    try {
        const result = await prisma.products.update({
            where: {
                id: id, 
            },
            data: {
                onOffer: onOffer,
            },
        });

        res.status(200).json({ success: true, product: result });
    } catch (err) {
        if (err.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Product Not Found' });
        } else {
            res.status(500).json({ success: false, message: err.message });
        }
    }
});



router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await prisma.products.delete({
            where: {
                id: id, 
            },
        });

        res.json({ success: true, message: "Product Deleted Successfully", product: result });
    } catch (err) {
        if (err.code === 'P2025') { 
            res.status(404).json({ success: false, message: "Product Not Found" });
        } else {
            res.status(500).json({ success: false, message: err.message });
        }
    }
});
export default router;
