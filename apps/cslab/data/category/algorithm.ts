import { Question } from "../questions"

export const algorithmQuestions: Question[] = [
	{
		id: "alg-001",
		categoryId: 2,
		title: "버블 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description:
			"버블 정렬의 단계별 동작 방식과 최악, 평균, 최선의 시간 복잡도를 설명하세요.",
		keywords: ["버블 정렬", "정렬 알고리즘", "시간 복잡도", "비교 기반 정렬"],
		answer: {
			mainPoints: [
				"버블 정렬은 인접한 두 요소를 비교하여 필요시 교환하는 방식으로 정렬한다.",
				"각 패스에서 가장 큰(또는 작은) 요소가 끝으로 이동한다.",
				"최악 및 평균 시간 복잡도: O(n^2), 최선 시간 복잡도: O(n) (이미 정렬된 경우)",
				"공간 복잡도: O(1) (제자리 정렬)",
			],
			explanation: `
버블 정렬은 가장 간단한 정렬 알고리즘 중 하나로, 다음과 같은 단계로 동작한다:
1. 배열의 첫 번째 요소부터 시작하여 인접한 두 요소를 비교한다.
2. 만약 왼쪽 요소가 오른쪽 요소보다 크면(오름차순의 경우) 두 요소를 교환한다.
3. 이 과정을 배열의 끝까지 반복한다.
4. 한 번의 패스가 끝나면 가장 큰 요소가 배열의 끝에 위치하게 된다.
5. 위 과정을 배열의 크기만큼 반복한다.

버블 정렬은 비교 기반 정렬로, 최악의 경우(역순 정렬)와 평균적인 경우 모두 O(n^2)의 시간 복잡도를 가진다. 그러나 이미 정렬된 배열의 경우 한 번의 패스만으로 정렬 여부를 확인할 수 있어 최선의 경우 O(n)이다. 공간 복잡도는 추가 메모리를 사용하지 않으므로 O(1)이다.
			`,
			examples: [
				"예시: [5, 3, 8, 4, 2] -> 첫 패스 후 [3, 5, 4, 2, 8] -> 두 번째 패스 후 [3, 4, 2, 5, 8] -> ... -> [2, 3, 4, 5, 8]",
			],
			codeExample: `
	function bubbleSort(arr) {
		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			let swapped = false;
			for (let j = 0; j < n - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
					swapped = true;
				}
			}
			if (!swapped) break;
		}
		return arr;
	}
			`,
		},
	},
	{
		id: "alg-002",
		categoryId: 2,
		title: "퀵 정렬의 동작 원리와 피벗 선택 방법을 설명하세요.",
		description:
			"퀵 정렬의 분할 정복 방식과 피벗 선택의 중요성에 대해 설명하세요.",
		keywords: ["퀵 정렬", "분할 정복", "피벗", "정렬 알고리즘"],
		answer: {
			mainPoints: [
				"퀵 정렬은 피벗을 기준으로 배열을 두 부분으로 나누어 정렬하는 분할 정복 알고리즘이다.",
				"피벗 선택은 성능에 큰 영향을 미치며, 이상적으로는 중간값을 선택하는 것이 좋다.",
				"평균 시간 복잡도: O(n log n), 최악 시간 복잡도: O(n^2) (피벗이 항상 최소/최대값일 때)",
				"공간 복잡도: O(log n) (재귀 호출 스택)",
			],
			explanation: `
퀵 정렬은 다음과 같은 단계로 동작한다:
1. 배열에서 피벗을 선택한다(예: 첫 번째 요소, 마지막 요소, 중간값 등).
2. 피벗을 기준으로 배열을 두 부분으로 나눈다: 피벗보다 작은 요소는 왼쪽, 큰 요소는 오른쪽.
3. 왼쪽과 오른쪽 부분 배열에 대해 재귀적으로 퀵 정렬을 수행한다.
4. 모든 부분 배열이 정렬되면 전체 배열이 정렬된다.

피벗 선택은 퀵 정렬의 성능을 결정짓는 중요한 요소다. 최악의 경우(이미 정렬된 배열에서 첫 번째나 마지막 요소를 피벗으로 선택), 시간 복잡도가 O(n^2)로 악화될 수 있다. 이를 방지하기 위해 무작위 피벗 선택이나 중간값을 피벗으로 선택하는 방법이 사용된다.
			`,
			examples: [
				"예시: [5, 3, 8, 4, 2], 피벗 5 -> [3, 4, 2] | [5] | [8] -> 재귀적으로 정렬",
			],
			codeExample: `
	function quickSort(arr) {
		if (arr.length <= 1) return arr;
		const pivot = arr[arr.length - 1];
		const left = [];
		const right = [];
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < pivot) left.push(arr[i]);
			else right.push(arr[i]);
		}
		return [...quickSort(left), pivot, ...quickSort(right)];
	}
			`,
		},
	},
	{
		id: "alg-003",
		categoryId: 2,
		title: "이진 검색의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "이진 검색의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["이진 검색", "정렬된 배열", "시간 복잡도", "분할 정복"],
		answer: {
			mainPoints: [
				"이진 검색은 정렬된 배열에서 중간값을 비교하며 검색 범위를 절반으로 줄여나가는 방식이다.",
				"각 단계에서 검색 범위가 절반으로 줄어든다.",
				"시간 복잡도: O(log n)",
				"공간 복잡도: O(1) (반복적 구현), O(log n) (재귀적 구현)",
			],
			explanation: `
이진 검색은 다음과 같은 단계로 동작한다:
1. 배열의 중간 인덱스를 계산한다.
2. 중간 요소와 타겟 값을 비교한다.
3. 타겟이 중간 요소와 같으면 검색 성공.
4. 타겟이 중간 요소보다 작으면 왼쪽 절반에서 검색을 반복한다.
5. 타겟이 중간 요소보다 크면 오른쪽 절반에서 검색을 반복한다.
6. 검색 범위가 없어질 때까지 반복한다.

이진 검색은 정렬된 배열에서만 사용할 수 있으며, 각 단계에서 검색 범위가 절반으로 줄어들기 때문에 시간 복잡도는 O(log n)이다. 이는 선형 검색의 O(n)보다 훨씬 효율적이다.
			`,
			examples: [
				"예시: [1, 3, 5, 7, 9]에서 7 검색 -> 중간값 5 < 7 -> 오른쪽 [7, 9] -> 중간값 7 == 7 -> 검색 성공",
			],
			codeExample: `
	function binarySearch(arr, target) {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			if (arr[mid] === target) return mid;
			if (arr[mid] < target) left = mid + 1;
			else right = mid - 1;
		}
		return -1;
	}
			`,
		},
	},
	{
		id: "alg-004",
		categoryId: 2,
		title: "동적 프로그래밍의 개념과 활용 사례를 설명하세요.",
		description:
			"동적 프로그래밍의 기본 원리와 피보나치 수열, 배낭 문제 등에서의 활용을 설명하세요.",
		keywords: ["동적 프로그래밍", "메모이제이션", "최적화", "재귀"],
		answer: {
			mainPoints: [
				"동적 프로그래밍은 큰 문제를 작은 하위 문제로 나누어 해결하고, 중복 계산을 피하기 위해 결과를 저장하는 기법이다.",
				"메모이제이션: 이전에 계산한 결과를 저장하여 재사용.",
				"탑다운(재귀)과 바텀업(반복) 방식으로 구현 가능.",
				"활용 사례: 피보나치 수열, 최단 경로(플로이드-워셜), 배낭 문제 등",
			],
			explanation: `
동적 프로그래밍(DP)은 복잡한 문제를 작은 하위 문제로 나누어 해결하는 분할 정복 기법과 유사하지만, 하위 문제의 중복을 피하기 위해 결과를 저장한다. 이는 메모이제이션을 통해 이루어지며, 이를 통해 시간 복잡도를 크게 줄일 수 있다.

예를 들어, 피보나치 수열에서 재귀적으로 구현하면 동일한 하위 문제가 여러 번 계산되지만, DP를 사용하면 각 하위 문제를 한 번만 계산하고 결과를 저장해 재사용한다.

DP는 최적화 문제와 카운팅 문제 등에 널리 사용되며, 대표적으로 배낭 문제, 최장 공통 부분 수열, 행렬 곱셈 최적화 등이 있다.
			`,
			examples: [
				"피보나치 수열: fib(n) = fib(n-1) + fib(n-2), 메모이제이션으로 O(n) 시간에 계산",
				"0/1 배낭 문제: 주어진 무게 내에서 최대 가치를 얻는 조합 찾기",
			],
			codeExample: `
	function fibonacci(n, memo = {}) {
		if (n in memo) return memo[n];
		if (n <= 2) return 1;
		memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
		return memo[n];
	}
			`,
		},
	},
	{
		id: "alg-005",
		categoryId: 2,
		title: "그래프 탐색에서 DFS와 BFS의 차이점을 설명하세요.",
		description:
			"깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)의 동작 방식과 사용 사례를 비교하세요.",
		keywords: ["DFS", "BFS", "그래프 탐색", "스택", "큐"],
		answer: {
			mainPoints: [
				"DFS는 스택을 사용해 한 경로를 끝까지 탐색한 후 다른 경로로 이동한다.",
				"BFS는 큐를 사용해 인접한 모든 노드를 먼저 탐색한다.",
				"DFS는 경로 탐색, 위상 정렬 등에 사용되고, BFS는 최단 경로, 레벨별 탐색에 사용된다.",
				"시간 복잡도: 모두 O(V + E), V는 정점 수, E는 간선 수",
			],
			explanation: `
DFS(깊이 우선 탐색)는 스택(또는 재귀)을 사용하여 현재 경로를 끝까지 탐색한 후 다른 경로로 이동한다. 이는 미로 탐색이나 모든 경로를 탐색해야 하는 경우에 유용하다.

BFS(너비 우선 탐색)는 큐를 사용하여 현재 레벨의 모든 노드를 탐색한 후 다음 레벨로 넘어간다. 이는 최단 경로를 찾거나 레벨별로 탐색해야 하는 경우에 적합하다.

DFS는 메모리 사용이 적을 수 있지만, 무한 루프에 빠질 위험이 있고, BFS는 메모리 사용이 많을 수 있지만, 최단 경로를 보장한다.
			`,
			examples: [
				"DFS 사용 사례: 미로 탐색, 위상 정렬, 강한 연결 요소 찾기",
				"BFS 사용 사례: 최단 경로(가중치 없는 그래프), 레벨별 트리 순회, 네트워크 브로드캐스팅",
			],
			codeExample: `
	function dfs(graph, start, visited = new Set()) {
		visited.add(start);
		console.log(start);
		for (let neighbor of graph[start]) {
			if (!visited.has(neighbor)) {
				dfs(graph, neighbor, visited);
			}
		}
	}

	function bfs(graph, start) {
		const queue = [start];
		const visited = new Set([start]);
		while (queue.length > 0) {
			const node = queue.shift();
			console.log(node);
			for (let neighbor of graph[node]) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push(neighbor);
				}
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-006",
		categoryId: 2,
		title: "다익스트라 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"다익스트라 알고리즘의 단계별 동작 방식과 최단 경로 탐색에서의 활용을 설명하세요.",
		keywords: ["다익스트라", "최단 경로", "그래프", "우선순위 큐"],
		answer: {
			mainPoints: [
				"다익스트라 알고리즘은 가중치가 있는 그래프에서 단일 출발점에서 모든 노드까지의 최단 경로를 찾는다.",
				"우선순위 큐(최소 힙)를 사용하여 현재까지의 최단 거리를 기준으로 노드를 선택한다.",
				"시간 복잡도: O((V + E) log V) (이진 힙 사용 시)",
				"음의 가중치가 없는 그래프에만 적용 가능.",
			],
			explanation: `
다익스트라 알고리즘은 다음과 같은 단계로 동작한다:
1. 출발 노드의 거리를 0, 다른 노드의 거리를 무한대로 초기화한다.
2. 우선순위 큐에 출발 노드를 삽입한다.
3. 큐에서 거리가 가장 작은 노드를 꺼내어 방문한다.
4. 해당 노드의 인접 노드들의 거리를 갱신한다(현재 노드를 거쳐 가는 거리가 더 짧으면 업데이트).
5. 모든 노드를 방문할 때까지 3-4 단계를 반복한다.

다익스트라 알고리즘은 GPS 네비게이션, 네트워크 라우팅, 게임의 경로 찾기 등에 사용된다.
			`,
			examples: [
				"예시: 도로망에서 두 도시 간 최단 경로 찾기",
				"주의: 음의 가중치가 있는 그래프에서는 벨만-포드 알고리즘 사용",
			],
			codeExample: `
	function dijkstra(graph, start) {
		const distances = {};
		const pq = new PriorityQueue();
		for (let node in graph) {
			distances[node] = Infinity;
		}
		distances[start] = 0;
		pq.enqueue(start, 0);
		while (!pq.isEmpty()) {
			const { node, distance } = pq.dequeue();
			if (distance > distances[node]) continue;
			for (let neighbor in graph[node]) {
				const newDistance = distance + graph[node][neighbor];
				if (newDistance < distances[neighbor]) {
					distances[neighbor] = newDistance;
					pq.enqueue(neighbor, newDistance);
				}
			}
		}
		return distances;
	}
			`,
		},
	},
	{
		id: "alg-007",
		categoryId: 2,
		title: "그리디 알고리즘의 개념과 활용 사례를 설명하세요.",
		description:
			"그리디 알고리즘의 기본 원리와 동전 거스름돈, 허프만 코딩 등에서의 활용을 설명하세요.",
		keywords: ["그리디 알고리즘", "최적화", "탐욕법", "부분 최적해"],
		answer: {
			mainPoints: [
				"그리디 알고리즘은 각 단계에서 지역적으로 최적의 선택을 하여 전체 최적해를 구하는 기법이다.",
				"항상 최적해를 보장하지는 않으며, 특정 조건에서만 유효하다.",
				"활용 사례: 동전 거스름돈, 크루스칼 알고리즘, 허프만 코딩 등",
				"시간 복잡도는 문제에 따라 다르지만, 일반적으로 효율적이다.",
			],
			explanation: `
그리디 알고리즘은 매 단계에서 가장 좋아 보이는 선택을 한다. 이는 부분 최적해가 전체 최적해로 이어지는 경우에 유효하다. 예를 들어, 동전 거스름돈 문제에서 가능한 큰 단위의 동전부터 사용하면 최소 동전 개수를 구할 수 있다.

그러나 모든 문제에 적용될 수는 없으며, 최적 부분 구조와 탐욕 선택 속성을 만족해야 한다. 예를 들어, 배낭 문제에서는 그리디가 항상 최적해를 주지 않는다.

그리디 알고리즘은 구현이 간단하고 효율적이지만, 적용 가능성을 신중히 판단해야 한다.
			`,
			examples: [
				"동전 거스름돈: 가능한 큰 단위의 동전부터 사용",
				"허프만 코딩: 빈도수가 높은 문자를 짧은 코드로 인코딩",
				"크루스칼 알고리즘: 최소 비용 신장 트리 구성",
			],
			codeExample: `
	function coinChange(coins, amount) {
		coins.sort((a, b) => b - a);
		let count = 0;
		for (let coin of coins) {
			while (amount >= coin) {
				amount -= coin;
				count++;
			}
		}
		return amount === 0 ? count : -1;
	}
			`,
		},
	},
	{
		id: "alg-008",
		categoryId: 2,
		title: "백트래킹의 개념과 활용 사례를 설명하세요.",
		description:
			"백트래킹의 기본 원리와 N-퀸 문제, 부분 집합 등에서의 활용을 설명하세요.",
		keywords: ["백트래킹", "재귀", "탐색", "가지치기"],
		answer: {
			mainPoints: [
				"백트래킹은 모든 가능한 해를 탐색하면서 유망하지 않은 경로를 가지치기하는 기법이다.",
				"재귀적으로 해를 찾으며, 조건을 만족하지 않으면 이전 단계로 돌아간다.",
				"활용 사례: N-퀸, 스도쿠, 조합 및 순열 생성 등",
				"시간 복잡도는 최악의 경우 지수 시간이지만, 가지치기로 효율화 가능.",
			],
			explanation: `
백트래킹은 가능한 모든 해를 탐색하는 완전 탐색의 한 형태로, 유망하지 않은 경로를 미리 제거하여 탐색 시간을 줄인다. 이는 재귀적으로 구현되며, 각 단계에서 선택을 시도하고, 조건에 맞지 않으면 이전 선택으로 되돌아간다.

N-퀸 문제에서는 체스판에 N개의 퀸을 서로 공격할 수 없게 배치하는 방법을 찾는데, 각 행에 퀸을 놓으며 유망성을 검사한다. 유망하지 않은 배치는 즉시 배제된다.

백트래킹은 조합, 순열, 부분 집합 생성 등 다양한 문제에 적용될 수 있다.
			`,
			examples: [
				"N-퀸: 체스판에 N개의 퀸을 서로 공격하지 않게 배치",
				"부분 집합: 주어진 집합의 모든 부분 집합 생성",
				"스도쿠: 빈 칸을 채워 규칙을 만족시키는 해 찾기",
			],
			codeExample: `
	function solveNQueens(n) {
		const board = Array.from({ length: n }, () => Array(n).fill('.'));
		const solutions = [];

		function isSafe(row, col) {
			for (let i = 0; i < row; i++) {
				if (board[i][col] === 'Q') return false;
				if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
				if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
			}
			return true;
		}

		function placeQueens(row) {
			if (row === n) {
				solutions.push(board.map(row => row.join('')));
				return;
			}
			for (let col = 0; col < n; col++) {
				if (isSafe(row, col)) {
					board[row][col] = 'Q';
					placeQueens(row + 1);
					board[row][col] = '.';
				}
			}
		}

		placeQueens(0);
		return solutions;
	}
			`,
		},
	},
	{
		id: "alg-009",
		categoryId: 2,
		title: "분할 정복 알고리즘의 개념과 활용 사례를 설명하세요.",
		description:
			"분할 정복의 기본 원리와 병합 정렬, 퀵 정렬, 이진 검색 등에서의 활용을 설명하세요.",
		keywords: ["분할 정복", "재귀", "병합 정렬", "퀵 정렬", "이진 검색"],
		answer: {
			mainPoints: [
				"분할 정복은 큰 문제를 작은 하위 문제로 나누어 해결한 후, 결과를 결합하는 기법이다.",
				"재귀적으로 문제를 분할하고, 기저 사례에서 해결한다.",
				"활용 사례: 병합 정렬, 퀵 정렬, 이진 검색, 스트라센 행렬 곱셈 등",
				"시간 복잡도는 문제에 따라 다르지만, 일반적으로 효율적이다.",
			],
			explanation: `
분할 정복 알고리즘은 다음과 같은 단계로 구성된다:
1. 분할(Divide): 문제를 더 작은 하위 문제로 나눈다.
2. 정복(Conquer): 하위 문제를 재귀적으로 해결한다.
3. 결합(Combine): 하위 문제의 해를 결합하여 원래 문제의 해를 구한다.

병합 정렬에서는 배열을 절반으로 나누어 정렬한 후 병합하고, 퀵 정렬에서는 피벗을 기준으로 분할하여 정렬한다. 이진 검색은 정렬된 배열을 절반으로 나누어 검색 범위를 줄인다.

분할 정복은 많은 문제에서 효율적인 해법을 제공하며, 병렬 처리와도 잘 어울린다.
			`,
			examples: [
				"병합 정렬: 배열을 절반으로 나누어 정렬 후 병합",
				"퀵 정렬: 피벗을 기준으로 분할하여 정렬",
				"이진 검색: 중간값을 기준으로 검색 범위 절반으로 줄임",
			],
			codeExample: `
	function mergeSort(arr) {
		if (arr.length <= 1) return arr;
		const mid = Math.floor(arr.length / 2);
		const left = mergeSort(arr.slice(0, mid));
		const right = mergeSort(arr.slice(mid));
		return merge(left, right);
	}

	function merge(left, right) {
		const result = [];
		let i = 0, j = 0;
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) result.push(left[i++]);
			else result.push(right[j++]);
		}
		return result.concat(left.slice(i)).concat(right.slice(j));
	}
			`,
		},
	},
	{
		id: "alg-010",
		categoryId: 2,
		title: "위상 정렬의 개념과 활용 사례를 설명하세요.",
		description:
			"위상 정렬의 동작 원리와 DAG에서의 활용, 작업 스케줄링 등에서의 사용을 설명하세요.",
		keywords: ["위상 정렬", "DAG", "그래프", "의존성", "작업 스케줄링"],
		answer: {
			mainPoints: [
				"위상 정렬은 방향성 비순환 그래프(DAG)에서 노드들을 선형적으로 정렬하는 알고리즘이다.",
				"노드 간의 의존성을 고려하여, 의존하는 노드가 먼저 오도록 정렬한다.",
				"DFS 또는 BFS(칸의 알고리즘)로 구현 가능.",
				"활용 사례: 작업 스케줄링, 의존성 관리, 코스 수강 순서 등",
			],
			explanation: `
위상 정렬은 DAG에서 노드들을 순서대로 나열하여, 모든 간선이 앞에서 뒤로 향하도록 한다. 즉, 노드 A에서 노드 B로 가는 간선이 있다면, A가 B보다 먼저 온다.

DFS를 사용한 위상 정렬은 각 노드를 탐색한 후, 스택에 추가하는 방식으로 구현된다. BFS를 사용한 칸의 알고리즘은 진입 차수가 0인 노드부터 시작하여, 해당 노드를 제거하고 인접 노드의 진입 차수를 감소시키는 방식이다.

위상 정렬은 작업 간 의존성이 있는 경우, 실행 순서를 결정하는 데 유용하다.
			`,
			examples: [
				"작업 스케줄링: 선행 작업이 완료된 후에만 실행 가능한 작업 순서",
				"의존성 관리: 소프트웨어 패키지 설치 순서",
				"코스 수강 순서: 선수 과목을 먼저 수강해야 하는 경우",
			],
			codeExample: `
	function topologicalSort(graph) {
		const indegree = {};
		for (let node in graph) {
			indegree[node] = 0;
		}
		for (let node in graph) {
			for (let neighbor of graph[node]) {
				indegree[neighbor]++;
			}
		}
		const queue = [];
		for (let node in indegree) {
			if (indegree[node] === 0) queue.push(node);
		}
		const result = [];
		while (queue.length > 0) {
			const node = queue.shift();
			result.push(node);
			for (let neighbor of graph[node]) {
				indegree[neighbor]--;
				if (indegree[neighbor] === 0) queue.push(neighbor);
			}
		}
		return result.length === Object.keys(graph).length ? result : [];
	}
			`,
		},
	},
	{
		id: "alg-011",
		categoryId: 2,
		title: "벨만-포드 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"벨만-포드 알고리즘의 단계별 동작 방식과 음의 가중치 그래프에서의 활용을 설명하세요.",
		keywords: ["벨만-포드", "최단 경로", "음의 가중치", "그래프"],
		answer: {
			mainPoints: [
				"벨만-포드 알고리즘은 음의 가중치가 있는 그래프에서 단일 출발점에서 모든 노드까지의 최단 경로를 찾는다.",
				"모든 간선을 V-1번 완화(relaxation)하여 최단 경로를 계산한다.",
				"음의 사이클을 감지할 수 있다.",
				"시간 복잡도: O(VE), V는 정점 수, E는 간선 수",
			],
			explanation: `
벨만-포드 알고리즘은 다음과 같은 단계로 동작한다:
1. 출발 노드의 거리를 0, 다른 노드의 거리를 무한대로 초기화한다.
2. 모든 간선에 대해, 간선 (u, v)의 가중치 w일 때, distances[v] > distances[u] + w이면 distances[v]를 업데이트한다.
3. 위 과정을 V-1번 반복한다.
4. V번째 반복에서 거리가 갱신되면 음의 사이클이 존재함을 의미한다.

벨만-포드 알고리즘은 다익스트라와 달리 음의 가중치를 처리할 수 있지만, 더 느리다. 음의 사이클이 있는 그래프에서는 최단 경로가 정의되지 않으므로, 이를 감지하는 데 유용하다.
			`,
			examples: [
				"예시: 통신 네트워크에서 지연(음의 가중치) 고려한 최단 경로",
				"음의 사이클 감지: 환율 arbitrage 탐지",
			],
			codeExample: `
	function bellmanFord(graph, start) {
		const distances = {};
		for (let node in graph) {
			distances[node] = Infinity;
		}
		distances[start] = 0;
		for (let i = 0; i < Object.keys(graph).length - 1; i++) {
			for (let u in graph) {
				for (let v in graph[u]) {
					const weight = graph[u][v];
					if (distances[u] + weight < distances[v]) {
						distances[v] = distances[u] + weight;
					}
				}
			}
		}
		for (let u in graph) {
			for (let v in graph[u]) {
				const weight = graph[u][v];
				if (distances[u] + weight < distances[v]) {
					throw new Error("Graph contains negative cycle");
				}
			}
		}
		return distances;
	}
			`,
		},
	},
	{
		id: "alg-012",
		categoryId: 2,
		title: "플로이드-워셜 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"플로이드-워셜 알고리즘의 단계별 동작 방식과 모든 쌍 최단 경로 탐색에서의 활용을 설명하세요.",
		keywords: ["플로이드-워셜", "최단 경로", "동적 프로그래밍", "그래프"],
		answer: {
			mainPoints: [
				"플로이드-워셜 알고리즘은 모든 쌍의 노드 간 최단 경로를 찾는 동적 프로그래밍 알고리즘이다.",
				"중간 노드를 통해 경로를 갱신하는 방식으로 동작한다.",
				"시간 복잡도: O(V^3), V는 정점 수",
				"음의 사이클이 없는 그래프에 적용 가능.",
			],
			explanation: `
플로이드-워셜 알고리즘은 다음과 같은 단계로 동작한다:
1. 모든 노드 쌍 (i, j)에 대해, 초기 거리를 설정한다(직접 연결된 경우 간선 가중치, 아니면 무한대).
2. 각 중간 노드 k에 대해, 모든 쌍 (i, j)에 대해 distances[i][j] = min(distances[i][j], distances[i][k] + distances[k][j])로 갱신한다.
3. 이 과정을 모든 k에 대해 수행한다.

플로이드-워셜은 노드 수가 적은 그래프에서 모든 쌍의 최단 경로를 구하는 데 유용하며, 음의 가중치를 처리할 수 있지만 음의 사이클이 있으면 사용할 수 없다.
			`,
			examples: [
				"예시: 도시 간 도로망에서 모든 도시 쌍 간 최단 거리 계산",
				"활용: 네트워크 라우팅 테이블 구성, 게임의 NPC 경로 계획",
			],
			codeExample: `
	function floydWarshall(graph) {
		const dist = {};
		for (let i in graph) {
			dist[i] = {};
			for (let j in graph) {
				if (i === j) dist[i][j] = 0;
				else if (graph[i][j]) dist[i][j] = graph[i][j];
				else dist[i][j] = Infinity;
			}
		}
		for (let k in graph) {
			for (let i in graph) {
				for (let j in graph) {
					if (dist[i][k] + dist[k][j] < dist[i][j]) {
						dist[i][j] = dist[i][k] + dist[k][j];
					}
				}
			}
		}
		return dist;
	}
			`,
		},
	},
	{
		id: "alg-013",
		categoryId: 2,
		title: "크루스칼 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"크루스칼 알고리즘의 단계별 동작 방식과 최소 신장 트리 구성에서의 활용을 설명하세요.",
		keywords: ["크루스칼", "최소 신장 트리", "그리디", "유니온-파인드"],
		answer: {
			mainPoints: [
				"크루스칼 알고리즘은 간선들을 가중치 순으로 정렬하여 사이클을 형성하지 않는 간선들을 선택해 MST를 구성한다.",
				"유니온-파인드 자료구조를 사용하여 사이클 여부를 검사한다.",
				"시간 복잡도: O(E log E), E는 간선 수",
				"활용 사례: 네트워크 설계, 도로 건설, 클러스터링 등",
			],
			explanation: `
크루스칼 알고리즘은 다음과 같은 단계로 동작한다:
1. 모든 간선을 가중치 오름차순으로 정렬한다.
2. 가장 작은 가중치의 간선부터 선택하여, 해당 간선이 사이클을 형성하지 않으면 MST에 추가한다.
3. 사이클 여부는 유니온-파인드의 find 연산으로 두 정점이 같은 집합에 속하는지 확인한다.
4. 모든 정점이 연결될 때까지(간선 수가 V-1이 될 때까지) 반복한다.

크루스칼 알고리즘은 간선이 적은 그래프에서 효율적이며, 그리디 기법을 사용하여 최적해를 보장한다.
			`,
			examples: [
				"예시: 도시들을 연결하는 도로망에서 최소 비용으로 모든 도시를 연결",
				"활용: 전력망 설계, 통신 네트워크 구축",
			],
			codeExample: `
	class UnionFind {
		constructor(size) {
			this.parent = Array.from({ length: size }, (_, i) => i);
		}
		find(x) {
			if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
			return this.parent[x];
		}
		union(x, y) {
			const rootX = this.find(x);
			const rootY = this.find(y);
			if (rootX !== rootY) this.parent[rootX] = rootY;
		}
	}

	function kruskal(graph) {
		const edges = [];
		for (let u in graph) {
			for (let v in graph[u]) {
				edges.push([u, v, graph[u][v]]);
			}
		}
		edges.sort((a, b) => a[2] - b[2]);
		const uf = new UnionFind(Object.keys(graph).length);
		const mst = [];
		for (let edge of edges) {
			const [u, v, weight] = edge;
			if (uf.find(u) !== uf.find(v)) {
				uf.union(u, v);
				mst.push(edge);
			}
		}
		return mst;
	}
			`,
		},
	},
	{
		id: "alg-014",
		categoryId: 2,
		title: "프림 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"프림 알고리즘의 단계별 동작 방식과 최소 신장 트리 구성에서의 활용을 설명하세요.",
		keywords: ["프림", "최소 신장 트리", "그리디", "우선순위 큐"],
		answer: {
			mainPoints: [
				"프림 알고리즘은 임의의 정점에서 시작하여 인접한 간선 중 최소 가중치 간선을 선택해 MST를 확장한다.",
				"우선순위 큐를 사용하여 현재 MST에 인접한 간선 중 최소 가중치를 선택한다.",
				"시간 복잡도: O(E log V), E는 간선 수, V는 정점 수",
				"활용 사례: 네트워크 설계, 도로 건설, 클러스터링 등",
			],
			explanation: `
프림 알고리즘은 다음과 같은 단계로 동작한다:
1. 임의의 시작 정점을 선택하고, MST 집합에 추가한다.
2. MST 집합에 인접한 간선들 중 최소 가중치 간선을 선택한다.
3. 해당 간선의 반대쪽 정점이 MST에 없으면 MST에 추가하고, 해당 정점의 인접 간선들을 고려한다.
4. 모든 정점이 MST에 포함될 때까지 반복한다.

프림 알고리즘은 간선이 많은 그래프에서 효율적이며, 다익스트라 알고리즘과 유사한 방식으로 동작한다.
			`,
			examples: [
				"예시: 도시들을 연결하는 도로망에서 최소 비용으로 모든 도시를 연결",
				"활용: 전력망 설계, 통신 네트워크 구축",
			],
			codeExample: `
	function prim(graph, start) {
		const mst = [];
		const visited = new Set([start]);
		const pq = new PriorityQueue();
		for (let neighbor in graph[start]) {
			pq.enqueue([start, neighbor, graph[start][neighbor]], graph[start][neighbor]);
		}
		while (!pq.isEmpty()) {
			const { edge } = pq.dequeue();
			const [u, v, weight] = edge;
			if (!visited.has(v)) {
				visited.add(v);
				mst.push(edge);
				for (let neighbor in graph[v]) {
					if (!visited.has(neighbor)) {
						pq.enqueue([v, neighbor, graph[v][neighbor]], graph[v][neighbor]);
					}
				}
			}
		}
		return mst;
	}
			`,
		},
	},
	{
		id: "alg-015",
		categoryId: 2,
		title: "해시 함수의 역할과 충돌 해결 방법을 설명하세요.",
		description:
			"해시 함수의 목적과 해시 테이블에서의 충돌 처리 방법을 설명하세요.",
		keywords: ["해시 함수", "해시 테이블", "충돌", "체이닝", "오픈 어드레싱"],
		answer: {
			mainPoints: [
				"해시 함수는 임의의 데이터를 고정된 크기의 값으로 매핑한다.",
				"해시 테이블에서 키를 해시 값으로 변환하여 데이터 저장 위치를 결정한다.",
				"충돌: 서로 다른 키가 같은 해시 값을 가질 때 발생.",
				"충돌 해결: 체이닝(링크드 리스트), 오픈 어드레싱(선형 탐사, 이중 해싱 등)",
			],
			explanation: `
해시 함수는 데이터를 고유한 해시 코드로 변환하여 해시 테이블의 인덱스로 사용한다. 좋은 해시 함수는 충돌을 최소화하고, 데이터가 해시 테이블에 고르게 분포하도록 한다.

충돌은 피할 수 없으므로, 체이닝은 동일 해시 값을 가진 키들을 링크드 리스트로 연결하여 저장하고, 오픈 어드레싱은 빈 슬롯을 찾아 데이터를 저장한다. 체이닝은 메모리 사용이 유연하지만 캐시 효율이 낮을 수 있고, 오픈 어드레싱은 메모리를 절약하지만 클러스터링 문제가 발생할 수 있다.
			`,
			examples: [
				"체이닝: 해시 충돌 시 링크드 리스트로 연결",
				"오픈 어드레싱: 선형 탐사로 다음 빈 슬롯에 저장",
			],
			codeExample: `
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
		id: "alg-016",
		categoryId: 2,
		title: "KMP 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"KMP 알고리즘의 부분 일치 테이블 생성과 문자열 매칭에서의 활용을 설명하세요.",
		keywords: ["KMP", "문자열 매칭", "부분 일치 테이블", "패턴 검색"],
		answer: {
			mainPoints: [
				"KMP 알고리즘은 패턴의 부분 일치 정보를 활용하여 효율적인 문자열 매칭을 수행한다.",
				"부분 일치 테이블(π 배열)을 미리 계산하여 불필요한 비교를 피한다.",
				"시간 복잡도: O(n + m), n은 텍스트 길이, m은 패턴 길이",
				"활용 사례: 텍스트 에디터의 검색 기능, DNA 서열 분석 등",
			],
			explanation: `
KMP(Knuth-Morris-Pratt) 알고리즘은 다음과 같은 단계로 동작한다:
1. 패턴에 대한 부분 일치 테이블(π 배열)을 생성한다. π[i]는 패턴의 0부터 i까지의 접두사와 접미사가 일치하는 최대 길이를 나타낸다.
2. 텍스트와 패턴을 비교하면서, 불일치가 발생하면 π 배열을 사용하여 패턴을 적절히 이동시킨다.
3. 이를 통해 텍스트를 한 번만 순회하며 패턴을 찾을 수 있다.

KMP는 선형 시간에 문자열 매칭을 수행하여, 나이브한 방법(O(nm))보다 훨씬 효율적이다.
			`,
			examples: [
				"예시: 텍스트 'ABABDABACDABABCABAB'에서 패턴 'ABABCABAB' 찾기",
				"부분 일치 테이블: 패턴 'ABABCABAB'에 대해 π = [0,0,1,2,0,1,2,3,4]",
			],
			codeExample: `
	function computeLPSArray(pattern) {
		const lps = Array(pattern.length).fill(0);
		let length = 0;
		let i = 1;
		while (i < pattern.length) {
			if (pattern[i] === pattern[length]) {
				length++;
				lps[i] = length;
				i++;
			} else {
				if (length !== 0) {
					length = lps[length - 1];
				} else {
					lps[i] = 0;
					i++;
				}
			}
		}
		return lps;
	}

	function KMPSearch(text, pattern) {
		const M = pattern.length;
		const N = text.length;
		const lps = computeLPSArray(pattern);
		let i = 0;
		let j = 0;
		while (i < N) {
			if (pattern[j] === text[i]) {
				j++;
				i++;
			}
			if (j === M) {
				console.log("Found pattern at index " + (i - j));
				j = lps[j - 1];
			} else if (i < N && pattern[j] !== text[i]) {
				if (j !== 0) {
					j = lps[j - 1];
				} else {
					i++;
				}
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-017",
		categoryId: 2,
		title: "라빈-카프 알고리즘의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"라빈-카프 알고리즘의 해시 기반 문자열 매칭 방식과 활용 사례를 설명하세요.",
		keywords: ["라빈-카프", "문자열 매칭", "해시", "롤링 해시"],
		answer: {
			mainPoints: [
				"라빈-카프 알고리즘은 해시 함수를 사용하여 패턴과 텍스트의 부분 문자열을 비교한다.",
				"롤링 해시를 사용하여 해시 값을 효율적으로 계산한다.",
				"평균 시간 복잡도: O(n + m), 최악 시간 복잡도: O(nm)",
				"활용 사례: 다중 패턴 검색, 플래그먼트 탐지 등",
			],
			explanation: `
라빈-카프 알고리즘은 다음과 같은 단계로 동작한다:
1. 패턴의 해시 값을 계산한다.
2. 텍스트의 첫 m글자(패턴 길이)의 해시 값을 계산한다.
3. 해시 값이 일치하면 실제로 문자열을 비교한다.
4. 불일치 시, 다음 위치의 해시 값을 롤링 해시로 빠르게 계산하여 비교를 반복한다.

롤링 해시는 이전 해시 값을 사용하여 다음 해시 값을 O(1) 시간에 계산할 수 있게 해준다. 해시 충돌로 인해 최악의 경우 O(nm)이 될 수 있지만, 좋은 해시 함수를 사용하면 평균적으로 O(n + m)에 가까운 성능을 보인다.
			`,
			examples: [
				"예시: 텍스트 '31415926535'에서 패턴 '159' 찾기",
				"롤링 해시: 슬라이딩 윈도우 방식으로 해시 값 갱신",
			],
			codeExample: `
	function rabinKarp(text, pattern) {
		const M = pattern.length;
		const N = text.length;
		const p = 31;
		const mod = 1e9 + 9;
		let patternHash = 0;
		let textHash = 0;
		let h = 1;

		for (let i = 0; i < M - 1; i++) {
			h = (h * p) % mod;
		}

		for (let i = 0; i < M; i++) {
			patternHash = (patternHash * p + pattern.charCodeAt(i)) % mod;
			textHash = (textHash * p + text.charCodeAt(i)) % mod;
		}

		for (let i = 0; i <= N - M; i++) {
			if (patternHash === textHash) {
				if (text.slice(i, i + M) === pattern) {
					console.log("Found pattern at index " + i);
				}
			}
			if (i < N - M) {
				textHash = (textHash - text.charCodeAt(i) * h) % mod;
				textHash = (textHash * p + text.charCodeAt(i + M)) % mod;
				if (textHash < 0) textHash += mod;
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-018",
		categoryId: 2,
		title: "유니온-파인드 자료구조의 동작 원리와 활용 사례를 설명하세요.",
		description:
			"유니온-파인드의 find와 union 연산, 그리고 크루스칼 알고리즘 등에서의 활용을 설명하세요.",
		keywords: ["유니온-파인드", "서로소 집합", "경로 압축", "랭크"],
		answer: {
			mainPoints: [
				"유니온-파인드는 서로소 집합을 관리하는 자료구조로, find와 union 연산을 지원한다.",
				"find: 두 원소가 같은 집합에 속하는지 확인.",
				"union: 두 집합을 합친다.",
				"경로 압축과 랭크를 통한 최적화로 거의 O(1)에 가까운 성능을 보인다.",
				"활용 사례: 크루스칼 알고리즘, 사이클 detection, 친구 관계 관리 등",
			],
			explanation: `
유니온-파인드는 트리 구조로 구현되며, 각 집합은 루트 노드를 가진다. find 연산은 주어진 노드의 루트를 찾고, union 연산은 두 루트를 연결한다.

경로 압축은 find 연산 시 노드를 직접 루트에 연결하여 트리를 평평하게 만들고, 랭크(트리 높이)를 사용하여 union 시 더 작은 트리를 큰 트리에 붙여 균형을 유지한다.

이러한 최적화를 통해 amortized time complexity가 매우 낮아져, 사실상 상수 시간에 가깝다.
			`,
			examples: [
				"크루스칼 알고리즘: 간선 추가 시 사이클 여부 확인",
				"친구 관계: 두 사람이 같은 친구 그룹에 속하는지 확인",
			],
			codeExample: `
	class UnionFind {
		constructor(size) {
			this.parent = Array.from({ length: size }, (_, i) => i);
			this.rank = Array(size).fill(0);
		}

		find(x) {
			if (this.parent[x] !== x) {
				this.parent[x] = this.find(this.parent[x]);
			}
			return this.parent[x];
		}

		union(x, y) {
			const rootX = this.find(x);
			const rootY = this.find(y);
			if (rootX !== rootY) {
				if (this.rank[rootX] > this.rank[rootY]) {
					this.parent[rootY] = rootX;
				} else if (this.rank[rootX] < this.rank[rootY]) {
					this.parent[rootX] = rootY;
				} else {
					this.parent[rootY] = rootX;
					this.rank[rootX]++;
				}
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-019",
		categoryId: 2,
		title: "세그먼트 트리의 구조와 활용 사례를 설명하세요.",
		description:
			"세그먼트 트리의 구성 방식과 구간 쿼리, 업데이트 연산에서의 활용을 설명하세요.",
		keywords: ["세그먼트 트리", "구간 쿼리", "업데이트", "이진 트리"],
		answer: {
			mainPoints: [
				"세그먼트 트리는 배열의 구간에 대한 쿼리를 효율적으로 처리하는 이진 트리 자료구조다.",
				"리프 노드는 배열의 각 요소를, 내부 노드는 해당 구간의 정보를 저장한다.",
				"구간 합, 구간 최솟값/최댓값 등을 O(log n) 시간에 계산할 수 있다.",
				"업데이트 연산도 O(log n) 시간에 수행된다.",
			],
			explanation: `
세그먼트 트리는 완전 이진 트리 형태로, 리프 노드가 배열의 각 요소를 나타내고, 내부 노드는 자식 노드들의 구간을 합친 구간의 정보를 저장한다. 예를 들어, 구간 합 세그먼트 트리에서는 내부 노드가 자식 노드들의 합을 저장한다.

구간 쿼리는 트리를 탐색하며 관련된 노드들의 값을 합치는 방식으로 이루어지며, 업데이트는 해당 리프 노드를 갱신하고 관련된 내부 노드들을 갱신한다.

세그먼트 트리는 대규모 데이터의 구간 쿼리와 업데이트가 빈번한 경우에 유용하다.
			`,
			examples: [
				"구간 합 쿼리: 배열의 특정 구간의 합을 빠르게 계산",
				"구간 최솟값/최댓값: 배열의 특정 구간에서 최소/최대값 찾기",
				"활용: 주식 가격 분석, 이미지 처리 등",
			],
			codeExample: `
	class SegmentTree {
		constructor(arr) {
			this.n = arr.length;
			this.tree = Array(4 * this.n).fill(0);
			this.build(arr, 0, 0, this.n - 1);
		}

		build(arr, node, start, end) {
			if (start === end) {
				this.tree[node] = arr[start];
			} else {
				const mid = Math.floor((start + end) / 2);
				this.build(arr, 2 * node + 1, start, mid);
				this.build(arr, 2 * node + 2, mid + 1, end);
				this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
			}
		}

		query(left, right, node = 0, start = 0, end = this.n - 1) {
			if (right < start || left > end) return 0;
			if (left <= start && end <= right) return this.tree[node];
			const mid = Math.floor((start + end) / 2);
			const leftSum = this.query(left, right, 2 * node + 1, start, mid);
			const rightSum = this.query(left, right, 2 * node + 2, mid + 1, end);
			return leftSum + rightSum;
		}

		update(index, value, node = 0, start = 0, end = this.n - 1) {
			if (start === end) {
				this.tree[node] = value;
			} else {
				const mid = Math.floor((start + end) / 2);
				if (index <= mid) {
					this.update(index, value, 2 * node + 1, start, mid);
				} else {
					this.update(index, value, 2 * node + 2, mid + 1, end);
				}
				this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-020",
		categoryId: 2,
		title: "Fenwick Tree(이진 인덱스 트리)의 구조와 활용 사례를 설명하세요.",
		description:
			"Fenwick Tree의 구성 방식과 누적 합, 구간 쿼리에서의 활용을 설명하세요.",
		keywords: ["Fenwick Tree", "이진 인덱스 트리", "누적 합", "구간 쿼리"],
		answer: {
			mainPoints: [
				"Fenwick Tree는 배열의 누적 합을 효율적으로 계산하고 업데이트하는 자료구조다.",
				"이진 인덱스를 사용하여 특정 비트 연산으로 빠르게 쿼리와 업데이트를 수행한다.",
				"구간 합 쿼리와 업데이트 모두 O(log n) 시간에 수행된다.",
				"세그먼트 트리보다 메모리 사용이 적고 구현이 간단하다.",
			],
			explanation: `
Fenwick Tree는 배열의 각 원소를 이진 인덱스에 따라 트리 형태로 관리한다. 각 노드는 특정 구간의 합을 저장하며, 이진 인덱스의 LSB(Least Significant Bit)를 사용하여 부모 노드를 찾는다.

누적 합 쿼리는 특정 인덱스까지의 합을 계산하며, 업데이트는 해당 인덱스와 영향을 받는 노드들의 값을 갱신한다. 이 모든 연산은 O(log n) 시간에 이루어진다.

Fenwick Tree는 세그먼트 트리와 유사한 기능을 제공하지만, 더 적은 메모리를 사용하고 구현이 간단하여 자주 사용된다.
			`,
			examples: [
				"누적 합 쿼리: 1부터 i까지의 합을 빠르게 계산",
				"구간 합 쿼리: i부터 j까지의 합을 누적 합의 차이로 계산",
				"활용: 주식 거래량 분석, 빈도수 계산 등",
			],
			codeExample: `
	class FenwickTree {
		constructor(size) {
			this.tree = Array(size + 1).fill(0);
		}

		update(index, delta) {
			while (index < this.tree.length) {
				this.tree[index] += delta;
				index += index & -index;
			}
		}

		query(index) {
			let sum = 0;
			while (index > 0) {
				sum += this.tree[index];
				index -= index & -index;
			}
			return sum;
		}

		rangeQuery(left, right) {
			return this.query(right) - this.query(left - 1);
		}
	}
			`,
		},
	},
	{
		id: "alg-021",
		categoryId: 2,
		title: "삽입 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "삽입 정렬의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["삽입 정렬", "정렬 알고리즘", "시간 복잡도", "안정 정렬"],
		answer: {
			mainPoints: [
				"삽입 정렬은 배열을 정렬된 부분과 정렬되지 않은 부분으로 나누어 요소를 삽입하며 정렬한다.",
				"각 요소를 적절한 위치에 삽입하며 정렬된 부분을 확장한다.",
				"최악 및 평균 시간 복잡도: O(n^2), 최선 시간 복잡도: O(n)",
				"공간 복잡도: O(1) (제자리 정렬)",
			],
			explanation: `
삽입 정렬은 다음과 같은 단계로 동작한다:
1. 배열의 첫 번째 요소를 정렬된 부분으로 간주한다.
2. 다음 요소를 정렬된 부분에 삽입할 위치를 찾아 삽입한다.
3. 이 과정을 배열의 모든 요소에 대해 반복한다.

삽입 정렬은 작은 데이터셋이나 거의 정렬된 배열에서 효율적이며, 안정 정렬의 특성을 가진다. 최악의 경우 O(n^2)이지만, 이미 정렬된 경우 O(n)으로 동작한다.
			`,
			examples: [
				"예시: [5, 2, 9, 1, 5] -> [2, 5, 9, 1, 5] -> [2, 5, 9, 1, 5] -> [1, 2, 5, 9, 5] -> [1, 2, 5, 5, 9]",
			],
			codeExample: `
	function insertionSort(arr) {
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i];
			let j = i - 1;
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = key;
		}
		return arr;
	}
			`,
		},
	},
	{
		id: "alg-022",
		categoryId: 2,
		title: "선택 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "선택 정렬의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["선택 정렬", "정렬 알고리즘", "시간 복잡도", "비교 기반 정렬"],
		answer: {
			mainPoints: [
				"선택 정렬은 각 패스에서 최소값(또는 최대값)을 찾아 정렬된 위치에 배치한다.",
				"정렬되지 않은 부분에서 최소값을 선택해 앞쪽에 추가한다.",
				"시간 복잡도: O(n^2) (최선, 평균, 최악 모두)",
				"공간 복잡도: O(1) (제자리 정렬)",
			],
			explanation: `
선택 정렬은 다음과 같은 단계로 동작한다:
1. 배열에서 최소값을 찾는다.
2. 최소값을 배열의 첫 번째 위치에 배치한다.
3. 남은 부분에서 다시 최소값을 찾아 다음 위치에 배치한다.
4. 이 과정을 반복한다.

선택 정렬은 비교 횟수가 항상 n(n-1)/2로 고정되어 있어 입력에 관계없이 O(n^2)의 시간 복잡도를 가진다. 단순하지만 비효율적이다.
			`,
			examples: [
				"예시: [64, 34, 25, 12, 22] -> [12, 34, 25, 64, 22] -> [12, 22, 25, 64, 34] -> ... -> [12, 22, 25, 34, 64]",
			],
			codeExample: `
	function selectionSort(arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			let minIdx = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[minIdx]) minIdx = j;
			}
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
		}
		return arr;
	}
			`,
		},
	},
	{
		id: "alg-023",
		categoryId: 2,
		title: "힙 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "힙 정렬의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["힙 정렬", "정렬 알고리즘", "최대 힙", "시간 복잡도"],
		answer: {
			mainPoints: [
				"힙 정렬은 최대 힙을 구성한 후, 루트를 제거하며 정렬한다.",
				"배열을 힙으로 변환한 후, 요소를 하나씩 제거하여 정렬한다.",
				"시간 복잡도: O(n log n) (최선, 평균, 최악 모두)",
				"공간 복잡도: O(1) (제자리 정렬)",
			],
			explanation: `
힙 정렬은 다음과 같은 단계로 동작한다:
1. 배열을 최대 힙으로 변환한다.
2. 힙의 루트(최대값)를 배열의 끝으로 이동하고 힙 크기를 줄인다.
3. 힙 속성을 유지하기 위해 heapify를 수행한다.
4. 이 과정을 반복한다.

힙 정렬은 힙 자료구조를 활용하여 안정적인 O(n log n) 성능을 보장한다. 추가 메모리를 사용하지 않아 효율적이다.
			`,
			examples: [
				"예시: [4, 10, 3, 5, 1] -> 최대 힙 [10, 5, 3, 4, 1] -> [5, 4, 3, 1, 10] -> ... -> [1, 3, 4, 5, 10]",
			],
			codeExample: `
	function heapSort(arr) {
		const n = arr.length;
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			heapify(arr, n, i);
		}
		for (let i = n - 1; i > 0; i--) {
			[arr[0], arr[i]] = [arr[i], arr[0]];
			heapify(arr, i, 0);
		}
		return arr;
	}

	function heapify(arr, n, i) {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;
		if (left < n && arr[left] > arr[largest]) largest = left;
		if (right < n && arr[right] > arr[largest]) largest = right;
		if (largest !== i) {
			[arr[i], arr[largest]] = [arr[largest], arr[i]];
			heapify(arr, n, largest);
		}
	}
			`,
		},
	},
	{
		id: "alg-024",
		categoryId: 2,
		title: "쉘 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "쉘 정렬의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["쉘 정렬", "정렬 알고리즘", "간격", "시간 복잡도"],
		answer: {
			mainPoints: [
				"쉘 정렬은 삽입 정렬을 개선한 알고리즘으로, 간격을 두고 요소를 정렬한다.",
				"간격을 점차 줄이며 최종적으로 삽입 정렬을 수행한다.",
				"시간 복잡도: O(n^1.3) ~ O(n^2) (간격 시퀀스에 따라 다름)",
				"공간 복잡도: O(1)",
			],
			explanation: `
쉘 정렬은 다음과 같은 단계로 동작한다:
1. 초기 간격(gap)을 설정한다(예: n/2).
2. 간격만큼 떨어진 요소들끼리 삽입 정렬을 수행한다.
3. 간격을 줄이고(예: gap/2), 다시 삽입 정렬을 반복한다.
4. 간격이 1이 될 때까지 반복한다.

쉘 정렬은 삽입 정렬의 단점을 보완하여 더 빠른 성능을 제공하며, 간격 시퀀스에 따라 성능이 달라진다.
			`,
			examples: [
				"예시: [8, 9, 1, 7, 2, 3, 5, 4, 6] -> 간격 4로 정렬 -> 간격 2로 정렬 -> 간격 1로 정렬",
			],
			codeExample: `
	function shellSort(arr) {
		let n = arr.length;
		for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
			for (let i = gap; i < n; i++) {
				let temp = arr[i];
				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
					arr[j] = arr[j - gap];
				}
				arr[j] = temp;
			}
		}
		return arr;
	}
			`,
		},
	},
	{
		id: "alg-025",
		categoryId: 2,
		title: "병합 정렬의 동작 원리와 시간 복잡도를 설명하세요.",
		description: "병합 정렬의 단계별 동작 방식과 시간 복잡도를 설명하세요.",
		keywords: ["병합 정렬", "분할 정복", "정렬 알고리즘", "시간 복잡도"],
		answer: {
			mainPoints: [
				"병합 정렬은 배열을 절반으로 나누어 정렬한 후 병합하는 분할 정복 알고리즘이다.",
				"재귀적으로 배열을 분할하고, 병합 시 정렬을 수행한다.",
				"시간 복잡도: O(n log n) (최선, 평균, 최악 모두)",
				"공간 복잡도: O(n)",
			],
			explanation: `
병합 정렬은 다음과 같은 단계로 동작한다:
1. 배열을 절반으로 나눈다.
2. 각 부분 배열을 재귀적으로 정렬한다.
3. 정렬된 부분 배열을 병합하며 전체 배열을 정렬한다.

병합 정렬은 안정적이며, 입력에 관계없이 항상 O(n log n)의 성능을 보장한다. 단, 추가 메모리가 필요하다.
			`,
			examples: [
				"예시: [38, 27, 43, 3, 9, 82, 10] -> [38, 27, 43, 3]와 [9, 82, 10] -> 병합 -> [3, 9, 10, 27, 38, 43, 82]",
			],
			codeExample: `
	function mergeSort(arr) {
		if (arr.length <= 1) return arr;
		const mid = Math.floor(arr.length / 2);
		const left = mergeSort(arr.slice(0, mid));
		const right = mergeSort(arr.slice(mid));
		return merge(left, right);
	}

	function merge(left, right) {
		const result = [];
		let i = 0, j = 0;
		while (i < left.length && j < right.length) {
			if (left[i] <= right[j]) result.push(left[i++]);
			else result.push(right[j++]);
		}
		return result.concat(left.slice(i)).concat(right.slice(j));
	}
			`,
		},
	},
	{
		id: "alg-026",
		categoryId: 2,
		title: "최대 힙과 최소 힙의 차이점을 설명하세요.",
		description: "최대 힙과 최소 힙의 구조와 동작 방식을 비교하세요.",
		keywords: ["최대 힙", "최소 힙", "자료구조", "힙 속성"],
		answer: {
			mainPoints: [
				"최대 힙은 부모 노드가 자식 노드보다 항상 크거나 같은 완전 이진 트리이다.",
				"최소 힙은 부모 노드가 자식 노드보다 항상 작거나 같은 완전 이진 트리이다.",
				"최대 힙은 최대값을 빠르게 찾고, 최소 힙은 최소값을 빠르게 찾는다.",
				"시간 복잡도: 삽입과 삭제 모두 O(log n)",
			],
			explanation: `
최대 힙과 최소 힙은 우선순위 큐를 구현하는 데 사용되며, 다음과 같은 차이가 있다:
- 최대 힙: 루트 노드가 최대값이며, 각 부모는 자식보다 크거나 같다.
- 최소 힙: 루트 노드가 최소값이며, 각 부모는 자식보다 작거나 같다.

삽입 시 힙 속성을 유지하기 위해 상향 조정(heapify up), 삭제 시 하향 조정(heapify down)이 필요하다.
			`,
			examples: [
				"최대 힙 예시: [16, 14, 10, 8, 7, 9, 3]",
				"최소 힙 예시: [1, 3, 5, 4, 6, 10, 7]",
			],
			codeExample: `
	class MaxHeap {
		constructor() {
			this.heap = [];
		}
		insert(value) {
			this.heap.push(value);
			this.heapifyUp(this.heap.length - 1);
		}
		heapifyUp(index) {
			while (index > 0) {
				const parent = Math.floor((index - 1) / 2);
				if (this.heap[parent] < this.heap[index]) {
					[this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
					index = parent;
				} else break;
			}
		}
	}
			`,
		},
	},
	{
		id: "alg-027",
		categoryId: 2,
		title: "AVL 트리의 구조와 균형 조정 방법을 설명하세요.",
		description: "AVL 트리의 정의와 회전을 통한 균형 조정 과정을 설명하세요.",
		keywords: ["AVL 트리", "이진 탐색 트리", "균형", "회전"],
		answer: {
			mainPoints: [
				"AVL 트리는 각 노드의 좌우 서브트리 높이 차이가 1 이하인 이진 탐색 트리이다.",
				"삽입 또는 삭제 후 균형이 깨지면 회전을 통해 재조정한다.",
				"회전 유형: LL, RR, LR, RL",
				"시간 복잡도: 삽입, 삭제, 검색 모두 O(log n)",
			],
			explanation: `
AVL 트리는 자가 균형 이진 탐색 트리로, 삽입/삭제 시 균형 인수(BF)를 확인한다. BF가 -1, 0, 1을 벗어나면 다음 회전을 수행한다:
- LL 회전: 왼쪽 서브트리가 너무 깊을 때 오른쪽으로 회전.
- RR 회전: 오른쪽 서브트리가 너무 깊을 때 왼쪽으로 회전.
- LR, RL 회전: 복합적인 불균형을 해결.

균형을 유지함으로써 검색 효율성을 보장한다.
			`,
			examples: [
				"예시: [10, 20, 30] 삽입 -> RR 불균형 -> [20, 10, 30]으로 회전",
			],
			codeExample: `
	class AVLNode {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
			this.height = 1;
		}
	}

	function getHeight(node) {
		return node ? node.height : 0;
	}

	function rotateRight(y) {
		const x = y.left;
		const T2 = x.right;
		x.right = y;
		y.left = T2;
		y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
		x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
		return x;
	}
			`,
		},
	},
	{
		id: "alg-028",
		categoryId: 2,
		title: "레드-블랙 트리의 속성과 삽입 과정을 설명하세요.",
		description:
			"레드-블랙 트리의 기본 속성과 삽입 시 균형 조정 방법을 설명하세요.",
		keywords: ["레드-블랙 트리", "이진 탐색 트리", "균형", "색상"],
		answer: {
			mainPoints: [
				"레드-블랙 트리는 노드에 색상(빨강/검정)을 추가한 자가 균형 이진 탐색 트리이다.",
				"속성: 루트는 검정, 빨강 노드는 연속 불가, 모든 경로의 검정 노드 수 동일.",
				"삽입 후 속성을 위반하면 회전과 색상 변경으로 조정한다.",
				"시간 복잡도: O(log n)",
			],
			explanation: `
레드-블랙 트리는 다음 속성을 유지한다:
1. 각 노드는 빨강 또는 검정이다.
2. 루트는 검정이다.
3. 모든 잎(nil)은 검정이다.
4. 빨강 노드의 자식은 검정이다.
5. 모든 경로에서 검정 노드 수가 동일하다.

삽입 시 새 노드는 빨강으로 추가되며, 속성을 위반하면 회전과 색상 변경으로 균형을 맞춘다.
			`,
			examples: [
				"예시: [10, 18, 7] 삽입 -> 빨강 연속 위반 -> 회전 및 색상 조정",
			],
			codeExample: `
	class RBNode {
		constructor(value) {
			this.value = value;
			this.color = "red";
			this.left = null;
			this.right = null;
			this.parent = null;
		}
	}

	function insertRBTree(root, value) {
		// 기본 이진 탐색 트리 삽입 후 fixup 호출
	}
			`,
		},
	},
	{
		id: "alg-029",
		categoryId: 2,
		title: "B-트리의 구조와 활용 사례를 설명하세요.",
		description: "B-트리의 정의와 데이터베이스에서의 활용을 설명하세요.",
		keywords: ["B-트리", "균형 트리", "데이터베이스", "디스크 I/O"],
		answer: {
			mainPoints: [
				"B-트리는 여러 자식을 가질 수 있는 균형 트리로, 높이를 최소화한다.",
				"각 노드는 최소/최대 키 개수를 유지하며 균형을 맞춘다.",
				"시간 복잡도: 검색, 삽입, 삭제 모두 O(log n)",
				"활용 사례: 데이터베이스 인덱스, 파일 시스템",
			],
			explanation: `
B-트리는 다음과 같은 속성을 가진다:
- 모든 리프 노드는 동일한 깊이를 가진다.
- 각 노드는 최소 t-1개, 최대 2t-1개의 키를 가진다(t는 트리의 차수).
- 노드의 키는 정렬되어 있다.

디스크 I/O를 줄이기 위해 설계되었으며, 대량 데이터 관리에 적합하다.
			`,
			examples: ["예시: 차수 3인 B-트리에 [1, 3, 5, 7] 삽입 -> 균형 유지"],
			codeExample: `
	class BTreeNode {
		constructor(leaf = false) {
			this.leaf = leaf;
			this.keys = [];
			this.children = [];
		}
	}
			`,
		},
	},
	{
		id: "alg-030",
		categoryId: 2,
		title: "트라이(Trie)의 구조와 활용 사례를 설명하세요.",
		description: "트라이의 정의와 문자열 검색에서의 활용을 설명하세요.",
		keywords: ["트라이", "문자열 검색", "접두사 트리", "자료구조"],
		answer: {
			mainPoints: [
				"트라이는 문자열을 저장하고 검색하기 위한 트리 형태의 자료구조이다.",
				"각 노드는 문자 하나를 나타내며, 공통 접두사를 공유한다.",
				"시간 복잡도: 삽입과 검색 O(m), m은 문자열 길이",
				"활용 사례: 자동완성, 사전 구현",
			],
			explanation: `
트라이는 루트에서 시작하여 각 노드가 문자를 나타내며, 경로가 단어를 형성한다. 단어의 끝을 표시하기 위해 종단 플래그를 사용한다.

문자열 검색과 접두사 매칭에 효율적이며, 메모리를 많이 사용할 수 있다.
			`,
			examples: ["예시: ['cat', 'car'] 삽입 -> c -> a -> t/r"],
			codeExample: `
	class TrieNode {
		constructor() {
			this.children = {};
			this.isEnd = false;
		}
	}

	class Trie {
		constructor() {
			this.root = new TrieNode();
		}
		insert(word) {
			let node = this.root;
			for (let char of word) {
				if (!node.children[char]) node.children[char] = new TrieNode();
				node = node.children[char];
			}
			node.isEnd = true;
		}
	}
			`,
		},
	},
	{
		id: "alg-031",
		categoryId: 2,
		title: "최장 공통 부분 수열(LCS)의 개념을 설명하세요.",
		description:
			"LCS의 정의와 동적 프로그래밍을 사용한 해결 방법을 설명하세요.",
		keywords: ["LCS", "동적 프로그래밍", "문자열", "최적화"],
		answer: {
			mainPoints: [
				"LCS는 두 문자열에서 순서를 유지하며 공통으로 나타나는 가장 긴 부분 수열이다.",
				"동적 프로그래밍으로 2D 테이블을 채워 해결한다.",
				"시간 복잡도: O(mn), m과 n은 문자열 길이",
				"활용 사례: 텍스트 비교, 유전자 서열 분석",
			],
			explanation: `
LCS는 다음과 같은 방식으로 계산된다:
1. 두 문자열 X와 Y에 대해 DP 테이블을 생성한다.
2. X[i] == Y[j]이면 dp[i][j] = dp[i-1][j-1] + 1.
3. 그렇지 않으면 dp[i][j] = max(dp[i-1][j], dp[i][j-1]).

결과적으로 dp[m][n]이 LCS의 길이가 된다.
			`,
			examples: ["예시: 'ABCDGH'와 'AEDFHR' -> LCS: 'ADH'"],
			codeExample: `
	function lcs(X, Y) {
		const m = X.length;
		const n = Y.length;
		const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
		for (let i = 1; i <= m; i++) {
			for (let j = 1; j <= n; j++) {
				if (X[i - 1] === Y[j - 1]) {
					dp[i][j] = dp[i - 1][j - 1] + 1;
				} else {
					dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
				}
			}
		}
		return dp[m][n];
	}
			`,
		},
	},
	{
		id: "alg-032",
		categoryId: 2,
		title: "최소 공통 조상(LCA)의 개념을 설명하세요.",
		description: "LCA의 정의와 트리에서의 계산 방법을 설명하세요.",
		keywords: ["LCA", "트리", "그래프", "조상"],
		answer: {
			mainPoints: [
				"LCA는 트리에서 두 노드의 가장 가까운 공통 조상이다.",
				"단순 탐색 또는 이진 리프팅으로 계산할 수 있다.",
				"시간 복잡도: O(n) 전처리 후 O(1) 쿼리 (이진 리프팅 사용 시)",
				"활용 사례: 계층 구조 분석, 네트워크 토폴로지",
			],
			explanation: `
LCA는 다음과 같은 방식으로 구한다:
1. 각 노드의 부모와 깊이를 전처리한다.
2. 두 노드를 같은 깊이로 맞춘 후, 부모를 비교하며 공통 조상을 찾는다.
3. 이진 리프팅은 2^k번째 조상을 미리 계산해 효율성을 높인다.

트리 구조에서 노드 간 관계를 분석하는 데 유용하다.
			`,
			examples: ["예시: 트리에서 노드 4와 5의 LCA -> 공통 조상 노드 2"],
			codeExample: `
	function lcaSimple(parent, depth, u, v) {
		while (depth[u] > depth[v]) u = parent[u];
		while (depth[v] > depth[u]) v = parent[v];
		while (u !== v) {
			u = parent[u];
			v = parent[v];
		}
		return u;
	}
			`,
		},
	},
	{
		id: "alg-033",
		categoryId: 2,
		title: "허프만 코딩의 원리를 설명하세요.",
		description:
			"허프만 코딩의 동작 방식과 데이터 압축에서의 활용을 설명하세요.",
		keywords: ["허프만 코딩", "그리디", "데이터 압축", "이진 트리"],
		answer: {
			mainPoints: [
				"허프만 코딩은 빈도수를 기반으로 가변 길이 코드를 생성하는 그리디 알고리즘이다.",
				"최소 힙을 사용해 빈도수가 낮은 문자부터 트리를 구성한다.",
				"시간 복잡도: O(n log n), n은 문자 수",
				"활용 사례: 파일 압축, 통신 데이터 인코딩",
			],
			explanation: `
허프만 코딩은 다음과 같이 동작한다:
1. 각 문자의 빈도수를 계산한다.
2. 최소 힙에 문자를 삽입한다.
3. 힙에서 두 노드를 꺼내 합치고, 합친 노드를 다시 힙에 삽입한다.
4. 단일 노드가 남을 때까지 반복하여 트리를 완성한다.
5. 트리를 따라 0과 1로 코드를 할당한다.

빈도수가 높은 문자는 짧은 코드를 받아 압축 효율을 높인다.
			`,
			examples: ["예시: 'a:5, b:2, c:1' -> 허프만 트리 -> a:0, b:10, c:11"],
			codeExample: `
	class HuffmanNode {
		constructor(char, freq) {
			this.char = char;
			this.freq = freq;
			this.left = null;
			this.right = null;
		}
	}
	// 힙을 사용한 구현은 생략
			`,
		},
	},
	{
		id: "alg-034",
		categoryId: 2,
		title: "비트 연산을 활용한 알고리즘을 설명하세요.",
		description: "비트 연산의 기본과 집합 연산에서의 활용을 설명하세요.",
		keywords: ["비트 연산", "효율성", "집합", "알고리즘"],
		answer: {
			mainPoints: [
				"비트 연산은 이진수로 빠른 연산을 수행한다(&, |, ^, <<, >>).",
				"집합을 정수로 표현하여 연산 속도를 높인다.",
				"시간 복잡도: O(1) per operation",
				"활용 사례: 부분 집합 생성, 권한 관리",
			],
			explanation: `
비트 연산은 다음과 같은 기본 연산을 포함한다:
- AND(&): 두 비트가 모두 1이면 1.
- OR(|): 하나라도 1이면 1.
- XOR(^): 서로 다르면 1.
- Shift(<<, >>): 비트를 이동.

집합을 비트로 표현하면 합집합, 교집합 등을 빠르게 계산할 수 있다.
			`,
			examples: ["예시: {0, 2} = 5 (101), {1, 2} = 6 (110) -> 교집합 4 (100)"],
			codeExample: `
	function subsetUsingBits(arr) {
		const n = arr.length;
		for (let i = 0; i < (1 << n); i++) {
			const subset = [];
			for (let j = 0; j < n; j++) {
				if (i & (1 << j)) subset.push(arr[j]);
			}
			console.log(subset);
		}
	}
			`,
		},
	},
	{
		id: "alg-035",
		categoryId: 2,
		title: "슬라이딩 윈도우 기법을 설명하세요.",
		description: "슬라이딩 윈도우의 개념과 활용 사례를 설명하세요.",
		keywords: ["슬라이딩 윈도우", "투 포인터", "효율성", "배열"],
		answer: {
			mainPoints: [
				"슬라이딩 윈도우는 고정된 크기의 창을 이동하며 문제를 해결한다.",
				"투 포인터를 사용해 창의 시작과 끝을 관리한다.",
				"시간 복잡도: O(n)",
				"활용 사례: 부분 배열 합, 문자열 매칭",
			],
			explanation: `
슬라이딩 윈도우는 배열이나 문자열에서 연속적인 구간을 처리할 때 사용된다:
1. 창 크기를 정의한다.
2. 창을 이동하며 조건을 확인하고 결과를 갱신한다.

불필요한 반복을 줄여 효율성을 높인다.
			`,
			examples: ["예시: [1, 2, 3, 4, 5]에서 크기 3의 최대 합 -> 12 (3+4+5)"],
			codeExample: `
	function maxSumWindow(arr, k) {
		let maxSum = 0;
		let windowSum = 0;
		for (let i = 0; i < k; i++) windowSum += arr[i];
		maxSum = windowSum;
		for (let i = k; i < arr.length; i++) {
			windowSum += arr[i] - arr[i - k];
			maxSum = Math.max(maxSum, windowSum);
		}
		return maxSum;
	}
			`,
		},
	},
	{
		id: "alg-036",
		categoryId: 2,
		title: "투 포인터 기법을 설명하세요.",
		description: "투 포인터의 개념과 활용 사례를 설명하세요.",
		keywords: ["투 포인터", "효율성", "배열", "정렬"],
		answer: {
			mainPoints: [
				"투 포인터는 두 개의 포인터를 사용해 배열을 탐색한다.",
				"정렬된 배열에서 주로 사용되며, 조건에 따라 포인터를 이동한다.",
				"시간 복잡도: O(n)",
				"활용 사례: 두 수의 합, 연속 부분 수열",
			],
			explanation: `
투 포인터는 다음과 같이 동작한다:
1. 두 포인터를 배열의 양 끝 또는 특정 위치에 둔다.
2. 조건에 따라 왼쪽 또는 오른쪽 포인터를 이동한다.
3. 목표를 달성할 때까지 반복한다.

정렬된 데이터에서 효율적으로 쌍을 찾는 데 유용하다.
			`,
			examples: ["예시: [1, 2, 3, 4, 5]에서 합이 7인 쌍 -> (3, 4)"],
			codeExample: `
	function twoSum(arr, target) {
		let left = 0;
		let right = arr.length - 1;
		while (left < right) {
			const sum = arr[left] + arr[right];
			if (sum === target) return [arr[left], arr[right]];
			else if (sum < target) left++;
			else right--;
		}
		return null;
	}
			`,
		},
	},
	{
		id: "alg-037",
		categoryId: 2,
		title: "모듈러 연산의 활용을 설명하세요.",
		description: "모듈러 연산의 기본과 알고리즘에서의 사용 사례를 설명하세요.",
		keywords: ["모듈러 연산", "수학", "효율성", "암호학"],
		answer: {
			mainPoints: [
				"모듈러 연산은 나머지를 계산하며 큰 수를 다룰 때 유용하다.",
				"분배 법칙을 활용해 계산을 단순화한다.",
				"시간 복잡도: O(1) per operation",
				"활용 사례: 해시 함수, 암호학, 수치 계산",
			],
			explanation: `
모듈러 연산은 (a + b) % m = (a % m + b % m) % m과 같은 속성을 가진다. 이를 통해 오버플로우를 방지하고 효율적으로 계산한다.

큰 수의 곱셈이나 지수 연산에서 자주 사용된다.
			`,
			examples: ["예시: (123 + 456) % 10 = (3 + 6) % 10 = 9"],
			codeExample: `
	function modPow(base, exp, mod) {
		let result = 1;
		base %= mod;
		while (exp > 0) {
			if (exp & 1) result = (result * base) % mod;
			base = (base * base) % mod;
			exp >>= 1;
		}
		return result;
	}
			`,
		},
	},
	{
		id: "alg-038",
		categoryId: 2,
		title: "유클리드 알고리즘을 설명하세요.",
		description:
			"유클리드 알고리즘의 동작 원리와 최대공약수 계산을 설명하세요.",
		keywords: ["유클리드", "최대공약수", "수학", "재귀"],
		answer: {
			mainPoints: [
				"유클리드 알고리즘은 두 수의 최대공약수(GCD)를 구한다.",
				"a를 b로 나눈 나머지와 b의 GCD가 a와 b의 GCD와 같다.",
				"시간 복잡도: O(log min(a, b))",
				"활용 사례: 분수 단순화, 암호학",
			],
			explanation: `
유클리드 알고리즘은 다음과 같이 동작한다:
1. a와 b가 주어졌을 때, a % b를 계산한다.
2. b와 a % b의 GCD를 재귀적으로 구한다.
3. 나머지가 0이 되면 b가 GCD이다.

효율적이고 간단한 방법으로 GCD를 구한다.
			`,
			examples: ["예시: GCD(48, 18) -> GCD(18, 12) -> GCD(12, 6) -> 6"],
			codeExample: `
	function gcd(a, b) {
		if (b === 0) return a;
		return gcd(b, a % b);
	}
			`,
		},
	},
	{
		id: "alg-039",
		categoryId: 2,
		title: "에라토스테네스의 체를 설명하세요.",
		description: "에라토스테네스의 체의 동작 원리와 소수 판별을 설명하세요.",
		keywords: ["에라토스테네스", "소수", "체", "수학"],
		answer: {
			mainPoints: [
				"에라토스테네스의 체는 주어진 범위 내 소수를 찾는 알고리즘이다.",
				"소수의 배수를 제거하며 소수를 걸러낸다.",
				"시간 복잡도: O(n log log n)",
				"활용 사례: 소수 목록 생성, 수론",
			],
			explanation: `
에라토스테네스의 체는 다음과 같이 동작한다:
1. 2부터 n까지의 리스트를 만든다.
2. 2부터 시작해 소수의 배수를 모두 제거한다.
3. 다음 소수로 이동하며 반복한다.
4. 남은 수가 소수이다.

효율적으로 다수의 소수를 찾을 수 있다.
			`,
			examples: ["예시: 1~10 -> [2, 3, 5, 7] (4, 6, 8, 10 제거)"],
			codeExample: `
	function sieve(n) {
		const isPrime = Array(n + 1).fill(true);
		isPrime[0] = isPrime[1] = false;
		for (let i = 2; i * i <= n; i++) {
			if (isPrime[i]) {
				for (let j = i * i; j <= n; j += i) {
					isPrime[j] = false;
				}
			}
		}
		const primes = [];
		for (let i = 2; i <= n; i++) {
			if (isPrime[i]) primes.push(i);
		}
		return primes;
	}
			`,
		},
	},
	{
		id: "alg-040",
		categoryId: 2,
		title: "비트마스크를 활용한 동적 프로그래밍을 설명하세요.",
		description: "비트마스크와 DP를 결합한 문제 해결 방법을 설명하세요.",
		keywords: ["비트마스크", "동적 프로그래밍", "최적화", "집합"],
		answer: {
			mainPoints: [
				"비트마스크는 집합을 이진수로 표현하여 상태를 관리한다.",
				"DP와 결합하여 중복 계산을 줄인다.",
				"시간 복잡도: O(n * 2^n), n은 요소 수",
				"활용 사례: 외판원 순회 문제(TSP)",
			],
			explanation: `
비트마스크를 사용한 DP는 상태를 비트로 표현하며, 각 비트가 요소의 포함 여부를 나타낸다. 이를 통해 모든 부분 집합을 효율적으로 탐색한다.

TSP에서는 방문한 도시를 비트마스크로 관리하며 최단 경로를 구한다.
			`,
			examples: ["예시: 3개 도시 TSP -> 상태 101 (1, 3 방문)"],
			codeExample: `
	function tsp(graph, n) {
		const dp = Array(1 << n).fill().map(() => Array(n).fill(Infinity));
		dp[1][0] = 0;
		for (let mask = 1; mask < (1 << n); mask++) {
			for (let u = 0; u < n; u++) {
				if (!(mask & (1 << u))) continue;
				for (let v = 0; v < n; v++) {
					if (mask & (1 << v)) continue;
					const newMask = mask | (1 << v);
					dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + graph[u][v]);
				}
			}
		}
		return dp[(1 << n) - 1][0];
	}
			`,
		},
	},
	{
		id: "alg-041",
		categoryId: 2,
		title: "스택을 활용한 후위 표기법 변환을 설명하세요.",
		description: "중위 표기법을 후위 표기법으로 변환하는 방법을 설명하세요.",
		keywords: ["스택", "후위 표기법", "중위 표기법", "연산"],
		answer: {
			mainPoints: [
				"중위 표기법을 후위 표기법으로 변환하려면 스택을 사용한다.",
				"연산자 우선순위를 고려하여 스택에 push/pop한다.",
				"시간 복잡도: O(n), n은 식의 길이",
				"활용 사례: 계산기, 컴파일러",
			],
			explanation: `
변환 과정은 다음과 같다:
1. 피연산자는 바로 출력한다.
2. 연산자는 우선순위에 따라 스택에 푸시하거나 팝한다.
3. 괄호를 처리하며 스택을 관리한다.
4. 식이 끝나면 스택의 모든 연산자를 출력한다.

스택을 통해 연산 순서를 재배치한다.
			`,
			examples: ["예시: A + B * C -> A B C * +"],
			codeExample: `
	function infixToPostfix(expr) {
		const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
		const stack = [];
		let result = '';
		for (let char of expr) {
			if (/[A-Za-z0-9]/.test(char)) {
				result += char;
			} else if (char === '(') {
				stack.push(char);
			} else if (char === ')') {
				while (stack.length && stack[stack.length - 1] !== '(') {
					result += stack.pop();
				}
				stack.pop();
			} else {
				while (stack.length && precedence[stack[stack.length - 1]] >= precedence[char]) {
					result += stack.pop();
				}
				stack.push(char);
			}
		}
		while (stack.length) result += stack.pop();
		return result;
	}
			`,
		},
	},
	{
		id: "alg-042",
		categoryId: 2,
		title: "큐를 활용한 토폴로지 정렬을 설명하세요.",
		description: "큐를 사용한 토폴로지 정렬의 동작 방식을 설명하세요.",
		keywords: ["큐", "토폴로지 정렬", "DAG", "그래프"],
		answer: {
			mainPoints: [
				"큐를 사용한 토폴로지 정렬은 진입 차수가 0인 노드부터 처리한다.",
				"노드를 처리하며 인접 노드의 진입 차수를 감소시킨다.",
				"시간 복잡도: O(V + E)",
				"활용 사례: 작업 스케줄링",
			],
			explanation: `
큐를 사용한 토폴로지 정렬(칸의 알고리즘)은 다음과 같이 동작한다:
1. 모든 노드의 진입 차수를 계산한다.
2. 진입 차수가 0인 노드를 큐에 삽입한다.
3. 큐에서 노드를 꺼내 결과에 추가하고, 인접 노드의 진입 차수를 감소시킨다.
4. 진입 차수가 0이 된 노드를 큐에 추가한다.

DAG에서 노드의 선후 관계를 정렬한다.
			`,
			examples: ["예시: A->B, B->C -> [A, B, C]"],
			codeExample: `
	function topologicalSort(graph) {
		const indegree = {};
		for (let node in graph) indegree[node] = 0;
		for (let node in graph) {
			for (let neighbor of graph[node]) indegree[neighbor]++;
		}
		const queue = [];
		for (let node in indegree) {
			if (indegree[node] === 0) queue.push(node);
		}
		const result = [];
		while (queue.length) {
			const node = queue.shift();
			result.push(node);
			for (let neighbor of graph[node]) {
				indegree[neighbor]--;
				if (indegree[neighbor] === 0) queue.push(neighbor);
			}
		}
		return result;
	}
			`,
		},
	},
	{
		id: "alg-043",
		categoryId: 2,
		title: "최소 비용 최대 유량 알고리즘을 설명하세요.",
		description: "최소 비용 최대 유량 문제와 해결 방법을 설명하세요.",
		keywords: ["최소 비용 최대 유량", "네트워크 유량", "그래프", "최적화"],
		answer: {
			mainPoints: [
				"최소 비용 최대 유량은 유량을 최대화하면서 비용을 최소화한다.",
				"벨만-포드나 다익스트라를 사용해 잔여 그래프에서 경로를 찾는다.",
				"시간 복잡도: O(VE^2) (벨만-포드 사용 시)",
				"활용 사례: 물류 최적화, 네트워크 흐름",
			],
			explanation: `
최소 비용 최대 유량은 다음과 같이 계산된다:
1. 잔여 그래프를 구성한다.
2. 비용이 최소인 증대 경로를 찾는다.
3. 가능한 유량을 흘려보내고 그래프를 갱신한다.
4. 더 이상 경로가 없을 때까지 반복한다.

유량과 비용의 균형을 맞춘다.
			`,
			examples: ["예시: 소스에서 싱크로 최대 유량, 최소 비용 경로"],
			codeExample: `
	// 간단한 의사 코드로 표현
	function minCostMaxFlow(graph, source, sink) {
		// 잔여 그래프와 비용 계산 로직 필요
	}
			`,
		},
	},
]
