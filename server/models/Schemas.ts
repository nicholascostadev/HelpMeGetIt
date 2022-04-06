import { Schema, model } from 'mongoose';
import { User, UserList } from '../interfaces';

const userSchema = new Schema<User>({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const usersListSchema = new Schema<UserList>({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	date: { type: Date, default: Date.now },
});

const Users = model<User>('Users', userSchema);
const UsersList = model<UserList>('UsersList', usersListSchema);

const mySchemas = { Users: Users, UsersList: UsersList };

export default mySchemas;
