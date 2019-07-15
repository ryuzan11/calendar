import React from "react"

const Youbi = () => {
  const week = ['日', '月', '火', '水', '木', '金', '土']
  let youbi = []

  for ( let i=0 ; i<week.length; i++ ){
    youbi.push(<div className="cal-y">{week[i]}</div>)
  }

  return(
    <div className="cal-week">
      {youbi}
    </div>
  )
}

export default Youbi
