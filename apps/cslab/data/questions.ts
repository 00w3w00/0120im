// data/questions.ts
export interface Question {
	id: string
	categoryId: number
	title: string
	description: string
	keywords: string[]
}

// 자료구조 질문
export const dataStructureQuestions: Question[] = [
	{
		id: "ds-001",
		categoryId: 1,
		title: "배열과 링크드 리스트의 차이점은 무엇인가요?",
		description:
			"배열과 링크드 리스트의 메모리 구조와 접근 방식의 차이점에 대해 설명하세요.",
		keywords: ["배열", "링크드 리스트", "메모리 구조", "시간 복잡도"],
	},
	{
		id: "ds-002",
		categoryId: 1,
		title: "스택과 큐의 차이점과 활용 사례에 대해 설명해보세요.",
		description:
			"스택과 큐의 구조적 차이점과 각각이 실제로 활용되는 사례에 대해 설명하세요.",
		keywords: ["스택", "큐", "LIFO", "FIFO", "자료구조 활용"],
	},
	{
		id: "ds-003",
		categoryId: 1,
		title: "해시 테이블의 충돌 해결 방법에는 어떤 것들이 있나요?",
		description:
			"해시 함수 충돌이 발생했을 때 이를 해결하는 다양한 방법에 대해 설명하세요.",
		keywords: ["해시 테이블", "충돌 해결", "체이닝", "오픈 어드레싱"],
	},
	{
		id: "ds-004",
		categoryId: 1,
		title: "이진 검색 트리의 시간 복잡도와 최악의 경우에 대해 설명하세요.",
		description:
			"이진 검색 트리의 연산별 시간 복잡도와 트리가 불균형해질 때의 문제점에 대해 설명하세요.",
		keywords: ["이진 검색 트리", "BST", "시간 복잡도", "트리 불균형"],
	},
	{
		id: "ds-005",
		categoryId: 1,
		title: "AVL 트리와 레드-블랙 트리의 차이점은 무엇인가요?",
		description:
			"자가 균형 이진 탐색 트리인 AVL 트리와 레드-블랙 트리의 특징과 차이점을 설명하세요.",
		keywords: ["AVL 트리", "레드-블랙 트리", "자가 균형 트리", "트리 회전"],
	},
]

// 알고리즘 질문
export const algorithmQuestions: Question[] = [
	{
		id: "algo-001",
		categoryId: 2,
		title: "퀵 정렬의 평균 시간 복잡도와 최악의 경우는 언제인가요?",
		description:
			"퀵 정렬의 작동 방식과 시간 복잡도, 그리고 최악의 경우의 시나리오에 대해 설명하세요.",
		keywords: ["퀵 정렬", "분할 정복", "피벗", "시간 복잡도"],
	},
	{
		id: "algo-002",
		categoryId: 2,
		title: "동적 프로그래밍과 분할 정복의 차이점은 무엇인가요?",
		description:
			"동적 프로그래밍과 분할 정복 알고리즘의 접근 방식 차이와 각각 적합한 문제 유형에 대해 설명하세요.",
		keywords: ["동적 프로그래밍", "분할 정복", "메모이제이션", "중복 계산"],
	},
	{
		id: "algo-003",
		categoryId: 2,
		title: "BFS와 DFS의 차이점과 사용 케이스는 무엇인가요?",
		description:
			"너비 우선 탐색(BFS)과 깊이 우선 탐색(DFS)의 알고리즘적 차이와 각각 적합한 문제 상황에 대해 설명하세요.",
		keywords: ["BFS", "DFS", "그래프 탐색", "큐", "스택"],
	},
	{
		id: "algo-004",
		categoryId: 2,
		title: "다익스트라 알고리즘과 벨만-포드 알고리즘의 차이점은 무엇인가요?",
		description:
			"두 최단 경로 알고리즘의 작동 방식과 시간 복잡도, 그리고 각각 어떤 상황에서 선호되는지 설명하세요.",
		keywords: ["다익스트라", "벨만-포드", "최단 경로", "음수 가중치"],
	},
	{
		id: "algo-005",
		categoryId: 2,
		title:
			"그리디 알고리즘이 항상 최적의 해를 보장하지 않는 이유는 무엇인가요?",
		description:
			"그리디 알고리즘의 특성과 한계, 그리고 어떤 조건에서 최적해를 보장할 수 있는지 설명하세요.",
		keywords: ["그리디 알고리즘", "최적 부분 구조", "탐욕적 선택 속성"],
	},
]

