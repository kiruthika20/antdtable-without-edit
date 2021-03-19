import React,{useState,Fragment,useEffect,useRef} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button,Modal,Table,Space} from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


 export default function App(){

 const[form]=Form.useForm();


  const [isModalVisible, setIsModalVisible] = useState(false);
  
const[values,setValues]=useState([]);
const [count, setcount] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };
 



const handleAddFormOnFinish = (data) => {
const increment =count+1
setValues([
    ...values,
    { 
       ...data,id:increment, 
    },
]);
setcount(increment);
form.resetFields();
setIsModalVisible(false);
console.log([...values,
    { 
      ...data,id:increment,
    },
]);
};


  
const removeRow = (id) => {
  
  const del = values.filter(person => id !== person.id)
  setValues(del)

}

const columns = [
  {
    title: 'SLNo',
    dataIndex: 'slno',
    key: 'slno',
  },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        
        key:'action',
        render: (text,record) => (
          <span>
         
              <Space>
                
                <DeleteOutlined
                  
                  onClick={() => removeRow(record.id)}
                  height={14}
                  width={20}
                />
              </Space>
            
          </span>
        ),
     
      }];
      
return(
  <div>
      <Button className="Add"  type="" onClick={showModal}>
        ADD
      </Button>
 <Table columns={columns} dataSource={values}/>
  <Modal
  visible={isModalVisible}
  footer={null}>
  
 <Form
    form={form}
    onFinish={handleAddFormOnFinish}
  
    name="basic"
    labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
    <Form.Item
        label="slno"
         
        name="slno"
        rules={[
          {
            required: true,
            message: 'Please input your sl.no!',
          },
        ]}
       >
      <Input placeholder="your sl.no.." />
      </Form.Item>
    <Form.Item
        label="Name"
        
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
       >
      <Input placeholder="your name.."  />
      </Form.Item>

      <Form.Item
        label="Age"
        
        name='age'
       rules={[
          {
            required: true,
            message: 'Please input your age!' ,
          },
        ]}
      >
        <Input placeholder="your age.." />
      </Form.Item>
      <Form.Item
      id="3"
        label="Address"
        name="address"
       rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
      <Input  placeholder="your address.." />
      </Form.Item>
      <Form.Item>
      <Fragment>
      <Space>
       <button type="submit" >
        submit
      </button>
      <button type="submit"onClick={()=>{setIsModalVisible(false);}}>
       cancel
      </button>
      
      </Space>
      </Fragment>
      </Form.Item>
      
    </Form>

  </Modal>



  </div>
)
}
