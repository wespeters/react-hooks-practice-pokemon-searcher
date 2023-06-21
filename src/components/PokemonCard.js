import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);
  const { name, hp, sprites } = pokemon;
  const { front, back } = sprites;

  function handleClick() {
    setIsFront(!isFront);
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={isFront ? front : back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
