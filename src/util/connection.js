const {DB_USERNAME,DB_PASSWORD}=process.env

export const connectionSTR=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zuzuh8b.mongodb.net/User_Info?retryWrites=true&w=majority&appName=Cluster0`
