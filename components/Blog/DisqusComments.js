import { DiscussionEmbed } from 'disqus-react'

const DisqusComments = ({ post }) => {
  const disqusShortname = 'xarala-academy'
  const disqusConfig = {
    url: `${process.env.DOMAIN}/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  }

  return (
    <div className="bg-white py-4 px-4 rounded-lg shadow-md mt-2">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}

export default DisqusComments
