import React from 'react';
import { Link } from 'react-router-dom';

class NavBarItem extends React.Component {
    constructor(props){
        super(props);

        this.handleLink = this.handleLink.bind(this);
    }
    
    handleLink(e,linkItem){
        // e.preventDefault();
        // console.log("11111111111111")
        // console.log(linkItem)
    }
    CreateNavLinks(){
        const { classname,  item } = this.props;
        if(classname !== "dropdown" || item.subitem === undefined){
            return(
                <li onClick={(e) => this.handleLink(item)}  className={classname} ><Link to={""}>{item.label}</Link></li>
            );
        }else{
            let arr = item.subitem; 
            let element = arr.map((link,index) =>{
                if(link.subitem !== undefined){
                    let arr_sub = link.subitem;
                    let element_sub = arr_sub.map((link,index) =>{
                        return <li onClick={(e) => this.handleLink(e,item)} key={link.image.toString()} id={link.image.toString()} ><Link to={"/report/"+link.image}> {link.label} </Link> </li>;
                    });
                    return <li className="dropdown dropdown-submenu" key={link.image.toString()} id={link.image.toString()}><a className="dropdown-toggle" data-toggle="dropdown">{link.label}<span className=""></span></a><ul className="dropdown-menu"  key={link.image.toString()}  id={link.image.toString()} >{element_sub}</ul></li>;
                }
                else{
                    if(link.label === "Trade Entry")
                        return <li key={link.image.toString()} id={link.image.toString()} ><Link to={link.image}> {link.label} </Link> </li>;
                    else
                    return <li key={link.image.toString()} id={link.image.toString()} ><Link to={"/report/"+link.image}> {link.label} </Link> </li>;
                }
            });
            return(
                <li  className={classname}><a className="dropdown-toggle" data-toggle="dropdown">{item.label}<span className="caret"></span></a><ul className="dropdown-menu"  key={item.id.toString()}  id={item.id.toString()} >{element}</ul></li>
            );
        } 
    }
    render(){  
        return(this.CreateNavLinks());
    }
}

export default NavBarItem;