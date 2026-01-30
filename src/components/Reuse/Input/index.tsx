import type { InputHTMLAttributes } from "react";
import OutlineIconError from "../../../assets/alert-circle.svg";
import { IconError, InputContainer, InputContent, InputError } from "./styles";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  error?: string;
}

export function InputField({ error, children, ...props }: InputFieldProps) {
  return (
    <InputContainer error={error}>
      <label>{children}</label>

      <InputContent>
        <input {...props} />
        {/* se tiver error aparece isso... e nao tiver outro retorno = && */}

        {error && (
          <InputError>
            <IconError src={OutlineIconError} />
            <p>{error}</p>
          </InputError>
        )}

        {/* se nao tiver if, e ESPERAR  O ELSE = ? :  */}
        {/* {error ? "BATATA" : "COGUMELO"} */}
      </InputContent>
    </InputContainer>
  );
}
