function navbar(){
    return `
    <div id="leftnav">
        <div id="logo1" style="margin-left: 10px;"><span style="color: #4385f4;">G</span><span style="color: #ea4335;">o</span><span style="color: #fbbc05;">o</span><span style="color: #4385f4;">g</span><span style="color: #33a852;">l</span><span style="color: #ea4335;">e</span></div>
        <div style="color: rgb(117, 107, 107);margin-left: 20px;" id="logo2">Food App</div>
        <a href="receipe.html" id="hrefre"> recipe of the day</a>
    </div>
    <div id="rightnav" class="dropdown">
    <input
      type="text"
      style="margin-right: 10px"
      placeholder="search"
      id="dishname"
    />
  </div>
`
}
export default navbar;