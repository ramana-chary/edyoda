import React,{useState} from 'react';
import "./App.css";
import icon1 from './images/Icon (1).png';
import icon2 from './images/Icon (3).png';
import icon3 from './images/Icon.png';
import icon4 from './images/Icon (2).png';
import icon5 from './images/Icon (4).png';
import rozarpay from './images/Razorpay.png' ;
import clock from './images/Vector.svg'

const Content = () => {
   
    const[fee,setFee]=useState({
        subfee:'2,148',
        discount:'1,968',
        total:'180'
    })

    const [plans, setPlans] = useState({
        plan1: true,
        plan2: false,
        plan3: false
      });
      
      const handler1 = () => {
        setPlans({
        //   plan1: !plans.plan1,
          plan1: true,
          plan2: false,
          plan3: false
        });
        
        setFee({
            subfee:'2,148',
            discount:'1,968',
            total:'180'
        })

      };
      
      const handler2 = () => {
        setPlans({
          plan1: false,
        //   plan2: !plans.plan2,
          plan2: true,
          plan3: false
        });

        setFee({
            subfee:'894',
            discount:'744',
            total:'150'
        })
      };
      
      const handler3 = () => {
        setPlans({
          plan1: false,
          plan2: false,
        //   plan3: !plans.plan3
        plan3: true
        });

        setFee({
            subfee:'297',
            discount:'198',
            total:'99'
        })
      };
    
    const select1= plans.plan1 ? 'fa-solid fa-circle-check' : 'checkbox';
    const border1 = plans.plan1 ? 'plan1 plan2 border' : 'plan1 plan2';
    const select2= plans.plan2 ? 'fa-solid fa-circle-check' : 'checkbox';
    const border2 = plans.plan2 ? 'plan1 plan3 border' : 'plan1 plan3';
    const select3= plans.plan3 ? 'fa-solid fa-circle-check' : 'checkbox';
    const border3 = plans.plan3 ? 'plan1 plan3 border' : 'plan1 plan3';

  return (
    <div className='background'>
        <div className='main-lockup'>
            <div className='content-header'>
                Access curated courses worth <br/>
                <span className='rupee-icon'>₹</span> < span className='strike'>18,500</span> at just <span className='rupee-icon rupees'>₹ </span> <span className='rupees'>99</span> per year!
            </div>
            <div className='pointer1'>
                <img src={icon1} alt='books' className='icon'/>
               <div className='pointer-text'><span className='rupees'>100+</span> Job relevant courses </div>
            </div>
            <div className='pointer1'>
                <img src={icon2} alt='books' className='icon'/>
               <div className='pointer-text'><span className='rupees'>20,000+</span> Hours of content</div>
            </div>
            <div className='pointer1'>
                <img src={icon3} alt='books' className='icon'/>
               <div className='pointer-text'><span className='rupees'>Exclusive</span> webinar access</div>
            </div>
            <div className='pointer1'>
                <img src={icon4} alt='books' className='icon'/>
               <div className='pointer-text'> Scholarship worth <span className='rupees'> <span className='rupee-icon'> ₹</span> 94,500</span> </div>
            </div>
            <div className='pointer1'>
                <img src={icon5} alt='books' className='icon'/>
               <div className='pointer-text'><span className='rupees'>Ad Free</span> learning experience </div>
            </div>
        </div>
        <div className='content-right'>
             <div className='progress-bar'>
                <div className='stage'> <div className='signup'>1</div> Sign Up</div>
                <div className='stage'><div className='signup'>2</div> Subscribe</div>
             </div>
             <div className='form-header'>Select your subcription plan</div>
             <div className='plan1'>
                  <div className='offer-expired'>Offer expired</div>
                  <div className='plan-content'>
                    <input type='radio' className='radio' checked/>
                    <div className='text-container'>
                        <div className='text'>12 Months Subscription </div>
                        <div>Total <span className='currency'>₹99</span> <div className='bottom-text'><span className='currency currency2'>₹8</span> /mo</div></div>
                    </div>
                  </div> 
             </div>

             <div className={border1} onClick={handler1}>
                  <div className='offer-expired recommeded'>Recommended</div>
                  <div className='plan-content'>
                  <i className={select1}></i>
                    <div className='text-container text-container2'>
                        <div className='text'>12 Months Subscription </div>
                        <div>Total <span className='currency'>₹179</span> <div className='bottom-text'><span className='currency currency2'>₹ 15</span> /mo</div></div>
                    </div>
                  </div> 
             </div>

             <div className={border2} onClick={handler2}>
                  <div className='plan-content plan-content2'>
                  <i className={select2}></i>
                    <div className='text-container text-container2'>
                        <div className='text'>6 Months Subscription </div>
                        <div>Total <span className='currency'>₹149</span> <div className='bottom-text'><span className='currency currency2'>₹25</span> /mo</div></div>
                    </div>
                  </div> 
             </div>

             <div className={border3} onClick={handler3}>
                  <div className='plan-content plan-content2'>
                    <i className={select3}></i>
                    <div className='text-container text-container2'>
                        <div className='text'>3 Months Subscription </div>
                        <div>Total <span className='currency'>₹99</span> <div className='bottom-text'><span className='currency currency2'>₹33</span> /mo</div></div>
                    </div>
                  </div> 
             </div>

             <div className='horizontal-line'>

                <div className='subscription'>
                <div className='fee-text'>Subscription Fee</div>
                <div className='fee'>₹{fee.subfee}</div>
                </div> 
                <div className='alert'> 
                    <div className='alert-head'>
                        <div className='alert-text'> Limited time offer</div>
                        <div className='discount'>- ₹{fee.discount}</div>
                    </div>
                    <div className='alert-body'><img src={clock} alt='clock' className='clock'/>  Offer valid till 25th July 2023 </div>
                </div> 
                <div className='total-amount'>
                    <div className='gst'>Total <span className='font-weight'>(Incl. of 18% GST)</span></div>
                    <div className='discount total'>₹{fee.total}</div>
                </div>
             </div>
             <div className='buttons'>
               <button className='cancel-btn'>CANCEL</button>
               <button className='pay-btn cancel-btn'>PROCEED TO PAY</button>
             </div> 
             <div>
               <img src={rozarpay} alt='rozarpay' className='rozarpay'/>
             </div>
        </div>
    </div>
  );
}

export default Content;
