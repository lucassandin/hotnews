interface ButtonProps {
  children: React.ReactNode;
}

export default function Buttons({ children }: ButtonProps) {
  return (
    <div className='flex justify-center gap-4 my-6'>
      { children }
    </div>
  )
}