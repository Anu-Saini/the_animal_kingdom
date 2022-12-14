import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  message,
  Upload,
  notification 
} from "antd";
import { NEW_ANIMAL, UPDATE_ANIMAL } from "../../queries/AnimalQuery";
import { json, useNavigate } from "react-router-dom";
import uploadFileToBlob from "./UploadToBlob";
import Auth from '../../utils/auth';
const { TextArea } = Input;
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const user = JSON.parse(localStorage.getItem("user"));

const openNotification = (message, title) => {
  notification.open({
    message: title,
    description:
    message,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const NewAnimal = (props) => {
  
console.log( props.props)
 const [submitDisabled, setSubmitDisabled] =  useState(false);
  const [locations, setlocations] = useState([""]);


const [formState, setFormState] = useState({
    animalName: props.props ? props.props.animalName : "",
    othername: props.props ? props.props.othername : "",
    classification: props.classification ? props.props.classification : "",
    family: props.props ? props.props.family : "",
    age: props.props ? props.props.age : 0 ,
    foods: props.props ? props.props.foods : "",
    description: props.props ? props.props.description : "",
    threats: props.props ? props.props.threats : "",
    population: props.props ? props.props.population : 0,
    location: props.props ? props.props.location : [""],
    image: props.props ? props.props.image : [""],
    submitBy:  props.props ? props.props.submitBy : user ? user._id : "",
  });

  const [NewAnimal, { data, loading, error }] = useMutation(NEW_ANIMAL);
  const [UpdateAnimal, { data_, loading_, error_ }] = useMutation(UPDATE_ANIMAL);
  
  const handleFormSubmit = async (event) => {
    
if(props.props)
{
  
  try {
    // Execute mutation and pass in defined parameter data as variables
    const { temp } = await UpdateAnimal({
      variables: {
        updateAnimalId: props.props._id,
        animalName: formState.animalName,
        otherName: formState.animalName,
        classification: formState.classification,
        family: formState.family,
        age: formState.age,
        foods: formState.foods,
        population: formState.population,
        threats: formState.threats,
        description: formState.description,
        submitBy: formState.submitBy,
        location: formState.location,
        image: formState.image,
      },
    }).then((data) =>{
      openNotification(`${data.data.addAnimal.animalName} has been added`, 'Success');
      
    })

  } catch (err) {
  
    console.error(err.message);
  }
}
else{
    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { temp } = await NewAnimal({
        variables: {
          animalName: formState.animalName,
          otherName: formState.animalName,
          classification: formState.classification,
          family: formState.family,
          age: formState.age,
          foods: formState.foods,
          population: formState.population,
          threats: formState.threats,
          description: formState.description,
          submitBy: formState.submitBy,
          location: formState.location,
          image: formState.image,
        },
      }).then((data) =>{
        openNotification(`${data.data.addAnimal.animalName} has been added`, 'Success');
      })
  
    } catch (err) {
    
      console.error(err.message);
    }
  }
  };


  if (error) {
    openNotification(error.message, 'Error');
  }
  
  const prop = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
  };

  const upload = (images) =>{
    setSubmitDisabled(true);
    const data = uploadFileToBlob(images, user._id);
    data.then((urls) =>{
      
      console.log(urls)
      setFormState({
        ...formState,
        image: urls,
      })
    } ).then(() =>{
      setSubmitDisabled(false)
    })
  }
  return (
    <>
    {Auth.loggedIn() ? (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      name="newAnimal"
      onFinish={handleFormSubmit}
      scrollToFirstError
      initialValues={{
        ...props.props,
        location: props.props ? props.props.location.join(", ") : ""
      }}
    >
      <Form.Item
        name="animalName"
        label="Animal Name"
        rules={[
          {
            required: true,
            message: "Please input your Animal name!",
          },
        ]}
        value={formState.animalName}
        onChange={(e) =>
          setFormState({
            ...formState,
            animalName: e.target.value,
          })
        }
      >
        <Input />
      </Form.Item>

      <Form.Item name="othername" label="Other Name">
        <Input />
      </Form.Item>
      <Form.Item
        name="classification" 
        label="Class"
      >
        <Select         onChange={(e) =>
        
        setFormState({
          ...formState,
          classification: e,
        })
        }>
          <Select.Option value="Mannals">Mannals</Select.Option>
          <Select.Option value="Reptiles">Reptiles</Select.Option>
          <Select.Option value="Birds">Birds</Select.Option>
          <Select.Option value="Amphibians">Amphibians</Select.Option>
          <Select.Option value="Insects">Insects</Select.Option>
          <Select.Option value="Fish">Fish</Select.Option>
          <Select.Option value="Other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="family"
        label="Family"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please enter the family of the animal",
          },
        ]}
        value={formState.family}
        onChange={(e) =>
          setFormState({
            ...formState,
            family: e.target.value,
          })
        }
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Max age"
        rules={[
          {
            required: true,
            message: "Please input max Age!",
          },
        ]}
        value={formState.age}
        onChange={(e) =>
          setFormState({
            ...formState,
            age: e.target.value,
          })
        }
        hasFeedback
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="foods"
        label="Foods"
        rules={[
          {
            required: true,
            message: "What is the main source of food?",
          },
        ]}
        value={formState.foods}
        onChange={(e) =>
          setFormState({
            ...formState,
            foods: e.target.value,
          })
        }
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="population"
        label="Population"
        rules={[
          {
            required: true,
            message: "Please input approx population",
          },
        ]}
        value={formState.population}
        onChange={(e) =>
          setFormState({
            ...formState,
            population: e.target.value,
          })
        }
        hasFeedback
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please enter short description.",
          },
        ]}
        value={formState.description}
        onChange={(e) =>
          setFormState({
            ...formState,
            description: e.target.value,
          })
        }
        hasFeedback
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="threats"
        label="Threats"
        rules={[
          {
            required: true,
            message: "Please input threats to the species",
          },
        ]}
        value={formState.threats}
        onChange={(e) =>
          setFormState({
            ...formState,
            threats: e.target.value,
          })
        }
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="location"
        label="Typically found at"
        rules={[
          {
            required: true,
            message: "Please input location to the species",
          },
        ]}
        value={formState.location}
        onChange={(e) =>
          setFormState({
            ...formState,
            location: e.target.value,
          })
        }
        hasFeedback
      >
        {/* {
            locations.map(tag =>{
              return (
                <Tag closable key ={tag}>
                    {tag}
                </Tag>
              )
            })
          } */}

        <Input onPressEnter={(e) => setlocations(e.target.value.split(" "))} />
      </Form.Item>

      <Form.Item label="Upload" name="image">
        <Upload {...prop} action={upload} listType="picture-card"  fileList={formState.images}>
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button disabled={submitDisabled} type="primary" htmlType="submit">
          {props.props ?  ( <p>Save</p> ) : (<p>Register</p>)}
        </Button>
      </Form.Item>
    </Form>
  ) : 
  (
    <p>
      You need to be logged in to share your thoughts. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
  )}
  </>
)};

export default NewAnimal;
