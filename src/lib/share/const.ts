
type options = {
  checkIgnore?:true
}

export function Acumulate(arg: number[], options?:options ){

  let num = arg.reduce((acum, curr) =>{
    return acum + curr
  })

  while(num > 22){
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0)
  }

  return Number(num)
}

export function IfAcumulate(arg:number){
  if(arg > 22){
    return arg
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0)
  }

  return arg
}

export const startYear = 1970;
export const endYear = new Date().getFullYear()

