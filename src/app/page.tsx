import Image from 'next/image'
import { figtree } from "@/app/fonts/fonts"

export default function Home() {
  return (
    <main className={`${figtree.className} bg-white p-5 rounded-[20px] border border-black main-container`}>
      <Image
        src={"/illustration-article.svg"}
        alt='blog illustration'
        width={336}
        height={201}
        className='rounded-[10px] mb-6'
      />
      <p className='mb-4'>
        <span className='bg-[#f4d04e] py-[9px] px-3 font-bold text-sm rounded-md badge'>Learning</span>
      </p>
      <p>Published 21 Dec 2023</p>
      <h1 className='text-2xl font-bold my-5 hover:text-[#f4d04e] hover:cursor-pointer'>HTML & CSS foundations</h1>
      <p className='max-w-[336px] text-gray-500 mb-6'>
        These languages are the backbone of every website, defining structure, content, and presentation.
      </p>
      <div className='flex items-center gap-3'>
        <Image
          src={"/image-avatar.webp"}
          alt='avatar'
          height={33}
          width={33}
        />
        <p className='font-bold'>Greg Hooper</p>
      </div>
    </main>
  )
}