// 운영체제 질문
export const osQuestions: Question[] = [
	{
		id: "os-001",
		categoryId: 3,
		title: "프로세스와 스레드의 차이점은 무엇인가요?",
		description:
			"프로세스와 스레드의 개념, 자원 공유 방식, 컨텍스트 스위칭 비용 등의 차이점에 대해 설명하세요.",
		keywords: ["프로세스", "스레드", "자원 공유", "컨텍스트 스위칭"],
	},
	{
		id: "os-002",
		categoryId: 3,
		title: "교착상태(Deadlock)의 발생 조건과 해결 방법은 무엇인가요?",
		description:
			"교착상태가 발생하기 위한 4가지 필요 조건과 이를 예방, 회피, 탐지, 복구하는 방법에 대해 설명하세요.",
		keywords: [
			"교착상태",
			"Deadlock",
			"상호 배제",
			"점유와 대기",
			"비선점",
			"순환 대기",
		],
	},
]

// 네트워크 질문
export const networkQuestions: Question[] = [
	{
		id: "net-001",
		categoryId: 4,
		title: "TCP와 UDP의 차이점은 무엇인가요?",
		description:
			"TCP와 UDP 프로토콜의 특징, 작동 방식, 신뢰성, 속도 등의 차이점과 각각 적합한 사용 사례에 대해 설명하세요.",
		keywords: ["TCP", "UDP", "연결 지향", "비연결 지향", "신뢰성", "속도"],
	},
	{
		id: "net-002",
		categoryId: 4,
		title: "HTTP와 HTTPS의 차이점과 HTTPS의 동작 원리는 무엇인가요?",
		description:
			"HTTP와 HTTPS의 보안 측면에서의 차이점과 HTTPS가 어떻게 보안 통신을 제공하는지 설명하세요.",
		keywords: ["HTTP", "HTTPS", "SSL/TLS", "암호화", "인증서"],
	},
]

// 데이터베이스 질문
export const databaseQuestions: Question[] = [
	{
		id: "db-001",
		categoryId: 5,
		title: "정규화의 개념과 제1정규형부터 제3정규형까지 설명해보세요.",
		description:
			"데이터베이스 정규화의 목적과 각 정규형의 조건에 대해 설명하세요.",
		keywords: [
			"정규화",
			"함수적 종속성",
			"제1정규형",
			"제2정규형",
			"제3정규형",
		],
	},
	{
		id: "db-002",
		categoryId: 5,
		title: "ACID 원칙이란 무엇이며 각각에 대해 설명해보세요.",
		description:
			"트랜잭션의 ACID 특성(원자성, 일관성, 독립성, 지속성)에 대해 자세히 설명하세요.",
		keywords: ["ACID", "트랜잭션", "원자성", "일관성", "독립성", "지속성"],
	},
]

// 웹/프론트엔드 질문
export const webFrontendQuestions: Question[] = [
	{
		id: "web-001",
		categoryId: 6,
		title: "React의 가상 DOM(Virtual DOM)은 무엇이며 어떤 장점이 있나요?",
		description:
			"React의 가상 DOM 개념과 이것이 어떻게 성능 향상에 기여하는지 설명하세요.",
		keywords: ["React", "가상 DOM", "렌더링 최적화", "브라우저 DOM"],
	},
	{
		id: "web-002",
		categoryId: 6,
		title:
			"CSS의 Box Model에 대해 설명하고 box-sizing 속성의 역할은 무엇인가요?",
		description:
			"CSS Box Model의 구성 요소와 box-sizing 속성이 레이아웃에 미치는 영향에 대해 설명하세요.",
		keywords: ["CSS", "Box Model", "box-sizing", "content-box", "border-box"],
	},
]

// 전체 질문 데이터
export const allQuestions: Question[] = [
	...dataStructureQuestions,
	...algorithmQuestions,
	...osQuestions,
	...networkQuestions,
	...databaseQuestions,
	...webFrontendQuestions,
]

// 카테고리 ID로 질문 필터링
export function getQuestionsByCategoryId(categoryId: number): Question[] {
	return allQuestions.filter((q) => q.categoryId === categoryId)
}

// 질문 ID로 질문 찾기
export function getQuestionById(questionId: string): Question | undefined {
	return allQuestions.find((q) => q.id === questionId)
}
