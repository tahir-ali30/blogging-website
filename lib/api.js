import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))

  return posts
}


// Get Markdown File Content 

export function getFileContentBySlug(fileName, postsPath) {

    const postFilePath = join(postsPath, `${fileName}.md`)
    const fileContents = fs.readFileSync(postFilePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      data,
      content
    }
}





 
async function createPostsForMe() {
  const posts = getAllPosts([
      // 'id',
      'title',
      'featureImg',
      // 'postFormat',
      // 'featured',
      // 'slidePost',
      // 'date',
      // 'slug',
      'cate',
      // 'cate_img',
      'author_img',
      'author_name',
      // 'post_views',
      // 'read_time',
      // 'author_social',
    'content',
      'tags'
  ])

  const htmlContent = await markdownToHtml(posts[0].content)

  const formattedPosts = posts.map((post) => {
    return {
      ...post,
      content:htmlContent,
      status: 'Published',
      featured_img: post.featureImg,
      category: post.cate,
    }
  })

  // log(formattedPosts[0].tags)
  // Loop through the formattedPosts array
  formattedPosts.forEach(async (post) => {
    try {
      // Make a POST request for each post
      await axios.post('http://localhost:3005/api/v1/blogs', post, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjIxMDYzMTFkMTU0ZThhNDAyMmY4NTMiLCJuYW1lIjoiVGFoaXIgQWxpIiwiaWF0IjoxNzEzNDQwMzM3LCJleHAiOjE3MTM1MjY3Mzd9.s_aBRK0861qnvt3uwdyxSKchWJREC6oQsh_5FnI4xDE'
        }
      });
      // console.log('Post sent successfully:', post.title);
    } catch (error) {
      console.error('Error sending post:', error);
    }
  });
}

// createPostsForMe()
