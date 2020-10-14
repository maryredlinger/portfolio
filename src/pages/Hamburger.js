import React from 'react'


const Hamburger = () => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.ham')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return(
        <div className="dropdown">
            <button onClick={myFunction} className="ham "></button>
            <div id="myDropdown" class="dropdown-content">
                <a className="no-underline nav-item" href='/'><h4>Mary Redlinger</h4></a>
                <a className="no-underline nav-item" href='/experience'><h4>Experience</h4></a>
                <a className="no-underline nav-item" href='/contact'><h4 >Contact</h4></a>
            </div>
        </div>
        
    )
}

export default Hamburger;
