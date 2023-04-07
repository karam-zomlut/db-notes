const { getNotesQuery } = require("../../database")

const getNotesController = (req, res) => {
  getNotesQuery()
    .then(data => {
      res.status(200).json({
        error: false,
        data: {
          message: 'Notes retrieved successfully!',
          notes: data.rows
        }
      })
    }).catch(err => {
      res.status(500).json({
        error: true,
        data: {
          message: err.message
        }
      })
    })
};

module.exports = getNotesController;