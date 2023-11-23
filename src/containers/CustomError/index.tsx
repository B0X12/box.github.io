import Image from 'next/image'
import React from 'react'

type Props = {
  errorType?: 'NOT_FOUND' | 'UNKNOWN'
}

const CustomError: React.FC<Props> = ({ errorType }) => {
  return (
    <div
      className={`m-auto max-w-4xl bg-white dark:bg-black-80 rounded-3xl py-12 px-6 shadow-md`}
    >
      <div className="py-20 flex flex-col items-center gap-7">
        <div className="text-7xl flex  items-center">
          <div className="text-black-100 dark:text-gray-100">4</div>
          <Image src="/images/error.png" width={60} height={60} alt="error" />
          <div className="text-black-100 dark:text-gray-100">4</div>
        </div>
        <div className="text-xl text-gray-400">존재하지 않는 게시글입니다.</div>
      </div>
    </div>
  )
}

export default CustomError
