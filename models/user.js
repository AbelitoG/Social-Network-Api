const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'user',
            },
        ],
    },{
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `this.friends.length`;
  })


  const User = model('user', userSchema);

module.exports = User;
