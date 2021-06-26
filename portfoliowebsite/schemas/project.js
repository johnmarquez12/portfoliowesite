export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options : {
                list: [
                    { value: "personal", title: "Personal"},
                    { value: "school", title: "School"},
                ]
            }
        },
        {
            name: "projectStatus",
            title: "Project Status",
            type: "string",
            options : {
                list: [
                    { value: "completed", title: "Completed"},
                    { value: "ongoing", title: "Ongoing"},
                    { value: "dropped", title: "Dropped"}
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        }
    ]
}