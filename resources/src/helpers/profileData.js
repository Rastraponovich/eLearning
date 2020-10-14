import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export const profile = {
    firstName: 'Виталий',
    lastName: 'Куроедов',
    avatar: generator.generateRandomAvatar(),
    email: 'wilde@bk.ru',
    age: '31'
}