import { Document, Model, model, Schema } from 'mongoose';

export interface IUser extends Document {
    localId: string;
    scores: number[];
}

const UserSchema: Schema = new Schema({
    localId: { type: String, required: true },
    scores: { type: [Number], required: true },
});

export const User: Model<IUser> = model('User', UserSchema);
