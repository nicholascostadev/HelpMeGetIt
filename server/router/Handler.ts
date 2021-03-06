import express from 'express';
const router = express.Router();
import Schemas from '../models/Schemas';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { loginValidation, registerValidation } from '../validation';
import { User } from '../interfaces';

let saltRounds: number = parseInt(process.env.SALT_ROUNDS!);

router.post('/api/register', async (req, res) => {
	const UsersList = Schemas.UsersList;

	const user: User = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	const { error } = registerValidation(user);

	if (error) {
		return res.status(400).json({
			status: 'error',
			error: error.details[0].message,
		});
	}

	try {
		//	Hash user's password
		bcrypt.genSalt(saltRounds, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				const hashedUser = {
					name: user.name,
					email: user.email,
					password: hash,
				};
				const newUser = new Schemas.Users(hashedUser);
				// await to save a new user
				newUser.save((error: any, newUserResults) => {
					if (!error) {
						// Check if everything went right
						const userAddedToList = new UsersList({
							email: hashedUser.email,
							name: hashedUser.name,
						});

						userAddedToList.save();

						res.send({
							status: 'ok',
						});
					} else {
						if (error.code === 11000) {
							res.send({
								status: 'error',
								error: 'Email already in use',
							});
						} else {
							res.send({
								status: 'error',
								error: error.message,
							});
						}
					}
				});
			});
		});
	} catch (err) {
		console.log(err);
	}
});

router.post('/api/login', async (req, res) => {
	const Users = Schemas.Users;

	const user: { email: string; password: string } = {
		email: req.body.email,
		password: req.body.password,
	};

	const { error } = loginValidation(user);

	if (error) {
		return res.status(400).json({
			status: 'error',
			error: error,
		});
	}

	try {
		await Users.findOne({ email: user.email }).then(foundUser => {
			if (foundUser) {
				bcrypt.compare(user.password, foundUser.password, (error, result) => {
					if (result) {
						const token = jwt.sign(
							{
								id: foundUser._id,
								email: foundUser.email,
							},
							process.env.JWT_SECRET!
						);
						res.json({
							status: 'ok',
							token: token,
						});
					} else {
						res.json({
							status: 'error',
							error: 'email ou senha incorretos',
						});
					}
				});
			}
		});
	} catch (err) {
		res.json({
			status: 'error',
			error: 'email ou senha incorretos',
		});
	}
});

export default router;
