import React, {useState} from 'react';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage, faGear } from '@fortawesome/free-solid-svg-icons'
import './Style.css'
import { Card } from 'react-bootstrap';
import {IconContext} from 'react-icons';

const Aside = (item) => {

  const [click,setClick]=useState("false")

  const toggle = item => {
    if (click === item){
      return setClick(null);
     }
    setClick(item);
  };
    
return (
      <div className='sideIcons'>
 <IconContext.Provider>
<div>
<div onClick={() => toggle(item)}> 
<FontAwesomeIcon icon={faHouse}/>
</div>
{click === item ? (
  <Card className="helpCard">
  How may i help you
  </Card>
): null}

</div>
<div>
<div onClick={() => toggle(item)}> 
<FontAwesomeIcon icon={faGear}/>
</div>
{click === item ? (
  <Card className="helpCard">
  How may i help you
  </Card>
): null}

</div>
<div>
<div onClick={() => toggle(item)}> 
<FontAwesomeIcon icon={faMessage}/>
</div>
{click === item ? (
  <Card className="helpCard">
  How may i help you
  </Card>
): null}

</div>

 </IconContext.Provider>

 </div>
  );

};

export default Aside;