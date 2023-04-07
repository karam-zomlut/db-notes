const { createNoteQuery } = require("../../database");
const { createTagQuery } = require("../../database/query");

const createNoteController = (req, res) => {
  const { title, content, name } = req.body;

  createNoteQuery({ title, content })
    .then(data => {
      const { id } = data.rows[0];
      createTagQuery({ name, note_id: id })
        .then(tagData => {
          res.status(201).json({
            error: false,
            data: {
              mesasge: 'Note Created Successfully!',
              note: {
                ...data.rows[0],
                tag: tagData.rows[0].name
              }
            }
          })
        }).catch(err => {
          console.log('Tag Error', err);
          res.status(500).json({
            error: true,
            data: {
              message: err.mesasge
            }
          })
        })
    }).catch(err => {
      console.log('Note Error', err);
      res.status(500).json({
        error: true,
        data: {
          message: err.mesasge
        }
      })
    })
}

module.exports = createNoteController;