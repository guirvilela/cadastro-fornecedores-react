import { useRef, useState } from "react";
import { Button } from "../Button";
import {
  ButtonsContainer,
  DocumentContainer,
  NonSelectedFileText,
  SelectedFile,
} from "./styles";

interface RegisterProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: (el: HTMLInputElement | null) => void;
}

interface DocumentSelectProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  register?: RegisterProps;
}

export function DocumentSelect({
  onFileSelect,
  accept,
  register,
}: DocumentSelectProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isActive, setIsActive] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect?.(file);
  };

  const handleSelectFile = () => {
    inputRef.current?.click();
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    onFileSelect?.(null);
  };

  const handleToggleActive = () => {
    if (isActive) {
      setSelectedFile(null);
      onFileSelect?.(null);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <DocumentContainer>
      <ButtonsContainer>
        <Button color="blue" onClick={handleSelectFile} disabled={!isActive}>
          Selecionar arquivo
        </Button>
        <Button color="gray" onClick={handleToggleActive}>
          {isActive ? "Desativar" : "Ativar"}
        </Button>

        {selectedFile && (
          <Button color="delete" onClick={handleDeleteFile}>
            Excluir arquivo
          </Button>
        )}
      </ButtonsContainer>

      {selectedFile ? (
        <SelectedFile>
          <span>✓</span>
          <p>{selectedFile.name}</p>
        </SelectedFile>
      ) : (
        <NonSelectedFileText>Nenhum arquivo selecionado</NonSelectedFileText>
      )}

      <input
        type="file"
        ref={(el) => {
          inputRef.current = el;
          register?.ref?.(el);
        }}
        onChange={(e) => {
          handleFileChange(e);
        }}
        accept={accept}
        style={{ display: "none" }}
      />
    </DocumentContainer>
  );
}
