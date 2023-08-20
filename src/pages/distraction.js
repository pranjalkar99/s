
import { Card } from '@mui/material';
function Distraction(){
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#1E1E1E', minHeight: '100vh' }}>
        <Card style={{ width: '30%', backgroundColor: '#292929' }}>
        <p style={{ color: "#FFFFFF" }}>The Distraction Blocker Extension is made for Microsoft Edge., It uses Youtube API to GET title, and then uses OPENAI to classify it...</p>
        <p style={{ color: "#FFFFFF" }}>Here is the link of DIstraction Blocker Extension frontend: https://github.com/pranjalkar99/Yog-Distraction.git</p>
        
        </Card>
       </div>
      
        </>
    )
}


export default Distraction;