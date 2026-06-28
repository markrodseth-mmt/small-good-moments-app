import { StarSolid } from './ui-icons';

interface Props {
  message: string;
  show: boolean;
}

export default function Toast({ message, show }: Props) {
  return (
    <div className={`toast${show ? ' show' : ''}`} role="status" aria-live="polite">
      <StarSolid />
      <span>{message}</span>
    </div>
  );
}
