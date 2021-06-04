import React from 'react';
import {View,Text} from 'react-native';
import {todos} from '../Redux/Action/getTodos';
import {useSelector,useDispatch} from 'react-redux';


const Home = () => {

    const dispatch = useDispatch();
    React.useEffect(()=>dispatch(todos()
    ),[])

    return(
        <View></View>
    )
};

export default Home;