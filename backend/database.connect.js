import mongoose from "mongoose";

const databaseConnect = async () => {
    const url = process.env.MONGO_URL;
    try {
        await mongoose.connect(url);
        console.log("connect with MongoDB succwsfully!!");
    } catch(err) {
        console.log("cannot connect with MongoDB", err);
        process.exit(1);
    }
};

export default databaseConnect;