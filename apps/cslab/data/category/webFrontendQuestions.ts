import { Question } from "../questions"

export const webFrontendQuestions: Question[] = [
	{
		id: "front-001",
		categoryId: 6,
		title: "자바스크립트 변수와 상수의 차이",
		description:
			"var, let, const의 사용법 및 변수와 상수의 차이에 대해 설명하세요.",
		keywords: ["자바스크립트", "변수", "상수"],
		answer: {
			mainPoints: [
				"var는 함수 스코프",
				"let과 const는 블록 스코프",
				"const는 재할당 불가",
			],
			explanation:
				"자바스크립트에서 var는 함수 레벨 스코프를 가지며, let과 const는 블록 레벨 스코프를 갖습니다. const로 선언된 변수는 초기 할당 후 재할당이 불가능합니다.",
		},
	},
	{
		id: "front-002",
		categoryId: 6,
		title: "자바스크립트 데이터 타입의 종류",
		description:
			"자바스크립트에서 지원하는 기본 데이터 타입과 참조 타입에 대해 설명하세요.",
		keywords: ["자바스크립트", "데이터타입"],
		answer: {
			mainPoints: [
				"원시 타입: string, number, boolean, null, undefined, symbol, bigint",
				"참조 타입: 객체, 배열, 함수",
			],
			explanation:
				"자바스크립트에는 변경 불가능한 원시 타입과, 객체, 배열 등과 같이 참조로 관리되는 데이터 타입이 존재합니다.",
		},
	},
	{
		id: "front-003",
		categoryId: 6,
		title: "함수 선언문과 함수 표현식의 차이",
		description:
			"함수 선언문과 함수 표현식의 차이점을 비교하고, 호이스팅에 대해 설명하세요.",
		keywords: ["자바스크립트", "함수", "호이스팅"],
		answer: {
			mainPoints: ["함수 선언은 호이스팅 됨", "표현식은 변수 호이스팅"],
			explanation:
				"함수 선언문은 코드 전체에서 호출할 수 있지만, 함수 표현식은 변수 할당 이후에만 호출할 수 있습니다.",
		},
	},
	{
		id: "front-004",
		categoryId: 6,
		title: "클로저란 무엇인가?",
		description: "자바스크립트 클로저의 개념과 활용 사례에 대해 설명하세요.",
		keywords: ["자바스크립트", "클로저"],
		answer: {
			mainPoints: ["스코프 체인 유지", "정보 은닉", "함수형 프로그래밍"],
			explanation:
				"클로저는 외부 함수의 변수를 내부 함수가 참조하는 구조로, 데이터 은닉 및 함수를 활용한 고급 프로그래밍 기법에 유용합니다.",
		},
	},
	{
		id: "front-005",
		categoryId: 6,
		title: "객체와 배열의 기본 사용법",
		description:
			"자바스크립트에서 객체와 배열을 생성하고 조작하는 방법을 설명하세요.",
		keywords: ["자바스크립트", "객체", "배열"],
		answer: {
			mainPoints: [
				"객체: key-value 쌍",
				"배열: 순서가 있는 리스트",
				"메서드를 활용한 조작",
			],
			explanation:
				"객체는 속성을 키와 값으로 저장하며, 배열은 순서를 가진 데이터 집합입니다. 두 자료구조 모두 다양한 내장 메서드를 제공합니다.",
		},
	},
	{
		id: "front-006",
		categoryId: 6,
		title: "this 키워드의 동작 원리",
		description:
			"자바스크립트에서 this 키워드가 함수 호출 방식에 따라 어떻게 동작하는지 설명하세요.",
		keywords: ["자바스크립트", "this", "함수 호출"],
		answer: {
			mainPoints: [
				"전역 컨텍스트",
				"메서드 호출",
				"생성자 함수",
				"bind, call, apply",
			],
			explanation:
				"this는 호출 방식에 따라 전역 객체, 호출한 객체 혹은 새로 생성되는 객체를 가리키며, 명시적 바인딩으로 값을 설정할 수 있습니다.",
		},
	},
	{
		id: "front-007",
		categoryId: 6,
		title: "프로토타입과 상속",
		description:
			"자바스크립트의 프로토타입 개념과 프로토타입 체인을 통해 상속이 구현되는 방식을 설명하세요.",
		keywords: ["자바스크립트", "프로토타입", "상속"],
		answer: {
			mainPoints: [
				"프로토타입 체인",
				"객체 생성 시 프로토타입 연결",
				"상속 구현",
			],
			explanation:
				"모든 객체는 프로토타입 객체와 연결되어 있으며, 이를 통해 상속 및 재사용 가능한 속성과 메서드를 공유할 수 있습니다.",
		},
	},
	{
		id: "front-008",
		categoryId: 6,
		title: "비동기 처리: 콜백, 프로미스, async/await",
		description:
			"자바스크립트에서 비동기 작업을 처리하는 다양한 방식의 특징과 차이점을 설명하세요.",
		keywords: ["자바스크립트", "비동기", "프로미스", "async/await"],
		answer: {
			mainPoints: [
				"콜백: 중첩 문제",
				"프로미스: 체이닝",
				"async/await: 동기처럼 읽힘",
			],
			explanation:
				"비동기 작업은 콜백 함수, 프로미스, 그리고 async/await를 통해 처리할 수 있으며, 각각의 방법은 가독성과 관리 측면에서 차이가 있습니다.",
		},
	},
	{
		id: "front-009",
		categoryId: 6,
		title: "이벤트 루프와 콜 스택의 이해",
		description:
			"자바스크립트의 이벤트 루프와 콜 스택이 어떻게 작동하는지 설명하세요.",
		keywords: ["자바스크립트", "이벤트 루프", "콜 스택"],
		answer: {
			mainPoints: ["싱글 스레드", "비동기 처리", "작업 큐"],
			explanation:
				"자바스크립트는 싱글 스레드 환경에서 콜 스택과 이벤트 루프를 활용하여 비동기 작업을 처리하고, 작업 큐에서 대기 중인 함수를 순차적으로 실행합니다.",
		},
	},
	{
		id: "front-010",
		categoryId: 6,
		title: "DOM(Document Object Model) 조작 기초",
		description:
			"자바스크립트를 이용하여 HTML 문서의 요소를 선택하고 조작하는 방법을 설명하세요.",
		keywords: ["자바스크립트", "DOM", "조작"],
		answer: {
			mainPoints: ["요소 선택 (querySelector 등)", "속성 변경", "이벤트 연결"],
			explanation:
				"DOM 조작은 문서 내 요소를 선택해 속성을 변경하거나, 새로운 요소를 추가하는 등 HTML 문서를 동적으로 수정하는 작업을 포함합니다.",
		},
	},
	{
		id: "front-011",
		categoryId: 6,
		title: "ES6(ECMAScript 2015) 주요 문법",
		description:
			"ES6에서 도입된 화살표 함수, 템플릿 리터럴, let/const 등 주요 문법에 대해 설명하세요.",
		keywords: ["자바스크립트", "ES6", "화살표 함수", "템플릿 리터럴"],
		answer: {
			mainPoints: ["새로운 변수 선언 방식", "문자열 보간", "arrow function"],
			explanation:
				"ES6는 코드의 가독성과 효율성을 높이기 위해 let/const, 템플릿 리터럴, 화살표 함수 등 여러 기능을 도입하였습니다.",
		},
	},
	{
		id: "front-012",
		categoryId: 6,
		title: "모듈 시스템과 import/export",
		description:
			"자바스크립트 모듈 시스템의 개념과 import/export 구문 사용법을 설명하세요.",
		keywords: ["자바스크립트", "모듈", "import", "export"],
		answer: {
			mainPoints: ["코드 분할", "재사용성 증가"],
			explanation:
				"모듈 시스템은 서로 관련 있는 코드를 파일 단위로 분리하여 관리함으로써 유지보수성과 재사용성을 높입니다.",
		},
	},
	{
		id: "front-013",
		categoryId: 6,
		title: "디스트럭처링(Destructuring) 사용법",
		description: "배열 및 객체의 디스트럭처링 문법과 활용법에 대해 설명하세요.",
		keywords: ["자바스크립트", "디스트럭처링"],
		answer: {
			mainPoints: ["간결한 문법", "값 추출 및 변수 할당"],
			explanation:
				"디스트럭처링은 배열이나 객체의 값을 손쉽게 추출하여 변수에 할당하는 문법으로, 코드를 보다 간결하게 작성할 수 있습니다.",
		},
	},
	{
		id: "front-014",
		categoryId: 6,
		title: "스프레드 연산자(Spread Operator)의 이해",
		description:
			"스프레드 연산자를 사용하여 배열이나 객체를 복사 및 병합하는 방법을 설명하세요.",
		keywords: ["자바스크립트", "스프레드", "배열", "객체"],
		answer: {
			mainPoints: ["배열 복사", "객체 병합", "불변성 유지"],
			explanation:
				"스프레드 연산자는 배열이나 객체를 복사하고, 여러 객체를 하나로 병합할 때 유용하게 사용되며, 불변성을 보장하는 코드를 작성할 수 있습니다.",
		},
	},
	{
		id: "front-015",
		categoryId: 6,
		title: "예외 처리: try/catch 구문의 사용",
		description:
			"자바스크립트에서 발생 가능한 예외 상황을 처리하기 위해 try/catch 구문을 사용하는 방법을 설명하세요.",
		keywords: ["자바스크립트", "예외 처리", "try/catch"],
		answer: {
			mainPoints: ["오류 감지", "안정적인 코드 실행"],
			explanation:
				"try/catch 구문은 코드 실행 중 발생하는 예외를 감지하여, 오류에 대한 적절한 대응을 할 수 있도록 돕습니다.",
		},
	},

	// [타입스크립트] categoryId: 6
	{
		id: "front-016",
		categoryId: 6,
		title: "타입스크립트란 무엇인가?",
		description:
			"타입스크립트의 기본 개념과 자바스크립트와의 차이점에 대해 설명하세요.",
		keywords: ["타입스크립트", "자바스크립트", "타입"],
		answer: {
			mainPoints: ["정적 타이핑", "컴파일 단계 에러 검출"],
			explanation:
				"타입스크립트는 자바스크립트의 상위 집합으로, 정적 타입 검사를 제공하여 코드의 안정성과 유지보수성을 높입니다.",
		},
	},
	{
		id: "front-017",
		categoryId: 6,
		title: "인터페이스와 타입 별칭의 차이",
		description:
			"타입스크립트에서 인터페이스와 타입 별칭(type alias)의 차이점과 각각의 사용 사례를 설명하세요.",
		keywords: ["타입스크립트", "인터페이스", "타입 별칭"],
		answer: {
			mainPoints: ["구조적 타이핑", "확장성과 재사용성"],
			explanation:
				"인터페이스와 타입 별칭 모두 객체의 구조를 정의하는 데 사용되지만, 인터페이스는 확장이 가능하며 객체지향 패러다임에 더 적합합니다.",
		},
	},
	{
		id: "front-018",
		categoryId: 6,
		title: "제네릭(Generic)의 이해",
		description:
			"타입스크립트에서 제네릭의 개념과 함수를 일반화하여 작성하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "제네릭"],
		answer: {
			mainPoints: ["타입 재사용", "유연한 함수 작성"],
			explanation:
				"제네릭은 함수, 클래스, 인터페이스에서 사용되어 재사용 가능한 코드를 작성할 때, 다양한 타입에 대해 동일한 로직을 적용할 수 있도록 합니다.",
		},
	},
	{
		id: "front-019",
		categoryId: 6,
		title: "열거형(enum)의 사용법",
		description:
			"타입스크립트 열거형(enum)을 선언하고 활용하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "열거형", "enum"],
		answer: {
			mainPoints: ["상수값 관리", "가독성 향상"],
			explanation:
				"열거형은 관련 상수들을 묶어 관리할 수 있으며, 코드의 가독성과 유지보수성을 높이는 데 유용합니다.",
		},
	},
	{
		id: "front-020",
		categoryId: 6,
		title: "타입 추론(Type Inference)의 개념",
		description:
			"타입스크립트에서 타입 추론이 어떻게 이루어지는지와 그 장단점을 설명하세요.",
		keywords: ["타입스크립트", "타입 추론"],
		answer: {
			mainPoints: ["명시적 타입 선언 불필요", "코드 간결화"],
			explanation:
				"타입 추론은 컴파일러가 변수의 타입을 자동으로 결정하여 개발자가 명시적으로 타입을 지정하지 않아도 되는 장점이 있지만, 복잡한 타입 추론에서는 한계가 존재할 수 있습니다.",
		},
	},
	{
		id: "front-021",
		categoryId: 6,
		title: "유니언 타입과 인터섹션 타입",
		description:
			"타입스크립트에서 유니언 타입과 인터섹션 타입의 차이점 및 사용 예를 설명하세요.",
		keywords: ["타입스크립트", "유니언 타입", "인터섹션 타입"],
		answer: {
			mainPoints: ["유니언: 여러 타입 중 하나", "인터섹션: 모든 타입 결합"],
			explanation:
				"유니언 타입은 여러 타입 중 하나의 값만 가질 수 있도록 하며, 인터섹션 타입은 여러 타입의 속성을 모두 포함하는 타입을 생성합니다.",
		},
	},
	{
		id: "front-022",
		categoryId: 6,
		title: "옵셔널 체이닝(Optional Chaining)의 사용",
		description:
			"타입스크립트에서 옵셔널 체이닝 문법을 사용하여 null 또는 undefined를 안전하게 접근하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "옵셔널 체이닝"],
		answer: {
			mainPoints: ["안전한 프로퍼티 접근", "간결한 문법"],
			explanation:
				"옵셔널 체이닝은 객체의 깊은 중첩된 속성을 접근할 때, 중간에 값이 없을 경우 undefined를 반환하여 에러를 예방합니다.",
		},
	},
	{
		id: "front-023",
		categoryId: 6,
		title: "타입 선언 파일(.d.ts)의 역할",
		description:
			"타입스크립트에서 .d.ts 파일이 무엇이며, 외부 라이브러리의 타입 정의에 어떻게 사용되는지 설명하세요.",
		keywords: ["타입스크립트", "타입 선언 파일", ".d.ts"],
		answer: {
			mainPoints: ["외부 라이브러리 타입 지원", "정적 타입 검사 강화"],
			explanation:
				".d.ts 파일은 외부 라이브러리나 자바스크립트 코드에 타입 정보를 추가하여 타입스크립트 컴파일러가 정확한 타입 검사를 할 수 있도록 돕습니다.",
		},
	},
	{
		id: "front-024",
		categoryId: 6,
		title: "클래스와 인터페이스의 조합 사용법",
		description:
			"타입스크립트에서 클래스가 인터페이스를 구현하는 방법과 그 이점을 설명하세요.",
		keywords: ["타입스크립트", "클래스", "인터페이스"],
		answer: {
			mainPoints: ["객체지향 프로그래밍", "타입 안정성"],
			explanation:
				"클래스가 인터페이스를 구현하면, 미리 정의된 구조를 강제할 수 있어 코드의 일관성과 유지보수성이 향상됩니다.",
		},
	},
	{
		id: "front-025",
		categoryId: 6,
		title: "데코레이터(Decorator)의 활용",
		description:
			"타입스크립트에서 데코레이터를 사용하여 클래스나 메서드를 확장하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "데코레이터"],
		answer: {
			mainPoints: ["메타데이터 추가", "클래스 확장"],
			explanation:
				"데코레이터는 함수나 클래스를 수정, 확장할 수 있는 유용한 도구로, 주로 의존성 주입이나 로깅 등 부가 기능 추가에 활용됩니다.",
		},
	},
	{
		id: "front-026",
		categoryId: 6,
		title: "함수 타입과 오버로드(Overload) 처리",
		description:
			"타입스크립트에서 함수의 타입 선언 및 오버로드를 구현하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "함수 타입", "오버로드"],
		answer: {
			mainPoints: ["타입 안정성", "여러 호출 시나리오 지원"],
			explanation:
				"함수 오버로드는 동일한 함수 이름으로 여러 타입의 인자와 반환값을 처리할 수 있도록 하여 함수 사용 시 유연성을 제공합니다.",
		},
	},
	{
		id: "front-027",
		categoryId: 6,
		title: "네임스페이스(Namespace) 사용법",
		description:
			"타입스크립트에서 네임스페이스를 사용하여 코드를 모듈화하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "네임스페이스"],
		answer: {
			mainPoints: ["코드 조직화", "중복 방지"],
			explanation:
				"네임스페이스는 관련 있는 변수, 함수, 인터페이스를 하나의 범주로 묶어 코드의 가독성과 유지보수성을 높이는 데 사용됩니다.",
		},
	},
	{
		id: "front-028",
		categoryId: 6,
		title: "타입 단언(Type Assertion)의 사용",
		description:
			"타입스크립트에서 타입 단언(as)을 사용하여 개발자가 컴파일러에 특정 타입임을 명시하는 방법을 설명하세요.",
		keywords: ["타입스크립트", "타입 단언", "as"],
		answer: {
			mainPoints: ["명시적 타입 지정", "컴파일러 경고 해소"],
			explanation:
				"타입 단언은 개발자가 변수의 타입을 컴파일러에게 직접 알려줌으로써, 때로는 복잡한 타입 추론 문제를 해결하는데 도움을 줍니다.",
		},
	},
	{
		id: "front-029",
		categoryId: 6,
		title: "JSX와 타입스크립트의 결합",
		description:
			"타입스크립트에서 JSX 문법을 사용할 때 주의할 점과 타입 체크 방법을 설명하세요.",
		keywords: ["타입스크립트", "JSX", "React"],
		answer: {
			mainPoints: ["React와의 통합", "타입 안정성 강화"],
			explanation:
				"JSX를 타입스크립트와 함께 사용할 때, React의 타입 선언을 활용해 컴포넌트의 프로퍼티와 상태에 대해 정적 타입 검사를 수행할 수 있습니다.",
		},
	},
	{
		id: "front-030",
		categoryId: 6,
		title: "tsconfig.json의 주요 컴파일러 옵션",
		description:
			"타입스크립트 프로젝트의 tsconfig.json 파일에서 설정 가능한 주요 옵션들을 설명하세요.",
		keywords: ["타입스크립트", "tsconfig.json", "컴파일러 옵션"],
		answer: {
			mainPoints: ["타입 검사 엄격도", "모듈 해석", "출력 설정"],
			explanation:
				"tsconfig.json 파일은 타입스크립트 컴파일러의 동작 방식을 설정하는 파일로, 다양한 옵션을 통해 프로젝트의 특성에 맞게 컴파일 환경을 구성할 수 있습니다.",
		},
	},

	// [React] categoryId: 6
	{
		id: "front-031",
		categoryId: 6,
		title: "React란 무엇인가?",
		description:
			"React의 기본 개념과 장점, 컴포넌트 기반 아키텍처에 대해 설명하세요.",
		keywords: ["React", "컴포넌트", "프론트엔드"],
		answer: {
			mainPoints: ["컴포넌트 기반", "가상 DOM", "재사용성"],
			explanation:
				"React는 사용자 인터페이스 구축을 위해 만들어진 라이브러리로, 컴포넌트 단위의 재사용과 가상 DOM을 통한 효율적 렌더링을 특징으로 합니다.",
		},
	},
	{
		id: "front-032",
		categoryId: 6,
		title: "JSX 문법의 이해",
		description:
			"React에서 JSX를 사용하는 이유와 JSX의 기본 문법에 대해 설명하세요.",
		keywords: ["React", "JSX", "문법"],
		answer: {
			mainPoints: ["자바스크립트 확장 문법", "가독성 향상"],
			explanation:
				"JSX는 자바스크립트 내에 HTML과 유사한 코드를 작성할 수 있게 해주어, UI 구성 코드를 보다 직관적으로 관리할 수 있도록 도와줍니다.",
		},
	},
	{
		id: "front-033",
		categoryId: 6,
		title: "컴포넌트와 Props의 개념",
		description:
			"React 컴포넌트가 무엇이며, props를 통해 데이터를 전달하는 방식을 설명하세요.",
		keywords: ["React", "컴포넌트", "Props"],
		answer: {
			mainPoints: ["컴포넌트 재사용", "데이터 전달"],
			explanation:
				"React 컴포넌트는 UI를 구성하는 단위이며, props를 통해 부모에서 자식 컴포넌트로 데이터를 안전하게 전달할 수 있습니다.",
		},
	},
	{
		id: "front-034",
		categoryId: 6,
		title: "상태(State) 관리 방법",
		description:
			"React에서 상태(state)를 관리하는 방법과 상태 업데이트 시 주의사항을 설명하세요.",
		keywords: ["React", "상태", "state 관리"],
		answer: {
			mainPoints: ["useState 훅", "불변성 유지"],
			explanation:
				"상태 관리는 React 컴포넌트에서 UI의 동적 변화를 처리하기 위한 중요한 요소이며, useState와 같은 훅을 사용하여 상태를 안전하게 업데이트합니다.",
		},
	},
	{
		id: "front-035",
		categoryId: 6,
		title: "컴포넌트 생명주기(Lifecycle) 메서드",
		description:
			"클래스형 컴포넌트에서 사용하는 생명주기 메서드와 각 메서드의 역할을 설명하세요.",
		keywords: ["React", "생명주기", "Lifecycle"],
		answer: {
			mainPoints: ["마운팅", "업데이트", "언마운팅"],
			explanation:
				"생명주기 메서드는 컴포넌트의 생성, 업데이트, 제거 시점에 실행되며, 각 단계에서 필요한 작업을 수행할 수 있도록 도와줍니다.",
		},
	},
	{
		id: "front-036",
		categoryId: 6,
		title: "함수형 컴포넌트 vs 클래스형 컴포넌트",
		description:
			"함수형 컴포넌트와 클래스형 컴포넌트의 차이점과 장단점을 비교하세요.",
		keywords: ["React", "함수형 컴포넌트", "클래스형 컴포넌트"],
		answer: {
			mainPoints: ["간결함 vs 기능성", "Hooks 도입"],
			explanation:
				"함수형 컴포넌트는 간결하며 Hooks 사용으로 상태 관리가 가능하지만, 클래스형은 전통적인 생명주기 메서드를 사용해 복잡한 로직을 처리할 수 있습니다.",
		},
	},
	{
		id: "front-037",
		categoryId: 6,
		title: "React Hooks: useState, useEffect",
		description:
			"React Hooks 중 useState와 useEffect의 사용법과 실제 활용 사례를 설명하세요.",
		keywords: ["React", "Hooks", "useState", "useEffect"],
		answer: {
			mainPoints: ["상태 관리", "사이드 이펙트 처리"],
			explanation:
				"useState는 상태 값을 관리하고, useEffect는 컴포넌트의 라이프사이클(특히 마운팅, 업데이트 시)에 따른 부수 효과를 처리하는 데 사용됩니다.",
		},
	},
	{
		id: "front-038",
		categoryId: 6,
		title: "컨텍스트 API(Context API)의 이해",
		description:
			"React에서 컨텍스트 API를 사용하여 전역 상태를 관리하는 방법에 대해 설명하세요.",
		keywords: ["React", "컨텍스트", "API"],
		answer: {
			mainPoints: ["전역 상태 관리", "컴포넌트 트리"],
			explanation:
				"컨텍스트 API는 여러 컴포넌트에 걸쳐 필요한 데이터를 전달할 때 유용하며, props drilling을 피할 수 있는 방법을 제공합니다.",
		},
	},
	{
		id: "front-039",
		categoryId: 6,
		title: "이벤트 처리 방법",
		description:
			"React에서 이벤트를 처리하는 방식과 주의할 점에 대해 설명하세요.",
		keywords: ["React", "이벤트 처리"],
		answer: {
			mainPoints: ["Synthetic Event", "바인딩 문제"],
			explanation:
				"React는 브라우저 이벤트를 추상화한 Synthetic Event를 사용하며, 이벤트 핸들러에서 this 바인딩 문제를 적절히 관리해야 합니다.",
		},
	},
	{
		id: "front-040",
		categoryId: 6,
		title: "리스트와 키(Key)의 중요성",
		description:
			"리액트에서 리스트 렌더링 시 고유한 키 값을 사용하는 이유와 그 효과를 설명하세요.",
		keywords: ["React", "리스트", "키"],
		answer: {
			mainPoints: ["효율적 렌더링", "변경 감지"],
			explanation:
				"리스트 렌더링 시 고유한 키 값을 부여하면, 리액트는 각 요소를 식별해 변경 사항을 보다 효율적으로 관리할 수 있습니다.",
		},
	},
	{
		id: "front-041",
		categoryId: 6,
		title: "성능 최적화: React.memo와 useCallback",
		description:
			"컴포넌트 리렌더링을 줄이기 위해 React.memo와 useCallback을 어떻게 활용하는지 설명하세요.",
		keywords: ["React", "최적화", "React.memo", "useCallback"],
		answer: {
			mainPoints: ["불필요한 렌더링 방지", "메모이제이션"],
			explanation:
				"React.memo는 컴포넌트를 메모이제이션하여 불필요한 렌더링을 막고, useCallback은 함수의 재생성을 방지하여 성능을 개선합니다.",
		},
	},
	{
		id: "front-042",
		categoryId: 6,
		title: "스타일링 방법: CSS-in-JS vs 전통적 CSS",
		description:
			"React 컴포넌트를 스타일링할 때 CSS-in-JS와 전통적 CSS 방식의 차이점과 장단점을 설명하세요.",
		keywords: ["React", "스타일링", "CSS-in-JS"],
		answer: {
			mainPoints: ["유지보수성", "동적 스타일링"],
			explanation:
				"CSS-in-JS는 컴포넌트 단위로 스타일을 정의할 수 있어 유지보수가 쉽고, 동적 스타일링이 가능하지만, 초기 학습 비용이 있을 수 있습니다.",
		},
	},

	// [Next.js 최신 버전] categoryId: 6
	{
		id: "front-043",
		categoryId: 6,
		title: "Next.js의 개요와 주요 특징",
		description:
			"Next.js가 무엇이며 기존 React 프로젝트와 비교하여 가지는 장점을 설명하세요.",
		keywords: ["Next.js", "개요", "특징"],
		answer: {
			mainPoints: ["서버 사이드 렌더링", "파일 기반 라우팅"],
			explanation:
				"Next.js는 React 기반 프레임워크로, 서버 사이드 렌더링, 정적 사이트 생성, API 라우트 등을 기본 제공하여 개발 생산성을 향상시킵니다.",
		},
	},
	{
		id: "front-044",
		categoryId: 6,
		title: "페이지 기반 라우팅의 원리",
		description:
			"Next.js에서 파일 시스템 기반 라우팅이 어떻게 동작하는지 설명하세요.",
		keywords: ["Next.js", "라우팅", "페이지"],
		answer: {
			mainPoints: ["파일 구조", "동적 라우팅 지원"],
			explanation:
				"Next.js는 pages 폴더 내의 파일 이름에 따라 자동으로 라우트를 생성하며, 동적 라우팅도 파일 명명 규칙을 통해 쉽게 구현할 수 있습니다.",
		},
	},

	{
		id: "front-046",
		categoryId: 6,
		title: "API 라우트의 구현과 활용",
		description:
			"Next.js에서 API 라우트를 생성하여 백엔드 로직을 구현하는 방법을 설명하세요.",
		keywords: ["Next.js", "API 라우트"],
		answer: {
			mainPoints: ["서버리스 함수", "백엔드 기능 통합"],
			explanation:
				"Next.js의 API 라우트를 사용하면, 별도의 백엔드 서버 없이도 간단한 API를 구현해 프론트엔드와 통합할 수 있습니다.",
		},
	},
	{
		id: "front-047",
		categoryId: 6,
		title: "Next.js의 이미지 최적화 기능",
		description:
			"Next.js에서 제공하는 이미지 최적화(Image Optimization) 기능의 원리와 사용법을 설명하세요.",
		keywords: ["Next.js", "이미지 최적화"],
		answer: {
			mainPoints: ["자동 최적화", "Lazy Loading"],
			explanation:
				"Next.js는 내장 이미지 컴포넌트를 통해 이미지 크기 조정, 형식 변환 등 자동 최적화 기능을 제공하여 로딩 속도와 성능을 높입니다.",
		},
	},
	{
		id: "front-048",
		categoryId: 6,
		title: "동적 라우팅(Dynamic Routing) 구현",
		description:
			"Next.js에서 동적 라우팅을 구현하는 방법과 활용 사례에 대해 설명하세요.",
		keywords: ["Next.js", "동적 라우팅"],
		answer: {
			mainPoints: ["대괄호 표기법", "URL 파라미터 사용"],
			explanation:
				"파일 이름에 대괄호([])를 사용하여 동적 라우트를 생성하고, URL 파라미터를 통해 동적으로 페이지를 렌더링할 수 있습니다.",
		},
	},
	{
		id: "front-049",
		categoryId: 6,
		title: "미들웨어(Middleware) 활용법",
		description:
			"Next.js 최신 버전에서 미들웨어 기능을 활용해 요청을 제어하는 방법에 대해 설명하세요.",
		keywords: ["Next.js", "미들웨어"],
		answer: {
			mainPoints: ["요청/응답 가로채기", "보안 및 로깅"],
			explanation:
				"미들웨어는 클라이언트의 요청이 페이지나 API 라우트에 도달하기 전, 이를 가로채어 인증, 로깅, 리디렉션 등을 수행할 수 있도록 돕습니다.",
		},
	},
	{
		id: "front-050",
		categoryId: 6,
		title: "ISR(Incremental Static Regeneration)의 개념",
		description:
			"Next.js에서 ISR을 통해 정적 페이지를 실시간으로 재생성하는 방식에 대해 설명하세요.",
		keywords: ["Next.js", "ISR", "정적 페이지"],
		answer: {
			mainPoints: ["정적 페이지 갱신", "빌드 후 업데이트"],
			explanation:
				"ISR은 미리 생성된 정적 페이지를 백그라운드에서 주기적으로 업데이트하여, 최신 데이터를 반영하면서도 정적 페이지의 성능을 유지합니다.",
		},
	},
	{
		id: "front-051",
		categoryId: 6,
		title: "SEO 최적화를 위한 Next.js의 전략",
		description:
			"Next.js에서 제공하는 SEO 최적화 기능과 실제 적용 방법에 대해 설명하세요.",
		keywords: ["Next.js", "SEO", "최적화"],
		answer: {
			mainPoints: ["서버 사이드 렌더링", "메타 태그 관리"],
			explanation:
				"Next.js는 SSR과 정적 사이트 생성을 통해 검색 엔진 친화적인 페이지를 구성하며, 메타 태그 등의 세부 설정으로 SEO 최적화를 지원합니다.",
		},
	},
]
