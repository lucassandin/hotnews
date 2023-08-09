import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex justify-center h-24 bg-purple'>
      <Image
        priority={true}
        src="/logo.svg"
        width={156}
        height={45}
        alt="Logo ReactJS"
      />
    </div>
  )
}