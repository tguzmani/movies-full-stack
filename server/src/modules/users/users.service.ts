import { User } from './entities/user.entity';
import { USER_REPOSITORY } from 'src/constants';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  PasswordsDontMatchException,
  UserAlreadyExistsException,
} from './users.exceptions';

@Injectable()
export class UsersService {
  SALT_ROUNDS = 10;

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, passwordConfirm } = createUserDto;

    if (password !== passwordConfirm) throw new PasswordsDontMatchException();

    if (await this.findByEmail(email)) throw new UserAlreadyExistsException();

    const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

    const user = { ...createUserDto, password: hashedPassword };

    await this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findById(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    user.password = undefined;

    return user;
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
