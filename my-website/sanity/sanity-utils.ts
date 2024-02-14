//sanity-utils.ts
import {createClient, groq} from "next-sanity";

export async function getProjects(){

    const  client = createClient({

        projectId: 'cnlf52x7',
    
        dataset: 'production',

        apiVersion: "2024-02-12",


    });

    return client.fetch(

        groq`*[_type == "project" ]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`

    )

}