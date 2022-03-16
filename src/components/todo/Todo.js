import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleTodoStatus } from '../../redux/actions'
import { TodoSlice } from '../todoList/TodoSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export const Todo = ({ name, prioriry, completed, id }) => {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();

    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(TodoSlice.actions.toggleTodoStatus(id))
        console.log('re-render')
    };

    return (
        <Row
        justify='space-between'
        style={{
            marginBottom: 3,
            ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
        }}
        >
        <Checkbox checked={checked} onChange={toggleCheckbox}>
            {name}
        </Checkbox>
        <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
            {prioriry}
        </Tag>
        </Row>
    );
}
