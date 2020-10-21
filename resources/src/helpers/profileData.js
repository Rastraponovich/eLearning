import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export const profile = {
    firstName: 'Иванов',
    lastName: 'Иван',
    avatar: generator.generateRandomAvatar(),
    email: 'ivanov.i@protonmail.com',
    age: '31'
}