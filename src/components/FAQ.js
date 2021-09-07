import './App.css'

const FAQ = () => {
    return (
        <div className= 'AppFAQ'>
            <img className='AppImg' src='https://pngimg.com/uploads/netflix/netflix_PNG3.png' />
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
                    <button className ='input' style={{backgroundColor:'#5765EE',color:'#DBDCE0',fontWeight:'bold',borderRadius:'10px', fontFamily:'Arial, Tahoma, sans-serif'}}>Add Question</button> 
                    </div>
                    <div className='inputFirstLine'>
                    <input className='input' type='text' placeholder='Enter Choices' />
                    <button className ='input' style={{ backgroundColor:'#f5f5f5', color:'#989898',fontWeight:'8   00',fontSize: '14px'}}>Add Choices</button> 
                    </div>
                </div>
                <button className= 'buttomButton'>Save and Continue</button>
            </div>
            
           
        </div>
    )
}

export default FAQ


