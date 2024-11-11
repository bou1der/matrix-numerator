type Size = "sm" | "md" | "lg"

const Sizes:{
  [key in Size]:{
    text:string,
    }
} = {
    "sm":{
      text:"text-[16px]",
    },
    "md":{
      text:"text-[18px]",
    },
    "lg":{
      text:"text-[28px]",
    }
}

export function SVGNumber({num, x, y, size, moneyChannel}:{
  num:string | number,
  x:number,
  y:number,
  size:Size,
  moneyChannel?:boolean
}){
  return(
    <text x={x} y={y} textAnchor="middle"  fontFamily="Montserrat" fontWeight={500} origin="center" transform={moneyChannel ? `scale(-1, 1) translate(-${x * 2}, 0) ` : ""}  className={` ${Sizes[size].text}`} fill="#70548E">{num}</text>
  )
}
