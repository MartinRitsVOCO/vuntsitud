const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
});

router.get('/recent/:location', async (req, res) => {
    const location = req.params.location;

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM TOIDUAINED WHERE ASUKOHT = ? AND OLEMAS = 1 ORDER BY LISATUD_KUUPAEV DESC LIMIT 6', [location]);
        res.json({ data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (conn) conn.release();
    }
});

router.get('/products/:location', async (req, res) => {
    const location = req.params.location;

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM TOIDUAINED WHERE ASUKOHT = ? AND OLEMAS = 1', [location]);
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

router.post('/addProduct', async (req, res) => {
    const { nimetus, kommentaar, kategooria, asukoht, sailivus_paevad, pilt, kuupaev } = req.body;

    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query('INSERT INTO TOIDUAINED (Nimetus, Kommentaar, Kategooria, Asukoht, Sailivus_paevad, Pilt, Lisatud_kuupaev) VALUES (?, ?, ?, ?, ?, ?, ?)', [nimetus, kommentaar, kategooria, asukoht, sailivus_paevad, pilt, kuupaev]);
        res.json({ message: 'Product added successfully', id: result.insertId.toString() });
    } catch (
        err) {
        res.status(500).json({ error: err.message });
    }
    finally {
        if (conn) conn.release();
    }
});

router.put('/takeProduct/:id', async (req, res) => {
    const productId = req.params.id;

    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query('UPDATE TOIDUAINED SET Olemas = 0 WHERE ID = ?', [productId]);
        res.json({ message: 'Product taken successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    finally {
        if (conn) conn.release();
    }
});

module.exports = router;