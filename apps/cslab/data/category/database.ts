import { Question } from "../questions"

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
		answer: {
			mainPoints: [
				"정규화는 데이터 중복을 줄이고 무결성을 보장하기 위한 설계 기법이다.",
				"제1정규형(1NF): 모든 속성이 원자 값을 가져야 한다.",
				"제2정규형(2NF): 1NF를 만족하며, 비기본 속성이 기본 키에 완전히 함수적으로 종속되어야 한다.",
				"제3정규형(3NF): 2NF를 만족하며, 비기본 속성이 기본 키에만 종속되고 다른 비기본 속성에 종속되지 않아야 한다.",
			],
			explanation: `정규화는 데이터베이스의 효율성과 무결성을 높이기 위해 데이터를 체계적으로 조직하는 과정이다. 제1정규형은 다중 값을 удал제거하고, 제2정규형은 부분적 종속성을 제거하며, 제3정규형은 이행적 종속성을 제거한다. 이를 통해 삽입, 삭제, 갱신 이상을 방지할 수 있다.`,
		},
	},
	{
		id: "db-002",
		categoryId: 5,
		title: "ACID 원칙이란 무엇이며 각각에 대해 설명해보세요.",
		description:
			"트랜잭션의 ACID 특성(원자성, 일관성, 독립성, 지속성)에 대해 자세히 설명하세요.",
		keywords: ["ACID", "트랜잭션", "원자성", "일관성", "독립성", "지속성"],
		answer: {
			mainPoints: [
				"원자성(Atomicity): 트랜잭션의 모든 연산이 완료되거나 전혀 실행되지 않아야 한다.",
				"일관성(Consistency): 트랜잭션 완료 후 데이터베이스가 일관된 상태를 유지해야 한다.",
				"독립성(Isolation): 트랜잭션은 다른 트랜잭션과 독립적으로 실행되어야 한다.",
				"지속성(Durability): 완료된 트랜잭션의 결과는 영구적으로 저장되어야 한다.",
			],
			explanation: `ACID 원칙은 트랜잭션의 신뢰성을 보장하는 핵심 특성이다. 원자성은 부분 실행을 방지하고, 일관성은 데이터 무결성을 유지하며, 독립성은 동시 실행의 간섭을 막고, 지속성은 시스템 장애에도 데이터를 보존한다.`,
		},
	},
	{
		id: "db-003",
		categoryId: 5,
		title: "인덱스의 역할과 B-트리 인덱스의 동작 원리를 설명하세요.",
		description:
			"데이터베이스에서 인덱스가 성능에 미치는 영향과 B-트리 구조의 작동 방식을 설명하세요.",
		keywords: ["인덱스", "B-트리", "성능 최적화", "쿼리 처리"],
		answer: {
			mainPoints: [
				"인덱스는 데이터 검색 속도를 높이기 위한 자료구조다.",
				"B-트리는 균형 트리로, 검색, 삽입, 삭제 연산을 효율적으로 처리한다.",
				"인덱스는 저장 공간을 추가로 사용하며, 쓰기 성능에 영향을 줄 수 있다.",
			],
			explanation: `인덱스는 데이터베이스에서 쿼리 성능을 향상시키기 위해 사용된다. B-트리 인덱스는 각 노드가 여러 키를 가지며, 균형을 유지해 O(log n)의 시간 복잡도로 검색을 수행한다. 하지만 인덱스 유지 관리로 인해 쓰기 작업이 느려질 수 있다.`,
		},
	},
	{
		id: "db-004",
		categoryId: 5,
		title: "JOIN 연산의 종류와 각각의 차이점을 설명하세요.",
		description:
			"INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN의 차이와 사용 사례를 설명하세요.",
		keywords: ["JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
		answer: {
			mainPoints: [
				"INNER JOIN: 두 테이블에서 조건을 만족하는 행만 반환한다.",
				"LEFT JOIN: 왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치하는 행을 반환한다.",
				"RIGHT JOIN: 오른쪽 테이블의 모든 행과 왼쪽 테이블의 일치하는 행을 반환한다.",
				"FULL JOIN: 양쪽 테이블의 모든 행을 반환하며, 일치하지 않는 경우 NULL을 포함한다.",
			],
			explanation: `JOIN 연산은 테이블 간 데이터를 결합하는 데 사용된다. INNER JOIN은 공통 데이터만 필요할 때, LEFT/RIGHT JOIN은 한쪽 테이블의 모든 데이터를 보존할 때, FULL JOIN은 양쪽 모두를 포함할 때 유용하다.`,
		},
	},
	{
		id: "db-005",
		categoryId: 5,
		title: "트랜잭션 격리 수준의 종류와 발생 가능한 문제를 설명하세요.",
		description:
			"트랜잭션 격리 수준(READ UNCOMMITTED, READ COMMITTED 등)과 더티 리드, 팬텀 리드 등의 문제를 설명하세요.",
		keywords: ["트랜잭션", "격리 수준", "더티 리드", "팬텀 리드", "동시성"],
		answer: {
			mainPoints: [
				"READ UNCOMMITTED: 커밋되지 않은 데이터를 읽을 수 있어 더티 리드가 발생한다.",
				"READ COMMITTED: 커밋된 데이터만 읽지만, 비반복적 읽기가 발생할 수 있다.",
				"REPEATABLE READ: 동일 트랜잭션 내 동일 데이터 읽기를 보장하나, 팬텀 리드가 발생할 수 있다.",
				"SERIALIZABLE: 모든 트랜잭션이 순차적으로 실행된 것처럼 동작해 문제가 없다.",
			],
			explanation: `격리 수준은 트랜잭션 간 간섭을 제어한다. 낮은 격리 수준은 성능은 좋지만 더티 리드, 비반복적 읽기, 팬텀 리드 같은 동시성 문제를 일으킬 수 있다. SERIALIZABLE은 가장 엄격하지만 성능이 낮아질 수 있다.`,
		},
	},
	{
		id: "db-006",
		categoryId: 5,
		title:
			"NoSQL 데이터베이스의 특징과 SQL 데이터베이스와의 차이점은 무엇인가요?",
		description:
			"NoSQL의 주요 특징과 SQL 데이터베이스와의 설계 및 사용 사례 차이를 설명하세요.",
		keywords: ["NoSQL", "SQL", "스키마", "확장성", "비정형 데이터"],
		answer: {
			mainPoints: [
				"NoSQL은 스키마가 유연하고 비정형 데이터를 처리한다.",
				"SQL은 고정된 스키마와 관계형 구조를 사용한다.",
				"NoSQL은 수평적 확장이 용이하고, SQL은 수직적 확장이 일반적이다.",
			],
			explanation: `NoSQL 데이터베이스는 대규모 비정형 데이터와 확장성을 위해 설계되었다. SQL은 데이터 무결성과 복잡한 쿼리에 적합하다. NoSQL은 키-값, 문서, 그래프 등 다양한 모델을 제공하며, SQL은 표준화된 테이블 구조를 사용한다.`,
		},
	},
	{
		id: "db-007",
		categoryId: 5,
		title: "데이터베이스 락의 종류와 데드락 발생 원인을 설명하세요.",
		description: "공유 락, 배타 락의 역할과 데드락 발생 메커니즘을 설명하세요.",
		keywords: ["락", "데드락", "공유 락", "배타 락", "동시성 제어"],
		answer: {
			mainPoints: [
				"공유 락: 읽기 작업을 허용하며 여러 트랜잭션이 동시에 접근 가능하다.",
				"배타 락: 읽기/쓰기를 제한하며 단일 트랜잭션만 접근 가능하다.",
				"데드락: 두 트랜잭션이 서로의 락을 기다리며 교착 상태에 빠진다.",
			],
			explanation: `락은 동시성 제어를 위해 사용된다. 공유 락은 읽기 충돌을 방지하고, 배타 락은 쓰기 충돌을 방지한다. 데드락은 상호 락 대기로 발생하며, 타임아웃이나 락 우선순위로 해결할 수 있다.`,
		},
	},
	{
		id: "db-008",
		categoryId: 5,
		title: "샤딩과 파티셔닝의 차이점은 무엇인가요?",
		description:
			"데이터베이스 확장 전략으로서 샤딩과 파티셔닝의 개념과 차이를 설명하세요.",
		keywords: ["샤딩", "파티셔닝", "스케일링", "데이터 분할"],
		answer: {
			mainPoints: [
				"샤딩: 데이터를 여러 서버에 분산 저장한다.",
				"파티셔닝: 단일 서버 내에서 데이터를 논리적으로 분할한다.",
				"샤딩은 수평적 확장, 파티셔닝은 성능 최적화에 초점을 둔다.",
			],
			explanation: `샤딩은 데이터베이스를 여러 노드에 나누어 확장성을 높이고, 파티셔닝은 단일 데이터베이스 내에서 데이터를 분할해 쿼리 성능을 개선한다. 샤딩은 복잡한 관리, 파티셔닝은 간단한 구현이 특징이다.`,
		},
	},
	{
		id: "db-009",
		categoryId: 5,
		title: "쿼리 실행 계획이란 무엇이며 어떻게 최적화하나요?",
		description:
			"쿼리 실행 계획의 역할과 이를 분석해 쿼리를 최적화하는 방법을 설명하세요.",
		keywords: ["쿼리 실행 계획", "최적화", "인덱스", "쿼리 성능"],
		answer: {
			mainPoints: [
				"쿼리 실행 계획은 DBMS가 쿼리를 실행하는 단계를 보여준다.",
				"인덱스 추가, 쿼리 재작성, 통계 업데이트로 최적화 가능하다.",
				"비용 기반 분석으로 비효율적인 작업을 식별한다.",
			],
			explanation: `쿼리 실행 계획은 쿼리 처리 경로를 시각화해 성능 병목을 찾는다. 인덱스 활용, 조인 순서 조정, 불필요한 데이터 스캔 제거 등을 통해 실행 시간을 단축할 수 있다.`,
		},
	},
	{
		id: "db-010",
		categoryId: 5,
		title: "OLTP와 OLAP의 차이점은 무엇인가요?",
		description:
			"온라인 트랜잭션 처리(OLTP)와 온라인 분석 처리(OLAP)의 목적과 구조적 차이를 설명하세요.",
		keywords: ["OLTP", "OLAP", "트랜잭션", "분석", "데이터베이스 설계"],
		answer: {
			mainPoints: [
				"OLTP: 실시간 트랜잭션 처리에 최적화, 짧고 빈번한 쿼리.",
				"OLAP: 대규모 데이터 분석에 최적화, 복잡하고 긴 쿼리.",
				"OLTP는 정규화, OLAP는 비정규화된 설계를 선호한다.",
			],
			explanation: `OLTP는 주문 처리, 결제 등 즉각적인 데이터 작업을 지원하고, OLAP는 보고서 생성, 데이터 마이닝 같은 분석 작업에 사용된다. OLTP는 빠른 쓰기, OLAP는 빠른 읽기에 초점을 둔다.`,
		},
	},
	{
		id: "db-011",
		categoryId: 5,
		title: "외래 키 제약 조건의 역할과 장단점은 무엇인가요?",
		description:
			"외래 키의 정의, 데이터 무결성 보장 역할, 그리고 사용 시 고려할 점을 설명하세요.",
		keywords: ["외래 키", "데이터 무결성", "제약 조건", "참조 무결성"],
		answer: {
			mainPoints: [
				"외래 키는 테이블 간 참조 무결성을 보장한다.",
				"장점: 데이터 일관성 유지, 관계 명확화.",
				"단점: 성능 저하, 복잡한 관리.",
			],
			explanation: `외래 키는 한 테이블의 값이 다른 테이블의 기본 키를 참조하도록 강제한다. 이는 데이터 신뢰성을 높이지만, 삽입/삭제 시 추가 검증으로 성능에 영향을 줄 수 있다.`,
		},
	},
	{
		id: "db-012",
		categoryId: 5,
		title: "뷰(View)와 물리적 테이블의 차이점은 무엇인가요?",
		description:
			"데이터베이스 뷰의 개념, 용도, 그리고 물리적 테이블과의 차이를 설명하세요.",
		keywords: ["뷰", "가상 테이블", "쿼리", "데이터 추상화"],
		answer: {
			mainPoints: [
				"뷰는 쿼리 결과를 가상 테이블로 표현한다.",
				"물리적 테이블은 실제 데이터를 저장한다.",
				"뷰는 보안과 쿼리 단순화를 위해 사용된다.",
			],
			explanation: `뷰는 데이터를 저장하지 않고 쿼리 실행 결과를 보여주며, 복잡한 쿼리를 단순화하거나 민감 데이터를 제한한다. 물리적 테이블은 디스크에 데이터를 직접 저장한다.`,
		},
	},
	{
		id: "db-013",
		categoryId: 5,
		title: "CAP 정리의 개념과 데이터베이스에서의 적용 사례를 설명하세요.",
		description:
			"CAP 정리(일관성, 가용성, 분할 내성)의 정의와 분산 데이터베이스에서의 적용을 설명하세요.",
		keywords: ["CAP 정리", "일관성", "가용성", "분할 내성", "분산 시스템"],
		answer: {
			mainPoints: [
				"CAP 정리: 일관성, 가용성, 분할 내성 중 두 가지만 보장 가능.",
				"CP 시스템: 일관성과 분할 내성을 우선, 예: HBase.",
				"AP 시스템: 가용성과 분할 내성을 우선, 예: Cassandra.",
			],
			explanation: `CAP 정리는 분산 시스템에서 세 가지 특성을 모두 충족할 수 없음을 나타낸다. 네트워크 분할 시 CP는 데이터 정확성을, AP는 서비스 가용성을 우선시한다.`,
		},
	},
	{
		id: "db-014",
		categoryId: 5,
		title: "데이터베이스 트리거의 역할과 사용 사례를 설명하세요.",
		description:
			"트리거의 정의와 데이터베이스 작업 자동화에서의 사용 사례를 설명하세요.",
		keywords: ["트리거", "이벤트", "자동화", "데이터 무결성"],
		answer: {
			mainPoints: [
				"트리거는 특정 이벤트에 자동으로 실행되는 코드다.",
				"사용 사례: 데이터 무결성 유지, 감사 로그 생성.",
				"INSERT, UPDATE, DELETE 시 실행될 수 있다.",
			],
			explanation: `트리거는 데이터 변경 시 자동으로 작업을 수행해 무결성을 보장하거나 로깅을 처리한다. 예를 들어, 주문 삽입 시 재고를 자동 업데이트할 수 있다.`,
		},
	},
	{
		id: "db-015",
		categoryId: 5,
		title: "RDBMS와 키-값 스토어의 차이점은 무엇인가요?",
		description:
			"관계형 데이터베이스와 키-값 스토어의 구조적, 성능적 차이를 설명하세요.",
		keywords: ["RDBMS", "키-값 스토어", "NoSQL", "데이터 모델"],
		answer: {
			mainPoints: [
				"RDBMS: 테이블 기반, 스키마 고정, 복잡한 쿼리 지원.",
				"키-값 스토어: 단순 키-값 쌍, 스키마 유연, 빠른 읽기/쓰기.",
				"RDBMS는 무결성, 키-값은 확장성에 강하다.",
			],
			explanation: `RDBMS는 정규화된 데이터와 조인을 지원하며, 키-값 스토어는 단순한 구조로 빠른 성능을 제공한다. Redis는 키-값, MySQL은 RDBMS의 대표 예이다.`,
		},
	},
	{
		id: "db-016",
		categoryId: 5,
		title: "데이터베이스 복제의 종류와 장단점을 설명하세요.",
		description:
			"마스터-슬레이브, 마스터-마스터 복제 방식의 특징과 사용 시 고려 사항을 설명하세요.",
		keywords: ["복제", "마스터-슬레이브", "마스터-마스터", "고가용성"],
		answer: {
			mainPoints: [
				"마스터-슬레이브: 마스터가 쓰기, 슬레이브가 읽기를 처리.",
				"마스터-마스터: 양쪽 모두 쓰기/읽기 가능.",
				"마스터-슬레이브는 단순, 마스터-마스터는 충돌 관리 필요.",
			],
			explanation: `복제는 데이터 가용성과 부하 분산을 위해 사용된다. 마스터-슬레이브는 읽기 확장에 유리하고, 마스터-마스터는 고가용성을 제공하지만 동기화가 복잡하다.`,
		},
	},
	{
		id: "db-017",
		categoryId: 5,
		title: "SQL 인젝션이란 무엇이며 방지 방법은 무엇인가요?",
		description:
			"SQL 인젝션 공격의 원리와 이를 방지하기 위한 모범 사례를 설명하세요.",
		keywords: ["SQL 인젝션", "보안", "매개변수화 쿼리", "입력 검증"],
		answer: {
			mainPoints: [
				"SQL 인젝션: 악성 쿼리를 삽입해 데이터베이스를 조작.",
				"방지법: 매개변수화 쿼리 사용, 입력 검증 강화.",
				"ORM과 방화벽도 보안에 기여한다.",
			],
			explanation: `SQL 인젝션은 사용자 입력을 쿼리에 직접 삽입할 때 발생한다. 매개변수화 쿼리는 입력을 분리해 공격을 차단하며, 입력 검증은 추가적인 보호를 제공한다.`,
		},
	},
	{
		id: "db-018",
		categoryId: 5,
		title: "데이터베이스 백업의 종류와 전략을 설명하세요.",
		description:
			"전체 백업, 증분 백업, 차등 백업의 차이와 효과적인 백업 전략을 설명하세요.",
		keywords: ["백업", "전체 백업", "증분 백업", "복구"],
		answer: {
			mainPoints: [
				"전체 백업: 모든 데이터를 백업, 복구 속도 빠름.",
				"증분 백업: 마지막 백업 이후 변경분만, 저장 공간 절약.",
				"차등 백업: 마지막 전체 백업 이후 변경분, 복구 간단.",
			],
			explanation: `백업은 데이터 손실 방지를 위해 필수적이다. 전체 백업은 주기적으로, 증분/차등 백업은 빈번히 수행해 저장 공간과 복구 시간을 최적화한다.`,
		},
	},
	{
		id: "db-019",
		categoryId: 5,
		title: "ORM의 개념과 장단점은 무엇인가요?",
		description:
			"객체-관계 매핑(ORM)의 정의와 사용 시 이점 및 한계를 설명하세요.",
		keywords: ["ORM", "객체-관계 매핑", "데이터베이스 추상화", "쿼리 생성"],
		answer: {
			mainPoints: [
				"ORM은 객체와 데이터베이스 간 매핑을 자동화한다.",
				"장점: 개발 생산성 향상, 코드 간소화.",
				"단점: 복잡한 쿼리에서 성능 저하 가능.",
			],
			explanation: `ORM은 SQL 없이 객체 지향 방식으로 데이터를 다룬다. Hibernate, Django ORM 등이 대표적이며, 간단한 작업에 유리하지만 최적화가 어려운 경우가 있다.`,
		},
	},
	{
		id: "db-020",
		categoryId: 5,
		title: "그래프 데이터베이스의 특징과 사용 사례를 설명하세요.",
		description:
			"그래프 데이터베이스의 구조적 특징과 소셜 네트워크, 추천 시스템 등에서의 활용을 설명하세요.",
		keywords: ["그래프 데이터베이스", "노드", "엣지", "NoSQL"],
		answer: {
			mainPoints: [
				"그래프 DB는 노드와 엣지로 관계를 표현한다.",
				"관계 중심 데이터 처리에 최적화.",
				"사용 사례: 소셜 네트워크, 추천 엔진.",
			],
			explanation: `그래프 데이터베이스는 관계를 직접 모델링해 복잡한 연결 탐색이 빠르다. Neo4j 같은 시스템은 친구 관계 분석, 사기 탐지 등에 활용된다.`,
		},
	},
	{
		id: "db-021",
		categoryId: 5,
		title: "데이터베이스에서 MVCC란 무엇인가요?",
		description:
			"다중 버전 동시성 제어(MVCC)의 개념과 동시성 관리에서의 역할을 설명하세요.",
		keywords: ["MVCC", "동시성", "버전 관리", "트랜잭션"],
		answer: {
			mainPoints: [
				"MVCC는 데이터의 여러 버전을 유지해 동시성을 높인다.",
				"읽기와 쓰기 간 충돌을 최소화.",
				"대표적 구현: PostgreSQL, Oracle.",
			],
			explanation: `MVCC는 트랜잭션마다 데이터 스냅샷을 제공해 읽기 작업이 쓰기를 차단하지 않도록 한다. 이는 동시성을 높이지만 저장 공간을 더 사용할 수 있다.`,
		},
	},
	{
		id: "db-022",
		categoryId: 5,
		title: "인메모리 데이터베이스의 장점과 한계는 무엇인가요?",
		description:
			"인메모리 데이터베이스의 특징과 기존 디스크 기반 DB와의 차이를 설명하세요.",
		keywords: ["인메모리", "데이터베이스", "속도", "휘발성"],
		answer: {
			mainPoints: [
				"장점: 메모리 사용으로 초고속 데이터 처리.",
				"단점: 데이터 휘발성, 메모리 비용.",
				"Redis, SAP HANA 등이 대표적.",
			],
			explanation: `인메모리 데이터베이스는 디스크 I/O를 제거해 빠른 성능을 제공한다. 하지만 정전 시 데이터 손실 위험이 있고, 메모리 용량 제한이 있다.`,
		},
	},
	{
		id: "db-023",
		categoryId: 5,
		title: "데이터베이스 스키마 마이그레이션의 중요성과 도구를 설명하세요.",
		description:
			"스키마 마이그레이션의 필요성과 Flyway, Liquibase 같은 도구의 역할을 설명하세요.",
		keywords: [
			"스키마 마이그레이션",
			"데이터베이스 관리",
			"Flyway",
			"Liquibase",
		],
		answer: {
			mainPoints: [
				"스키마 마이그레이션은 DB 구조 변경을 관리한다.",
				"도구는 버전 관리와 자동 적용을 지원.",
				"Flyway, Liquibase는 대표적 도구.",
			],
			explanation: `스키마 마이그레이션은 애플리케이션 업데이트 시 데이터베이스 구조를 일관되게 유지한다. Flyway는 SQL 기반, Liquibase는 XML 기반으로 변경을 추적한다.`,
		},
	},
	{
		id: "db-024",
		categoryId: 5,
		title: "시계열 데이터베이스의 특징과 사용 사례를 설명하세요.",
		description:
			"시계열 데이터베이스의 구조와 IoT, 금융 데이터 분석에서의 활용을 설명하세요.",
		keywords: ["시계열", "데이터베이스", "타임스탬프", "NoSQL"],
		answer: {
			mainPoints: [
				"시계열 DB는 시간 기반 데이터를 최적화.",
				"타임스탬프 인덱싱으로 빠른 쿼리 제공.",
				"사용 사례: IoT 센서, 주식 거래 분석.",
			],
			explanation: `시계열 데이터베이스는 시간 순서 데이터를 효율적으로 저장하고 쿼리한다. InfluxDB, TimescaleDB는 센서 데이터, 모니터링 등에 적합하다.`,
		},
	},
	{
		id: "db-025",
		categoryId: 5,
		title: "데이터 웨어하우스와 데이터 마트의 차이점은 무엇인가요?",
		description:
			"데이터 웨어하우스와 데이터 마트의 목적, 구조, 규모의 차이를 설명하세요.",
		keywords: ["데이터 웨어하우스", "데이터 마트", "BI", "분석"],
		answer: {
			mainPoints: [
				"데이터 웨어하우스: 조직 전체 데이터를 통합.",
				"데이터 마트: 특정 부서나 주제에 초점.",
				"규모: 웨어하우스 > 마트.",
			],
			explanation: `데이터 웨어하우스는 전사적 분석을 위해 대규모 데이터를 저장하고, 데이터 마트는 특정 비즈니스 영역에 최적화된 부분 집합이다.`,
		},
	},
	{
		id: "db-026",
		categoryId: 5,
		title: "쿼리 캐싱의 역할과 구현 방법을 설명하세요.",
		description:
			"쿼리 캐싱이 데이터베이스 성능에 미치는 영향과 구현 전략을 설명하세요.",
		keywords: ["쿼리 캐싱", "성능 최적화", "캐시 무효화", "메모리"],
		answer: {
			mainPoints: [
				"쿼리 캐싱은 반복 쿼리 결과를 저장해 속도를 높인다.",
				"구현: 메모리 캐시(Redis) 또는 DB 내 캐싱.",
				"캐시 무효화 전략이 중요하다.",
			],
			explanation: `쿼리 캐싱은 동일 쿼리의 재실행을 피해 성능을 개선한다. Redis로 외부 캐싱하거나 MySQL 쿼리 캐시를 사용할 수 있다. 데이터 변경 시 캐시를 갱신해야 한다.`,
		},
	},
	{
		id: "db-027",
		categoryId: 5,
		title: "데이터베이스 클러스터링의 개념과 장점을 설명하세요.",
		description:
			"클러스터링의 정의와 고가용성, 부하 분산에서의 이점을 설명하세요.",
		keywords: ["클러스터링", "고가용성", "부하 분산", "확장성"],
		answer: {
			mainPoints: [
				"클러스터링은 여러 서버를 하나의 시스템처럼 운영.",
				"장점: 고가용성, 부하 분산, 확장성.",
				"복제와 샤딩을 결합할 수 있다.",
			],
			explanation: `클러스터링은 서버 장애 시에도 서비스를 유지하고 트래픽을 분산한다. MySQL Cluster, MongoDB 샤딩 등이 이를 구현한다.`,
		},
	},
	{
		id: "db-028",
		categoryId: 5,
		title: "하둡과 스파크의 데이터 처리 방식 차이를 설명하세요.",
		description:
			"하둡 맵리듀스와 스파크의 인메모리 처리 방식의 차이와 장점을 설명하세요.",
		keywords: ["하둡", "스파크", "빅데이터", "인메모리"],
		answer: {
			mainPoints: [
				"하둡: 디스크 기반 맵리듀스, 배치 처리.",
				"스파크: 인메모리 처리, 실시간 분석 가능.",
				"스파크가 하둡보다 속도가 빠르다.",
			],
			explanation: `하둡은 대규모 데이터를 안정적으로 처리하지만 디스크 I/O로 느리다. 스파크는 메모리를 활용해 반복 작업과 스트리밍에 강점이 있다.`,
		},
	},
	{
		id: "db-029",
		categoryId: 5,
		title: "ETL 프로세스의 단계와 중요성을 설명하세요.",
		description:
			"추출, 변환, 적재(ETL) 프로세스의 각 단계와 데이터 통합에서의 역할을 설명하세요.",
		keywords: ["ETL", "데이터 통합", "추출", "변환", "적재"],
		answer: {
			mainPoints: [
				"추출: 다양한 소스에서 데이터 가져오기.",
				"변환: 데이터 정제, 형식 변환.",
				"적재: 타겟 시스템에 데이터 저장.",
			],
			explanation: `ETL은 데이터 웨어하우스 구축의 핵심이다. 추출은 원본 데이터를 수집하고, 변환은 분석에 적합하게 가공하며, 적재는 최종 저장소에 로드한다.`,
		},
	},
	{
		id: "db-030",
		categoryId: 5,
		title: "데이터베이스에서 히스토리 테이블의 역할은 무엇인가요?",
		description:
			"히스토리 테이블의 용도와 데이터 변경 추적에서의 활용을 설명하세요.",
		keywords: ["히스토리 테이블", "데이터 추적", "감사", "버전 관리"],
		answer: {
			mainPoints: [
				"히스토리 테이블은 데이터 변경 기록을 저장.",
				"감사, 복구, 분석에 사용.",
				"타임스탬프와 변경 내용을 포함.",
			],
			explanation: `히스토리 테이블은 데이터의 과거 상태를 추적해 감사 로그나 롤백에 활용된다. 예를 들어, 사용자 정보 변경 시 이전 값을 기록한다.`,
		},
	},
	{
		id: "db-031",
		categoryId: 5,
		title: "데이터베이스 풀텍스트 검색의 개념과 구현 방법을 설명하세요.",
		description:
			"풀텍스트 검색의 특징과 MySQL, PostgreSQL에서의 구현 방식을 설명하세요.",
		keywords: ["풀텍스트 검색", "인덱싱", "검색 엔진", "쿼리"],
		answer: {
			mainPoints: [
				"풀텍스트 검색은 텍스트 데이터에서 키워드를 빠르게 찾는다.",
				"MySQL: FULLTEXT 인덱스 사용.",
				"PostgreSQL: tsvector와 tsquery 활용.",
			],
			explanation: `풀텍스트 검색은 대량 텍스트에서 효율적인 검색을 제공한다. MySQL은 FULLTEXT 인덱스로, PostgreSQL은 tsvector로 단어 기반 검색을 최적화한다.`,
		},
	},
	{
		id: "db-032",
		categoryId: 5,
		title: "데이터베이스에서 파티션 키와 클러스터링 키의 차이는 무엇인가요?",
		description:
			"파티션 키와 클러스터링 키의 역할과 데이터 분산, 정렬에서의 차이를 설명하세요.",
		keywords: ["파티션 키", "클러스터링 키", "NoSQL", "데이터 분산"],
		answer: {
			mainPoints: [
				"파티션 키: 데이터를 노드 간 분산.",
				"클러스터링 키: 파티션 내 데이터 정렬.",
				"Cassandra, DynamoDB에서 사용.",
			],
			explanation: `파티션 키는 데이터의 저장 위치를 결정하고, 클러스터링 키는 해당 파티션 내에서 데이터를 순서대로 저장해 쿼리 효율성을 높인다.`,
		},
	},
	{
		id: "db-033",
		categoryId: 5,
		title: "데이터베이스에서 스토어드 프로시저의 장점은 무엇인가요?",
		description:
			"스토어드 프로시저의 정의와 성능, 보안에서의 이점을 설명하세요.",
		keywords: ["스토어드 프로시저", "성능", "보안", "쿼리 재사용"],
		answer: {
			mainPoints: [
				"스토어드 프로시저는 DB 내 저장된 쿼리 집합.",
				"장점: 실행 속도 향상, 보안 강화.",
				"쿼리 재사용과 유지보수 용이.",
			],
			explanation: `스토어드 프로시저는 컴파일된 쿼리를 재사용해 성능을 높이고, 권한 제어로 보안을 강화한다. 복잡한 비즈니스 로직을 DB에서 처리할 수 있다.`,
		},
	},
	{
		id: "db-034",
		categoryId: 5,
		title: "데이터 레이크와 데이터 웨어하우스의 차이점은 무엇인가요?",
		description:
			"데이터 레이크와 데이터 웨어하우스의 구조, 용도, 데이터 처리 방식의 차이를 설명하세요.",
		keywords: ["데이터 레이크", "데이터 웨어하우스", "빅데이터", "분석"],
		answer: {
			mainPoints: [
				"데이터 레이크: 원시 데이터 저장, 스키마 유연.",
				"데이터 웨어하우스: 정형 데이터, 스키마 고정.",
				"레이크는 빅데이터, 웨어하우스는 BI에 적합.",
			],
			explanation: `데이터 레이크는 구조화되지 않은 데이터를 대규모로 저장하며, 데이터 웨어하우스는 분석용 정형 데이터를 최적화한다.`,
		},
	},
	{
		id: "db-035",
		categoryId: 5,
		title: "데이터베이스에서 쓰기 지연의 원인과 해결 방법을 설명하세요.",
		description:
			"쓰기 지연의 주요 원인과 이를 완화하기 위한 최적화 기법을 설명하세요.",
		keywords: ["쓰기 지연", "성능 최적화", "인덱스", "버퍼"],
		answer: {
			mainPoints: [
				"원인: 인덱스 유지, 락 충돌, 디스크 I/O.",
				"해결: 인덱스 최적화, 비동기 쓰기, 버퍼 사용.",
				"하드웨어 업그레이드도 효과적.",
			],
			explanation: `쓰기 지연은 과도한 인덱스나 동시 쓰기로 발생한다. 인덱스 수를 줄이고, 쓰기 버퍼를 활용하거나 SSD를 사용해 지연을 줄일 수 있다.`,
		},
	},
]
