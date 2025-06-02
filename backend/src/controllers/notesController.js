export function getAllNotes(req, res) {
  // Simulating fetching notes from a database
  const notes = [
    { id: 1, title: 'Note 1', content: 'Content of note 1' },
    { id: 2, title: 'Note 2', content: 'Content of note 2' },
    { id: 3, title: 'Note 3', content: 'Content of note 3' }
  ];
  // Sending the notes as a JSON response
  res.json(notes);
}

export function createNote(req, res) {
  res.status(201).json({
    message: 'Note created successfully'
  });
}

export function updateNote(req, res) {
  res.status(200).json({
    message: 'Note updated successfully'
  });
}

export function deleteNote(req, res) {
  res.status(200).json({
    message: 'Note deleted successfully'
  });
}