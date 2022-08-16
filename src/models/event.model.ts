import { Schema, model } from 'mongoose';

interface Props {
  title: string;
  desc: string;
  start: Date;
  end: Date;
  user: any;
  status: boolean;
}

const EventSchema = new Schema<Props>({
  title: {
    type: String,
    required: [ true, 'Title is required' ]
  },
  desc: {
    type: String,
    required: [ true, 'Description is required' ],
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
});

EventSchema.methods.toJSON = function() {
  const { __v, _id, ...event } = this.toObject();
  event.id = _id;

  return event;
}

export default model<Props>( 'Event', EventSchema );

