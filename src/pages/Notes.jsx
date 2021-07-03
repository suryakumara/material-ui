import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    // ketika note id dalam notes tidak sama, maka dalam array dipilih selain itu
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => {
          return (
            <Grid item key={note.id} xs={12} md={6} lg={4} xl={3}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
