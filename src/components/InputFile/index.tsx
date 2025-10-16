import React, { useRef, useState, useCallback } from "react";

// Assuming these imports are correctly defined elsewhere in your project
import { HiddenInput, UploadField, TitleContainer } from "./styles";

import Typography from "../Typography";

export interface InputFileProps extends React.HTMLAttributes<HTMLDivElement> {
  accept?: string[];
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  fullWidth?: boolean;
  onChangeFiles?: (files: FileList) => void;
  title?: string;
  textButton?: string;
  subtitle?: string;
}

const InputFile = ({
  accept = ["*"],
  isLoading = false,
  isMultiple = false,
  isDisabled = false,
  fullWidth = false,
  title = "Arraste seus arquivos ou ",
  textButton = "Procure aqui",
  subtitle = "Máximo de 100mb",
  onChange,
  onChangeFiles,
  ...props
}: InputFileProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!dragActive) setDragActive(true);
    },
    [dragActive]
  );

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChange && onChange(e);
        onChangeFiles && onChangeFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    },
    [onChange, onChangeFiles]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onChange && onChange(e);
        onChangeFiles && onChangeFiles(e.target.files);
      }
    },
    [onChange, onChangeFiles]
  );

  return (
    <UploadField
      $disabled={isLoading || isDisabled}
      $active={dragActive}
      $fullWidth={fullWidth}
      onClick={() => inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      <HiddenInput
        ref={inputRef}
        type="file"
        multiple={isMultiple}
        onChange={handleChange}
        accept={accept.join(",")}
        disabled={isLoading || isDisabled}
      />
      {isLoading || dragActive ? (
        <div>loading...</div>
      ) : (
        <>
          <div>icon</div>
          <TitleContainer>
            <Typography as="span" color="lighter">
              {title}
              <button
                // variant="ghost"
                disabled={isDisabled}
              >
                {textButton}
              </button>
            </Typography>
            <Typography as="span" color="lighter">
              {subtitle}
            </Typography>
          </TitleContainer>
        </>
      )}
    </UploadField>
  );
};

export default InputFile;
