import React from 'react';
import { Link } from 'react-router-dom';

class NavBarItem extends React.Component {
    render(){
        const { classname,  item } = this.props;
        if(classname !== "dropdown"){
            return(
                <li className={classname} ><Link to={item.id}>{item.label}</Link></li>
            );
        }else if(item.subitem !== undefined){
            let arr = item.subitem; 
            let element = arr.map((link,index) =>{
                if(link.subitem !== undefined){
                    let arr_sub = link.subitem;
                    let element_sub = arr_sub.map((link,index) =>{
                        return <li  key={link.id.toString()} id={link.id.toString()} ><Link to={link.id}> {link.label} </Link> </li>;
                    });
                    return <li className="dropdown dropdown-submenu" key={link.id.toString()} id={link.id.toString()}><a className="dropdown-toggle" data-toggle="dropdown">{link.label}<span className=""></span></a><ul className="dropdown-menu"  key={link.id.toString()}  id={link.id.toString()} >{element_sub}</ul></li>;
                }
                else{
                    return <li key={link.id.toString()} id={link.id.toString()} ><Link to={link.id}> {link.label} </Link> </li>;
                }
            });
            return(
                <li className={classname}><a className="dropdown-toggle" data-toggle="dropdown">{item.label}<span className="caret"></span></a><ul className="dropdown-menu"  key={item.id.toString()}  id={item.id.toString()} >{element}</ul></li>
            );
        }else{
            return(
                <li className={classname}><Link to={item.id}>{item.label}</Link></li>
            );
        }
    }
}

export default NavBarItem;