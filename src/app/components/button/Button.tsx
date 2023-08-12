import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleGetPosts?: (q: string, limit: number) => void;
  text?: string;
  icon?: ElementType;
}

export default function Button({ handleGetPosts, text, icon: Icon, ...rest }: ButtonProps) {
  return (
    <button 
      {...rest} 
      className={twMerge('rounded-lg bg-light-grey focus:bg-light-purple w-52 h-12 text-light-font-white', rest.className)}>
      {Icon && <Icon size={16} />}
      {text}
    </button>
  )
}