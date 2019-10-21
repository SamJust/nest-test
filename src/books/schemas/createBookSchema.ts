import {
    object,
    string
} from '@hapi/joi';

export default object({
    author: string().max(255).required(),
    title: string().max(255).required(),
    description: string().max(255).required(),
    image: string().max(255).required(),
    releaseDate: string().max(255).required()
});