import { Schema, model } from 'mongoose';
import { User } from '../interfaces';

const userSchema = new Schema<User>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const Users = model<User>('Users', userSchema);

const mySchemas = { Users: Users };

export default mySchemas;

// ... new Schema

// const mySchemas =  {ModelName: ModelName}
