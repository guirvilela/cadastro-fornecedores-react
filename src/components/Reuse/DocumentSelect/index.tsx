import React from "react";
import { ButtonsContainer, Container } from "./styles";

export function DocumentSelect() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleSelectFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0] || null;

    setSelectedFile(file);
  };

  const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);
  };

  return (
    <Container>
      <ButtonsContainer>
        <button onClick={(event) => handleSelectFile(event)}>
          Selecionar arquivo
        </button>
        <button>Desativar</button>

        {selectedFile && <button onClick={handleDeleteFile}>Remover</button>}
      </ButtonsContainer>

      {selectedFile ? (
        <p>{selectedFile.name}</p>
      ) : (
        <p>Nenhum arquivo selecionado</p>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(event) => handleFileChanged(event)}
      />
    </Container>
  );
}
