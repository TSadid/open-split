import './App.css';
import Cash from './Cash.svg';

function App() {
  return (
    <div className='Home'>
      <div className='sticky-header'>
        <h2>Open Split</h2>
      </div>
      <div className='due-amount'>
        <span className='text-green'>You are owed BDT15, Check activity</span>
      </div>
      <div className='transaction-history'>
        <div className='transaction-by-day'>
          <h3 className='transaction-date'>January 2024</h3>
          <div className='transaction-details'>
            <div className='transaction-day'>Jan 30</div>
            <div className='transaction-type'>
              <img src={Cash} alt='Cash SVG' height={50} width={50} />
            </div>
            <div className='transaction-info'>
              <div className='transaction-info-header'>Lunch</div>
              <div className='transaction-info-footer'>
                Tausif Sadid paid BDT500
              </div>
            </div>
          </div>
          <div className='transaction-details'>
            <div className='transaction-day'>Jan 30</div>
            <div className='transaction-type'>
              <img
                className='px-5'
                src={Cash}
                alt='Cash SVG'
                height={50}
                width={50}
              />
            </div>
            <div className='transaction-info'>
              <div className='transaction-info-header'>Dinner</div>
              <div className='transaction-info-footer'>Mahir paid BDT1500</div>
            </div>
          </div>
          <div className='transaction-details'>
            <div className='transaction-day'>Jan 26</div>
            <div className='transaction-type'>
              <img
                className='px-5'
                src={Cash}
                alt='Cash SVG'
                height={50}
                width={50}
              />
            </div>
            <div className='transaction-info'>
              <div className='transaction-info-header'>Netflix</div>
              <div className='transaction-info-footer'>
                2 people paid BDT2500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
