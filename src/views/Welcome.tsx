/**
 * @author:  Egide
 * @description: Welcome page
 */

import React from 'react';
import { Button, Checkbox, Col, Form, Image, Input, Row, Typography } from 'antd';
import { FaLock, FaMailBulk, FaUserAlt } from 'react-icons/fa'

const WelcomePage = () => {

    const { Title, Text } = Typography

    return (
        <div className="welcome bg-first py-14 px-32 h-screen">
            <div className='rounded-xl bg-white h-full shadow-sm p-16'>
                <Row>
                    <Col className='ml-8 w-2/4'>
                        <Title className='text-black'>Sign up</Title>

                        <Form action="" className='mt-8'>
                            <Input 
                                size="middle" 
                                placeholder="Your Name" 
                                prefix={<FaUserAlt />} 
                                className="w-2/3"
                            />

                            <Input 
                                size="middle" 
                                placeholder="Your Email" 
                                prefix={ <FaMailBulk />} 
                                className="w-2/3 mt-4 outline-none"
                            />

                            <Input 
                                size="middle" 
                                placeholder="Password" 
                                type='password' 
                                prefix={ <FaLock />} 
                                className="w-2/3 mt-4 outline-none"
                            />

                            <Input 
                                size="middle" 
                                type='password' 
                                placeholder="Repeat your password" 
                                prefix={ <FaLock />} 
                                className="w-2/3 mt-4 outline-none"
                            />

                            <Form.Item name="remember" valuePropName="checked" className='mt-4'>
                                <Checkbox checked>
                                    I agree all statements in <Text className="underline">Terms of service</Text>
                                </Checkbox>
                            </Form.Item>

                            <Button>
                                Register
                            </Button>
                        </Form>
                    </Col>
                    <Col className='ml-14 mt-4'>
                        <div>
                            <Image 
                                src={"https://images.pexels.com/photos/6930573/pexels-photo-6930573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                                className="object-cover mt-6"
                                width={300}
                                height={300}
                                preview={false}
                            />
                        </div><br />
                        <Title level={5} className='text-base text-center mt-8 underline'>I am already member</Title>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WelcomePage
