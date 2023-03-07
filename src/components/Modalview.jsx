import React from 'react'
import Picit from '../assets/play.png'
function Modalview(props) {
  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
    
const videoId = getId(props.link);
const urlfinal = "https://www.youtube.com/embed/'"+videoId+"'";
const iframeMarkup = <iframe width="560" height="315" src={urlfinal} frameborder="0" allowfullscreen></iframe>;
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn bg-white border-none hover:bg-white"><img className='h-7' src={Picit} alt="" /></label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative flex justify-center items-center " htmlFor="">
        {iframeMarkup}
        </label>
      </label>
    </div>
  )
}

export default Modalview