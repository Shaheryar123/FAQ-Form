import './App.css'

const FAQ = () => {
    return (
        <div>
       <div>
            <img className='AppImg' src='https://pngimg.com/uploads/netflix/netflix_PNG3.png' />
       </div>
       <div className= 'AppFAQ'>
           
            <div className='AppBody'>
            <p className='para'> &#60; back</p>
            <h1 className='h1'style= {{marginTop:'-11px'}}>
                Would you like to add addition <br/>questions?
                </h1>
                <h2 className='h2'>Add Questions</h2>
                <div className='form'>
                    <div className='inputFirstLine'>
                    <input className='input' type='text' placeholder='Your Question' />
                    <select className ='input'>
                             <option >Multiple Choice</option>
                     </select>
                    <button className ='input' style={{backgroundColor:'#5765EE',color:'#DBDCE0',fontWeight:'bold',borderRadius:'10px'}}>Add Question</button> 
                    </div>
                    <div className='inputFirstLine'>
                    <input className='input' type='text' placeholder='Enter Choices' />
                    <button className ='input' style={{ backgroundColor:'#f5f5f5', color:'#989898',fontWeight:'8   00',fontSize: '14px'}}>Add Choices</button> 
                    </div>
                </div>
                <button className= 'buttomButton'>Save and Continue</button>
            </div>
            <div className = 'FAQRight' style={{backgroundColor:'white'}}>
              <div className = 'bodyRight'>
               <div className='h1Right'>
                   <h1>
                       Here are the questions in your survey
                            </h1>
                <div className='questions'>
                   <div className ='question'>
                                <p className='questionNo'>1</p>
                       <p className='questionText'>How would you feel if you could no longer use Tesla?</p>
                            </div>
                            <div className ='question'>
                                <p className='questionNo'>2</p>
                       <p className='questionText'>What would you see if Tesla were no longer available?</p>
                            </div>
                            <div className ='question'>
                                <p className='questionNo'>3</p>
                       <p className='questionText'>What is the main benifit you receive from Tesla?</p>
                            </div>
                            <div className ='question'>
                                <p className='questionNo'>4</p>
                       <p className='questionText'>What type of people do you think would most benifits from Tesla?</p>
                            </div>
                            <div className ='question'>
                                <p className='questionNo'>5</p>
                       <p className='questionText'>How can we improve Tesla for you?</p>
                            </div>
                            <div className ='question'>
                                <p className='questionNo'>6</p>
                       <p className='questionText'>What is your job title?</p>
                                </div>
                                </div>
               </div>
               </div>
            </div>
            
           
        </div>
        </div>
    )
}

export default FAQ


