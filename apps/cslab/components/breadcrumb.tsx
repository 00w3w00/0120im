"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
	label: string
	href: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav aria-label="Breadcrumb" className="border-b w-full">
			<ol className="flex items-center text-sm text-black/80 px-6 py-3">
				{items.map((item, index) => {
					const isLast = index === items.length - 1

					return (
						<li key={item.href} className="flex items-center">
							{index > 0 && (
								<ChevronRight
									className="mx-2 h-4 w-4 text-black/60"
									aria-hidden="true"
								/>
							)}

							{isLast ? (
								<span aria-current="page" className="font-medium text-black">
									{item.label}
								</span>
							) : (
								<Link
									href={item.href}
									className="hover:text-black transition-colors duration-200"
								>
									{item.label}
								</Link>
							)}
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
