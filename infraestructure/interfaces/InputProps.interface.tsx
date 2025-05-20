export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classLabel?: string;
  classInput?: string;
  rightElementInput?: React.ReactNode;
  rightElementLabel?: React.ReactNode;
}
