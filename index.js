// import jsonserver
const jsonserver=require('json-server')

// create server

const server=jsonserver.create()

// set router:::to go to each resources seperately

const router=jsonserver.router("db.json")


// create middleware   :::act as a parser




const middleware=jsonserver.defaults()
// create port

const PORT=process.env.PORT ||4000-0

// to use middleware and router in server

server.use(middleware)
server.use(router)

// run server

server.listen(PORT,()=>{
    console.log("media player started at port:"+PORT);
})