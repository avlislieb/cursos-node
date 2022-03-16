import { User } from "../../../../domain/entities/user";
import { InMemoryUserRepository } from "../../../../tests/repositories/InMemoryUserRepository";
import { CreateLinkUser } from "./CreateLinkUser";


describe('Create link use case', () => {
    it('should be able to create a new link user', async () => {
        const userRepository = new InMemoryUserRepository();

        const user = await User.create({
            name: 'silva',
            email: 'silva@toolzz.com',
            password: '123456'
        })

        userRepository.save(user);
        const sut = new CreateLinkUser(userRepository);
        
        const response = sut.execute({
            link: 'fake-link',
            long_url: 'fake-long_url',
            userId: user.entityId
        });

        expect(response).toBeTruthy();
    })
})