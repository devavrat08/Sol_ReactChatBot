import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';



function App(){

    const steps=[
        {
            id:'Greet',
            message:'Hello, Welcome to our website',
            trigger:'Ask Name'
        },
        {
            id:'Ask Name',
            message:'Please enter your name',
            trigger:'waiting1'
        },
        {
            id:'waiting1',
            user:true,
            trigger:'Name'
        },
        {
            id:'Name',
            message:'Hi {previousValue},Please select your issue',
            trigger:'issues'
        },
        {
            id:'issues',
            options:[
            {
                    value:'React',
                    label:'React',
                    trigger:'React'
            },
            {
                value:'Angular',
                label:'Angular',
                trigger:'Angular'
            }
            ],
        },
            {
                id:'React',
                message:'Thanks for telling your React issue',
                end:true
            },
            {
                id:'Angular',
                message:'Thanks for telling your Angular issue',
                end:true
            }
            
        
    ]
    return <>
    <Segment floated="right">
<Chatbot steps={steps}/>
    </Segment>
    </>
}



export default App;