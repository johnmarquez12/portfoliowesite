import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

export const About = () => {

    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "author"]{
                name,
                bio,
                "authorImage" : image.asset->url
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error)
    }, [])

    if (!author)
        return <div>Loading...</div>

    return (
        <main>
            {/* <img/> */}
            <div className="p-10 lg:pt-4 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={builder.image(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justfiy-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hello I'm{" "}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent block={author.bio} projectId={process.env.REACT_APP_sanity_id}/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
