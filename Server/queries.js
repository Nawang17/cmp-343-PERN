const { Pool } = require("pg");
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

const getLinks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM links ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addLink = async (req, res) => {
  const { name, url } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO links (name, url) VALUES ($1, $2) RETURNING *",
      [name, url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLink = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await pool.query("DELETE FROM links WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getLinks,
  addLink,
  deleteLink,
};
