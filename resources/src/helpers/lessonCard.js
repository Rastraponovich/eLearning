import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()
import { nanoid } from 'nanoid'
export const lessonsEntry = {
    Ukm7SJ: {
        id: 'Ukm7SJ',
        title: 'Урок 1',
        rating: 1,
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 31,
        author: 'userId',
    },
    dk3t0m: {
        id: 'dk3t0m',
        title: 'Урок 2',
        rating: 4,
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 71,
        author: 'userId',
    },
    fv1hud: {
        id: 'fv1hud',
        title: 'Урок 3',
        rating: 4,
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 0,
        author: 'userId',
    },
    tiqD0R: {
        id: 'tiqD0R',
        title: 'Урок 4',
        rating: 5,
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 151,
        author: 'userId',
    },
}
