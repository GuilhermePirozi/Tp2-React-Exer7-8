import React, { useState } from "react";

const ExibirPalavraChave = ({ palavraChave }) => {
  return <h2>Você digitou: {palavraChave}</h2>;
};

const CompoChave = () => {
  const [palavraChave, setPalavraChave] = useState('');

  const handleInputChange = (e) => {
    setPalavraChave(e.target.value);
  };

  return (
    <div>
      <h1>Digite uma palavra-chave:</h1>
      <input
        type="text"
        onChange={handleInputChange}
        value={palavraChave}
      />
      <ExibirPalavraChave palavraChave={palavraChave} />
    </div>
  );
};

export default CompoChave;