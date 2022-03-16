import { User } from "../../../domain/entities/user";
import { InMemoryUserRepository } from "../../../tests/repositories/inMemoryUserRepository";
import { CreatePostUser } from "./create-post-user"


describe('Create post use case', () => {
    it('should be able to create a new post', async () => {
        const userRepository = new InMemoryUserRepository();
        const user = await User.create({
            name: 'silva',
            email: 'silva@toolzz.com',
            password: '123456'
        });

        userRepository.save(user);

        const sut = new CreatePostUser(userRepository);

        const response = await sut.execute({
            title: 'fake-title',
            body: 'fake-body',
            userId: user.id
        });

        expect(response).toBeTruthy();
    })
})