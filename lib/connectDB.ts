import mongoose, { CallbackError } from "mongoose"

function connectDB() {
  if(mongoose.connections[0].readyState) {
    console.log("Already connected")
    return;
  }

  const uri = process.env.MONGODB_URL as string
  const options = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  const callBackWithoutResult = (err: CallbackError) => {
    if(err) throw err
    console.log("Connected to mongodb")
  }

  mongoose.connect(uri, options, callBackWithoutResult)
}

export default connectDB