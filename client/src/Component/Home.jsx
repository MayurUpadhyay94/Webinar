import React from "react";
// import { Link } from 'react-router-dom'
import hangouts from '../images/hangouts.png';
import logmein from '../images/logmein.png';
import th from '../images/th.jpg';
import the from '../images/the.jpg'
import thee from '../images/thee.jpg'
import thr from '../images/thr.jpg'
import thw from '../images/thw.jpg'
import unnamed from '../images/unnamed.jpg'
import goTomeeting from '../images/goTomeeting.png'

function Home() {
    
  return (
    <div className="home">
      <div class="container">
            <h1 class="font-weight-light">Welcome</h1>
            <div class="icons">
            <a href="https://zoom.us/" class="active">
            <img className="fixed_img4" src={thee} alt=""/></a>
            <a href="https://hangouts.google.com/" class="active">
            <img className="fixed_img" src={hangouts} alt=""/></a>
            <a href="https://www.join.me/" class="active">
            <img className="fixed_img1" src={logmein} alt=""/></a>
            <a href="https://circleci.com/integrations/github/?utm_source=bnb&utm_medium=SEM&utm_campaign=SEM-bnb-400-Eng-uscan&utm_content=SEM-bnb-400-Eng-uscan-GitHub&msclkid=7524b51490281775ebb6ea4dbdba71c6" class="active">
            <img className="fixed_img2" src={th} alt=""/></a>
            <a href="https://www.skype.com/en/" class="active">
            <img className="fixed_img5" src={thr} alt=""/></a>
            <a href="https://www.teamviewer.com/en/" class="active">
            <img className="fixed_img6" src={thw} alt=""/></a>
            <a href="https://www.gotomeeting.com/?clickid=3aI287SWuxyORfW0Rw0UrUzuUkiV7MSPLw-ATw0&irgwc=1&cid=g2m_noam_ir_aff_cm_pl_ct" class="active">
            <img className="fixed_img8" src={goTomeeting} alt=""/></a>
            <a href="https://www.eztalks.com/meetings" class="active">
            <img className="fixed_img7" src={unnamed} alt=""/></a>
            <a href="https://www.webex.com/" class="active">
            <img className="fixed_img3" src={the} alt=""/></a>
            </div>
          </div>
    </div>
  );
}

export default Home;