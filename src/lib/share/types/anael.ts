


export type AnaelNumbers = {
  DD:number,
  MM:number,
  YY:number,
  x:number,
  main:{
    x5:number,
    x6:number,
    x7:number,
    x8:number,
    x9:number
  }
}

export function IfAcumMinus(arg:number){
  let num = arg

  while(num > 22){
    num = num - 22
  }

  return checkNumber(num)
}

export function checkNumber(arg:number){
  if(arg === 0) return 22
  if(arg < 0) return -arg

  return arg
}
