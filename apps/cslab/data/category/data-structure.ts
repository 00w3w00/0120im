import { Question } from "../questions"

// 데이터 구조 질문
export const dataStructureQuestions: Question[] = [
	{
		id: "ds-001",
		categoryId: 1,
		title: "배열과 링크드 리스트의 차이점은 무엇인가요?",
		description:
			"배열과 링크드 리스트의 메모리 구조와 접근 방식의 차이점에 대해 설명하세요.",
		keywords: ["배열", "링크드 리스트", "메모리 구조", "시간 복잡도"],
		answer: {
			mainPoints: [
				"메모리 할당 방식의 차이: 배열은 연속적인 메모리 할당, 링크드 리스트는 분산된 메모리 할당",
				"접근 방식의 차이: 배열은 인덱스로 O(1) 접근, 링크드 리스트는 순차적 탐색으로 O(n) 접근",
				"크기 조정의 차이: 배열은 크기가 고정적(동적 배열 제외), 링크드 리스트는 동적 크기 조정 가능",
				"삽입/삭제 연산의 차이: 배열은 O(n), 링크드 리스트는 O(1) (포인터만 변경)",
			],
			explanation: `
배열과 링크드 리스트는 데이터를 저장하는 가장 기본적인 자료구조이지만, 메모리 사용과 연산 효율성에서 중요한 차이가 있습니다.

배열은 메모리 상에서 연속적인 공간을 할당받아 데이터를 저장합니다. 이로 인해 인덱스를 통한 랜덤 접근이 O(1)의 시간 복잡도를 갖는 장점이 있습니다. 하지만 중간에 요소를 삽입하거나 삭제할 때 다른 요소들을 모두 이동시켜야 하므로 O(n)의 시간이 소요됩니다. 또한 크기가 고정되어 있어 초기 할당된 크기보다 많은 요소를 저장하기 위해서는 새로운 배열을 생성하고 기존 데이터를 복사해야 합니다.

반면 링크드 리스트는 각 노드가 데이터와 다음 노드를 가리키는 포인터로 구성되어 있으며, 메모리 상에서 연속적으로 위치하지 않습니다. 특정 위치에 요소를 삽입하거나 삭제할 때 해당 위치를 찾는 과정은 O(n)이지만, 삽입/삭제 자체는 포인터만 변경하면 되므로 O(1)입니다. 또한 필요에 따라 동적으로 크기를 조정할 수 있어 메모리 관리가 유연합니다. 단점은 특정 요소에 접근하기 위해 처음부터 순차적으로 탐색해야 하므로 접근 시간이 O(n)이라는 점입니다.
			`,
			examples: [
				"배열 활용 예시: 인덱스로 빠른 접근이 필요한 경우(해시 테이블의 버킷), 크기가 자주 변하지 않는 데이터 저장",
				"링크드 리스트 활용 예시: 데이터의 삽입/삭제가 빈번한 경우, 스택, 큐 구현, 메모리 관리 시스템",
			],
			codeExample: `
	// JavaScript 배열 예시
	const array = [1, 2, 3, 4, 5];
	console.log(array[2]); // O(1) 접근: 3
	array.splice(2, 0, 10); // O(n) 삽입: [1, 2, 10, 3, 4, 5]

	// JavaScript에서 링크드 리스트 구현 예시
	class Node {
		constructor(data) {
			this.data = data;
			this.next = null;
		}
	}

	class LinkedList {
		constructor() {
			this.head = null;
		}

		// 노드 삽입 (O(1) - 맨 앞에 삽입하는 경우)
		insertAtBeginning(data) {
			const newNode = new Node(data);
			newNode.next = this.head;
			this.head = newNode;
		}

		// 특정 데이터 검색 (O(n))
		search(data) {
			let current = this.head;
			while (current) {
				if (current.data === data) return true;
				current = current.next;
			}
			return false;
		}
	}
			`,
		},
	},
	{
		id: "ds-002",
		categoryId: 1,
		title: "스택과 큐의 차이점과 활용 사례에 대해 설명해보세요.",
		description:
			"스택과 큐의 구조적 차이점과 각각이 실제로 활용되는 사례에 대해 설명하세요.",
		keywords: ["스택", "큐", "LIFO", "FIFO", "자료구조 활용"],
		answer: {
			mainPoints: [
				"동작 원리의 차이: 스택은 LIFO(Last In First Out), 큐는 FIFO(First In First Out)",
				"연산의 차이: 스택은 push/pop, 큐는 enqueue/dequeue",
				"스택 활용 사례: 함수 호출 스택, 괄호 매칭, 웹 브라우저 방문 기록, 실행 취소(undo) 기능",
				"큐 활용 사례: 작업 스케줄링, 너비 우선 탐색(BFS), 프린터 대기열, 비동기 처리",
			],
			explanation: `
스택과 큐는 데이터를 저장하고 접근하는 방식에 차이가 있는 추상 자료형입니다.

스택(Stack)은 LIFO(Last In First Out) 원칙을 따릅니다. 마지막에 삽입된 요소가 가장 먼저 제거되는 구조로, 책을 쌓아올리는 것과 유사합니다. 주요 연산으로는 push(삽입)와 pop(제거)이 있으며, 가장 최근에 추가된 요소에만 접근할 수 있습니다.

큐(Queue)는 FIFO(First In First Out) 원칙을 따릅니다. 먼저 삽입된 요소가 먼저 제거되는 구조로, 줄을 서는 것과 유사합니다. 주요 연산으로는 enqueue(삽입)와 dequeue(제거)가 있으며, 가장 오래된 요소부터 접근합니다.

두 자료구조는 구현 방식에 따라 배열이나 링크드 리스트를 기반으로 구현할 수 있습니다. 배열로 구현할 경우 스택은 효율적이지만, 큐는 dequeue 연산 시 요소 이동이 필요해 비효율적일 수 있습니다. 따라서 큐는 주로 링크드 리스트로 구현하거나, 원형 배열을 사용해 구현합니다.
			`,
			examples: [
				"스택 활용 예시: 브라우저의 뒤로 가기/앞으로 가기, 재귀 함수 호출 관리, 괄호 매칭 검사, 수식 계산(후위 표기법)",
				"큐 활용 예시: OS의 프로세스 스케줄링, 네트워크 패킷 처리, 키보드 버퍼, 이벤트 처리 시스템",
			],
			codeExample: `
	// JavaScript에서 스택 구현
	class Stack {
		constructor() {
			this.items = [];
		}

		push(element) {
			this.items.push(element);
		}

		pop() {
			if (this.isEmpty()) return "Underflow";
			return this.items.pop();
		}

		peek() {
			return this.items[this.items.length - 1];
		}

		isEmpty() {
			return this.items.length === 0;
		}
	}

	// JavaScript에서 큐 구현
	class Queue {
		constructor() {
			this.items = {};
			this.frontIndex = 0;
			this.backIndex = 0;
		}

		enqueue(element) {
			this.items[this.backIndex] = element;
			this.backIndex++;
		}

		dequeue() {
			if (this.isEmpty()) return "Underflow";
			const item = this.items[this.frontIndex];
			delete this.items[this.frontIndex];
			this.frontIndex++;
			return item;
		}

		peek() {
			return this.items[this.frontIndex];
		}

		isEmpty() {
			return this.frontIndex === this.backIndex;
		}
	}
			`,
		},
	},
	{
		id: "ds-003",
		categoryId: 1,
		title: "해시 테이블의 동작 원리와 충돌 해결 방법을 설명하세요.",
		description:
			"해시 테이블의 구조, 해시 함수의 역할, 그리고 충돌 처리 방법을 설명하세요.",
		keywords: ["해시 테이블", "해시 함수", "충돌", "체이닝", "오픈 어드레싱"],
		answer: {
			mainPoints: [
				"해시 테이블은 키-값 쌍을 저장하며, 해시 함수로 키를 인덱스로 변환한다.",
				"충돌: 서로 다른 키가 같은 인덱스로 매핑될 때 발생.",
				"체이닝: 충돌 시 링크드 리스트로 동일 인덱스에 저장.",
				"오픈 어드레싱: 충돌 시 빈 슬롯을 찾아 저장(선형 탐사, 이중 해싱 등).",
			],
			explanation: `
해시 테이블은 키-값 쌍을 효율적으로 저장하고 검색하기 위한 자료구조로, 평균적으로 O(1)의 시간 복잡도를 제공한다. 해시 함수는 키를 받아 고정된 크기의 인덱스로 변환하며, 좋은 해시 함수는 충돌을 최소화하고 키를 고르게 분배한다.

충돌은 두 키가 동일한 해시 값을 가질 때 발생한다. 이를 해결하기 위해 체이닝은 동일 인덱스에 링크드 리스트를 사용해 여러 키-값 쌍을 저장한다. 반면, 오픈 어드레싱은 빈 슬롯을 찾아 데이터를 저장하며, 선형 탐사(다음 슬롯 확인)나 이중 해싱(다른 해시 함수 사용) 같은 방법을 사용한다.

체이닝은 메모리 사용이 유연하지만 캐시 효율이 낮을 수 있고, 오픈 어드레싱은 메모리를 절약하지만 클러스터링 문제가 발생할 수 있다.
			`,
			examples: [
				"해시 테이블 활용 예시: 데이터베이스 인덱스, 캐시 시스템, 사전 구현",
				"체이닝 예시: 키 충돌 시 링크드 리스트로 연결",
				"오픈 어드레싱 예시: 선형 탐사로 다음 빈 슬롯에 저장",
			],
			codeExample: `
	// JavaScript에서 체이닝을 사용한 해시 테이블 구현
	class HashTable {
		constructor(size = 53) {
			this.keyMap = new Array(size);
		}

		_hash(key) {
			let total = 0;
			const WEIRD_PRIME = 31;
			for (let i = 0; i < Math.min(key.length, 100); i++) {
				let char = key[i];
				let value = char.charCodeAt(0) - 96;
				total = (total * WEIRD_PRIME + value) % this.keyMap.length;
			}
			return total;
		}

		set(key, value) {
			const index = this._hash(key);
			if (!this.keyMap[index]) {
				this.keyMap[index] = [];
			}
			this.keyMap[index].push([key, value]);
		}

		get(key) {
			const index = this._hash(key);
			if (this.keyMap[index]) {
				for (let i = 0; i < this.keyMap[index].length; i++) {
					if (this.keyMap[index][i][0] === key) {
						return this.keyMap[index][i][1];
					}
				}
			}
			return undefined;
		}
	}
			`,
		},
	},
	{
		id: "ds-004",
		categoryId: 1,
		title: "이진 검색 트리의 특징과 장단점을 설명하세요.",
		description:
			"이진 검색 트리의 구조와 동작 방식, 그리고 사용 시 고려할 점을 설명하세요.",
		keywords: ["이진 검색 트리", "노드", "삽입", "삭제", "균형"],
		answer: {
			mainPoints: [
				"이진 검색 트리(BST)는 각 노드의 왼쪽 서브트리가 작은 값, 오른쪽 서브트리가 큰 값을 가진다.",
				"검색, 삽입, 삭제 연산은 평균 O(log n), 최악 O(n).",
				"장점: 정렬된 데이터 유지, 효율적인 검색 가능.",
				"단점: 불균형 트리 시 성능 저하.",
			],
			explanation: `
이진 검색 트리(BST)는 데이터를 계층적으로 저장하는 트리 기반 자료구조다. 루트 노드를 기준으로 왼쪽 서브트리는 더 작은 키를, 오른쪽 서브트리는 더 큰 키를 가지며, 이를 통해 효율적인 검색을 지원한다.

검색은 키와 노드 값을 비교하며 진행되며, 균형 잡힌 트리에서는 O(log n)의 시간 복잡도를 가진다. 삽입은 새로운 노드를 적절한 위치에 추가하고, 삭제는 노드를 제거한 후 트리 구조를 유지한다. 그러나 데이터 입력 순서에 따라 트리가 한쪽으로 치우칠 경우, 링크드 리스트처럼 O(n)의 성능을 보일 수 있다.

이를 해결하기 위해 AVL 트리나 레드-블랙 트리 같은 자가 균형 트리가 사용된다.
			`,
			examples: [
				"BST 활용 예시: 데이터베이스 인덱스, 사전 자료구조, 우선순위 큐",
				"불균형 예시: 순차적 입력(1,2,3...) 시 선형 구조로 퇴화",
			],
			codeExample: `
	// JavaScript에서 이진 검색 트리 구현
	class Node {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	class BinarySearchTree {
		constructor() {
			this.root = null;
		}

		insert(value) {
			const newNode = new Node(value);
			if (!this.root) {
				this.root = newNode;
				return this;
			}
			let current = this.root;
			while (true) {
				if (value === current.value) return undefined;
				if (value < current.value) {
					if (!current.left) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else {
					if (!current.right) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}

		search(value) {
			if (!this.root) return false;
			let current = this.root;
			while (current) {
				if (value === current.value) return true;
				if (value < current.value) {
					current = current.left;
				} else {
					current = current.right;
				}
			}
			return false;
		}
	}
			`,
		},
	},
	{
		id: "ds-005",
		categoryId: 1,
		title: "힙 자료구조의 특징과 사용 사례를 설명하세요.",
		description: "힙의 구조와 동작 원리, 그리고 실제 활용 예를 설명하세요.",
		keywords: ["힙", "최대 힙", "최소 힙", "우선순위 큐", "완전 이진 트리"],
		answer: {
			mainPoints: [
				"힙은 완전 이진 트리 기반으로, 부모 노드가 자식 노드보다 크거나(최대 힙) 작다(최소 힙).",
				"삽입과 삭제는 O(log n), 최대/최소값 접근은 O(1).",
				"활용 사례: 우선순위 큐, 힙 정렬, 다익스트라 알고리즘.",
			],
			explanation: `
힙은 우선순위 큐를 구현하는 데 최적화된 자료구조로, 완전 이진 트리 형태를 유지한다. 최대 힙은 부모 노드가 자식보다 크거나 같고, 최소 힙은 부모가 자식보다 작거나 같다.

삽입 시 새 요소를 트리 끝에 추가한 후, 부모와 비교하며 힙 속성을 복원한다(버블 업). 삭제 시 루트(최대/최소값)를 제거하고, 마지막 요소를 루트로 이동시킨 후 힙 속성을 복원한다(버블 다운). 이 과정은 O(log n)이다.

힙은 우선순위 기반 작업 스케줄링이나 그래프 알고리즘에서 자주 사용된다.
			`,
			examples: [
				"최소 힙 활용: 작업 스케줄링, 이벤트 관리",
				"최대 힙 활용: 실시간 리더보드, 힙 정렬",
			],
			codeExample: `
	// JavaScript에서 최소 힙 구현
	class MinHeap {
		constructor() {
			this.heap = [];
		}

		getParentIndex(index) {
			return Math.floor((index - 1) / 2);
		}

		getLeftChildIndex(index) {
			return 2 * index + 1;
		}

		getRightChildIndex(index) {
			return 2 * index + 2;
		}

		swap(index1, index2) {
			[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
		}

		insert(value) {
			this.heap.push(value);
			this.bubbleUp();
		}

		bubbleUp() {
			let index = this.heap.length - 1;
			while (index > 0) {
				const parentIndex = this.getParentIndex(index);
				if (this.heap[parentIndex] <= this.heap[index]) break;
				this.swap(index, parentIndex);
				index = parentIndex;
			}
		}

		extractMin() {
			if (this.heap.length === 0) return null;
			if (this.heap.length === 1) return this.heap.pop();
			const min = this.heap[0];
			this.heap[0] = this.heap.pop();
			this.bubbleDown();
			return min;
		}

		bubbleDown() {
			let index = 0;
			const length = this.heap.length;
			while (true) {
				const leftChildIndex = this.getLeftChildIndex(index);
				const rightChildIndex = this.getRightChildIndex(index);
				let minIndex = index;

				if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[minIndex]) {
					minIndex = leftChildIndex;
				}
				if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[minIndex]) {
					minIndex = rightChildIndex;
				}
				if (minIndex === index) break;
				this.swap(index, minIndex);
				index = minIndex;
			}
		}
	}
			`,
		},
	},
	{
		id: "ds-006",
		categoryId: 1,
		title: "그래프와 트리의 차이점은 무엇인가요?",
		description: "그래프와 트리의 구조적 차이와 각각의 특징을 설명하세요.",
		keywords: ["그래프", "트리", "노드", "엣지", "사이클"],
		answer: {
			mainPoints: [
				"트리는 사이클이 없는 연결된 그래프, 그래프는 사이클을 포함할 수 있다.",
				"트리는 단일 루트와 계층 구조, 그래프는 임의의 연결 구조.",
				"트리: 부모-자식 관계 명확, 그래프: 관계 자유로움.",
			],
			explanation: `
트리는 그래프의 특수한 형태로, 사이클이 없고 모든 노드가 연결된 구조다. 단일 루트에서 시작해 부모-자식 관계로 계층을 이룬다. 이진 트리, AVL 트리 등이 예시다.

그래프는 노드와 엣지로 구성되며, 방향성(방향 그래프)이나 가중치(가중 그래프)를 가질 수 있다. 사이클이 존재할 수 있고, 노드 간 연결은 자유롭다. 소셜 네트워크, 도로망 등이 그래프의 예이다.

트리는 검색 트리, 결정 트리 등에 사용되고, 그래프는 네트워크 분석, 최단 경로 탐색 등에 활용된다.
			`,
			examples: [
				"트리 활용: 파일 시스템 구조, 조직도, 이진 검색 트리",
				"그래프 활용: 소셜 네트워크, 경로 찾기, 네트워크 토폴로지",
			],
			codeExample: `
	// JavaScript에서 그래프 구현 (인접 리스트)
	class Graph {
		constructor() {
			this.adjacencyList = {};
		}

		addVertex(vertex) {
			if (!this.adjacencyList[vertex]) {
				this.adjacencyList[vertex] = [];
			}
		}

		addEdge(vertex1, vertex2) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
		}
	}

	// 트리 구현 (이진 트리)
	class TreeNode {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	class BinaryTree {
		constructor() {
			this.root = null;
		}

		insert(value) {
			const newNode = new TreeNode(value);
			if (!this.root) {
				this.root = newNode;
				return;
			}
			// 간단히 삽입 (BST 방식 생략)
		}
	}
			`,
		},
	},
	{
		id: "ds-007",
		categoryId: 1,
		title: "AVL 트리와 레드-블랙 트리의 차이점은 무엇인가요?",
		description:
			"AVL 트리와 레드-블랙 트리의 균형 유지 방식과 성능 차이를 설명하세요.",
		keywords: ["AVL 트리", "레드-블랙 트리", "균형 트리", "회전", "삽입"],
		answer: {
			mainPoints: [
				"AVL 트리: 각 노드의 좌우 서브트리 높이 차이가 1 이하.",
				"레드-블랙 트리: 색상 속성과 규칙으로 균형 유지.",
				"AVL은 엄격한 균형, 레드-블랙은 느슨한 균형.",
				"AVL은 검색 빠름, 레드-블랙은 삽입/삭제 빠름.",
			],
			explanation: `
AVL 트리와 레드-블랙 트리는 이진 검색 트리의 균형을 유지해 O(log n) 성능을 보장한다.

AVL 트리는 모든 노드에서 좌우 서브트리 높이 차이를 1 이하로 유지한다. 삽입/삭제 후 불균형 발생 시 회전(단일/이중)을 통해 균형을 복원한다. 엄격한 균형으로 검색이 빠르지만, 회전이 자주 발생해 삽입/삭제가 느릴 수 있다.

레드-블랙 트리는 노드에 빨간색/검은색 속성을 부여하고, 규칙(루트는 검정, 빨강 노드는 연속 불가 등)을 통해 균형을 유지한다. 균형이 덜 엄격해 회전이 적고, 삽입/삭제가 상대적으로 빠르다.

AVL은 읽기 중심 작업, 레드-블랙은 쓰기 중심 작업에 적합하다.
			`,
			examples: [
				"AVL 활용: 데이터베이스 인덱스, 정적 데이터 검색",
				"레드-블랙 활용: 메모리 할당기, STL 컨테이너(set, map)",
			],
			codeExample: `
	// JavaScript에서 간단한 AVL 트리 구현
	class AVLNode {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
			this.height = 1;
		}
	}

	class AVLTree {
		getHeight(node) {
			return node ? node.height : 0;
		}

		getBalance(node) {
			return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
		}

		rotateRight(y) {
			const x = y.left;
			const T2 = x.right;
			x.right = y;
			y.left = T2;
			y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
			x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
			return x;
		}

		// 삽입 및 균형 코드 생략
	}
			`,
		},
	},
	{
		id: "ds-008",
		categoryId: 1,
		title: "우선순위 큐의 동작 원리와 구현 방법을 설명하세요.",
		description: "우선순위 큐의 개념과 힙을 사용한 구현 방식을 설명하세요.",
		keywords: ["우선순위 큐", "힙", "삽입", "삭제", "최소 힙"],
		answer: {
			mainPoints: [
				"우선순위 큐는 요소에 우선순위를 부여해 높은 우선순위 요소를 먼저 처리.",
				"최소 힙 또는 최대 힙으로 구현 가능.",
				"삽입과 삭제는 O(log n), 우선순위 확인은 O(1).",
			],
			explanation: `
우선순위 큐는 요소를 삽입하고, 우선순위가 가장 높은(또는 낮은) 요소를 제거하는 자료구조다. 일반적으로 힙을 사용해 구현하며, 최소 힙은 가장 작은 값을, 최대 힙은 가장 큰 값을 빠르게 반환한다.

삽입은 힙의 끝에 요소를 추가한 후, 힙 속성을 유지하기 위해 상위 노드와 비교하며 위치를 조정한다(버블 업). 삭제는 루트(최우선 요소)를 제거하고, 마지막 요소를 루트로 이동시킨 후 힙 속성을 복원한다(버블 다운).

우선순위 큐는 작업 스케줄링, 다익스트라 알고리즘, 허프만 코딩 등에 사용된다.
			`,
			examples: [
				"활용 예시: 네트워크 패킷 우선순위 처리, 작업 스케줄링, 이벤트 처리",
			],
			codeExample: `
	// JavaScript에서 우선순위 큐 (최소 힙 기반)
	class PriorityQueue {
		constructor() {
			this.heap = [];
		}

		insert(value) {
			this.heap.push(value);
			this.bubbleUp();
		}

		bubbleUp() {
			let index = this.heap.length - 1;
			while (index > 0) {
				const parentIndex = Math.floor((index - 1) / 2);
				if (this.heap[parentIndex] <= this.heap[index]) break;
				[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
				index = parentIndex;
			}
		}

		extractMin() {
			if (this.heap.length === 0) return null;
			if (this.heap.length === 1) return this.heap.pop();
			const min = this.heap[0];
			this.heap[0] = this.heap.pop();
			this.bubbleDown();
			return min;
		}

		bubbleDown() {
			let index = 0;
			const length = this.heap.length;
			while (true) {
				const leftChild = 2 * index + 1;
				const rightChild = 2 * index + 2;
				let minIndex = index;

				if (leftChild < length && this.heap[leftChild] < this.heap[minIndex]) {
					minIndex = leftChild;
				}
				if (rightChild < length && this.heap[rightChild] < this.heap[minIndex]) {
					minIndex = rightChild;
				}
				if (minIndex === index) break;
				[this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
				index = minIndex;
			}
		}
	}
			`,
		},
	},
	{
		id: "ds-009",
		categoryId: 1,
		title: "트라이(Trie) 자료구조의 특징과 활용 사례를 설명하세요.",
		description:
			"트라이의 구조와 동작 방식, 그리고 실제 사용 사례를 설명하세요.",
		keywords: ["트라이", "문자열", "접두사 트리", "자동 완성", "검색"],
		answer: {
			mainPoints: [
				"트라이는 문자열을 저장하는 트리 기반 자료구조.",
				"각 노드는 문자 하나를 나타내고, 경로는 문자열을 형성.",
				"접두사 기반 검색과 자동 완성에 효율적.",
			],
			explanation: `
트라이(Trie)는 문자열이나 접두사를 효율적으로 저장하고 검색하기 위한 트리 자료구조다. 루트는 비어 있고, 각 노드는 문자를 나타내며, 노드 간 경로는 문자열을 형성한다. 단어의 끝은 특별한 플래그로 표시된다.

삽입은 각 문자를 노드로 추가하며, 검색은 문자열의 각 문자를 따라가며 진행된다. 접두사를 공유하는 문자열은 동일한 경로를 공유해 메모리를 절약한다. 검색과 삽입은 문자열 길이 m에 대해 O(m)의 시간 복잡도를 가진다.

트라이는 자동 완성, 사전 검색, IP 라우팅 테이블 등에 사용된다.
			`,
			examples: ["활용 예시: 검색 엔진의 자동 완성, 전화번호부, 철자 검사"],
			codeExample: `
	// JavaScript에서 트라이 구현
	class TrieNode {
		constructor() {
			this.children = {};
			this.isEndOfWord = false;
		}
	}

	class Trie {
		constructor() {
			this.root = new TrieNode();
		}

		insert(word) {
			let node = this.root;
			for (let char of word) {
				if (!node.children[char]) {
					node.children[char] = new TrieNode();
				}
				node = node.children[char];
			}
			node.isEndOfWord = true;
		}

		search(word) {
			let node = this.root;
			for (let char of word) {
				if (!node.children[char]) return false;
				node = node.children[char];
			}
			return node.isEndOfWord;
		}

		startsWith(prefix) {
			let node = this.root;
			for (let char of prefix) {
				if (!node.children[char]) return false;
				node = node.children[char];
			}
			return true;
		}
	}
			`,
		},
	},
	{
		id: "ds-010",
		categoryId: 1,
		title: "데크(Deque)의 특징과 활용 사례를 설명하세요.",
		description:
			"데크의 구조와 양방향 연산의 장점, 그리고 사용 사례를 설명하세요.",
		keywords: ["데크", "양방향 큐", "삽입", "삭제", "큐"],
		answer: {
			mainPoints: [
				"데크는 양쪽 끝에서 삽입과 삭제가 가능한 큐.",
				"배열 또는 이중 링크드 리스트로 구현 가능.",
				"활용 사례: 슬라이딩 윈도우, 작업 스케줄링, 뒤로 가기/앞으로 가기.",
			],
			explanation: `
데크(Double-ended Queue)는 큐의 일반화된 형태로, 앞과 뒤에서 요소를 추가하거나 제거할 수 있다. 스택과 큐의 기능을 모두 포함하며, 유연한 데이터 처리가 가능하다.

배열로 구현하면 메모리 효율이 높지만, 크기 제한이 있을 수 있다. 이중 링크드 리스트로 구현하면 동적 크기 조정이 가능하지만, 메모리 오버헤드가 있다. 삽입과 삭제는 양쪽 끝에서 O(1)로 수행된다.

데크는 데이터의 양방향 접근이 필요한 경우, 예를 들어 슬라이딩 윈도우 알고리즘이나 브라우저 히스토리 관리에 유용하다.
			`,
			examples: [
				"활용 예시: 최대/최소 유지 슬라이딩 윈도우, 작업 대기열, 양방향 탐색",
			],
			codeExample: `
	// JavaScript에서 데크 구현
	class Deque {
		constructor() {
			this.items = {};
			this.frontIndex = 0;
			this.backIndex = 0;
		}

		addFront(element) {
			this.items[--this.frontIndex] = element;
		}

		addBack(element) {
			this.items[this.backIndex++] = element;
		}

		removeFront() {
			if (this.isEmpty()) return null;
			const item = this.items[this.frontIndex];
			delete this.items[this.frontIndex];
			this.frontIndex++;
			return item;
		}

		removeBack() {
			if (this.isEmpty()) return null;
			const item = this.items[this.backIndex - 1];
			delete this.items[this.backIndex - 1];
			this.backIndex--;
			return item;
		}

		isEmpty() {
			return this.frontIndex === this.backIndex;
		}
	}
			`,
		},
	},
]
