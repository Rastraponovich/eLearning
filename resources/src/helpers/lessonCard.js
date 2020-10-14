import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()
import { nanoid } from 'nanoid'
export const lessons = {
    [nanoid(6)]: {
        id: nanoid(6),
        title: 'Урок 1',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: '31 рубль'
    },
    [nanoid(6)]: {
        id: nanoid(6),
        title: 'Урок 2',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: '71 рубль'
    },
    [nanoid(6)]: {
        id: nanoid(6),
        title: 'Урок 3',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: 'Бесплатно'
    },
    [nanoid(6)]: {
        id: nanoid(6),
        title: 'Урок 4',
        content: 'Ничего не понятно но очень интернесно',
        cover: generator.generateRandomAvatar(),
        category: 'Прочее',
        price: '151 рубль'
    }
}