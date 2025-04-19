export function generateCategoryJsonLd(
  questions: { title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.slice(0, 5).map((question) => ({
      "@type": "Question",
      name: question.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.description,
      },
    })),
  }
}
