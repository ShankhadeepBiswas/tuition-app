import React from 'react'
import { Button, Input } from 'antd'
import { Select } from 'antd';

const { Option } = Select;

const { TextArea } = Inout;

const Inputs = ({inptype,children,Icon,inputProps,textAreaProps,dropDownVal,onChangeDropdown,options}) => {
    let Ele = null;
    switch(inptype){
        case 'button' :
            Ele = <Button type="primary" icon={<Icon />}>
                    {children}
                </Button>
            break;
        case 'dropdown' : 
            Ele =  <Select 
            style={{ width: 120 }} 
            value={dropDownVal} 
            onChange={onChangeDropdown}>
                        {options.map(option => (
                        <Option key={option}>{option}</Option>
                        ))}
                    </Select>
            break;
        case 'textarea' : 
        Ele = <TextArea {...textAreaProps} />
        default:
            Ele = <Input { ...inputProps } />

    }
    return Ele
}

export default Inputs
