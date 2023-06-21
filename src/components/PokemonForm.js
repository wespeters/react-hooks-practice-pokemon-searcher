import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
    };

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
      .then(response => response.json())
      .then(newPokemon => onAddPokemon(newPokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormChange} />
          <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={handleFormChange} />
          <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={handleFormChange} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
