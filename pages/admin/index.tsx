import React from 'react'
import 'tailwindcss/tailwind.css'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const res = await client.getEntries({ content_type: 'admin' });

  return {
    props: {
      admin: res.items
    }
  }

}

const Admin = ({ admin } : { admin: any }) => {
  console.log(admin);
  return (
    <div>
      {admin.map((post: any) => (
        <div>
          <div key={post.sys.id} className='text-3xl font-bold px-6 py-2'>{post.fields.title}</div>
          <div className='px-6 py-2'>
            {documentToReactComponents(post.fields.detail)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Admin