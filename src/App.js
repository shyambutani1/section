
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className=' row' style={{ width: "1300px", height: "130px" }}><p>Row</p>
          <div className='col-md-12' style={{ width: "1290px", height: "50px" }}><p>span12</p></div>
        </div>
        <div className='row' style={{ width: "1300px", height: "570px" }}><p>Row</p>
          <div className='col-md-4' style={{ width: "400px", height: "500px" }}><p>span8</p></div>
          <div className='col-md-8' style={{ width: "880px", height: "500px" }}><p>span8</p>
            <div className='row' style={{ width: "860px", height: "250px" }}><p>row</p>
              <div className='col-md-4 mydesign' ><p>span8</p></div>
              <div className='col-md-4 mydesign'><p>span8</p></div>

            </div>
            <div className='row' style={{ width: "860px", height: "180px" }}><p>row</p>
              <div className='col-md-8' style={{ width: "840px", height: "125px", marginLeft:"10px" }}><p>span8</p></div>
                </div >
              </div>
            </div>
      </div>

    </div>
        );
}

        export default App;
