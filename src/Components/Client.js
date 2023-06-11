import * as contentful from 'contentful'

export const Client = contentful.createClient ({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})