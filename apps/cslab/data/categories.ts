export interface Category {
	id: number
	title: string
	description: string
	icon: string
	color: string
	path: string
	seoKeywords: string[]
}

export const categories: Category[] = [
	{
		id: 1,
		title: "자료구조",
		description:
			"배열, 링크드 리스트, 스택, 큐, 트리, 그래프 등의 기본 자료구조에 관한 질문",
		icon: "📊",
		color: "bg-blue-100 hover:bg-blue-200",
		path: "data-structure",
		seoKeywords: [
			"배열",
			"링크드 리스트",
			"스택",
			"큐",
			"트리",
			"그래프",
			"해시 테이블",
		],
	},
	{
		id: 2,
		title: "알고리즘",
		description:
			"정렬, 탐색, 그래프 알고리즘 등 알고리즘 설계와 복잡도에 관한 질문",
		icon: "🧩",
		color: "bg-green-100 hover:bg-green-200",
		path: "algorithm",
		seoKeywords: [
			"정렬 알고리즘",
			"탐색 알고리즘",
			"그래프 알고리즘",
			"시간 복잡도",
			"다이나믹 프로그래밍",
		],
	},
	{
		id: 3,
		title: "운영체제",
		description: "프로세스, 스레드, 메모리 관리, 파일 시스템 등에 관한 질문",
		icon: "💻",
		color: "bg-yellow-100 hover:bg-yellow-200",
		path: "operating-system",
		seoKeywords: [
			"프로세스",
			"스레드",
			"메모리 관리",
			"파일 시스템",
			"인터럽트",
			"스케줄링",
		],
	},
	{
		id: 4,
		title: "네트워크",
		description: "TCP/IP, HTTP, 소켓 프로그래밍 등 네트워크 기초에 관한 질문",
		icon: "🌐",
		color: "bg-purple-100 hover:bg-purple-200",
		path: "network",
		seoKeywords: [
			"TCP/IP",
			"HTTP",
			"HTTPS",
			"소켓 프로그래밍",
			"OSI 모델",
			"DNS",
			"라우팅",
		],
	},
	{
		id: 5,
		title: "데이터베이스",
		description: "SQL, 정규화, 인덱싱, 트랜잭션 등 DB 기본 개념에 관한 질문",
		icon: "🗄️",
		color: "bg-pink-100 hover:bg-pink-200",
		path: "database",
		seoKeywords: ["SQL", "정규화", "인덱싱", "트랜잭션", "ACID", "NoSQL"],
	},
	{
		id: 6,
		title: "웹/프론트엔드",
		description:
			"HTML, CSS, JavaScript, React, 브라우저 동작 원리 등에 관한 질문",
		icon: "🎨",
		color: "bg-red-100 hover:bg-red-200",
		path: "web-frontend",
		seoKeywords: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"브라우저 렌더링",
			"DOM",
			"웹 성능 최적화",
		],
	},
]
