const EventEmitter=require('events')

let n=new EventEmitter()

n.on('waterfull',()=>{
    console.log("water is full, please close the tap")
    setTimeout(()=>{
        console.log("last warning plese close the tap")
    },3000)

})

n.emit('waterfullnode ')