const { connection } = require("../../config");

const createTagQuery = ({ name, note_id }) => {
  const sql = {
    text: "INSERT INTO tags(name, note_id) VALUES ($1, $2) RETURNING *;",
    values: [name, note_id]
  };

  return connection.query(sql);
};

module.exports = createTagQuery;