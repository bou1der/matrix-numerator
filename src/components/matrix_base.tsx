import Image from "next/image"
import { LadyniMatrixNumbers } from "~/lib/share/types/ladyni"
import MatrixSvg from "public/matrix_ladyni.svg"
import { cn } from "~/lib/utils"
import { IfAcumulate } from "~/lib/share/const"
import { MoneyChannel } from "./CalculateMoney"





export function BaseMatrix({numbers, className, moneyChannel}:{
  numbers?:LadyniMatrixNumbers,
  moneyChannel:boolean
  className?:string
}){
  moneyChannel = false


  return(
    <div className={cn(className, `${ moneyChannel ? "rotate-[135deg]" : ""} relative order-first lg:order-last  min-w-[300px] mix-h-[300px] size-[300px] sm:min-w-[600px] sm:min-h-[600px] sm:size-[600px]`)}>
      {/* K */}
      {
        !moneyChannel ? (
          <>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[80.1%] sm:left-[61.1%]"   num={numbers ? IfAcumulate(numbers.special.x + numbers.main.x1) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[61.7%] sm:left-[80%]"     num={numbers ? IfAcumulate(numbers.special.DD + numbers.main.x1) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[34.2%] sm:left-[80%]"     num={numbers ? IfAcumulate(numbers.special.DD + numbers.main.x2) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[16%] sm:left-[61.2%]"     num={numbers ? IfAcumulate(numbers.special.MM + numbers.main.x2) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[16%] sm:left-[35.2%]"     num={numbers ? IfAcumulate(numbers.special.MM + numbers.main.x3) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[34.23%] sm:left-[16.10%]" num={numbers ? IfAcumulate(numbers.special.YY + numbers.main.x3) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[61.65%] sm:left-[16.10%]" num={numbers ? IfAcumulate(numbers.special.YY + numbers.main.x4) : "?"}/>
            <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[68.65%]  sm:top-[80%] sm:left-[34.5%]" num={numbers ? IfAcumulate(numbers.special.x + numbers.main.x4) : "?"}/>
          </>
        ) : undefined
      }

      {/* X7 */}
      <MNumber moneyChannel={moneyChannel} size="lg" position="top-[45.7%] left-[48.65%]  sm:top-[46.6%] sm:left-[46.8%]" num={numbers ? numbers.main.x6 + numbers.main.x5 : "?" }/>

      {/* X6 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[45.7%] left-[48.65%]  sm:top-[57.75%] sm:left-[38.2%]" num={numbers ? numbers.main.x6 : "?"}/>
      {/* X5 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[45.7%] left-[48.65%]  sm:top-[57.75%] sm:left-[58%]" num={numbers ? numbers.main.x5 : "?"}/>

      {/* DD */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[90%]  sm:top-[47.3%] sm:left-[92.5%]" num={numbers ? numbers.special.DD : "?"}/>
      {/* X15 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[47.89%] sm:left-[85.6%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.special.DD + numbers.main.x5) + numbers.special.DD) : "?"}/>
      {/* X14 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[47.9%] sm:left-[79.96%]" num={numbers ? IfAcumulate(numbers.special.DD + numbers.main.x5) : "?"}/>

      {/* YY */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[47.3%] sm:left-[2.3%]" num={numbers ? numbers.special.YY : "?"}/>
      {/* X13 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[47.9%] sm:left-[10.5%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.special.YY + numbers.main.x5) + numbers.special.YY): "?"}/>
      {/* X12 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[47.95%] sm:left-[16.10%]" num={numbers ? IfAcumulate(numbers.special.YY + numbers.main.x5): "?"}/>

      {/* MM */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[2.1%] sm:left-[47.45%]" num={numbers ? numbers.special.MM : "?"}/>
      {/* X11 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[10.4%] sm:left-[48.08%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.special.MM + numbers.main.x5) + numbers.special.MM) : "?" }/>
      {/* X10 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[16%] sm:left-[48.06%]" num={numbers ? IfAcumulate(numbers.special.MM + numbers.main.x5) : "?"}/>

      {/* X */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[92.4%] sm:left-[47.45%]" num={numbers ? numbers.special.x : "?"}/>
      {/* X8 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[80%] sm:left-[48.15%]" num={numbers ? IfAcumulate(numbers.special.x + numbers.main.x5) : "?"}/>
      {/* X9 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[85.45%] sm:left-[48.15%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.special.x + numbers.main.x5) + numbers.special.x) : "?"}/>

      {/* X1 */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[79.15%] sm:left-[79.15%]" num={numbers ? numbers.main.x1 : "?"}/>
      {/* X23 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[74.6%] sm:left-[74.6%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.main.x1 + numbers.main.x6) + numbers.main.x1) : "?"}/>
      {/* X22 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[70.6%] sm:left-[70.6%]" num={numbers ? IfAcumulate(numbers.main.x1 + numbers.main.x6) : "?"}/>

      {/* X2 */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[15.2%] sm:left-[79.35%]" num={numbers ? numbers.main.x2 : "?"}                                                                />
      {/* X19 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[21.4%] sm:left-[74.55%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.main.x2 + numbers.main.x6) + numbers.main.x2) : "?"}/>
      {/* X18 */}
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[25.4%] sm:left-[70.6%]" num={numbers ? IfAcumulate(numbers.main.x2 + numbers.main.x6) : "?"}/>

      {/* X3 */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]  sm:top-[15.8%] sm:left-[15.8%]"  num={numbers ? numbers.main.x3 : "?"}                                                              />
      {/* X17 */}                                                                                                                                                                                
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[21.4%] sm:left-[21.45%]" num={numbers ? IfAcumulate(IfAcumulate(numbers.main.x3 + numbers.main.x6) + numbers.main.x3) : "?"}/>
      {/* X16 */}                                                                                                                                                                                
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]  sm:top-[25.4%] sm:left-[25.45%]" num={numbers ? IfAcumulate(numbers.main.x3 + numbers.main.x6) : "?"}/>

      {/* X4 */}
      <MNumber moneyChannel={moneyChannel} size="md" position="top-[2.5%] left-[48.65%]   sm:top-[79%]  sm:left-[15.5%] "    num={numbers ? numbers.main.x4 : "?"}/>
      {/* X21 */}                                                                                                                                                                                   
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]   sm:top-[74.45%] sm:left-[21.55%] " num={numbers ? IfAcumulate(IfAcumulate(numbers.main.x4 + numbers.main.x6) + numbers.main.x4) : "?"}/>
      {/* X20 */}                                                                                                                                                                                   
      <MNumber moneyChannel={moneyChannel} size="sm" position="top-[2.5%] left-[48.65%]   sm:top-[70.5%]  sm:left-[25.5%]"   num={numbers ? IfAcumulate(numbers.main.x4 + numbers.main.x6) : "?"}/>

      <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M299.999 28.7686L28.7677 300L299.999 571.232L571.231 300L299.999 28.7686Z" stroke="#70548E" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M108.209 108.21H491.789V491.79H108.209V108.21Z" stroke="#70548E" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M299.999 571.232V28.7686" stroke="#70548E" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M491.789 491.79L108.209 108.21" stroke="#007AFF" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M571.231 300H28.7679" stroke="#5856D6" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M491.789 108.21L108.209 491.79" stroke="#AF52DE" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round"/>

        <path d="M310.549 3.32022C303.794 0.522166 296.204 0.522166 289.449 3.32022L97.6744 82.756C90.9194 85.5537 85.5525 90.9206 82.7547 97.6756L3.31942 289.45C0.520887 296.205 0.520887 303.795 3.31942 310.55L82.7547 502.325C85.5525 509.08 90.9194 514.447 97.6744 517.244L289.449 596.68C296.204 599.478 303.794 599.478 310.549 596.68L502.324 517.244C509.079 514.447 514.446 509.08 517.243 502.325L596.679 310.55C599.477 303.795 599.477 296.205 596.679 289.45L517.243 97.6756C514.446 90.9206 509.079 85.5537 502.324 82.756L310.549 3.32022Z" stroke="#70548E" strokeWidth="2.34375" strokeLinejoin="round"/>
        <path d="M259.617 300C259.617 322.303 277.697 340.383 299.999 340.383C322.302 340.383 340.382 322.303 340.382 300C340.382 277.698 322.302 259.618 299.999 259.618C277.697 259.618 259.617 277.698 259.617 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M1.17178 300C1.17178 315.241 13.5272 327.597 28.7684 327.597C44.0096 327.597 56.365 315.241 56.365 300C56.365 284.759 44.0096 272.404 28.7684 272.404C13.5272 272.404 1.17178 284.759 1.17178 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M543.635 300C543.635 315.241 555.99 327.597 571.232 327.597C586.473 327.597 598.828 315.241 598.828 300C598.828 284.759 586.473 272.404 571.232 272.404C555.99 272.404 543.635 284.759 543.635 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M92.6001 300C92.6001 308.621 99.5888 315.61 108.21 315.61C116.831 315.61 123.82 308.621 123.82 300C123.82 291.379 116.831 284.39 108.21 284.39C99.5888 284.39 92.6001 291.379 92.6001 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M476.179 300C476.179 308.621 483.168 315.61 491.789 315.61C500.41 315.61 507.399 308.621 507.399 300C507.399 291.379 500.41 284.39 491.789 284.39C483.168 284.39 476.179 291.379 476.179 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M508.709 300C508.709 309.283 516.234 316.809 525.517 316.809C534.8 316.809 542.326 309.283 542.326 300C542.326 290.717 534.8 283.192 525.517 283.192C516.234 283.192 508.709 290.717 508.709 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M57.6734 300C57.6734 309.283 65.1988 316.809 74.4819 316.809C83.7649 316.809 91.2903 309.283 91.2903 300C91.2903 290.717 83.7649 283.192 74.4819 283.192C65.1988 283.192 57.6734 290.717 57.6734 300Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>

        <path d="M272.403 28.7685C272.403 44.0096 284.759 56.3651 300 56.3651C315.241 56.3651 327.596 44.0096 327.596 28.7685C327.596 13.5273 315.241 1.17188 300 1.17188C284.759 1.17188 272.403 13.5273 272.403 28.7685Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M284.39 108.21C284.39 116.831 291.379 123.82 300 123.82C308.621 123.82 315.61 116.831 315.61 108.21C315.61 99.5893 308.621 92.6006 300 92.6006C291.379 92.6006 284.39 99.5893 284.39 108.21Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M283.191 74.4827C283.191 83.7658 290.717 91.2911 300 91.2911C309.283 91.2911 316.808 83.7658 316.808 74.4827C316.808 65.1997 309.283 57.6743 300 57.6743C290.717 57.6743 283.191 65.1997 283.191 74.4827Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M272.403 571.232C272.403 586.473 284.759 598.828 300 598.828C315.241 598.828 327.596 586.473 327.596 571.232C327.596 555.99 315.241 543.635 300 543.635C284.759 543.635 272.403 555.99 272.403 571.232Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M284.39 491.79C284.39 500.411 291.379 507.4 300 507.4C308.621 507.4 315.61 500.411 315.61 491.79C315.61 483.169 308.621 476.18 300 476.18C291.379 476.18 284.39 483.169 284.39 491.79Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M283.191 525.518C283.191 534.801 290.717 542.326 300 542.326C309.283 542.326 316.808 534.801 316.808 525.518C316.808 516.235 309.283 508.709 300 508.709C290.717 508.709 283.191 516.235 283.191 525.518Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M464.193 491.79C464.193 507.031 476.548 519.387 491.789 519.387C507.03 519.387 519.386 507.031 519.386 491.79C519.386 476.549 507.03 464.193 491.789 464.193C476.548 464.193 464.193 476.549 464.193 491.79Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>

        <path d="M420.005 435.616C420.005 444.237 426.994 451.226 435.615 451.226C444.236 451.226 451.225 444.237 451.225 435.616C451.225 426.995 444.236 420.006 435.615 420.006C426.994 420.006 420.005 426.995 420.005 435.616Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M442.656 459.465C442.656 468.748 450.181 476.273 459.464 476.273C468.747 476.273 476.272 468.748 476.272 459.465C476.272 450.182 468.747 442.656 459.464 442.656C450.181 442.656 442.656 450.182 442.656 459.465Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M80.6134 108.21C80.6134 123.452 92.9688 135.807 108.21 135.807C123.451 135.807 135.807 123.452 135.807 108.21C135.807 92.9692 123.451 80.6138 108.21 80.6138C92.9688 80.6138 80.6134 92.9692 80.6134 108.21Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M148.774 164.384C148.774 173.005 155.762 179.994 164.383 179.994C173.004 179.994 179.993 173.005 179.993 164.384C179.993 155.763 173.004 148.775 164.383 148.775C155.762 148.775 148.774 155.763 148.774 164.384Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M123.726 140.536C123.726 149.819 131.251 157.344 140.534 157.344C149.817 157.344 157.343 149.819 157.343 140.536C157.343 131.253 149.817 123.727 140.534 123.727C131.251 123.727 123.726 131.253 123.726 140.536Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M80.6134 491.79C80.6134 507.031 92.9688 519.387 108.21 519.387C123.451 519.387 135.807 507.031 135.807 491.79C135.807 476.549 123.451 464.193 108.21 464.193C92.9688 464.193 80.6134 476.549 80.6134 491.79Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
          
        <path d="M147.575 435.616C147.575 444.899 155.101 452.425 164.384 452.425C173.667 452.425 181.192 444.899 181.192 435.616C181.192 426.333 173.667 418.808 164.384 418.808C155.101 418.808 147.575 426.333 147.575 435.616Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M223.79 358.996C223.79 368.279 231.315 375.804 240.598 375.804C249.881 375.804 257.407 368.279 257.407 358.996C257.407 349.713 249.881 342.188 240.598 342.188C231.315 342.188 223.79 349.713 223.79 358.996Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M342.838 358.996C342.838 368.279 350.363 375.804 359.646 375.804C368.929 375.804 376.455 368.279 376.455 358.996C376.455 349.713 368.929 342.188 359.646 342.188C350.363 342.188 342.838 349.713 342.838 358.996Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M123.726 459.465C123.726 468.748 131.251 476.273 140.534 476.273C149.817 476.273 157.343 468.748 157.343 459.465C157.343 450.182 149.817 442.656 140.534 442.656C131.251 442.656 123.726 450.182 123.726 459.465Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M464.193 108.21C464.193 123.452 476.548 135.807 491.789 135.807C507.03 135.807 519.386 123.452 519.386 108.21C519.386 92.9692 507.03 80.6138 491.789 80.6138C476.548 80.6138 464.193 92.9692 464.193 108.21Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
          
        <path d="M420.005 164.384C420.005 173.005 426.994 179.994 435.615 179.994C444.236 179.994 451.225 173.005 451.225 164.384C451.225 155.763 444.236 148.775 435.615 148.775C426.994 148.775 420.005 155.763 420.005 164.384Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
        <path d="M442.656 140.535C442.656 149.818 450.181 157.344 459.464 157.344C468.747 157.344 476.272 149.818 476.272 140.535C476.272 131.252 468.747 123.727 459.464 123.727C450.181 123.727 442.656 131.252 442.656 140.535Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>


        {
          !moneyChannel ? (
            <>
              <path d="M474.981 217.199C474.981 226.482 482.506 234.007 491.789 234.007C501.072 234.007 508.597 226.482 508.597 217.199C508.597 207.916 501.072 200.391 491.789 200.391C482.506 200.391 474.981 207.916 474.981 217.199Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M474.981 382.433C474.981 391.716 482.506 399.242 491.789 399.242C501.072 399.242 508.597 391.716 508.597 382.433C508.597 373.15 501.072 365.625 491.789 365.625C482.506 365.625 474.981 373.15 474.981 382.433Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M91.6471 217.199C91.6471 226.482 99.1725 234.007 108.455 234.007C117.739 234.007 125.264 226.482 125.264 217.199C125.264 207.916 117.739 200.391 108.455 200.391C99.1725 200.391 91.6471 207.916 91.6471 217.199Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M91.6471 382.433C91.6471 391.716 99.1725 399.242 108.455 399.242C117.739 399.242 125.264 391.716 125.264 382.433C125.264 373.15 117.739 365.625 108.455 365.625C99.1725 365.625 91.6471 373.15 91.6471 382.433Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M361.886 492.59C361.886 501.873 369.411 509.398 378.694 509.398C387.977 509.398 395.503 501.873 395.503 492.59C395.503 483.307 387.977 475.781 378.694 475.781C369.411 475.781 361.886 483.307 361.886 492.59Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M205.933 108.215C205.933 117.498 213.458 125.023 222.741 125.023C232.024 125.023 239.55 117.498 239.55 108.215C239.55 98.9316 232.024 91.4062 222.741 91.4062C213.458 91.4062 205.933 98.9316 205.933 108.215Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M361.886 108.215C361.886 117.498 369.411 125.023 378.694 125.023C387.977 125.023 395.503 117.498 395.503 108.215C395.503 98.9316 387.977 91.4062 378.694 91.4062C369.411 91.4062 361.886 98.9316 361.886 108.215Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
              <path d="M203.172 491.98C203.172 501.281 210.589 508.789 219.699 508.789C228.81 508.789 236.227 501.281 236.227 491.98C236.227 482.68 228.81 475.172 219.699 475.172C210.589 475.172 203.172 482.68 203.172 491.98Z" fill="#DACEE8" stroke="#70548E" strokeWidth="2.34375"/>
            </>
          )
            : undefined


        }

      </svg>
    </div>
  )
}

type Size = "sm" | "md" | "lg"

const Sizes:{
  [key in Size]:{
    text:string,
    size:string
    }
} = {
    "sm":{
      text:"text-[16px]",
      size:"size-6"
    },
    "md":{
      text:"text-[18px] ",
      size:"size-8"
    },
    "lg":{
      text:"text-[14px] sm:text-[28px]",
      size:"size-10"
    }
}
function MNumber({num, position, size, className, moneyChannel}:{
  num:number | string,
  position:string,
  size:Size,
  moneyChannel:boolean,
  className?:string
}){
  return (
    <div className={`${position} ${Sizes[size].size} ${moneyChannel ? "rotate-[-135deg]" : ""} flex items-center justify-center bg-[#DACEE8] rounded-full absolute z-[1]`} >
      <p className={cn(className, Sizes[size].text)}>{num}</p>
    </div>
  )
}
