import React, {useEffect, useState} from "react";
import {Form, message, Radio, Button} from 'antd';

function Exam(props) {
    const {getFieldDecorator} = props.form;
    const [value, setValue] = useState(1)
    useEffect(() => {
        localStorage.setItem(
            'one', JSON.stringify({
                'div': 1,
                'table': 0,
                'p': 0,
                'h1': 0,
                'ol': 0,
                'ul': 0,
                'form': 1,
                'header': 0,
                'section': 0,
                'footer': 0,
            }))
        // props.form.validateFields()
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                let grade = 0;
                const getAnswers = JSON.parse(localStorage.getItem('one'))
                Object.keys(values).forEach((items) => {
                    if (Number(values[items]) !== Number(getAnswers[items.split('_')[0]])) {
                        grade += 1;
                    }
                })
                console.log('Received values of form: ', getAnswers, values, grade);

                if (grade) {
                    message.warning('答错了' + grade + "道题！")
                } else {
                    message.success('全部正确！')
                }
            }
        });
    };
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const obj = {
        'div': {
            description: "是块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'table': {
            description: "不是块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'p': {
            description: "不是块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'h1': {
            description: "不是块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'ol': {
            description: "不是有序列表",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'ul': {
            description: "不是无序列表",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'form': {
            description: "是块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'header': {
            description: "不是HTML5新增的块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'section': {
            description: "不是HTML5新增的块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
        'footer': {
            description: "不是HTML5新增的块级标签",
            questionsAndAnswers: {
                1: '正确',
                0: '错误',
            }
        },
    };
    const Template = () => {

        return Object.keys(obj).map((items, i) => {
            const description = obj[items].description;
            const questionsAndAnswers = obj[items].questionsAndAnswers;
            return <Form.Item
                key={i}
                style={{display: 'block'}}
                label={<strong>{i + 1}、{items} {description}</strong>}
            >
                {getFieldDecorator(items + '_Form', {
                    initialValue: '',
                    rules: [{required: true, message: 'Please checked!'}],
                })(
                    <Radio.Group onChange={onChange}>
                        {
                            Object.keys(questionsAndAnswers).map((items,i) => <Radio key={i} value={items}>
                                {questionsAndAnswers[items]}
                            </Radio>)
                        }


                    </Radio.Group>
                )}
            </Form.Item>
        })

    }
    return <Form style={{margin: '10px 30px'}} layout="inline" onSubmit={handleSubmit}>


        {Template()}
        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
}

const ExamForm = Form.create({name: 'horizontal_login'})(Exam);
export default ExamForm
