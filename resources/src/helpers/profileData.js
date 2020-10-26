import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export const profile = {
    firstName: 'Иван',
    lastName: 'Иванов',
    avatar: generator.generateRandomAvatar(),
    email: 'ivanov.i@protonmail.com',
    age: '31',
    availibleLessons: [],
    myLessons: ['tiqD0R'],
}
