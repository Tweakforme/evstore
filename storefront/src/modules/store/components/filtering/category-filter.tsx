"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type CategoryGroup = {
  parent: string
  children: { label: string; handle: string }[]
}

type Props = {
  categories: CategoryGroup[]
}

export function CategoryFilter({ categories }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selected, setSelected] = useState<Record<string, string>>({})

  useEffect(() => {
    const currentCategory = searchParams.get("category")
    if (!currentCategory) return

    const foundGroup = categories.find(group =>
      group.children.some(c => c.handle === currentCategory)
    )

    if (foundGroup) {
      setSelected(prev => ({ ...prev, [foundGroup.parent]: currentCategory }))
    }
  }, [searchParams, categories])

  const updateSelection = (group: string, handle: string) => {
    setSelected(prev => ({ ...prev, [group]: handle }))
    const params = new URLSearchParams(searchParams.toString())
    params.set("category", handle)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {categories.map(group => (
        <div key={group.parent}>
          <label className="block text-sm font-medium mb-1">{group.parent}</label>
          <select
            className="border px-2 py-1 rounded"
            value={selected[group.parent] || ""}
            onChange={e => updateSelection(group.parent, e.target.value)}
          >
            <option value="">Select</option>
            {group.children.map(child => (
              <option key={child.handle} value={child.handle}>
                {child.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}
