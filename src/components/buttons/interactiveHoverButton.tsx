import type { ReactNode } from 'react';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';

interface InteractiveHoverButtonProps {
  text: string;
}

export function InteractiveHoverButtonWithText({
  text,
}: InteractiveHoverButtonProps) {
  return <InteractiveHoverButton>{text}</InteractiveHoverButton>;
}
