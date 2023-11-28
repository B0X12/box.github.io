import { TTags } from "@customTypes/index"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  className?: string
  data: TTags
}

const TagList: React.FC<Props> = ({ className, data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  const order = [
    "𝘏𝘦𝘭𝘭𝘰! 👋🏻",
    "𝘑𝘢𝘷𝘢 & 𝘚𝘱𝘳𝘪𝘯𝘨",
    "𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦",
    "𝘋𝘦𝘷𝘖𝘱𝘴",
    "𝘎𝘪𝘵",
    "𝘐𝘴𝘴𝘶𝘦",
    "𝘚𝘪𝘥𝘦-𝘗𝘳𝘰𝘫𝘦𝘤𝘵",
    "𝘌𝘵𝘤"
  ];

  return (
    <div className={className}>
      <div className="hidden lg:block p-1 mb-3 text-black dark:text-white">🏷 ᴛᴀɢs</div>
      <ul className="gap-1 flex mobile-x-scroll lg:block mb-6">
        {order.map((key) => (
          <li
            key={key}
            className={`cursor-pointer text-sm p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-black-80 ${
              key === currentTag &&
              "text-black bg-white dark:bg-black-60 hover:bg-white dark:hover:bg-zinc-700"
            }`}
            onClick={() => handleClickTag(key)}
          >
            <a>{key}</a>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default TagList
