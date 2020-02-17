import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({ value, onChange }) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onFormSunmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSunmit }) => (
  <form onSubmit={onFormSunmit}> {children} </form>
);
