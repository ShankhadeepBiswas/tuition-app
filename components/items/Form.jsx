import { Input, Button, Radio } from 'antd';
import { InfoCircleOutlined,UserOutlined } from '@ant-design/icons';
import React from 'react'
import TextArea from 'antd/lib/input/TextArea';

const ContactForm = () => {
  const [form,setForm] = React.useState({
    fname : {
      ElementConfig : {
        type : 'text',
        placeholder : 'First Name'
      },
      value : '',
      isValid : false
    },
    lname : {
      ElementConfig : {
        type : 'text',
        placeholder : 'Last name'
      },
      value : '',
      isValid : false
    },
    email : {
      ElementConfig : {
        type : 'email',
        placeholder : 'youremail@email.com'
      },
      value : '',
      isValid : false
    },
    phoneNumber : { 
      ElementConfig : {
        type : 'number',
        placeholder : '9187984444'
      },
      value : '',
      isValid : false
    }
  }
)
   return(
     <form>
       <style jsx>
         {
           `
           form{
              max-width : 700px;
              display : flex;
              flex-direction : column;
              gap: 1rem;
           }
           `
         }
       </style>
          <Input 
          size="large" 
          placeholder="e.g. Rahul" 
          prefix={<UserOutlined />} />
           <Input 
          size="large" 
          placeholder="e.g. Ved" 
          prefix={<UserOutlined />} />
            <Input 
          size="large" 
          type="password"
          placeholder="e.g. Ved" 
          prefix={<UserOutlined />} />
            <Input 
          size="large" 
          type="number"
          placeholder="e.g. Ved" 
          prefix={<UserOutlined />} />
     </form>
   )
}

export default ContactForm
