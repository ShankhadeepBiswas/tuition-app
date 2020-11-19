import { Input, Button, Radio } from 'antd';
import { InfoCircleOutlined,UserOutlined } from '@ant-design/icons';
import React from 'react'

const ContactForm = () => {
   return(
     <form>
          <Input 
          size="large" 
          placeholder="e.g. Rahul" 
          prefix={<UserOutlined />} />
           <Input 
          size="large" 
          placeholder="e.g. Ved" 
          prefix={<UserOutlined />} />
     </form>
   )
}

export default ContactForm
