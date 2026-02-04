import React from "react";
import { Button } from "../Button";
import {
  ButtonsContainer,
  Container,
  NonSelectedFile,
  SelectedFile,
} from "./styles";

export function DocumentSelect() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [isActive, setIsActive] = React.useState<boolean>(true);

  const handleSelectFile = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFileChanged = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const file = event.target.files?.[0] || null;

      setSelectedFile(file);
    },
    [],
  );

  const handleDeleteFile = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setSelectedFile(null);
    },
    [],
  );

  const handleButtonActive = () => {
    if (isActive) {
      setSelectedFile(null);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <Container>
      <ButtonsContainer>
        <Button color="blue" onClick={handleSelectFile} disabled={!isActive}>
          Selecionar Arquivo
        </Button>

        {selectedFile && (
          <Button color="delete" onClick={handleDeleteFile}>
            Remover
          </Button>
        )}
        <Button color="gray" onClick={handleButtonActive}>
          {isActive ? "Desativar" : "Ativar"}
        </Button>
      </ButtonsContainer>

      <br />

      {selectedFile ? (
        <SelectedFile>
          <span>✓</span>
          <p>{selectedFile.name}</p>
        </SelectedFile>
      ) : (
        <NonSelectedFile>Nenhum arquivo selecionado</NonSelectedFile>
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
