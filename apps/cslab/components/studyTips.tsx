import { LightbulbIcon, Clock } from "lucide-react"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@repo/ui/components/accordion"

export default function StudyTips() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<LightbulbIcon className="h-5 w-5 text-yellow-500" />
					효과적인 학습 방법
				</CardTitle>
				<CardDescription>
					면접 질문을 더 효과적으로 학습하는 방법을 알아보세요
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>적극적 회상(Active Recall)</AccordionTrigger>
						<AccordionContent>
							<p className="text-sm">
								단순히 답변을 읽기만 하는 것보다 질문을 보고 답변을 스스로
								떠올려보세요. 이 "적극적 회상" 방식은 장기 기억력을 강화하는데
								효과적입니다.
							</p>
							<p className="text-sm mt-2">
								<strong>실천 방법:</strong> 질문을 보고 답변을 생각해본 후, 모범
								답변과 비교해보세요.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>간격 반복(Spaced Repetition)</AccordionTrigger>
						<AccordionContent>
							<p className="text-sm">
								에빙하우스의 망각 곡선에 따르면, 학습한 내용은 시간이 지남에
								따라 기억이 감소합니다. 이러한 망각을 방지하기 위해 적절한
								간격으로 반복 학습하는 것이 중요합니다.
							</p>
							<p className="text-sm mt-2">
								<strong>실천 방법:</strong> "완료" 상태로 표시한 질문을 "복습에
								추가" 버튼을 통해 복습 일정에 추가하세요. 시스템이 1일, 3일,
								7일, 14일, 30일 간격으로 복습 알림을 제공합니다.
							</p>
							<div className="flex items-center gap-2 mt-2 text-sm bg-blue-50 p-2 rounded">
								<Clock className="h-4 w-4 text-blue-500" />
								<span>복습은 장기 기억 형성에 필수적입니다!</span>
							</div>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>개념 연결하기(Concept Mapping)</AccordionTrigger>
						<AccordionContent>
							<p className="text-sm">
								개별 개념을 단순 암기하는 것보다 여러 개념 간의 관계를 이해하는
								것이 중요합니다. 연관된 개념들을 함께 학습하면 이해도와 기억력이
								향상됩니다.
							</p>
							<p className="text-sm mt-2">
								<strong>실천 방법:</strong> 각 질문에 있는 키워드를 활용해
								연관된 질문들을 함께 학습하세요. 서로 다른 카테고리의 질문들도
								연결지어 생각해보세요.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger>실제 상황 대비하기</AccordionTrigger>
						<AccordionContent>
							<p className="text-sm">
								면접은 단순히 지식을 말하는 것이 아니라 압박 상황에서 명확하게
								설명하는 능력을 평가합니다.
							</p>
							<p className="text-sm mt-2">
								<strong>실천 방법:</strong> 타이머를 설정하고 질문에 대해 2-3분
								동안 소리 내어 답변해보세요. 가능하다면 동료나 친구와 모의
								면접을 진행해보세요.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	)
}
