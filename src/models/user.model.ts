import { Schema, model } from 'mongoose';

interface Props {
  name: string;
  email: string;
  password: string;
  img?: string;
  status: boolean;
}

const UserSchema = new Schema<Props>({
  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  email: {
    type: String,
    required: [ true, 'Name is required' ],
    unique: true
  },
  password: {
    type: String,
    requiredPaths: [ true, 'Password is required' ]
  },
  img: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;

  return user;
}

export default model<Props>( 'User', UserSchema );
