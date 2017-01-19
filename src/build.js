import FileSystem from 'fs-extra'
import path from 'path'
const sourcePath = './src'
const targetPath = './lib'
function makePromise(fn){
    return (...args) => new Promise( function(resolve,reject){
          fn(...args,function(err,data){
              // console.log(err)
              err ? reject(err):resolve(data)
          })
    })
}
function makePromiseRange(obj,api=[]){
    let ret = {}
    api.map(el => {
        if(el && obj[el]) ret[el] = makePromise(obj[el])
    })
    return ret
}
function genFile(filePath){
    let {name} = path.parse(filePath)
    return [path.resolve(targetPath,`${name}.wpy`),path.resolve(targetPath,`${name}.vue`)]
}

(async ()=>{
  const fs = makePromiseRange(FileSystem,['readdir','copy'],fs)
  try{
      let dir = await fs.readdir(sourcePath)
      dir.filter(el => el.match(/\.wpy/)).map(async (el)=>{
          // console.log(path.join(sourcePath,el))
          // console.log(path.join(targetPath,el))
          let src=path.resolve(sourcePath,el),tars=genFile(src)
          tars.map( async (t) => {
            console.log("[OPERATION][source]:%s TO [target]:%s",src,t)
            await fs.copy(src,t)
            console.log("[COMPELTE][source]:%s TO [target]:%s",src,t)
          } )

      })
  }catch(err){
      console.log(err)
  }

})()
