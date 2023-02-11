import React from 'react'


function Exam() {

//Action Switch
  const becomegreen = () => {
    console.log("clicked");
    document.getElementById(1).style.background = "green";
  }
  const becomeyellow = () => {
    console.log("clicked");
    document.getElementById(1).style.background = "yellow";
  }
  const becomewhite = () => {
    console.log("clicked");
    document.getElementById(1).style.background = "white";
  }

  // Timer 
  countdownTimeStart()
  function countdownTimeStart() {
    var countDownDate = new Date(Date.now() + (3 * 60 * 60 * 1000))
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = hours + "h:"
        + minutes + "m:" + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  return (
    <>
      <div className="container">
        <div className="head">
          <h2>DEMO ONLINE TEST</h2>
        </div>
        <div className="Home">
          <div className="questions">
            <div className="section1">
              <button className="btn1">All Sections</button>
              <button className="btn1">PHYSICS</button>
              <button className="btn1">CHEMISTRY</button>
              <button className="btn1">MATHS</button>
            </div>
            <div className="section2">
              <div className='Hm'>
                <p id="Q">Question no. 1</p>
                <p>View In : <button className='en'>English</button></p>
              </div>
              <div className="section5">
                <div className='instructions'>
                  <h4>Questions Instructions</h4>
                  <h5>Today’s educators face any number of challenges when trying to satisfy their students’ literacy needs, including heated debates within the profession on best practices. Authors LeAnn Nickelsen and Melissa Dickson examine today’s literacy wars by combining educational neuroscience, the formative assessment process, and differentiation to create The Literacy Triangle, a three-sided model incorporating reading, discussing, and writing tools. </h5>
                </div>
                <div className='Numerical'>
                  <h4>Question</h4>
                  <h5>Today’s educators face any number of challenges when trying to satisfy their students’ literacy needs, including heated debates within the profession on best practices. Authors LeAnn Nickelsen and Melissa Dickson examine today’s literacy wars by combining educational neuroscience, the formative assessment process, and differentiation to create The Literacy Triangle, a three-sided model incorporating reading, discussing, and writing tools. </h5>
                  <br/>
                  <div className="radiobtn">
                  <input className="rbtn"type="radio" id="html" name="fav_language" value="HTML"/> (A)
                  </div>
                  <div className="radiobtn">
                  <input className="rbtn"type="radio" id="html" name="fav_language" value="HTML"/> (B)
                  </div>
                  <div className="radiobtn">
                  <input className="rbtn"type="radio" id="html" name="fav_language" value="HTML"/> (C) 
                  </div>
                  <div className="radiobtn">
                  <input className="rbtn"type="radio" id="html" name="fav_language" value="HTML"/> (D)
                  </div>
                </div>
              </div>
            </div>
            <div className="section3">
              <button className="btn">CLEAR RESPONSE</button>
              <button onClick={becomeyellow} className="btn2">REVIEW</button>
              <button onClick={becomewhite} className="btn2">DUMP</button>
              <button className="btn2">PREVIOUS</button>
              <button onClick={becomegreen} className="btn2">NEXT</button>
            </div>
          </div>
          <div className="profile">
            <div className="prop">
              <img src="Images/person.png" alt="profile" />
              <div className="data">
                <div>
                  <p>Time Left :<br></br><span id="demo" ></span><br />
                    Abhijeet Kumar</p>

                </div>

              </div>
            </div>
            <div className="quespt">
              <h4>Question Pallete</h4>
              <div className='QN'>
                <button id="1" className='no'>1</button>
                <button id="1" className='no'>2</button>
                <button id="1" className='no'>3</button>
                <button id="1" className='no'>4</button>
                <button id="1" className='no'>5</button>
                <button id="1" className='no'>6</button>
                <button id="1" className='no'>7</button>
                <button id="1" className='no'>8</button>
                <button id="1" className='no'>9</button>
                <button id="1" className='no'>10</button>
              </div>
            </div>
            <div className="Legend">
              <h4>Legend (Click to View)</h4>
              <div className='btns'>
                <button className="btn3-gn">{ } Answered</button>
                <button className="btn3-rd">{ } No Answer</button>
                <button className="btn3-pp">{ } Review + Answers</button>
                <button className="btn3-yw">{ } Review - Answers</button>
                <button className="btn3-gr">{ } Dump</button>
                <button className="btn3-wh">{ } No Visit</button>
              </div>

              <h5>10 All Questions</h5>

              <div className="menu">
                <div >
                  <button className="btn4">Profile</button>
                  <button className="btn4">Instr</button>
                  <button className="btn4">Questions</button>
                  <button className="btn4">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <h3>© Addmen</h3>
        </div>
      </div>
    </>
  )
}

export default Exam

