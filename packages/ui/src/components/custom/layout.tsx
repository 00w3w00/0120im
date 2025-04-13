import { ReactNode } from "react"

export const Layout = ({ children }: { children?: ReactNode }) => {
	return (
		<div className="flex flex-col  min-h-screen  ">
			<header className="bg-white border-b border-gray-200 p-4 sticky  top-0">
				<div className="max-w-5xl mx-auto flex justify-between items-center">
					<a href="/" className="text-2xl font-bold">
						CS LAB
					</a>
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
