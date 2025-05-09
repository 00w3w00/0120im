import { Question } from "../questions"

export const osQuestions: Question[] = [
	{
		id: "os-001",
		categoryId: 3,
		title: "프로세스와 스레드의 차이점은 무엇인가요?",
		description: "프로세스와 스레드의 개념과 차이점을 설명하세요.",
		keywords: ["프로세스", "스레드", "멀티태스킹", "자원 공유"],
		answer: {
			mainPoints: [
				"프로세스는 독립적인 실행 단위로, 자체 메모리 공간을 가진다.",
				"스레드는 프로세스 내에서 실행되는 경량 프로세스로, 메모리를 공유한다.",
				"프로세스 간 통신은 IPC를 사용하고, 스레드 간 통신은 공유 메모리를 사용한다.",
				"스레드는 컨텍스트 스위칭이 빠르다.",
			],
			explanation: `
프로세스는 운영체제가 자원을 할당하는 단위로, 독립적인 메모리 공간을 가진다. 각 프로세스는 별도의 주소 공간을 가지며, 프로세스 간 통신은 IPC(Inter-Process Communication) 메커니즘을 통해 이루어진다.

스레드는 프로세스 내에서 실행되는 경량 프로세스로, 동일한 프로세스 내의 스레드들은 메모리와 자원을 공유한다. 이는 스레드 간 통신이 간단하고 빠르다는 장점이 있지만, 동기화 문제가 발생할 수 있다.

컨텍스트 스위칭 시, 프로세스는 전체 메모리 맵을 교체해야 하지만, 스레드는 공유 메모리를 사용하므로 더 빠르게 스위칭할 수 있다.
			`,
			examples: [
				"프로세스 예시: 웹 브라우저, 워드 프로세서",
				"스레드 예시: 웹 브라우저의 렌더링 스레드, UI 스레드",
			],
			codeExample: `
	// Java에서 스레드 생성 예시
	class MyThread extends Thread {
		public void run() {
			System.out.println("Thread is running");
		}
	}
	MyThread thread = new MyThread();
	thread.start();
			`,
		},
	},
	{
		id: "os-002",
		categoryId: 3,
		title: "데드락의 발생 조건과 해결 방법을 설명하세요.",
		description:
			"데드락이 발생하는 네 가지 조건과 이를 해결하는 방법을 설명하세요.",
		keywords: ["데드락", "상호 배제", "점유와 대기", "비선점", "순환 대기"],
		answer: {
			mainPoints: [
				"데드락은 두 개 이상의 프로세스가 서로의 자원을 기다리며 무한히 대기하는 상태이다.",
				"발생 조건: 상호 배제, 점유와 대기, 비선점, 순환 대기",
				"해결 방법: 예방, 회피, 탐지 및 복구, 무시",
			],
			explanation: `
데드락은 다음과 같은 네 가지 조건이 동시에 만족될 때 발생한다:
1. 상호 배제(Mutual Exclusion): 자원은 한 번에 하나의 프로세스만 사용할 수 있다.
2. 점유와 대기(Hold and Wait): 프로세스가 자원을 점유한 채 다른 자원을 기다린다.
3. 비선점(No Preemption): 자원을 강제로 빼앗을 수 없다.
4. 순환 대기(Circular Wait): 프로세스들이 순환적으로 자원을 기다린다.

데드락을 해결하는 방법은 다음과 같다:
- 예방: 네 가지 조건 중 하나를 제거한다.
- 회피: 자원 할당을 신중히 관리하여 데드락을 피한다(예: 은행가 알고리즘).
- 탐지 및 복구: 데드락을 탐지하고, 프로세스를 종료하거나 자원을 선점하여 복구한다.
- 무시: 데드락이 드물게 발생하면 무시하고, 발생 시 시스템을 재시작한다.
			`,
			examples: [
				"예시: 두 프로세스가 각각 파일 A와 B를 점유하고, 서로의 파일을 기다리는 경우",
			],
			codeExample: `
	// 데드락 예시 (Python)
	import threading
	lock1 = threading.Lock()
	lock2 = threading.Lock()

	def thread1():
		lock1.acquire()
		lock2.acquire()
		# ...
		lock2.release()
		lock1.release()

	def thread2():
		lock2.acquire()
		lock1.acquire()
		# ...
		lock1.release()
		lock2.release()
			`,
		},
	},
	{
		id: "os-003",
		categoryId: 3,
		title: "페이지 교체 알고리즘의 종류와 특징을 설명하세요.",
		description:
			"FIFO, LRU, OPT 페이지 교체 알고리즘의 동작 방식과 장단점을 설명하세요.",
		keywords: ["페이지 교체", "FIFO", "LRU", "OPT", "메모리 관리"],
		answer: {
			mainPoints: [
				"FIFO(First-In-First-Out): 가장 먼저 들어온 페이지를 교체한다.",
				"LRU(Least Recently Used): 가장 오랫동안 사용되지 않은 페이지를 교체한다.",
				"OPT(Optimal): 미래에 가장 오랫동안 사용되지 않을 페이지를 교체한다.",
				"FIFO는 구현이 간단하지만 성능이 떨어질 수 있다. LRU는 성능이 좋지만 구현이 복잡하다. OPT는 이론적 최적이나 미래를 알아야 한다.",
			],
			explanation: `
페이지 교체 알고리즘은 메모리가 가득 찼을 때 어떤 페이지를 교체할지 결정한다.

- FIFO: 페이지가 메모리에 들어온 순서대로 교체한다. 간단하지만, 자주 사용되는 페이지가 교체될 수 있다.
- LRU: 최근에 사용된 페이지를 추적하여, 가장 오랫동안 사용되지 않은 페이지를 교체한다. 성능이 좋지만, 사용 기록을 유지해야 한다.
- OPT: 미래의 페이지 참조를 알고 있다고 가정하고, 가장 나중에 사용될 페이지를 교체한다. 실제로는 구현할 수 없지만, 다른 알고리즘의 성능 비교 기준으로 사용된다.
			`,
			examples: [
				"예시: 페이지 참조열 [1,2,3,4,1,2,5], 메모리 프레임 3개 -> FIFO: 1,2,3 -> 4(1 out), 4,2,3 -> 1(2 out), 1,4,3 -> 2(4 out), 2,1,3 -> 5(1 out), 2,5,3",
				"LRU: 더 적은 페이지 폴트를 발생시킴",
			],
			codeExample: `
	// LRU 페이지 교체 (Python)
	class LRUCache:
		def __init__(self, capacity):
			self.capacity = capacity
			self.cache = {}
			self.order = []

		def get(self, key):
			if key in self.cache:
				self.order.remove(key)
				self.order.append(key)
				return self.cache[key]
			return -1

		def put(self, key, value):
			if key in self.cache:
				self.order.remove(key)
			elif len(self.cache) >= self.capacity:
				oldest = self.order.pop(0)
				del self.cache[oldest]
			self.cache[key] = value
			self.order.append(key)
			`,
		},
	},
	{
		id: "os-004",
		categoryId: 3,
		title: "스케줄링 알고리즘의 종류와 특징을 설명하세요.",
		description:
			"FCFS, SJF, RR, Priority 스케줄링의 동작 방식과 장단점을 설명하세요.",
		keywords: ["스케줄링", "FCFS", "SJF", "RR", "Priority"],
		answer: {
			mainPoints: [
				"FCFS(First-Come-First-Served): 도착한 순서대로 처리한다.",
				"SJF(Shortest Job First): 실행 시간이 짧은 작업을 먼저 처리한다.",
				"RR(Round Robin): 일정 시간 할당 후 순환적으로 처리한다.",
				"Priority: 우선순위가 높은 작업을 먼저 처리한다.",
			],
			explanation: `
스케줄링 알고리즘은 CPU를 어떤 프로세스에 할당할지 결정한다.

- FCFS: 간단하지만, 짧은 작업이 긴 작업 뒤에 있으면 대기 시간이 길어진다(컨보이 효과).
- SJF: 평균 대기 시간을 최소화하지만, 긴 작업이 starvation을 겪을 수 있다.
- RR: 응답 시간이 빠르고 공평하지만, 문맥 교환 오버헤드가 있다.
- Priority: 중요한 작업을 먼저 처리하지만, 낮은 우선순위 작업이 starvation을 겪을 수 있다.
			`,
			examples: [
				"예시: 작업 [A:5ms, B:3ms, C:7ms] -> FCFS: A-B-C, SJF: B-A-C, RR: A-B-C-A-C...",
			],
			codeExample: `
	// RR 스케줄링 의사 코드
	queue = []
	time_quantum = 10
	while processes:
		process = queue.pop(0)
		if process.remaining_time > time_quantum:
			run(process, time_quantum)
			queue.append(process)
		else:
			run(process, process.remaining_time)
			`,
		},
	},
	{
		id: "os-005",
		categoryId: 3,
		title: "가상 메모리의 개념과 동작 원리를 설명하세요.",
		description:
			"가상 메모리의 필요성과 페이지 테이블, TLB의 역할을 설명하세요.",
		keywords: ["가상 메모리", "페이지 테이블", "TLB", "메모리 관리"],
		answer: {
			mainPoints: [
				"가상 메모리는 물리 메모리와 디스크를 결합하여 더 큰 메모리 공간을 제공한다.",
				"페이지 테이블은 가상 주소와 물리 주소의 매핑을 관리한다.",
				"TLB(Translation Lookaside Buffer)는 페이지 테이블의 캐시 역할을 한다.",
				"페이지 폴트 발생 시 디스크에서 페이지를 메모리로 로드한다.",
			],
			explanation: `
가상 메모리는 프로세스에게 물리 메모리보다 큰 메모리 공간을 제공하여, 메모리 사용을 효율적으로 관리한다. 각 프로세스는 독립적인 가상 주소 공간을 가지며, 운영체제는 이를 물리 메모리와 디스크로 매핑한다.

페이지 테이블은 가상 페이지와 물리 프레임의 대응을 저장하며, TLB는 자주 사용되는 페이지 테이블 항목을 캐싱하여 주소 변환 속도를 높인다.

페이지 폴트가 발생하면, 운영체제는 필요한 페이지를 디스크에서 메모리로 로드하고, 페이지 테이블을 업데이트한다.
			`,
			examples: [
				"예시: 프로세스가 가상 주소 0x1000에 접근 -> 페이지 테이블에서 물리 주소 0x2000으로 변환 -> 메모리에서 데이터 로드",
			],
			codeExample: `
	// 페이지 테이블 의사 코드
	page_table = {
		virtual_page: physical_frame,
		...
	}
	physical_address = page_table[virtual_page] + offset
			`,
		},
	},
	{
		id: "os-006",
		categoryId: 3,
		title: "파일 시스템의 구조와 종류를 설명하세요.",
		description: "파일 시스템의 역할과 FAT, NTFS, ext4 등의 특징을 설명하세요.",
		keywords: ["파일 시스템", "FAT", "NTFS", "ext4", "저장 관리"],
		answer: {
			mainPoints: [
				"파일 시스템은 디스크에 데이터를 저장하고 관리하는 방법을 정의한다.",
				"FAT: 단순하지만 대용량 디스크에 비효율적.",
				"NTFS: 저널링, 보안, 대용량 지원.",
				"ext4: 리눅스에서 사용, 저널링, 대용량 지원.",
			],
			explanation: `
파일 시스템은 파일과 디렉토리를 조직하고, 데이터의 저장과 검색을 관리한다.

- FAT(File Allocation Table): 오래된 파일 시스템으로, 단순하지만 파일 크기 제한과 성능 문제가 있다.
- NTFS(New Technology File System): 윈도우에서 사용, 저널링으로 데이터 무결성을 보장하고, 보안 기능과 대용량 디스크를 지원한다.
- ext4(Extended File System 4): 리눅스에서 사용, 저널링, 대용량 파일과 파티션을 지원하며, 성능이 우수하다.
			`,
			examples: [
				"예시: USB 드라이브는 FAT32를 사용, 윈도우 시스템 드라이브는 NTFS를 사용",
			],
			codeExample: `
	// 파일 열기 (C)
	FILE *file = fopen("example.txt", "r");
	if (file) {
		// 파일 읽기
		fclose(file);
	}
			`,
		},
	},
	{
		id: "os-007",
		categoryId: 3,
		title: "인터럽트의 개념과 처리 과정을 설명하세요.",
		description:
			"인터럽트의 종류와 운영체제가 인터럽트를 처리하는 방식을 설명하세요.",
		keywords: ["인터럽트", "하드웨어 인터럽트", "소프트웨어 인터럽트", "ISR"],
		answer: {
			mainPoints: [
				"인터럽트는 CPU에게 이벤트 발생을 알리는 신호이다.",
				"하드웨어 인터럽트: 장치에서 발생, 소프트웨어 인터럽트: 프로그램에서 발생.",
				"ISR(Interrupt Service Routine): 인터럽트를 처리하는 함수.",
				"운영체제는 인터럽트 벡터를 통해 ISR을 호출한다.",
			],
			explanation: `
인터럽트는 CPU가 현재 작업을 중단하고, 특정 이벤트를 처리하도록 하는 메커니즘이다.

- 하드웨어 인터럽트: 키보드 입력, 디스크 I/O 완료 등 장치에서 발생.
- 소프트웨어 인터럽트: 시스템 콜, 예외 처리 등 프로그램에서 발생.

인터럽트 발생 시, CPU는 현재 상태를 저장하고, 인터럽트 벡터를 통해 해당 ISR을 실행한다. ISR은 이벤트를 처리한 후, 원래 작업으로 복귀한다.
			`,
			examples: [
				"예시: 키보드 입력 시 하드웨어 인터럽트 발생 -> 운영체제가 키 입력을 처리",
			],
			codeExample: `
	// 인터럽트 핸들러 등록 (의사 코드)
	register_interrupt_handler(IRQ_KEYBOARD, keyboard_handler);
			`,
		},
	},
	{
		id: "os-008",
		categoryId: 3,
		title: "컨텍스트 스위칭의 개념과 오버헤드를 설명하세요.",
		description:
			"컨텍스트 스위칭이 발생하는 시점과 이에 따른 오버헤드를 설명하세요.",
		keywords: ["컨텍스트 스위칭", "프로세스 상태", "오버헤드", "스케줄링"],
		answer: {
			mainPoints: [
				"컨텍스트 스위칭은 CPU가 실행 중인 프로세스를 교체하는 과정이다.",
				"프로세스의 상태(레지스터, 프로그램 카운터 등)를 저장하고 복원한다.",
				"오버헤드: 컨텍스트 저장/복원, 캐시 미스, TLB flush 등",
				"빈번한 컨텍스트 스위칭은 성능 저하를 초래한다.",
			],
			explanation: `
컨텍스트 스위칭은 운영체제가 CPU를 다른 프로세스에 할당할 때 발생한다. 이는 다음과 같은 단계를 포함한다:
1. 현재 프로세스의 상태를 PCB(Process Control Block)에 저장한다.
2. 다음 프로세스의 PCB에서 상태를 로드한다.
3. CPU의 레지스터를 새로운 프로세스의 상태로 설정한다.

컨텍스트 스위칭은 시간이 걸리며, 캐시와 TLB의 내용을 무효화하여 추가적인 오버헤드를 발생시킨다. 따라서 스케줄링 정책은 컨텍스트 스위칭 빈도를 고려해야 한다.
			`,
			examples: [
				"예시: 멀티태스킹 환경에서 여러 프로그램이 동시에 실행되는 것처럼 보이게 함",
			],
			codeExample: `
	// 컨텍스트 스위칭 의사 코드
	save_context(current_process)
	load_context(next_process)
			`,
		},
	},
	{
		id: "os-009",
		categoryId: 3,
		title: "세마포어와 뮤텍스의 차이점을 설명하세요.",
		description:
			"세마포어와 뮤텍스의 개념과 사용 시나리오의 차이점을 설명하세요.",
		keywords: ["세마포어", "뮤텍스", "동기화", "자원 관리"],
		answer: {
			mainPoints: [
				"뮤텍스는 상호 배제를 위한 잠금 메커니즘으로, 소유권이 있다.",
				"세마포어는 신호 메커니즘으로, 자원의 개수를 관리한다.",
				"뮤텍스는 단일 자원에 대한 접근을 제어하고, 세마포어는 여러 자원에 대한 접근을 제어한다.",
				"뮤텍스는 잠금을 건 스레드만 해제할 수 있지만, 세마포어는 다른 스레드도 해제할 수 있다.",
			],
			explanation: `
뮤텍스(Mutex)는 상호 배제를 위한 잠금 메커니즘으로, 한 번에 하나의 스레드만 임계 구역에 접근할 수 있도록 한다. 뮤텍스는 소유권을 가지며, 잠금을 건 스레드만 잠금을 해제할 수 있다.

세마포어(Semaphore)는 자원의 개수를 관리하는 신호 메커니즘으로, 카운터를 사용하여 여러 스레드가 자원에 접근할 수 있도록 한다. 바이너리 세마포어는 뮤텍스와 유사하게 동작할 수 있지만, 소유권이 없어 다른 스레드가 잠금을 해제할 수 있다.

일반적으로 뮤텍스는 단일 자원에 대한 접근을 제어하고, 세마포어는 여러 자원(예: 제한된 수의 연결)에 대한 접근을 제어하는 데 사용된다.
			`,
			examples: [
				"뮤텍스 예시: 데이터베이스 레코드에 대한 동시 접근 제어",
				"세마포어 예시: 제한된 수의 프린터에 대한 작업 제어",
			],
			codeExample: `
	// Java에서 뮤텍스 사용 예시
	Object lock = new Object();
	synchronized(lock) {
		// 임계 구역
	}

	// Java에서 세마포어 사용 예시
	Semaphore semaphore = new Semaphore(5); // 5개의 자원
	semaphore.acquire();
	// 자원 사용
	semaphore.release();
			`,
		},
	},
	{
		id: "os-010",
		categoryId: 3,
		title: "가상화의 개념과 종류를 설명하세요.",
		description:
			"가상화의 목적과 하이퍼바이저, 컨테이너 등의 종류를 설명하세요.",
		keywords: ["가상화", "하이퍼바이저", "컨테이너", "자원 관리"],
		answer: {
			mainPoints: [
				"가상화는 물리적 자원을 논리적 자원으로 추상화하여 효율적으로 사용하는 기술이다.",
				"하이퍼바이저는 호스트 시스템 위에 가상 머신을 생성하고 관리한다.",
				"컨테이너는 애플리케이션과 그 종속성을 패키징하여 격리된 환경에서 실행한다.",
				"가상화는 자원 활용도를 높이고, 유연성과 확장성을 제공한다.",
			],
			explanation: `
가상화는 물리적 하드웨어를 가상화하여 여러 가상 머신(VM)이나 컨테이너가 하나의 물리적 시스템에서 독립적으로 실행될 수 있도록 한다.

- 하이퍼바이저(VMM): 가상 머신을 생성하고 관리하는 소프트웨어로, 타입 1(베어메탈)과 타입 2(호스티드)로 나뉜다.
- 컨테이너: 운영체제 수준의 가상화로, 애플리케이션과 그 종속성을 패키징하여 격리된 환경에서 실행한다. Docker가 대표적이다.

가상화는 서버 통합, 테스트 환경 구축, 클라우드 컴퓨팅 등에 널리 사용된다.
			`,
			examples: [
				"하이퍼바이저 예시: VMware ESXi, Microsoft Hyper-V",
				"컨테이너 예시: Docker, Kubernetes",
			],
			codeExample: `
	// Docker 컨테이너 실행 예시
	docker run -it --name my-container ubuntu /bin/bash
			`,
		},
	},
	{
		id: "os-011",
		categoryId: 3,
		title: "메모리 할당 방식의 종류와 특징을 설명하세요.",
		description:
			"연속 메모리 할당, 페이징, 세그먼테이션의 차이점과 장단점을 설명하세요.",
		keywords: ["메모리 할당", "연속 할당", "페이징", "세그먼테이션"],
		answer: {
			mainPoints: [
				"연속 메모리 할당: 프로세스에 연속된 메모리 블록을 할당한다.",
				"페이징: 메모리를 고정된 크기의 페이지로 나누어 할당한다.",
				"세그먼테이션: 메모리를 가변 크기의 세그먼트로 나누어 할당한다.",
				"연속 할당은 외부 단편화, 페이징은 내부 단편화, 세그먼테이션은 외부 단편화를 일으킬 수 있다.",
			],
			explanation: `
메모리 할당 방식은 프로세스에 메모리를 어떻게 할당할지를 결정한다.

- 연속 메모리 할당: 프로세스 전체를 연속된 메모리 공간에 할당한다. 단순하지만, 외부 단편화가 발생할 수 있다.
- 페이징: 메모리를 고정된 크기의 페이지로 나누어, 프로세스의 가상 메모리를 페이지 단위로 물리 메모리에 매핑한다. 내부 단편화가 발생할 수 있다.
- 세그먼테이션: 프로세스를 논리적 단위(세그먼트)로 나누어 할당한다. 외부 단편화가 발생할 수 있지만, 메모리 보호와 공유가 용이하다.
			`,
			examples: [
				"페이징 예시: 4KB 페이지 크기, 가상 주소 0x1000 -> 물리 주소 0x2000",
				"세그먼테이션 예시: 코드 세그먼트, 데이터 세그먼트 등으로 나누어 관리",
			],
			codeExample: `
	// 메모리 할당 (C)
	void* ptr = malloc(1024); // 1024 바이트 할당
	free(ptr);
			`,
		},
	},
	{
		id: "os-012",
		categoryId: 3,
		title: "캐시 메모리의 역할과 동작 원리를 설명하세요.",
		description: "캐시 메모리의 필요성과 지역성 원리를 설명하세요.",
		keywords: ["캐시 메모리", "지역성", "히트", "미스"],
		answer: {
			mainPoints: [
				"캐시 메모리는 CPU와 메인 메모리 사이에서 자주 사용되는 데이터를 빠르게 접근할 수 있도록 한다.",
				"지역성 원리: 시간적 지역성, 공간적 지역성",
				"캐시 히트: 데이터가 캐시에 있을 때, 캐시 미스: 없을 때",
				"캐시 교체 정책: LRU, FIFO 등",
			],
			explanation: `
캐시 메모리는 CPU가 자주 사용하는 데이터를 저장하여 메인 메모리 접근 시간을 줄인다. 이는 CPU와 메인 메모리 간의 속도 차이를 완화한다.

지역성 원리는 프로그램이 메모리에 접근할 때 특정 패턴을 따른다는 것을 의미한다:
- 시간적 지역성: 최근에 접근한 데이터는 곧 다시 접근할 가능성이 높다.
- 공간적 지역성: 접근한 데이터 근처의 데이터는 곧 접근할 가능성이 높다.

캐시 히트 시 빠르게 데이터를 가져오고, 미스 시 메인 메모리에서 데이터를 로드한다. 캐시가 가득 차면 교체 정책에 따라 데이터를 교체한다.
			`,
			examples: [
				"예시: 루프에서 반복적으로 접근하는 변수는 캐시에 저장됨",
				"캐시 미스 예시: 새로운 데이터에 접근할 때 캐시에 없어 메인 메모리에서 로드",
			],
			codeExample: `
	// 캐시 친화적인 코드 (C)
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			// arr[i][j] 접근 (행 우선)
		}
	}
			`,
		},
	},
	{
		id: "os-013",
		categoryId: 3,
		title: "가상화와 컨테이너의 차이점을 설명하세요.",
		description:
			"하이퍼바이저 기반 가상화와 컨테이너의 차이점과 장단점을 설명하세요.",
		keywords: ["가상화", "컨테이너", "하이퍼바이저", "격리"],
		answer: {
			mainPoints: [
				"가상화는 하이퍼바이저를 통해 완전한 가상 머신을 생성한다.",
				"컨테이너는 운영체제 수준에서 애플리케이션을 격리한다.",
				"가상화는 자원 사용이 많고 격리가 강력하지만, 컨테이너는 가볍고 빠르다.",
				"컨테이너는 동일한 OS 커널을 공유한다.",
			],
			explanation: `
하이퍼바이저 기반 가상화는 물리적 하드웨어 위에 가상 머신을 생성하여, 각 VM이 독립적인 운영체제를 실행한다. 이는 강력한 격리를 제공하지만, 자원 사용이 많고 오버헤드가 크다.

컨테이너는 호스트 OS의 커널을 공유하며, 애플리케이션과 그 종속성을 패키징하여 격리된 환경에서 실행한다. 이는 가볍고 빠르며, 자원 사용이 효율적이지만, 격리 수준이 VM보다 낮다.

가상화는 서로 다른 OS를 실행해야 할 때, 컨테이너는 동일 OS에서 애플리케이션을 격리할 때 유용하다.
			`,
			examples: [
				"가상화 예시: VMware, VirtualBox",
				"컨테이너 예시: Docker, Podman",
			],
			codeExample: `
	// Docker 컨테이너 생성
	docker run -d --name my-app -p 8080:80 nginx
			`,
		},
	},
	{
		id: "os-014",
		categoryId: 3,
		title: "운영체제의 부팅 과정을 설명하세요.",
		description: "BIOS, 부트로더, 커널 로딩 등의 부팅 단계를 설명하세요.",
		keywords: ["부팅", "BIOS", "부트로더", "커널"],
		answer: {
			mainPoints: [
				"부팅은 컴퓨터가 켜질 때 운영체제를 메모리에 로드하는 과정이다.",
				"BIOS/UEFI: 하드웨어 초기화 및 부트로더 로딩",
				"부트로더: 운영체제 커널을 메모리에 로드",
				"커널: 시스템 자원 관리 및 사용자 모드로 전환",
			],
			explanation: `
운영체제 부팅 과정은 다음과 같다:
1. 전원 공급: 컴퓨터가 켜지면 BIOS/UEFI가 실행된다.
2. POST(Power-On Self Test): 하드웨어를 점검한다.
3. 부트로더 로딩: BIOS/UEFI는 부트 디바이스에서 부트로더를 로드한다.
4. 부트로더: 운영체제 커널을 메모리에 로드하고 실행한다.
5. 커널 초기화: 커널은 시스템을 초기화하고, 사용자 공간으로 전환한다.

이 과정에서 운영체제가 메모리에 로드되고, 시스템이 사용 가능한 상태가 된다.
			`,
			examples: ["예시: GRUB 부트로더를 통해 리눅스 커널 로딩"],
			codeExample: `
	// 부트로더 의사 코드
	load_kernel_image()
	initialize_system()
	execute_kernel()
			`,
		},
	},
	{
		id: "os-015",
		categoryId: 3,
		title: "IPC(Inter-Process Communication)의 종류를 설명하세요.",
		description:
			"파이프, 메시지 큐, 공유 메모리 등의 IPC 메커니즘을 설명하세요.",
		keywords: ["IPC", "파이프", "메시지 큐", "공유 메모리"],
		answer: {
			mainPoints: [
				"IPC는 프로세스 간 통신을 위한 메커니즘이다.",
				"파이프: 단방향 통신, 부모-자식 프로세스 간 사용",
				"메시지 큐: 메시지를 큐에 저장하여 비동기 통신",
				"공유 메모리: 메모리 영역을 공유하여 빠른 통신",
			],
			explanation: `
IPC는 프로세스들이 데이터를 주고받거나 동기화하는 방법을 제공한다.

- 파이프: 단방향 통신 채널로, 주로 부모-자식 프로세스 간에 사용된다.
- 메시지 큐: 메시지를 큐에 저장하고, 프로세스가 메시지를 꺼내 처리한다. 비동기 통신에 유용하다.
- 공유 메모리: 두 개 이상의 프로세스가 동일한 메모리 영역을 공유하여 데이터를 교환한다. 가장 빠르지만 동기화가 필요하다.

이 외에도 소켓, 시그널, 세마포어 등 다양한 IPC 메커니즘이 있다.
			`,
			examples: [
				"파이프 예시: 명령어 'ls | grep txt'에서 ls의 출력이 grep의 입력으로 전달",
				"공유 메모리 예시: 데이터베이스 캐시 공유",
			],
			codeExample: `
	// 파이프 사용 (C)
	int pipefd[2];
	pipe(pipefd);
	if (fork() == 0) {
		// 자식 프로세스: 파이프에 쓰기
		write(pipefd[1], "Hello", 5);
	} else {
		// 부모 프로세스: 파이프에서 읽기
		char buffer[5];
		read(pipefd[0], buffer, 5);
	}
			`,
		},
	},
	{
		id: "os-016",
		categoryId: 3,
		title: "운영체제의 보안 메커니즘을 설명하세요.",
		description: "사용자 인증, 접근 제어, 암호화 등의 보안 기능을 설명하세요.",
		keywords: ["보안", "인증", "접근 제어", "암호화"],
		answer: {
			mainPoints: [
				"사용자 인증: 사용자 신원을 확인하는 과정(예: 비밀번호, 생체 인식).",
				"접근 제어: 자원에 대한 접근 권한을 관리한다(예: ACL, RBAC).",
				"암호화: 데이터를 암호화하여 보호한다(예: 파일 시스템 암호화).",
				"방화벽: 네트워크 트래픽을 제어하여 보안을 강화한다.",
			],
			explanation: `
운영체제는 다양한 보안 메커니즘을 제공한다:

- 사용자 인증: 로그인 시 사용자 이름과 비밀번호, 다중 인증 등을 통해 신원을 확인한다.
- 접근 제어: 파일, 디렉토리, 시스템 자원에 대한 읽기/쓰기/실행 권한을 설정한다.
- 암호화: 디스크, 파일, 통신 데이터를 암호화하여 데이터 유출을 방지한다.
- 방화벽: 네트워크 패킷을 필터링하여 악성 트래픽을 차단한다.

이러한 메커니즘은 시스템의 무결성과 기밀성을 보호한다.
			`,
			examples: [
				"인증 예시: 리눅스의 PAM(Pluggable Authentication Modules)",
				"접근 제어 예시: 윈도우의 NTFS 권한 설정",
			],
			codeExample: `
	// 파일 권한 설정 (Python)
	import os
	os.chmod("file.txt", 0o600)  # 소유자만 읽기/쓰기
			`,
		},
	},
	{
		id: "os-017",
		categoryId: 3,
		title: "운영체제의 네트워크 관리 기능을 설명하세요.",
		description:
			"TCP/IP 스택, 소켓, 라우팅 등의 네트워크 관련 기능을 설명하세요.",
		keywords: ["네트워크", "TCP/IP", "소켓", "라우팅"],
		answer: {
			mainPoints: [
				"운영체제는 TCP/IP 프로토콜 스택을 구현하여 네트워크 통신을 관리한다.",
				"소켓: 네트워크 통신을 위한 추상화된 인터페이스.",
				"라우팅: 패킷을 목적지까지 전달하는 경로를 결정한다.",
				"DHCP, DNS 등의 네트워크 서비스를 지원한다.",
			],
			explanation: `
운영체제는 네트워크 통신을 위한 다양한 기능을 제공한다:

- TCP/IP 스택: 인터넷 프로토콜을 구현하여 데이터 전송을 관리한다.
- 소켓: 애플리케이션이 네트워크를 통해 데이터를 주고받을 수 있도록 한다.
- 라우팅: 패킷이 출발지에서 목적지까지 도달할 경로를 결정한다.
- 네트워크 서비스: DHCP를 통한 IP 주소 할당, DNS를 통한 도메인 이름 해석 등을 지원한다.

이러한 기능은 운영체제가 네트워크에 연결된 시스템 간 통신을 가능하게 한다.
			`,
			examples: [
				"소켓 예시: 웹 서버와 클라이언트 간 HTTP 통신",
				"라우팅 예시: 라우터를 통한 패킷 전달",
			],
			codeExample: `
	// 소켓 프로그래밍 (Python)
	import socket
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	s.connect(("www.example.com", 80))
	s.send(b"GET / HTTP/1.1\r\nHost: www.example.com\r\n\r\n")
	response = s.recv(4096)
			`,
		},
	},
	{
		id: "os-018",
		categoryId: 3,
		title: "운영체제의 장치 관리 기능을 설명하세요.",
		description:
			"장치 드라이버, 인터럽트, DMA 등의 장치 관리 메커니즘을 설명하세요.",
		keywords: ["장치 관리", "드라이버", "인터럽트", "DMA"],
		answer: {
			mainPoints: [
				"장치 드라이버: 운영체제와 하드웨어 간의 인터페이스를 제공한다.",
				"인터럽트: 장치가 CPU에게 이벤트 발생을 알린다.",
				"DMA(Direct Memory Access): CPU를 거치지 않고 메모리에 직접 접근한다.",
				"운영체제는 장치의 상태를 추적하고, 자원을 할당한다.",
			],
			explanation: `
운영체제는 다양한 하드웨어 장치를 관리한다:

- 장치 드라이버: 특정 하드웨어와 통신하기 위한 소프트웨어로, 운영체제의 추상화를 통해 애플리케이션이 장치를 사용할 수 있게 한다.
- 인터럽트: 장치가 작업 완료나 이벤트 발생을 CPU에게 알리는 메커니즘.
- DMA: 대량의 데이터를 CPU의 개입 없이 메모리로 전송하여 CPU 부하를 줄인다.

운영체제는 장치의 상태를 모니터링하고, 자원을 효율적으로 할당하여 시스템 성능을 최적화한다.
			`,
			examples: [
				"드라이버 예시: 그래픽 카드 드라이버, 프린터 드라이버",
				"DMA 예시: 디스크에서 메모리로 데이터 전송",
			],
			codeExample: `
	// 장치 드라이버 의사 코드
	device_driver_init()
	device_driver_read(buffer, size)
	device_driver_write(buffer, size)
			`,
		},
	},
	{
		id: "os-019",
		categoryId: 3,
		title: "운영체제의 파일 시스템 계층을 설명하세요.",
		description:
			"논리적 파일 시스템, 물리적 파일 시스템, 장치 드라이버 등의 계층을 설명하세요.",
		keywords: ["파일 시스템", "계층", "논리적", "물리적"],
		answer: {
			mainPoints: [
				"논리적 파일 시스템: 파일과 디렉토리의 추상화를 제공한다.",
				"물리적 파일 시스템: 파일의 물리적 저장 방식을 관리한다.",
				"장치 드라이버: 하드웨어와 통신하여 데이터를 읽고 쓴다.",
				"운영체제는 이러한 계층을 통해 파일 I/O를 관리한다.",
			],
			explanation: `
파일 시스템은 여러 계층으로 구성된다:

- 논리적 파일 시스템: 사용자와 애플리케이션에게 파일과 디렉토리의 추상화를 제공한다. 파일 열기, 읽기, 쓰기 등의 시스템 콜을 처리한다.
- 물리적 파일 시스템: 파일의 블록을 관리하고, 디스크의 물리적 위치에 데이터를 저장한다. 블록 할당, 자유 공간 관리 등을 담당한다.
- 장치 드라이버: 실제 하드웨어와 통신하여 데이터를 읽고 쓴다.

이러한 계층 구조는 파일 시스템의 복잡성을 관리하고, 다양한 저장 장치를 지원할 수 있게 한다.
			`,
			examples: [
				"논리적 파일 시스템 예시: POSIX 파일 API",
				"물리적 파일 시스템 예시: ext4, NTFS",
			],
			codeExample: `
	// 파일 읽기 (C)
	FILE *file = fopen("file.txt", "r");
	char buffer[1024];
	fread(buffer, 1, 1024, file);
	fclose(file);
			`,
		},
	},
	{
		id: "os-020",
		categoryId: 3,
		title: "운영체제의 메모리 보호 기법을 설명하세요.",
		description:
			"메모리 보호의 필요성과 하드웨어 지원, 운영체제의 역할을 설명하세요.",
		keywords: ["메모리 보호", "하드웨어", "운영체제", "격리"],
		answer: {
			mainPoints: [
				"메모리 보호는 프로세스가 다른 프로세스의 메모리에 접근하지 못하도록 한다.",
				"하드웨어 지원: MMU(Memory Management Unit), 페이지 테이블",
				"운영체제는 가상 메모리와 페이지 권한을 설정하여 보호한다.",
				"메모리 보호는 시스템의 안정성과 보안을 보장한다.",
			],
			explanation: `
메모리 보호는 다음과 같은 방식으로 이루어진다:

- 하드웨어 지원: MMU는 가상 주소를 물리 주소로 변환하며, 유효하지 않은 접근을 차단한다.
- 페이지 테이블: 각 페이지에 대한 접근 권한(읽기, 쓰기, 실행)을 설정한다.
- 운영체제: 프로세스 생성 시 메모리 공간을 할당하고, 권한을 설정한다.

이를 통해 프로세스는 자신의 메모리 영역만 접근할 수 있으며, 다른 프로세스의 메모리를 침범할 수 없다.
			`,
			examples: [
				"예시: 프로세스 A가 프로세스 B의 메모리에 접근하려 하면 운영체제가 차단",
				"페이지 권한 예시: 코드 페이지는 실행 가능, 데이터 페이지는 읽기/쓰기 가능",
			],
			codeExample: `
	// 메모리 보호 의사 코드
	if (is_valid_address(address) && has_permission(process, address)) {
		access_memory(address);
	} else {
		raise_exception();
	}
			`,
		},
	},
	{
		id: "os-021",
		categoryId: 3,
		title: "운영체제의 에너지 관리 기능을 설명하세요.",
		description:
			"전력 절약 모드, CPU 주파수 조절 등의 에너지 관리 기술을 설명하세요.",
		keywords: ["에너지 관리", "전력 절약", "CPU 주파수", "운영체제"],
		answer: {
			mainPoints: [
				"운영체제는 시스템의 에너지 소비를 관리하여 배터리 수명을 연장한다.",
				"전력 절약 모드: CPU, 디스플레이 등의 전력을 줄인다.",
				"CPU 주파수 조절: 작업 부하에 따라 CPU 속도를 조절한다.",
				"디바이스 관리: 사용하지 않는 장치의 전원을 끈다.",
			],
			explanation: `
운영체제는 에너지 관리 기능을 제공한다:

- 전력 절약 모드: 시스템이 유휴 상태일 때 CPU, 디스플레이, 하드 드라이브 등의 전력을 줄인다.
- CPU 주파수 조절: 동적 전압 및 주파수 스케일링(DVFS)을 통해 CPU의 속도와 전압을 조절한다.
- 디바이스 관리: 사용하지 않는 장치(예: USB 포트, 네트워크 카드)의 전원을 끄거나 저전력 모드로 전환한다.

이러한 기능은 특히 모바일 장치와 노트북에서 중요하다.
			`,
			examples: [
				"예시: 리눅스의 cpufreq를 통한 CPU 주파수 조절",
				"전력 절약 모드 예시: 윈도우의 절전 모드",
			],
			codeExample: `
	// CPU 주파수 조절 (의사 코드)
	set_cpu_frequency(low_power_mode ? MIN_FREQ : MAX_FREQ);
			`,
		},
	},
	{
		id: "os-022",
		categoryId: 3,
		title: "운영체제의 실시간 시스템 지원을 설명하세요.",
		description: "실시간 운영체제의 특징과 스케줄링 방식을 설명하세요.",
		keywords: ["실시간 시스템", "RTOS", "스케줄링", "데드라인"],
		answer: {
			mainPoints: [
				"실시간 운영체제(RTOS)는 작업의 데드라인을 보장한다.",
				"하드 실시간: 데드라인을 반드시 준수해야 함.",
				"소프트 실시간: 데드라인을 놓쳐도 허용되는 경우.",
				"스케줄링: 우선순위 기반, EDF(Earliest Deadline First) 등",
			],
			explanation: `
실시간 운영체제는 특정 시간 내에 작업을 완료해야 하는 시스템을 지원한다.

- 하드 실시간: 데드라인을 놓치면 치명적인 결과를 초래한다(예: 항공 제어 시스템).
- 소프트 실시간: 데드라인을 놓쳐도 시스템이 계속 동작한다(예: 비디오 스트리밍).

RTOS는 우선순위 기반 스케줄링을 사용하며, EDF는 데드라인이 가장 가까운 작업을 먼저 처리한다. 또한, 예측 가능한 응답 시간을 보장하기 위해 인터럽트 처리와 메모리 관리 등이 최적화된다.
			`,
			examples: [
				"예시: 자동차의 에어백 제어 시스템(하드 실시간)",
				"예시: 온라인 게임의 프레임 렌더링(소프트 실시간)",
			],
			codeExample: `
	// RTOS 태스크 정의 (의사 코드)
	task_control_block tcb;
	tcb.priority = HIGH;
	tcb.deadline = 100; // ms
	schedule_task(&tcb);
			`,
		},
	},
	{
		id: "os-023",
		categoryId: 3,
		title: "운영체제의 가상화 지원을 설명하세요.",
		description:
			"운영체제가 가상화를 지원하는 방식과 하이퍼바이저와의 관계를 설명하세요.",
		keywords: ["가상화", "하이퍼바이저", "운영체제", "자원 관리"],
		answer: {
			mainPoints: [
				"운영체제는 하이퍼바이저를 통해 가상 머신을 관리한다.",
				"하이퍼바이저는 물리적 자원을 가상화하여 VM에 할당한다.",
				"운영체제는 VM 내에서 실행되며, 하이퍼바이저의 제어를 받는다.",
				"가상화는 자원 활용도를 높이고, 격리와 보안을 제공한다.",
			],
			explanation: `
운영체제는 가상화 환경에서 다음과 같은 역할을 한다:

- 하이퍼바이저: 물리적 자원을 가상화하여 VM에 할당하고, VM 간의 자원 경쟁을 관리한다.
- 게스트 OS: VM 내에서 실행되는 운영체제로, 하이퍼바이저가 제공하는 가상 자원을 사용한다.
- 호스트 OS: 하이퍼바이저가 실행되는 운영체제로, 타입 2 하이퍼바이저의 경우 호스트 OS 위에서 실행된다.

가상화를 통해 여러 운영체제를 동시에 실행하거나, 애플리케이션을 격리하여 실행할 수 있다.
			`,
			examples: [
				"예시: VMware ESXi에서 여러 VM 실행",
				"예시: VirtualBox에서 윈도우와 리눅스 VM 실행",
			],
			codeExample: `
	// VM 생성 (의사 코드)
	vm = create_vm("ubuntu", 2, 4096); // 2 CPU, 4GB RAM
	start_vm(vm);
			`,
		},
	},
	{
		id: "os-024",
		categoryId: 3,
		title: "운영체제의 로드 밸런싱 기능을 설명하세요.",
		description:
			"로드 밸런싱의 필요성과 운영체제에서의 구현 방식을 설명하세요.",
		keywords: ["로드 밸런싱", "자원 관리", "스케줄링", "분산 시스템"],
		answer: {
			mainPoints: [
				"로드 밸런싱은 시스템의 작업 부하를 고르게 분배하여 성능을 최적화한다.",
				"CPU 로드 밸런싱: 여러 CPU 코어 간에 프로세스를 분배한다.",
				"네트워크 로드 밸런싱: 네트워크 트래픽을 여러 서버에 분산한다.",
				"운영체제는 스케줄러와 디스패처를 통해 로드 밸런싱을 구현한다.",
			],
			explanation: `
로드 밸런싱은 시스템 자원을 효율적으로 사용하기 위해 작업을 분배한다:

- CPU 로드 밸런싱: 멀티코어 시스템에서 프로세스를 코어에 할당하여 CPU 사용률을 균등하게 한다.
- 네트워크 로드 밸런싱: 웹 서버 등에서 들어오는 요청을 여러 서버에 분산하여 처리한다.

운영체제는 스케줄러를 통해 CPU 시간을 공평하게 할당하고, 디스패처를 통해 프로세스를 실행 가능한 CPU에 할당한다. 또한, 클러스터 시스템에서는 작업을 여러 노드에 분산한다.
			`,
			examples: [
				"예시: 웹 서버 팜에서 로드 밸런서를 통해 요청 분배",
				"예시: 리눅스의 CFS(Completely Fair Scheduler)로 CPU 시간 분배",
			],
			codeExample: `
	// 로드 밸런싱 의사 코드
	select_cpu_with_lowest_load()
	assign_process_to_cpu(process, cpu)
			`,
		},
	},
	{
		id: "os-025",
		categoryId: 3,
		title: "운영체제의 오류 처리 메커니즘을 설명하세요.",
		description: "운영체제가 오류를 감지하고 처리하는 방식을 설명하세요.",
		keywords: ["오류 처리", "예외", "시그널", "로그"],
		answer: {
			mainPoints: [
				"운영체제는 하드웨어와 소프트웨어 오류를 감지하고 처리한다.",
				"예외: 프로그램 실행 중 발생한 오류(예: 0으로 나누기).",
				"시그널: 프로세스에 이벤트 발생을 알리는 메커니즘.",
				"로그: 시스템 이벤트를 기록하여 오류 분석에 사용.",
			],
			explanation: `
운영체제는 다음과 같은 오류 처리 메커니즘을 제공한다:

- 예외 처리: CPU가 오류를 감지하면 운영체제에 통지하고, 운영체제는 적절한 예외 핸들러를 호출한다.
- 시그널: 프로세스에 특정 이벤트(예: SIGINT, SIGSEGV)를 전달하여 처리하도록 한다.
- 로그: 시스템 로그를 통해 오류와 이벤트를 기록하고, 이를 통해 문제를 진단한다.

이러한 메커니즘은 시스템의 안정성과 신뢰성을 높인다.
			`,
			examples: [
				"예시: 리눅스에서 Segmentation Fault 발생 시 프로세스 종료",
				"예시: 윈도우의 이벤트 뷰어를 통한 오류 로그 확인",
			],
			codeExample: `
	// 시그널 처리 (C)
	#include <signal.h>
	void handler(int signum) {
		// 시그널 처리
	}
	signal(SIGINT, handler);
			`,
		},
	},
	{
		id: "os-026",
		categoryId: 3,
		title: "운영체제의 커널 모드와 사용자 모드의 차이점을 설명하세요.",
		description: "커널 모드와 사용자 모드의 개념과 전환 과정을 설명하세요.",
		keywords: ["커널 모드", "사용자 모드", "권한", "시스템 콜"],
		answer: {
			mainPoints: [
				"커널 모드는 운영체제 커널이 실행되는 모드로, 모든 자원에 접근할 수 있다.",
				"사용자 모드는 애플리케이션이 실행되는 모드로, 제한된 자원에만 접근할 수 있다.",
				"시스템 콜을 통해 사용자 모드에서 커널 모드로 전환된다.",
				"모드 전환은 하드웨어 지원을 받아 이루어진다.",
			],
			explanation: `
운영체제는 두 가지 실행 모드를 가진다:

- 커널 모드: 운영체제 커널이 실행되며, 하드웨어 자원에 직접 접근할 수 있다. 특권 명령어를 사용할 수 있다.
- 사용자 모드: 애플리케이션이 실행되며, 메모리와 CPU 등 제한된 자원에만 접근할 수 있다.

사용자 모드에서 커널 모드로의 전환은 시스템 콜, 인터럽트, 예외 등을 통해 이루어지며, 이는 CPU의 특권 레벨을 변경하여 보안을 유지한다.
			`,
			examples: [
				"예시: 파일 열기 시스템 콜 -> 사용자 모드에서 커널 모드로 전환",
				"예시: 인터럽트 발생 -> 커널 모드로 전환하여 ISR 실행",
			],
			codeExample: `
	// 시스템 콜 (의사 코드)
	int fd = open("file.txt", O_RDONLY); // 사용자 모드에서 커널 모드로 전환
			`,
		},
	},
	{
		id: "os-027",
		categoryId: 3,
		title: "운영체제의 프로세스 상태를 설명하세요.",
		description:
			"프로세스의 생성, 준비, 실행, 대기, 종료 등의 상태를 설명하세요.",
		keywords: ["프로세스 상태", "생성", "준비", "실행", "대기", "종료"],
		answer: {
			mainPoints: [
				"생성(New): 프로세스가 생성되고 초기화된다.",
				"준비(Ready): CPU 할당을 기다린다.",
				"실행(Running): CPU를 할당받아 실행 중이다.",
				"대기(Waiting): I/O나 이벤트 대기 중이다.",
				"종료(Terminated): 실행을 완료하거나 종료된다.",
			],
			explanation: `
프로세스는 다음과 같은 상태를 가진다:

- 생성: 프로세스가 생성되고, PCB가 할당된다.
- 준비: CPU를 기다리는 상태로, 스케줄러에 의해 선택될 수 있다.
- 실행: CPU를 할당받아 명령어를 실행한다.
- 대기: I/O 작업이나 특정 이벤트가 완료되기를 기다린다.
- 종료: 실행을 마치거나, 강제 종료된다.

프로세스는 상태 간 전이를 통해 관리되며, 운영체제는 이를 통해 자원을 효율적으로 할당한다.
			`,
			examples: [
				"예시: 웹 브라우저가 실행 중일 때, HTML 파싱(실행), 이미지 로딩(대기) 등",
				"예시: 프로세스가 종료되면 자원이 해제됨",
			],
			codeExample: `
	// 프로세스 상태 전이 의사 코드
	if (process.state == READY && scheduler.select(process)) {
		process.state = RUNNING;
	}
			`,
		},
	},
	{
		id: "os-028",
		categoryId: 3,
		title: "운영체제의 메모리 계층 구조를 설명하세요.",
		description:
			"레지스터, 캐시, 메인 메모리, 보조 기억 장치 등의 메모리 계층을 설명하세요.",
		keywords: [
			"메모리 계층",
			"레지스터",
			"캐시",
			"메인 메모리",
			"보조 기억 장치",
		],
		answer: {
			mainPoints: [
				"레지스터: CPU 내부의 초고속 메모리.",
				"캐시: CPU와 메인 메모리 간의 속도 차이를 완화한다.",
				"메인 메모리: 실행 중인 프로그램과 데이터를 저장한다.",
				"보조 기억 장치: 대용량 데이터를 장기 저장한다.",
			],
			explanation: `
메모리 계층 구조는 속도와 용량의 균형을 맞추기 위해 설계되었다:

- 레지스터: CPU 내부에 위치하며, 가장 빠른 메모리로, 연산에 필요한 데이터를 저장한다.
- 캐시: CPU와 메인 메모리 사이에 위치하며, 자주 사용되는 데이터를 저장하여 접근 시간을 단축한다.
- 메인 메모리: RAM으로, 실행 중인 프로그램과 데이터를 저장한다.
- 보조 기억 장치: 하드 디스크, SSD 등으로, 대용량 데이터를 저장한다.

운영체제는 이러한 메모리 계층을 관리하여 효율적인 데이터 접근을 지원한다.
			`,
			examples: [
				"예시: CPU가 레지스터에서 피연산자를 로드하여 연산 수행",
				"예시: 캐시 미스 시 메인 메모리에서 데이터 로드",
			],
			codeExample: `
	// 메모리 접근 의사 코드
	data = load_from_cache(address)
	if (data == NULL) {
		data = load_from_memory(address)
	}
			`,
		},
	},
	{
		id: "os-029",
		categoryId: 3,
		title: "운영체제의 시스템 콜을 설명하세요.",
		description: "시스템 콜의 개념과 운영체제와의 상호작용을 설명하세요.",
		keywords: ["시스템 콜", "운영체제", "API", "커널"],
		answer: {
			mainPoints: [
				"시스템 콜은 운영체제의 서비스를 요청하는 인터페이스이다.",
				"사용자 모드에서 커널 모드로 전환하여 실행된다.",
				"파일 I/O, 프로세스 관리, 네트워크 통신 등을 제공한다.",
				"운영체제는 시스템 콜을 통해 하드웨어와의 상호작용을 추상화한다.",
			],
			explanation: `
시스템 콜은 애플리케이션이 운영체제의 기능을 사용할 수 있도록 하는 메커니즘이다. 예를 들어, 파일을 열거나, 메모리를 할당하거나, 네트워크 소켓을 생성하는 등의 작업을 시스템 콜을 통해 수행한다.

시스템 콜이 호출되면, CPU는 사용자 모드에서 커널 모드로 전환하고, 운영체제의 커널이 요청을 처리한다. 처리가 완료되면, 결과를 반환하고 사용자 모드로 돌아간다.

시스템 콜은 운영체제의 API 역할을 하며, 애플리케이션과 하드웨어 간의 추상화를 제공한다.
			`,
			examples: [
				"예시: open(), read(), write() 시스템 콜로 파일 조작",
				"예시: fork(), exec()로 프로세스 생성 및 실행",
			],
			codeExample: `
	// 시스템 콜 사용 (C)
	int fd = open("file.txt", O_RDONLY);
	char buffer[1024];
	read(fd, buffer, 1024);
	close(fd);
			`,
		},
	},
	{
		id: "os-030",
		categoryId: 3,
		title: "운영체제의 커널 구조를 설명하세요.",
		description:
			"모놀리식 커널, 마이크로 커널, 하이브리드 커널의 차이점을 설명하세요.",
		keywords: ["커널", "모놀리식", "마이크로", "하이브리드"],
		answer: {
			mainPoints: [
				"모놀리식 커널: 모든 운영체제 기능이 하나의 커널 공간에서 실행된다.",
				"마이크로 커널: 최소한의 기능만 커널에 두고, 나머지는 사용자 공간에서 실행된다.",
				"하이브리드 커널: 모놀리식과 마이크로 커널의 장점을 결합한다.",
				"모놀리식은 성능이 좋지만 유지보수가 어렵고, 마이크로 커널은 유연하지만 성능이 떨어질 수 있다.",
			],
			explanation: `
운영체제 커널은 다음과 같은 구조를 가질 수 있다:

- 모놀리식 커널: 모든 운영체제 서비스(메모리 관리, 프로세스 관리, 장치 드라이버 등)가 커널 공간에서 실행된다. 성능은 좋지만, 버그나 오류가 전체 시스템에 영향을 미칠 수 있다.
- 마이크로 커널: 최소한의 기능(IPC, 기본 스케줄링 등)만 커널에 두고, 나머지 서비스는 사용자 공간에서 실행된다. 이는 유연성과 안정성을 높이지만, 커널과 사용자 공간 간의 통신 오버헤드가 있다.
- 하이브리드 커널: 모놀리식과 마이크로 커널의 장점을 결합하여, 일부 서비스는 커널 공간에서, 나머지는 사용자 공간에서 실행된다.

대표적인 예로는 리눅스(모놀리식), Minix(마이크로), Windows(하이브리드)가 있다.
			`,
			examples: [
				"모놀리식 커널 예시: 리눅스",
				"마이크로 커널 예시: QNX",
				"하이브리드 커널 예시: Windows NT",
			],
			codeExample: `
	// 커널 모듈 로딩 (리눅스)
	sudo insmod my_module.ko
			`,
		},
	},
]
