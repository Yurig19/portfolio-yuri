import { InteractiveHoverButton } from '../magicui/interactive-hover-button';

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function InteractiveHoverButtonWithText({
  text,
  ...props
}: InteractiveHoverButtonProps) {
  return <InteractiveHoverButton {...props}>{text}</InteractiveHoverButton>;
}
