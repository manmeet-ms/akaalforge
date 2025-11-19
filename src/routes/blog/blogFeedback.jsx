import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/blogFeedback')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/blogFeedback"!</div>
}
