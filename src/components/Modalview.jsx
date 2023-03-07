import React from 'react'
import Picit from '../assets/play.png'
function Modalview(props) {

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn bg-white border-none hover:bg-white"><img className='h-7' src={Picit} alt="" /></label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative flex justify-center items-center " htmlFor="">
        <iframe width="560" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </label>
      </label>
    </div>
  )
}

export default Modalview