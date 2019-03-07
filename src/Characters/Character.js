import React from 'react'
import moment from 'moment'
const Character = (props)=>(
    <li className="card">
     <div className="card-img" id="imge"><img src={props.image} alt={props.name} /> 
     <div className="card-container"><h2 className="card-name">{props.name}</h2>
     <p className="card-info"> Id: {props.id} - created {moment(props.created).fromNow()} </p> </div> </div>
  
    <div className="card-body"> <p  className="card-data">STATUS</p><span id="span" className="card-data-span">{ 
      (props.status == 'Alive')
    ?( <strong style={{color: 'green'}}>{props.status}</strong> )
    :( <strong style={{color: 'red'}}>{props.status}</strong>)
         }</span> </div>


     <div className="card-body"><p  className="card-data">SPECIES</p><span className="card-data-span">{props.species}</span></div>
     <div className="card-body"><p  className="card-data">GENDER</p> <span className="card-data-span">{props.gender}</span></div>
     <div className="card-body"><p className="card-data">ORIGIN</p><span className="card-data-span">{props.origin}</span></div>
     <div className="card-body"><p className="card-data">LAST LOCATION :</p> <br/><span className="card-data-span">{props.location}</span></div>
     <div className="episodes">
     <div className="episode"><h3>Epidose</h3> <span></span></div>
     <a href={props.episode}>episode 1</a> <br/>
     <a href={props.episode[1]}>episode 2</a> <br/>
     <a href={props.episode[2]}>episode 3</a>
      </div>
     
    </li>
)

export default Character