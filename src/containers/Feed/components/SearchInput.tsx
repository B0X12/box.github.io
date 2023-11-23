import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="p-1 mb-3 text-black dark:text-white">🔎 sᴇᴀʀᴄʜ</div>
      <input
        className="
          rounded-2xl 
          px-5 
          py-2 
          w-full 
          outline-none
          bg-white
          dark:bg-black-80 
          dark:text-white 
          focus:shadow-light 
          dark:bg-black-80/50 
          dark:focus:shadow-dark 
          transition"
        type="text"
        placeholder="검색어를 입력하세요"
        {...props}
      />
    </div>
  )
}

export default SearchInput
