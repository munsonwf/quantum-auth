module.exports = {
  test: "test",
  selectAllNotes: `SELECT * FROM notes;`,
  selectNoteById: `SELECT * FROM notes WHERE noteid=$1;`,
  createNote: `INSERT INTO
    notes (noteid, userid, notecontent, noteheader, createddate, modifieddate)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
  updateNote: `UPDATE notes
    SET userid=$1, notecontent=$2, noteheader=$3, createddate=$4
    WHERE noteid=$5
    RETURNING *`,
  deleteNotes: `DELETE FROM notes WHERE noteid=$1 RETURNING *`,

  // USER QUERIES
  selectUserByEmail: `SELECT * FROM users WHERE email = $1`,
  createUser: `INSERT INTO users (userid, email, password, firstname, lastname, createddate)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
  deleteUser: `DELETE FROM users WHERE userid=$1 RETURNING *`
};
