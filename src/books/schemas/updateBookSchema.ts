import {
    object,
    string
} from '@hapi/joi';

export default object({
    author: string().max(255),
    title: string().max(255),
    description: string().max(255),
    image: string().max(255),
    releaseDate: string().max(255)
});