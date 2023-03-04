import { useId } from "react";
import style from "./Field.module.css";

type FieldProps = {
  name: string;
  label: string;
} & Partial<HTMLInputElement>;

export default function Field({ type, name, label, ...rest }: FieldProps) {
  const uid = useId();

  const fieldId = `${uid}-${name}`;
  return (
    <div className={style["field-container"]}>
      <label htmlFor={fieldId}>{label}</label>
      <input id={fieldId} type={type} name={name} />
    </div>
  );
}

