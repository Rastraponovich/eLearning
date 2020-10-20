import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()
import { nanoid } from 'nanoid'
export const lessonsEntry = {
    Ukm7SJ: {
        id: 'Ukm7SJ',
        title: 'Урок 1',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 31
    },
    dk3t0m: {
        id: 'dk3t0m',
        title: 'Урок 2',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 71
    },
    fv1hud: {
        id: 'fv1hud',
        title: 'Урок 3',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 0
    },
    tiqD0R: {
        id: 'tiqD0R',
        title: 'Урок 4',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 151
    }
}