import { ReactNode } from "react"

export const Layout = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="flex flex-col  min-h-screen   ">
			<header className="bg-white border-b border-gray-200 p-4 sticky  top-0 z-10 ">
				<div className="w-full   max-w-4xl mx-auto flex justify-between items-center cursor-pointer">
					<div className="w-fit">
						<a href="/" className="text-2xl font-bold">
							CS LAB
						</a>
					</div>
					<div className="w-fit flex gap-5">
						<a href="/" className="text-sm font-bold cursor-pointer">
							Home
						</a>
						<a href="/favorites" className="text-sm font-bold cursor-pointer">
							Favorites
						</a>
					</div>
				</div>
			</header>

			<div className="flex-grow">{children}</div>

			<footer className="bg-gray-100 border-t border-gray-200 py-8">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<p className="text-gray-600">&copy; {new Date().getFullYear()}</p>
				</div>
			</footer>
		</div>
	)
}
