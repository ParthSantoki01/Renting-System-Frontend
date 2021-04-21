import React from 'react';
import FAQCard from '../../Components/Cardview/FAQCard'
import './style.css'

import Icon from '@iconify/react';
import messagePlusOutline from '@iconify-icons/mdi/message-plus-outline';

const HelpFAQ = (props) => {
    const cards =[];
    for (var i = 0; i < 9; i++) {
        cards.push(<FAQCard key={i} />);
    }
    
        
return( 
    <div className='helpFAQ-main'>
        <div className='helpFAQ-image'>
            <div className='helpFAQ-title'>
                <h1>HII! HOW CAN I HELP YOU?</h1>
            </div>
        </div>
        <div className='helpFAQ-body'> 

            <div className='helpFAQ-name'> {cards} </div>      
            <div className='QueAns'> 
                
                <p className='Question'> {props.question}</p> 
                <p className='Answer'> {props.answer}</p>
                
            </div>
           
        </div>
        <Icon icon={messagePlusOutline} 
             className='Addicon'
        />
        <div className='Addtext'>Post Your Query here</div>
    </div>
   
    );
};
HelpFAQ.defaultProps = {
    question: 'How can I contact a Seller?',
    answer: 'Firstly, you will not be able to reach a seller unless you are logged into the system. Everyone must have a profile for security.',
}
export default HelpFAQ;



