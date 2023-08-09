import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex justify-center h-24 bg-purple'>
      <Image
        src="/logo.svg"
        width={156}
        height={45}
        alt="Logo ReactJS"
      />
    </div>
  )
}