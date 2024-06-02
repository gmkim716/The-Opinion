export default function TopicPage({ params }: { params: { topicId: string } }) {
  return (
    <main>
      TopicPage <span>num: {params.topicId}</span>
    </main>
  );
}
