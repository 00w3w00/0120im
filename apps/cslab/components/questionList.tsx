import { Question } from "@/data/questions"
import { QuestionItem } from "./questionItem"

interface QuestionListProps {
	questions: Question[]
	categoryPath: string
}

export default function QuestionList({ questions }: QuestionListProps) {
	return (
		<div className="space-y-6">
			<div className="space-y-4 flex flex-col gap-5">
				{questions.map((question) => {
					return <QuestionItem key={question.id} question={question} />
				})}
			</div>
		</div>
	)
}
