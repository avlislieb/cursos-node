import { User } from "../../../../domain/entities/user";
import { InMemoryUserRepository } from "../../../../tests/repositories/InMemoryUserRepository";
import { CreateUser } from "./CreateUser"

describe('Create user use case', () => {
    it('should be able to create a new user', async () => {
        const userRepository = new InMemoryUserRepository();
        const user = await User.create({
            name: 'silva',
            email: 'silva@toolzz.com',
            password: '123456'
        });

        const sut = new CreateUser(userRepository);
        
        const response = sut.execute({
            name: 'silva',
            email: 'silva@toolzz.com',
            password: '123456'
        });

        expect(response).toBeTruthy();
    })
})