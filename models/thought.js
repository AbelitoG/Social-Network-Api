const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new Schema(
    {
        thoguhtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dateFormat(date),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [assignmentSchema],
        
    },{
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `this.reactions.length`;
  })


  const Thought = model('thought', thoughtSchema);

module.exports = Thought;
