import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files"

const Image = defineNestedType(() => ({
    name: "Image",
    fields: {
        "src": { type: "string", required: true },
        "width": { type: "number", required: true },
        "height": { type: "number", required: true },
    },
}))

const Video = defineNestedType(() => ({
    name: "Video",
    fields: {
        "src": { type: "string", required: true },
        "width": { type: "number", required: true },
        "height": { type: "number", required: true },
    },
}))

export const Portfolio = defineDocumentType(() => ({
    name: "Portfolio",
    filePathPattern: `portfolio/*.md`,
    bodyType: "markdown",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        slug: { type: "string", required: true },
        image: { type: "nested", of: Image, required: false },
        video: { type: "nested", of: Video, required: false },
        description: { type: "string", required: true },
        enabled: { type: "boolean", required: true },
        orderIndex: { type: "number", required: true },

        preview: { type: "nested", of: Image, required: false },
        overview: { type: "string", required: false },
        role: { type: "list", of: { type:"string"}, required: false },
        tools: { type: "list", of: { type:"string"}, required: false },
        duration: { type: "string", required: false },    
        team: { type: "list", of: { type:"string"}, required: false },
        textarea:{ type: "boolean", required: false },
        isPlayground:{ type: "boolean", required: false },


    },
}))


export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Portfolio],
})