import axios from 'axios'

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': document.getElementsByName("csrf-token")[0].getAttribute('content')
  }    
})  
  
// export default ()=>{
//   const csrfToken = document.getElementsByName("csrf-token")[0].getAttribute('content');	
//   return axios.create({
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRF-Token': csrfToken
//     }    
//   })  
// }

