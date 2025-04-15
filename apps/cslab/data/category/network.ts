export interface Question {
	id: string
	categoryId: number
	title: string
	description: string
	keywords: string[]
	answer?: {
		mainPoints: string[]
		explanation: string
		examples?: string[]
		codeExample?: string
	}
}

export const networkQuestions: Question[] = [
	{
		id: "net-001",
		categoryId: 4,
		title: "TCP와 UDP의 차이점은 무엇인가요?",
		description:
			"TCP와 UDP 프로토콜의 특징, 작동 방식, 신뢰성, 속도 등의 차이점과 각각 적합한 사용 사례에 대해 설명하세요.",
		keywords: ["TCP", "UDP", "연결 지향", "비연결 지향", "신뢰성", "속도"],
		answer: {
			mainPoints: [
				"TCP는 연결 지향적, UDP는 비연결 지향적",
				"TCP는 신뢰성과 순서 보장을 제공하며, UDP는 오버헤드가 적음",
			],
			explanation:
				"TCP는 3-way handshake를 통해 연결을 설정하고, 데이터 전송 후 ACK 응답을 통해 재전송 등을 관리하여 신뢰성을 확보합니다. 반면 UDP는 연결 과정이 없고 단순히 데이터를 전송하여 실시간 애플리케이션 등에 적합합니다.",
			examples: [
				"TCP: 웹 브라우징, 파일 전송, 이메일",
				"UDP: 실시간 스트리밍, VoIP, 온라인 게임",
			],
		},
	},
	{
		id: "net-002",
		categoryId: 4,
		title: "HTTP와 HTTPS의 차이점 및 HTTPS의 동작 원리는 무엇인가요?",
		description:
			"HTTP와 HTTPS의 보안 측면 차이와 HTTPS가 어떻게 암호화 통신을 수행하는지 설명하세요.",
		keywords: ["HTTP", "HTTPS", "SSL/TLS", "암호화", "인증서"],
		answer: {
			mainPoints: [
				"HTTP는 암호화되지 않은 프로토콜, HTTPS는 암호화된 통신을 제공",
				"HTTPS는 SSL/TLS를 사용하여 데이터를 암호화하고 서버 인증서를 통해 신뢰성을 검증",
			],
			explanation:
				"HTTPS는 SSL/TLS 프로토콜을 사용해 데이터 전송 시 암호화를 진행하며, 서버와 클라이언트 간 인증서를 교환하여 통신의 보안을 강화합니다.",
			examples: ["온라인 뱅킹, 전자상거래 사이트"],
		},
	},
	{
		id: "net-003",
		categoryId: 4,
		title: "OSI 7계층 모델에 대해 설명하세요.",
		description:
			"OSI 모델 각 계층의 역할과 주요 프로토콜, 기능에 대해 설명하세요.",
		keywords: ["OSI", "네트워크", "계층 모델", "프로토콜"],
		answer: {
			mainPoints: [
				"물리 계층: 전기적 신호 전송",
				"데이터 링크 계층: 프레임화, 오류 검출",
				"네트워크 계층: 라우팅, IP 사용",
				"전송 계층: 신뢰성 있는 전송 (TCP/UDP)",
				"세션 계층: 연결 관리",
				"표현 계층: 데이터 인코딩 및 암호화",
				"응용 계층: 최종 사용자 서비스 (HTTP, FTP 등)",
			],
			explanation:
				"OSI 7계층은 네트워크 통신을 기능별로 분리하여 복잡한 네트워크 구조를 이해하고 설계할 수 있도록 돕는 참조 모델입니다.",
			examples: [
				"물리 계층: Ethernet, 광섬유",
				"전송 계층: TCP, UDP",
				"응용 계층: HTTP, SMTP",
			],
		},
	},
	{
		id: "net-004",
		categoryId: 4,
		title: "DNS(Domain Name System)의 역할과 동작 원리에 대해 설명하세요.",
		description:
			"DNS가 도메인 네임을 IP 주소로 변환하는 과정과 그 중요성에 대해 설명하세요.",
		keywords: ["DNS", "도메인 네임", "IP 주소", "네임 서버"],
		answer: {
			mainPoints: [
				"도메인 네임을 IP 주소로 변환",
				"계층적 분산 데이터베이스 구조 사용",
				"로컬 DNS 캐시 및 재귀적 질의 처리",
			],
			explanation:
				"DNS는 인터넷에서 사람이 기억하기 쉬운 도메인 이름을 실제 네트워크 통신에 필요한 IP 주소로 변환하는 역할을 합니다. 분산된 네임 서버 구조를 통해 질의 결과를 제공하며, 캐싱을 통해 응답 속도를 개선합니다.",
			examples: ["www.example.com을 93.184.216.34로 변환"],
		},
	},
	{
		id: "net-005",
		categoryId: 4,
		title: "NAT(Network Address Translation)의 개념과 사용 이유는 무엇인가요?",
		description:
			"NAT의 역할, 동작 방식 및 사설 IP와 공인 IP간의 변환 방식을 설명하세요.",
		keywords: ["NAT", "IP 변환", "사설 IP", "공인 IP"],
		answer: {
			mainPoints: [
				"사설 네트워크의 IP를 공인 IP로 변환",
				"네트워크 보안과 주소 절약에 기여",
				"라우터에서 주로 수행",
			],
			explanation:
				"NAT는 내부 네트워크의 사설 IP 주소를 외부 통신용 공인 IP 주소로 변환하여 사용함으로써 IP 주소의 효율적 활용과 보안을 제공하는 기술입니다.",
			examples: ["가정용 라우터에서 내부 디바이스가 인터넷에 접속 시 NAT 사용"],
		},
	},
	{
		id: "net-006",
		categoryId: 4,
		title:
			"VPN(Virtual Private Network)의 원리와 주요 활용 사례에 대해 설명하세요.",
		description:
			"VPN 기술이 어떻게 보안 터널링을 제공하며 원격 접속 시 어떤 이점을 제공하는지 설명하세요.",
		keywords: ["VPN", "보안", "터널링", "원격 접속"],
		answer: {
			mainPoints: [
				"인터넷 상에서 암호화된 터널을 제공",
				"원격 사용자가 내부 네트워크에 안전하게 접속 가능",
				"데이터 무결성과 개인정보 보호",
			],
			explanation:
				"VPN은 공용 인터넷을 통해 프라이빗 네트워크에 연결할 때 데이터 암호화, 인증, 터널링 기술을 사용하여 보안을 유지하며, 원격지에서도 내부 리소스에 안전하게 접근할 수 있도록 지원합니다.",
			examples: ["기업의 원격 근무 환경, 해외 지사 연결"],
		},
	},
	{
		id: "net-007",
		categoryId: 4,
		title: "IPv4와 IPv6의 차이점에 대해 설명하세요.",
		description:
			"IPv4와 IPv6의 주소 체계, 주소 수, 보안 및 기타 주요 차이점을 비교하세요.",
		keywords: ["IPv4", "IPv6", "주소 체계", "확장성"],
		answer: {
			mainPoints: [
				"IPv4: 32비트 주소, 약 43억 개 주소",
				"IPv6: 128비트 주소, 사실상 무한의 주소 제공",
				"IPv6는 보안, 효율성, 자동 구성 기능 향상",
			],
			explanation:
				"IPv4는 한정된 주소 공간으로 인해 주소 고갈 문제가 있으나, IPv6는 훨씬 긴 주소 체계를 통해 더 많은 디바이스를 지원하며, 보안 및 QoS 기능이 내장되어 있습니다.",
			examples: [
				"IPv4: 192.168.0.1, IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334",
			],
		},
	},
	{
		id: "net-008",
		categoryId: 4,
		title: "서브넷팅(Subnetting)의 개념과 장점은 무엇인가요?",
		description:
			"서브넷팅을 통해 네트워크를 어떻게 분할하며, 그로 인한 보안 및 관리상의 이점을 설명하세요.",
		keywords: ["서브넷팅", "네트워크 분할", "서브넷 마스크", "IP 주소"],
		answer: {
			mainPoints: [
				"네트워크를 여러 서브넷으로 분할",
				"IP 자원 활용도 증가 및 보안 관리 용이",
				"브로드캐스트 도메인 축소",
			],
			explanation:
				"서브넷팅은 하나의 네트워크를 여러 개의 작은 서브넷으로 나눠서 관리하는 기법으로, 네트워크 성능 향상 및 보안 격리를 도모할 수 있습니다.",
			examples: [
				"192.168.1.0/24 → 192.168.1.0/26, 192.168.1.64/26 등으로 분할",
			],
		},
	},
	{
		id: "net-009",
		categoryId: 4,
		title: "DHCP(Dynamic Host Configuration Protocol)의 역할은 무엇인가요?",
		description:
			"DHCP가 네트워크에서 IP 주소를 자동으로 할당하는 방식과 그 이점을 설명하세요.",
		keywords: ["DHCP", "IP 주소", "자동 할당", "네트워크 관리"],
		answer: {
			mainPoints: [
				"클라이언트에게 동적으로 IP 및 네트워크 설정 제공",
				"관리 비용 절감 및 설정 오류 최소화",
			],
			explanation:
				"DHCP는 네트워크 내에서 IP 주소, 서브넷 마스크, 게이트웨이 등의 설정을 자동으로 할당하여 관리의 편의성과 효율성을 높이는 프로토콜입니다.",
			examples: ["가정용 라우터에서 DHCP 서버가 IP 주소를 자동 할당"],
		},
	},
	{
		id: "net-010",
		categoryId: 4,
		title:
			"ICMP(Internet Control Message Protocol)의 역할과 활용 사례는 무엇인가요?",
		description:
			"ICMP 프로토콜이 네트워크 오류 메시지 전송, 진단에 어떻게 활용되는지 설명하세요.",
		keywords: ["ICMP", "진단", "오류 메시지", "Ping"],
		answer: {
			mainPoints: [
				"네트워크 상태 및 오류 보고",
				"Ping, Traceroute 등의 도구에 사용",
			],
			explanation:
				"ICMP는 네트워크 통신 중 발생하는 오류나 상태 정보를 전송하는 프로토콜로, 진단 도구인 Ping이나 Traceroute를 통해 네트워크 연결 상태를 확인할 때 활용됩니다.",
			examples: ["Ping 명령어를 사용해 대상 호스트와의 연결 상태 확인"],
		},
	},
	{
		id: "net-011",
		categoryId: 4,
		title: "ARP(Address Resolution Protocol)의 역할은 무엇인가요?",
		description:
			"ARP가 네트워크에서 IP 주소를 물리적 MAC 주소로 변환하는 과정을 설명하세요.",
		keywords: ["ARP", "MAC 주소", "IP 주소", "브로드캐스트"],
		answer: {
			mainPoints: [
				"IP 주소를 MAC 주소로 매핑",
				"네트워크 내 통신에 필수적",
				"브로드캐스트를 사용해 주소 탐색 수행",
			],
			explanation:
				"ARP는 로컬 네트워크 상에서 IP 주소에 대응하는 MAC 주소를 찾기 위해 브로드캐스트 메시지를 사용하며, 이를 통해 데이터 링크 계층에서 실제 통신이 가능해집니다.",
			examples: ["ARP 캐시를 통해 최근에 탐지된 MAC 주소 확인"],
		},
	},
	{
		id: "net-012",
		categoryId: 4,
		title: "VPN 터널링이란 무엇이며 어떤 방식으로 구현되나요?",
		description:
			"VPN 터널링의 개념과 IPSec, SSL/TLS 등 주요 구현 방식에 대해 설명하세요.",
		keywords: ["VPN", "터널링", "IPSec", "SSL/TLS"],
		answer: {
			mainPoints: [
				"데이터를 암호화된 터널로 전송",
				"IPSec과 SSL/TLS 기반 터널링 기법 존재",
			],
			explanation:
				"VPN 터널링은 데이터를 암호화하여 외부 네트워크를 통해 전송할 때 중간에 노출되지 않도록 보호하는 방식으로, 주로 IPSec이나 SSL/TLS 프로토콜을 사용해 구현됩니다.",
			examples: ["기업의 원격 접속 시 VPN 터널링 사용"],
		},
	},
	{
		id: "net-013",
		categoryId: 4,
		title:
			"라우팅 프로토콜의 종류와 차이점(O SPF, RIP, BGP 등)에 대해 설명하세요.",
		description:
			"주요 라우팅 프로토콜들의 동작 원리와 특징, 사용 환경에 대해 비교하세요.",
		keywords: ["라우팅", "OSPF", "RIP", "BGP", "동적 라우팅"],
		answer: {
			mainPoints: [
				"RIP: 거리 벡터 알고리즘, 단순하지만 느림",
				"OSPF: 링크 상태 알고리즘, 빠르고 확장성 우수",
				"BGP: 경로 벡터 알고리즘, 인터넷 전체 라우팅에 사용",
			],
			explanation:
				"RIP, OSPF, BGP 등 동적 라우팅 프로토콜은 네트워크 상황에 따라 라우팅 정보를 교환하며, 각 프로토콜은 알고리즘과 규모, 환경에 따라 선택됩니다.",
			examples: ["내부 네트워크: OSPF, RIP / 인터넷: BGP"],
		},
	},
	{
		id: "net-014",
		categoryId: 4,
		title:
			"패킷 스위칭(Packet Switching)과 회선 교환(Circuit Switching)의 차이점은 무엇인가요?",
		description:
			"패킷 스위칭과 회선 교환 기술의 원리, 장단점, 활용 사례에 대해 설명하세요.",
		keywords: ["패킷 스위칭", "회선 교환", "네트워크 전송"],
		answer: {
			mainPoints: [
				"패킷 스위칭: 데이터 분할 후 독립 전송, 효율적 자원 사용",
				"회선 교환: 전용 회선 할당, 지연 발생 및 비효율적",
			],
			explanation:
				"패킷 스위칭은 데이터를 작은 패킷으로 나눠 전송하며 여러 사용자가 동시에 네트워크를 공유하는 방식으로, 회선 교환은 두 지점 간 전용 회선을 설정하여 안정적인 전송을 보장하지만 자원이 낭비됩니다.",
			examples: [
				"패킷 스위칭: 인터넷 통신",
				"회선 교환: 전통적인 PSTN(전화망)",
			],
		},
	},
	{
		id: "net-015",
		categoryId: 4,
		title: "SDN(Software-Defined Networking)의 개념과 장점은 무엇인가요?",
		description:
			"SDN이 기존 네트워크 관리 방식과 어떻게 다른지, 주요 이점에 대해 설명하세요.",
		keywords: ["SDN", "소프트웨어 정의 네트워킹", "네트워크 관리"],
		answer: {
			mainPoints: [
				"네트워크 제어와 데이터 전달을 분리",
				"중앙집중식 제어로 유연한 네트워크 구성 가능",
			],
			explanation:
				"SDN은 네트워크 제어 플레인과 데이터 플레인을 분리하여 중앙에서 모든 네트워크 장비를 프로그래밍할 수 있게 함으로써, 빠른 정책 변경과 효율적인 자원 관리를 제공합니다.",
			examples: ["클라우드 데이터센터에서 SDN 기술 도입"],
		},
	},
	{
		id: "net-016",
		categoryId: 4,
		title:
			"MPLS(Multiprotocol Label Switching)의 원리와 활용 사례는 무엇인가요?",
		description:
			"MPLS가 라우팅 대신 라벨을 통해 패킷을 빠르게 전달하는 방식과 주요 사용 환경을 설명하세요.",
		keywords: ["MPLS", "라벨 스위칭", "네트워크 성능"],
		answer: {
			mainPoints: [
				"패킷에 라벨 부여 후 라벨 기반 전송",
				"빠른 라우팅과 트래픽 관리에 효과적",
			],
			explanation:
				"MPLS는 데이터 패킷에 라벨을 붙여 네트워크 내에서 빠르게 전달하고, 다양한 서비스 품질(QoS)을 보장하는 기술로, 주로 통신 사업자 네트워크에서 활용됩니다.",
			examples: ["ISP 네트워크 트래픽 관리"],
		},
	},
	{
		id: "net-017",
		categoryId: 4,
		title: "Wireless 네트워크에서 WEP, WPA, WPA2의 차이점은 무엇인가요?",
		description:
			"무선 보안 프로토콜의 발전 과정과 각 프로토콜의 특징, 취약점에 대해 설명하세요.",
		keywords: ["WEP", "WPA", "WPA2", "무선 보안"],
		answer: {
			mainPoints: [
				"WEP: 초기 보안, 암호화 강도 낮음",
				"WPA: TKIP 도입으로 보안 강화",
				"WPA2: AES 암호화 채택, 현재 표준",
			],
			explanation:
				"무선 네트워크의 보안은 WEP에서 시작해 WPA, 그리고 WPA2로 발전하면서 암호화 방식과 보안 취약점이 개선되었습니다.",
			examples: ["일반 가정용 Wi-Fi는 현재 WPA2 또는 WPA3 사용"],
		},
	},
	{
		id: "net-018",
		categoryId: 4,
		title: "방화벽(Firewall)의 역할과 종류에 대해 설명하세요.",
		description:
			"방화벽이 네트워크 보안을 위해 어떻게 동작하며, 패킷 필터링, 프록시, 차세대 방화벽 등의 차이점을 설명하세요.",
		keywords: ["방화벽", "패킷 필터링", "네트워크 보안"],
		answer: {
			mainPoints: [
				"네트워크 경계에서 불법 접근 차단",
				"패킷 필터링, 프록시, 차세대 방화벽 등 다양한 구현 방식",
			],
			explanation:
				"방화벽은 외부에서 들어오는 트래픽을 모니터링하고 허용된 트래픽만 내부 네트워크로 전달하는 보안 장치로, 설정에 따라 다양한 방식으로 동작합니다.",
			examples: ["기업 네트워크, 개인용 소프트웨어 방화벽"],
		},
	},
	{
		id: "net-019",
		categoryId: 4,
		title: "IDS와 IPS의 차이점은 무엇인가요?",
		description:
			"침입 탐지 시스템(IDS)과 침입 방지 시스템(IPS)의 기능 차이와 각각의 역할을 설명하세요.",
		keywords: ["IDS", "IPS", "침입 탐지", "침입 방지"],
		answer: {
			mainPoints: [
				"IDS는 침입을 탐지만 하고 경고를 발생",
				"IPS는 탐지 후 자동으로 차단하거나 대응",
			],
			explanation:
				"IDS는 네트워크 트래픽을 분석해 침입 시도를 감지하고 관리자에게 알리는 역할을 하며, IPS는 이에 더해 실시간으로 차단하는 기능을 수행합니다.",
			examples: ["IDS: Snort, IPS: 차세대 IPS 솔루션"],
		},
	},
	{
		id: "net-020",
		categoryId: 4,
		title: "VLAN(Virtual LAN)이란 무엇이며, 네트워크에서 어떻게 활용되나요?",
		description:
			"VLAN의 개념, 설정 방법 및 네트워크 세분화와 보안 향상에 어떻게 기여하는지 설명하세요.",
		keywords: ["VLAN", "네트워크 분할", "보안"],
		answer: {
			mainPoints: [
				"물리적 네트워크를 논리적으로 분할",
				"트래픽 관리 및 보안 격리 가능",
			],
			explanation:
				"VLAN은 스위치에서 논리적인 네트워크를 구성하여, 같은 물리적 장비 내에서도 서로 다른 네트워크로 분리함으로써 보안과 관리 효율성을 높입니다.",
			examples: ["사내 부서별 VLAN 구성"],
		},
	},
	{
		id: "net-021",
		categoryId: 4,
		title: "DMZ(Demilitarized Zone)의 개념과 구성 목적은 무엇인가요?",
		description:
			"DMZ가 어떻게 외부 접근을 통제하고 내부 네트워크를 보호하는지 설명하세요.",
		keywords: ["DMZ", "네트워크 보안", "서버 분리"],
		answer: {
			mainPoints: [
				"공격에 노출된 서버를 별도 영역에 배치",
				"내부 네트워크와 외부 네트워크 간의 완충 지대 역할 수행",
			],
			explanation:
				"DMZ는 인터넷과 내부 네트워크 사이에 위치한 중간 영역으로, 웹 서버나 메일 서버를 배치해 외부 공격에 의한 내부 네트워크 노출을 방지합니다.",
			examples: ["웹 서버, FTP 서버 등이 DMZ에 위치"],
		},
	},
	{
		id: "net-022",
		categoryId: 4,
		title: "VPN 프로토콜(PPTP, L2TP, IPSec 등)의 차이점은 무엇인가요?",
		description:
			"각각의 VPN 프로토콜의 특징, 보안 수준, 속도 및 사용 사례를 비교하세요.",
		keywords: ["VPN", "PPTP", "L2TP", "IPSec"],
		answer: {
			mainPoints: [
				"PPTP: 구현이 간단하나 보안 취약점 존재",
				"L2TP: 보통 IPSec과 결합해 보안 강화",
				"IPSec: 높은 보안성을 제공하지만 설정이 복잡",
			],
			explanation:
				"VPN 프로토콜은 연결 방식과 암호화 방식에 따라 차이가 있으며, PPTP는 속도가 빠르지만 보안성이 낮고, L2TP/IPSec은 보안과 성능을 균형 있게 제공하는 편입니다.",
			examples: ["기업 환경에서는 일반적으로 L2TP/IPSec 사용"],
		},
	},
	{
		id: "net-023",
		categoryId: 4,
		title:
			"HTTP 메서드(GET, POST, PUT, DELETE 등)의 차이점과 사용 목적은 무엇인가요?",
		description:
			"각 HTTP 메서드가 어떤 상황에서 사용되는지와 그 특징을 설명하세요.",
		keywords: ["HTTP", "GET", "POST", "PUT", "DELETE"],
		answer: {
			mainPoints: [
				"GET: 데이터 조회, 캐싱 가능",
				"POST: 데이터 생성, 요청 본문 사용",
				"PUT: 데이터 전체 업데이트",
				"DELETE: 데이터 삭제",
			],
			explanation:
				"HTTP 메서드는 RESTful API 설계에서 각기 다른 CRUD 작업을 나타내기 위해 사용되며, 목적에 맞는 메서드를 선택해 요청합니다.",
			examples: ["GET /users, POST /users, PUT /users/1, DELETE /users/1"],
		},
	},
	{
		id: "net-024",
		categoryId: 4,
		title:
			"CDN(Content Delivery Network)의 역할은 무엇이며, 네트워크 성능에 어떤 영향을 미치나요?",
		description:
			"CDN의 기본 원리와 콘텐츠 전송 속도 개선, 부하 분산 등 네트워크 성능 향상 효과를 설명하세요.",
		keywords: ["CDN", "콘텐츠 전송", "부하 분산", "네트워크 성능"],
		answer: {
			mainPoints: [
				"지리적으로 분산된 서버를 통해 콘텐츠 전송",
				"응답 속도 개선 및 부하 분산",
			],
			explanation:
				"CDN은 전 세계에 분산된 서버 네트워크를 통해 사용자에게 가까운 서버에서 콘텐츠를 제공하여 로딩 속도를 빠르게 하고, 트래픽 부담을 경감시킵니다.",
			examples: ["웹사이트 이미지, 동영상 콘텐츠 전송"],
		},
	},
	{
		id: "net-025",
		categoryId: 4,
		title:
			"패킷 스니핑(Packet Sniffing)이란 무엇이며, 이를 방지하는 방법은 무엇인가요?",
		description:
			"패킷 스니핑의 개념, 위험성 및 네트워크 트래픽 암호화와 같은 방어 기법에 대해 설명하세요.",
		keywords: ["패킷 스니핑", "보안", "암호화"],
		answer: {
			mainPoints: [
				"네트워크 트래픽을 가로채어 분석하는 행위",
				"암호화 및 스위치 기반 네트워크 구성으로 방지",
			],
			explanation:
				"패킷 스니핑은 네트워크 상의 데이터를 무단으로 수집하는 기법으로, SSL/TLS 암호화와 같은 보안 조치를 통해 위험을 줄일 수 있습니다.",
			examples: ["Wireshark 도구로 네트워크 분석"],
		},
	},
	{
		id: "net-026",
		categoryId: 4,
		title: "Full-Duplex와 Half-Duplex 통신 방식의 차이점은 무엇인가요?",
		description:
			"두 통신 방식의 개념과 동작 방식, 장단점에 대해 비교 설명하세요.",
		keywords: ["Full-Duplex", "Half-Duplex", "통신 방식"],
		answer: {
			mainPoints: [
				"Full-Duplex: 동시에 양방향 데이터 전송",
				"Half-Duplex: 한 번에 한 방향으로만 전송",
			],
			explanation:
				"Full-Duplex는 동시에 송수신이 가능해 효율적이며, Half-Duplex는 단방향 통신을 번갈아 수행하여 충돌을 방지하지만 속도가 느릴 수 있습니다.",
			examples: ["Full-Duplex: 전화 통화, Half-Duplex: 무전기"],
		},
	},
	{
		id: "net-027",
		categoryId: 4,
		title:
			"네트워크에서 브로드캐스트와 유니캐스트, 애니캐스트의 차이점을 설명하세요.",
		description:
			"각 전송 방식의 개념 및 사용하는 상황과 특징에 대해 설명하세요.",
		keywords: ["브로드캐스트", "유니캐스트", "애니캐스트"],
		answer: {
			mainPoints: [
				"유니캐스트: 한 대상에게 전송",
				"브로드캐스트: 네트워크 내 모든 대상에게 전송",
				"애니캐스트: 가장 가까운 대상에게 전송",
			],
			explanation:
				"유니캐스트는 1:1 통신, 브로드캐스트는 1:모두, 애니캐스트는 여러 대상 중 최적 경로에 위치한 하나의 노드로 전송하는 방식입니다.",
			examples: [
				"유니캐스트: 웹 서버와 클라이언트, 브로드캐스트: ARP, 애니캐스트: DNS Anycast",
			],
		},
	},
	{
		id: "net-028",
		categoryId: 4,
		title: "라우터와 스위치의 역할 차이점은 무엇인가요?",
		description:
			"라우터와 스위치의 기능 및 네트워크에서의 역할 차이에 대해 설명하세요.",
		keywords: ["라우터", "스위치", "네트워크 장비"],
		answer: {
			mainPoints: [
				"라우터: 서로 다른 네트워크 간의 데이터 전달",
				"스위치: 동일 네트워크 내 데이터 프레임 전달",
			],
			explanation:
				"라우터는 서로 다른 네트워크를 연결하며, 스위치는 같은 네트워크 내에서 데이터 프레임을 전달하여 효율적인 통신을 지원합니다.",
			examples: ["라우터: 인터넷 연결, 스위치: 사무실 LAN 구성"],
		},
	},
	{
		id: "net-029",
		categoryId: 4,
		title:
			"네트워크 지연(latency)과 지터(jitter)의 개념과 영향에 대해 설명하세요.",
		description:
			"네트워크 성능 평가 시 중요한 지연과 지터의 개념, 측정 및 해결 방안을 설명하세요.",
		keywords: ["latency", "jitter", "네트워크 성능"],
		answer: {
			mainPoints: ["Latency: 패킷 전송 시간", "Jitter: 전송 시간의 변동"],
			explanation:
				"Latency는 데이터 전송에 걸리는 평균 시간이며, Jitter는 해당 시간의 변동으로 실시간 애플리케이션의 품질에 영향을 미칩니다.",
			examples: ["VoIP 통화 품질 저하 시 지터 원인 분석"],
		},
	},
	{
		id: "net-030",
		categoryId: 4,
		title:
			"네트워크 대역폭(bandwidth)과 처리량(throughput)의 차이에 대해 설명하세요.",
		description:
			"이 두 용어의 개념적 차이와 네트워크 성능에 미치는 영향을 설명하세요.",
		keywords: ["대역폭", "처리량", "네트워크 성능"],
		answer: {
			mainPoints: [
				"대역폭: 최대 데이터 전송 용량",
				"처리량: 실제 전송된 데이터 양",
			],
			explanation:
				"대역폭은 이론적으로 전송 가능한 데이터의 최대치인 반면, 처리량은 실제 네트워크 환경에서 전달되는 데이터 양을 의미합니다.",
			examples: ["인터넷 회선의 최대 속도와 실제 다운로드 속도의 차이"],
		},
	},
	{
		id: "net-031",
		categoryId: 4,
		title: "TCP 3-way Handshake 과정을 설명하세요.",
		description:
			"TCP 연결을 설정하기 위한 3단계 핸드쉐이크 과정 및 각 단계의 역할에 대해 설명하세요.",
		keywords: ["TCP", "3-way Handshake", "연결 설정"],
		answer: {
			mainPoints: ["SYN: 연결 요청", "SYN-ACK: 요청 승인", "ACK: 최종 확인"],
			explanation:
				"TCP 연결은 클라이언트가 SYN 패킷을 보내고, 서버가 SYN-ACK로 응답한 후, 클라이언트가 ACK를 보내 연결을 성립하는 3단계 과정을 거칩니다.",
			examples: ["네트워크 디버깅 시 패킷 캡처로 3-way handshake 분석"],
			codeExample: `// TCP 핸드쉐이크 개념을 설명하는 의사 코드
client -> SYN -> server
server -> SYN-ACK -> client
client -> ACK -> server`,
		},
	},
	{
		id: "net-032",
		categoryId: 4,
		title: "TCP 혼잡 제어(congestion control)의 기본 원리는 무엇인가요?",
		description:
			"TCP 혼잡 제어가 네트워크 혼잡을 어떻게 감지하고 완화하는지 설명하세요.",
		keywords: ["TCP", "혼잡 제어", "네트워크"],
		answer: {
			mainPoints: [
				"슬로우 스타트, 혼잡 회피, 빠른 재전송 등의 알고리즘 사용",
				"네트워크 상태에 따라 전송 속도 조절",
			],
			explanation:
				"TCP 혼잡 제어는 전송 속도를 동적으로 조절하며 네트워크 혼잡을 완화하는데, 슬로우 스타트와 혼잡 회피 알고리즘 등을 통해 패킷 손실 시 재전송을 관리합니다.",
			examples: ["네트워크 트래픽이 많을 때 전송 속도 감소"],
		},
	},
	{
		id: "net-033",
		categoryId: 4,
		title: "네트워크 패킷의 구조와 주요 구성 요소에 대해 설명하세요.",
		description:
			"패킷 헤더, 페이로드 및 트레일러 등 네트워크 패킷의 주요 구성 요소와 그 역할을 설명하세요.",
		keywords: ["패킷", "헤더", "페이로드", "트레일러"],
		answer: {
			mainPoints: [
				"헤더: 목적지, 출발지, 제어 정보 포함",
				"페이로드: 실제 데이터",
				"트레일러: 오류 검출 정보 제공",
			],
			explanation:
				"네트워크 패킷은 헤더, 페이로드, 트레일러로 구성되며, 각 부분은 데이터의 전달과 오류 검출, 제어 정보를 포함하여 올바른 통신을 보장합니다.",
			examples: ["IP 패킷의 경우 헤더에 IP 주소 등이 포함"],
		},
	},
	{
		id: "net-034",
		categoryId: 4,
		title: "네트워크 보안에서 SSL과 TLS의 차이점은 무엇인가요?",
		description:
			"SSL과 TLS의 발전 과정, 차이점 및 현재 보안 통신에서의 역할을 설명하세요.",
		keywords: ["SSL", "TLS", "보안", "암호화"],
		answer: {
			mainPoints: [
				"TLS는 SSL의 후속 버전이며, 보안 향상 및 취약점 개선",
				"현재 대부분 TLS 사용",
			],
			explanation:
				"SSL은 초기 보안 프로토콜이었으나 여러 취약점이 발견되면서 TLS가 등장하여 보안성과 효율성을 개선, 오늘날 인터넷 보안 표준으로 자리잡고 있습니다.",
			examples: ["HTTPS 연결은 TLS를 기반으로 함"],
		},
	},
	{
		id: "net-035",
		categoryId: 4,
		title: "네트워크 트래픽 모니터링 도구의 역할과 주요 기능은 무엇인가요?",
		description:
			"네트워크 성능 분석 및 보안을 위해 사용되는 트래픽 모니터링 도구들의 역할과 기능에 대해 설명하세요.",
		keywords: ["네트워크 모니터링", "트래픽 분석", "보안"],
		answer: {
			mainPoints: [
				"실시간 데이터 트래픽 모니터링",
				"문제 발생 시 진단 및 알림 기능 제공",
			],
			explanation:
				"네트워크 모니터링 도구는 트래픽 흐름, 대역폭 사용량, 오류 패킷 등을 실시간으로 분석하여 네트워크 이상 징후를 조기에 파악하고 대응할 수 있도록 합니다.",
			examples: ["Wireshark, Nagios, Zabbix 등의 도구"],
		},
	},
	{
		id: "net-036",
		categoryId: 4,
		title:
			"네트워크에서 패킷 손실(packet loss)이 발생하는 원인과 해결 방안을 설명하세요.",
		description:
			"패킷 손실이 네트워크 성능에 미치는 영향과 이를 최소화할 수 있는 방법에 대해 설명하세요.",
		keywords: ["패킷 손실", "네트워크 성능", "오류", "복구"],
		answer: {
			mainPoints: [
				"네트워크 혼잡, 물리적 문제, 노이즈 등이 원인",
				"QoS, 오류 정정, 재전송 등의 기법 사용",
			],
			explanation:
				"패킷 손실은 네트워크 혼잡이나 물리적 장애로 발생하며, 이를 줄이기 위해 QoS, 오류 정정 및 재전송 메커니즘을 활용합니다.",
			examples: ["실시간 스트리밍 서비스에서 패킷 손실 최소화"],
		},
	},
	{
		id: "net-037",
		categoryId: 4,
		title: "네트워크 인터페이스 카드(NIC)의 역할과 주요 기능은 무엇인가요?",
		description:
			"NIC가 네트워크에서 데이터 송수신을 담당하는 하드웨어 역할과 성능 향상 요소를 설명하세요.",
		keywords: ["NIC", "네트워크 카드", "하드웨어"],
		answer: {
			mainPoints: [
				"데이터를 전송 및 수신하는 물리적 인터페이스 제공",
				"속도, 듀플렉스 모드, 오류 검출 기능 제공",
			],
			explanation:
				"네트워크 인터페이스 카드는 컴퓨터를 네트워크에 연결해 데이터를 주고받게 하며, 고속 데이터 전송과 효율적 오류 처리를 지원합니다.",
			examples: ["10/100/1000 Mbps 이더넷 카드"],
		},
	},
	{
		id: "net-038",
		categoryId: 4,
		title: "패킷 필터링과 스테이트풀 인스펙션의 차이점은 무엇인가요?",
		description:
			"패킷 필터링 기술과 스테이트풀 인스펙션의 작동 원리, 장단점을 비교하세요.",
		keywords: ["패킷 필터링", "스테이트풀 인스펙션", "방화벽"],
		answer: {
			mainPoints: [
				"패킷 필터링은 단순 규칙 기반, 스테이트풀 인스펙션은 연결 상태 추적",
				"스테이트풀 인스펙션은 보안성이 높으나 부하 증가 가능",
			],
			explanation:
				"패킷 필터링은 각 패킷의 헤더 정보를 검사하는 방식이며, 스테이트풀 인스펙션은 연결 상태를 유지해 보다 정교한 보안 검사를 수행합니다.",
			examples: ["네트워크 방화벽에서 두 기법의 혼합 사용"],
		},
	},
	{
		id: "net-039",
		categoryId: 4,
		title: "멀티캐스트(Multicast) 통신의 개념과 활용 분야는 무엇인가요?",
		description:
			"멀티캐스트 방식의 특징과 이를 활용한 네트워크 서비스에 대해 설명하세요.",
		keywords: ["멀티캐스트", "브로드캐스트", "유니캐스트"],
		answer: {
			mainPoints: [
				"특정 그룹에만 데이터를 전송",
				"대규모 스트리밍 및 IPTV 등에 활용",
			],
			explanation:
				"멀티캐스트는 전체 네트워크가 아닌 특정 그룹에만 데이터가 전달되도록 하여, 네트워크 자원을 효율적으로 사용하며 대규모 방송용으로 적합합니다.",
			examples: ["IPTV, 온라인 세미나 등"],
		},
	},
	{
		id: "net-040",
		categoryId: 4,
		title:
			"스위칭 기술(예: Circuit Switching vs Packet Switching)의 장단점을 설명하세요.",
		description:
			"회선 교환과 패킷 스위칭의 차이 및 각 방식의 특징, 용도에 대해 비교 설명하세요.",
		keywords: ["회선 교환", "패킷 스위칭", "네트워크"],
		answer: {
			mainPoints: [
				"회선 교환: 고정 대역폭, 안정적이나 비효율적",
				"패킷 스위칭: 효율적 자원 사용, 지연 가능",
			],
			explanation:
				"회선 교환은 통신 세션 동안 전용 경로를 확보해 안정적인 연결을 제공하지만 자원이 낭비되는 반면, 패킷 스위칭은 데이터를 작은 패킷으로 분할해 전송하여 자원을 효율적으로 사용합니다.",
			examples: ["전화망: 회선 교환, 인터넷: 패킷 스위칭"],
		},
	},
	{
		id: "net-041",
		categoryId: 4,
		title:
			"네트워크 모니터링 시 SNMP(Simple Network Management Protocol)의 역할은 무엇인가요?",
		description:
			"SNMP가 네트워크 장비의 상태 및 성능 데이터를 수집하는 방법을 설명하세요.",
		keywords: ["SNMP", "네트워크 모니터링", "관리 프로토콜"],
		answer: {
			mainPoints: [
				"네트워크 장비의 관리 및 모니터링",
				"에이전트를 통해 데이터를 수집하고 중앙 관리 서버에 전송",
			],
			explanation:
				"SNMP는 네트워크 내 장비에 에이전트를 설치하여, 장비의 상태나 성능 데이터를 중앙 관리 서버로 전송해 네트워크를 효율적으로 관리하게 합니다.",
			examples: ["라우터, 스위치 관리 시 SNMP 활용"],
		},
	},
	{
		id: "net-042",
		categoryId: 4,
		title:
			"QoS(Quality of Service)가 네트워크에서 중요한 이유와 구현 방법을 설명하세요.",
		description:
			"QoS의 개념과 네트워크 트래픽 우선순위 지정, 대역폭 보장 등의 구현 방식을 설명하세요.",
		keywords: ["QoS", "네트워크 성능", "우선순위"],
		answer: {
			mainPoints: [
				"네트워크 트래픽의 우선순위 지정",
				"중요한 애플리케이션에 대역폭과 지연 시간 보장",
			],
			explanation:
				"QoS는 네트워크 상의 다양한 트래픽에 우선순위를 부여하여, 실시간 애플리케이션이나 미디어 스트리밍 등 중요한 서비스가 안정적으로 동작하도록 보장합니다.",
			examples: ["VoIP, 비디오 컨퍼런싱에 QoS 적용"],
		},
	},
	{
		id: "net-043",
		categoryId: 4,
		title:
			"네트워크 분산 시스템에서 로드 밸런싱의 필요성과 작동 원리에 대해 설명하세요.",
		description:
			"부하 분산이 네트워크 안정성 및 확장성에 미치는 영향과 로드 밸런싱 기법을 설명하세요.",
		keywords: ["로드 밸런싱", "부하 분산", "네트워크"],
		answer: {
			mainPoints: ["여러 서버에 트래픽 분산", "서비스 성능 및 안정성 향상"],
			explanation:
				"로드 밸런싱은 클라이언트 요청을 여러 서버에 분산시켜 트래픽 부하를 균등하게 하고, 서버 과부하를 예방하여 전체 서비스의 응답성을 향상시키는 기술입니다.",
			examples: ["웹 서버 클러스터에 로드 밸런서 사용"],
		},
	},
	{
		id: "net-044",
		categoryId: 4,
		title:
			"네트워크에서 스푸핑(Spoofing) 공격이란 무엇이며 방어하는 방법은 무엇인가요?",
		description:
			"스푸핑 공격의 개념, 위험성 및 이를 방어하기 위한 기술적 대응 방법을 설명하세요.",
		keywords: ["스푸핑", "네트워크 보안", "IP 스푸핑"],
		answer: {
			mainPoints: [
				"위조된 IP나 MAC 주소를 사용한 공격",
				"인증, 패킷 필터링 및 암호화 기법 사용으로 방어",
			],
			explanation:
				"스푸핑은 공격자가 신뢰할 수 있는 주소 정보를 위조하여 네트워크에 침투하는 기법으로, 이를 방지하기 위해 다양한 인증 및 암호화 기술이 활용됩니다.",
			examples: ["ARP 스푸핑 방지를 위한 동적 ARP 검사"],
		},
	},
	{
		id: "net-045",
		categoryId: 4,
		title: "네트워크에서 트래픽 쉐이핑(Traffic Shaping)의 역할은 무엇인가요?",
		description:
			"트래픽 쉐이핑의 개념과 네트워크 대역폭 관리, 트래픽 우선순위 제어에 대해 설명하세요.",
		keywords: ["트래픽 쉐이핑", "대역폭 관리", "QoS"],
		answer: {
			mainPoints: [
				"네트워크 트래픽의 속도와 양을 조절",
				"트래픽 우선순위에 따라 대역폭 분배",
			],
			explanation:
				"트래픽 쉐이핑은 네트워크에서 특정 애플리케이션이나 서비스에 할당되는 대역폭을 조절하여, 전체 트래픽 흐름을 안정화하고 중요 트래픽에 우선순위를 부여하는 기법입니다.",
			examples: ["스트리밍 서비스에서 비디오 데이터 우선 전송"],
		},
	},
	{
		id: "net-046",
		categoryId: 4,
		title:
			"네트워크 주소 할당에서 스태틱과 다이나믹 방식의 차이점은 무엇인가요?",
		description:
			"IP 주소를 고정 또는 동적으로 할당하는 방식의 차이와 장단점을 설명하세요.",
		keywords: ["스태틱 IP", "다이나믹 IP", "IP 할당"],
		answer: {
			mainPoints: [
				"스태틱 IP: 수동 할당, 관리 용이하지만 유연성 낮음",
				"다이나믹 IP: DHCP를 통해 자동 할당, 관리 편의성 높음",
			],
			explanation:
				"스태틱 IP는 특정 디바이스에 고정된 IP를 할당해 예측 가능성이 높지만, 관리 부담이 있으며 다이나믹 IP는 자동 할당으로 효율적 관리가 가능하나 IP 변경으로 인한 문제 발생 가능성이 있습니다.",
			examples: ["서버는 스태틱 IP, 클라이언트는 다이나믹 IP 사용"],
		},
	},
	{
		id: "net-047",
		categoryId: 4,
		title: "네트워크 트래픽 암호화 방식에 대해 설명하세요.",
		description:
			"네트워크에서 데이터 암호화를 위해 사용되는 주요 프로토콜과 기법을 설명하세요.",
		keywords: ["암호화", "네트워크 보안", "SSL/TLS"],
		answer: {
			mainPoints: [
				"SSL/TLS, IPSec, VPN 등을 사용하여 데이터 암호화",
				"전송 데이터 보호 및 중간자 공격 방어",
			],
			explanation:
				"네트워크 암호화는 전송 중 데이터를 보호하기 위한 중요한 보안 기법으로, SSL/TLS, IPSec, VPN 등의 프로토콜을 통해 데이터가 암호화되어 전송됩니다.",
			examples: ["HTTPS를 통한 웹 통신 암호화"],
		},
	},
	{
		id: "net-048",
		categoryId: 4,
		title: "네트워크 계층과 전송 계층의 주요 차이점을 설명하세요.",
		description:
			"OSI 7계층에서 네트워크 계층과 전송 계층의 역할, 기능 및 프로토콜 차이에 대해 설명하세요.",
		keywords: ["네트워크 계층", "전송 계층", "OSI 모델"],
		answer: {
			mainPoints: [
				"네트워크 계층: 패킷 전달, 라우팅 (예: IP)",
				"전송 계층: 신뢰성 있는 데이터 전송 (예: TCP, UDP)",
			],
			explanation:
				"네트워크 계층은 패킷이 출발지에서 목적지로 올바르게 전달되도록 라우팅 등의 기능을 수행하고, 전송 계층은 데이터의 신뢰성, 순서, 오류 제어 등을 담당합니다.",
			examples: ["네트워크 계층: IP, 전송 계층: TCP/UDP"],
		},
	},
	{
		id: "net-049",
		categoryId: 4,
		title: "네트워크에서 스위치와 허브의 차이점은 무엇인가요?",
		description:
			"허브와 스위치의 동작 방식 및 데이터 전송 방식 차이에 대해 설명하세요.",
		keywords: ["스위치", "허브", "네트워크 장비"],
		answer: {
			mainPoints: [
				"허브: 브로드캐스트 방식, 모든 포트에 데이터 전송",
				"스위치: MAC 주소 기반으로 데이터 전송",
			],
			explanation:
				"허브는 들어온 데이터를 모든 포트로 전달하여 충돌을 유발할 수 있는 반면, 스위치는 MAC 주소 테이블을 사용해 목적지 포트로만 데이터를 전달하여 효율적입니다.",
			examples: ["작은 네트워크: 허브 사용, 기업 네트워크: 스위치 사용"],
		},
	},
	{
		id: "net-050",
		categoryId: 4,
		title: "VPN Split Tunneling의 개념과 장단점을 설명하세요.",
		description:
			"VPN 연결 시 일부 트래픽만 터널링하고 나머지는 로컬로 처리하는 방식의 원리와 효과를 설명하세요.",
		keywords: ["VPN", "Split Tunneling", "네트워크 보안"],
		answer: {
			mainPoints: [
				"일부 트래픽은 암호화, 나머지는 로컬 인터넷 사용",
				"네트워크 부하 분산 및 성능 향상 가능",
			],
			explanation:
				"Split Tunneling은 VPN 연결 시 필수 보안 트래픽은 암호화하면서 일반 인터넷 트래픽은 로컬 경로를 통해 전송하여 대역폭 절약과 성능 개선을 도모하지만, 보안 취약점이 될 수 있습니다.",
			examples: ["기업 VPN 접속 시 내부 시스템 접근만 터널링"],
		},
	},
]
