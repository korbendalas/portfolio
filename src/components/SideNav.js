import React from 'react';


class SideNav extends React.Component{

    render(){
        let dropdownClasses = "side-nav";
        if(this.props.show){
            dropdownClasses = "side-nav open";
        }
        return(
            

        <div className={dropdownClasses}>
            <div className="side-nav-container">
                <div className="side-nav-menu ">
                    <ul>
                   <li onClick={this.props.closeMenuHandler}> <a href="#/"       className="navbar-item "  >Početna </a></li>
                   <li onClick={this.props.closeMenuHandler}> <a href="#/about"  className="navbar-item " >O Meni </a></li>
                   <li onClick={this.props.closeMenuHandler}> <a href="#/gallery"className="navbar-item " >Galerija </a></li>
                   <li onClick={this.props.closeMenuHandler}> <a href="#/seminar"className="navbar-item " >Seminarski </a></li>
            
                   <li onClick={this.props.closeMenuHandler}>  <a href="#/contact"className="navbar-item " >Kontakt</a></li>
                    </ul>

                    <div className="side-nav-social">
                        <a href="https://github.com/korbendalas" target="_blank"><i className="fa fa-github social-media-item"></i></a>
                        <a href="https://www.facebook.com/Paliborbre" target="_blank"> <i className="fa fa-facebook social-media-item"></i> </a>
                        <a href='https://www.instagram.com/go.u.3.pm/' target="_blank"> <i className="fa fa-instagram social-media-item"></i></a> 
                    </div>


                </div>

            </div>
        
        </div>);
    }
};
export default SideNav;