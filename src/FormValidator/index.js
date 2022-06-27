import "antd/dist/antd.css";
import { Form, Input, Cascader, Select, Checkbox, Button } from "antd";
import FormItemLabel from "antd/lib/form/FormItemLabel";
const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const residences = [
    {
      value: "Turkey",
      label: "Turkey",
    },
    {
      value: "Italy",
      label: "Italy",
    },
    {
      value: "Japan",
      label: "Japan",
    },
    {
      value: "USA",
      babel: "USA",
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
      wrappercol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    },
  };

  const formTailItemLayout = {
    wrappercol: {
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

  const frefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="90">+90</Option>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = () => {};
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={
        {
          country:["Turkey"],
          prefix:"90"  
        }
      }
      scroolToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        style={{ width: "400px" }}
        rules={[
          {
            type: "email",
            message: "The Input is not valid E-Mail",
          },
          {
            required: true,
            message: "Please input your E-Mail",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        style={{ width: "400px" }}
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
          { min: 8, message: 'Password must have a minimum length of 8' },
          {
              pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
              message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="ConfirmPassword"
        dependencies={["password"]}
        style={{ width: "400px" }}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="Nickname"
        style={{ width: "400px" }}
        rules={[
          {
            required: true,
            message: "Please insert your nickname",
            whitespace:true
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        style={{ width: "250px", marginLeft: "45px" }}

        rules={[
          {
            type: "array",
            message: "Please select your country",
            whitespace:true
          },
        ]}
      >
        <Cascader options={residences} style={{ marginLeft: "5px" }} />
      </Form.Item>
      <Form.Item name="phone" label="phone number" style={{ width: "400px" }}
      rules={[
        {
          required: true,
          message: "Please input your phone number",
          whitespace:true
        },
      ]}
      >
        <Input addonBefore={frefixSelector} style={{ width: "100%" }} />
      </Form.Item>
      <div style={{ float: "left", width: "350px" }}>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          {...formTailItemLayout}
          rules={[
            {
              validator:(_, value)=> value? Promise.resolve(): Promise.reject("Should accept agreement"),
            },
          ]}
        >
          <Checkbox>
            I've read the
            <a href="#" alt="Agrement">
              agreement
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegisterForm;
