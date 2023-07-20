import { useEffect, useState } from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  });

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
