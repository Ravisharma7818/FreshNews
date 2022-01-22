import React, { Component } from 'react';

class componentName extends Component {
  render() {
    const styleObj = {
      fontSize: 14,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "100px",
    }
    return (
      <>
        <div className="container my-4 " >
          <p style={styleObj} >This Webiste Created By  Ravi Sharma!
            You can use this website And if u have any suggestions so plz mail me at ravisharmars8859@gmail.com Thanks ....    Credited to Code With Harry and <a  href="https://icons8.com/icon/WYwcSbCMk4UC/news">News</a> icon by <a  href="https://icons8.com">Icons8</a></p>
      
        </div>
      </>
    );
  }
}

export default componentName;
