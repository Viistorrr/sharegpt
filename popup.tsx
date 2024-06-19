import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        shareGPTs
       
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
       <strong>
        made by <a href="https://viistorrr.com/?utm_source=chromeextension&utm_medium=sharegpt" target="_blank">
        <i>viistorrr</i>
      </a></strong>
    </div>
  )
}

export default IndexPopup
