import { IUser, User } from '../models/user';

import { connect } from 'mongoose';

export const getAllUsers = async (): Promise<IUser[]> => {
    await connect('mongodb://localhost:27017/leaderboard', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const users = await User.find({});

    return users;
};

export const addScore = async (localId: string, score: number) => {
    await connect('mongodb://localhost:27017/leaderboard', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const user = await User.findOne({ localId });

    if (user) {
        user.scores.push(score);
        await user.save();
        return user;
    } else {
        const newUser = new User({ localId, scores: [score] });
        await newUser.save();
        return newUser;
    }
};
