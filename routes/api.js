const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
});

router.get('/products/:location', async (req, res) => {
    const location = req.params.location;

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM TOIDUAINED WHERE ASUKOHT = ?', [location]);
        res.json({ data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (conn) conn.release();
    }
});

router.get('/product/:id', async (req, res) => {
    const productId = req.params.id;

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM TOIDUAINED WHERE ID = ?', [productId]);
        res.json({ data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (conn) conn.release();
    }
});

module.exports = router;