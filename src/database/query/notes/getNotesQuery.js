const { connection } = require("../../config")

const getNotesQuery = () => {

  const sql = {
    text: 'SELECT * FROM notes;',
  }

  return connection.query(sql);
};

module.exports = getNotesQuery;