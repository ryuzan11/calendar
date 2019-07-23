import React from "react"

const Youbi = () => {
  const week = ['日', '月', '火', '水', '木', '金', '土']
  let youbi = []

  for ( let i=0 ; i<week.length; i++ ){
    if ( i == 0 ) {
      youbi.push(<div className="cal-youbi sun" key={i.toString()}>{week[i]}</div>)
    } else if ( i == 6 ) {
      youbi.push(<div className="cal-youbi sat" key={i.toString()}>{week[i]}</div>)
    } else {
      youbi.push(<div className="cal-youbi" key={i.toString()}>{week[i]}</div>)
    }
  }

  return(
    <div className="cal-week">
      {youbi}
    </div>
  )
}

export default Youbi
