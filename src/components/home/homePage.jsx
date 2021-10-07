import React from "react"

const HomePage = () => (
  <div id = "homePage">

  <div id = "header" >
    <ul className="navbar">
      <li><a href="here.asp">Here</a></li>
      <li><a href="be.asp">Be</a></li>
      <li><a href="will.asp">Will</a></li>
      <li><a href="options.asp">Options</a></li>
    </ul>
  </div>
  <div id = "leftbar" >
    <a href="#">Game</a>
    <a href="#">Genres</a>
    <a href="#">Will</a>
    <a href="#">Be</a>
    <a href="#">Listed</a>
    <a href="#">Here</a>
  </div>
  <div id = "content" >
    text
  </div>
  <div id = "bottomNavbar">
    <ul className="navbar">
      <li><a href="interaction.asp">Interaction</a></li>
      <li><a href="options.asp">Options</a></li>
      <li><a href="will.asp">Will</a></li>
      <li><a href="go.asp">Go</a></li>
      <li><a href="here.asp">Here</a></li>
    </ul>
  </div>
  </div>
)

export default HomePage;