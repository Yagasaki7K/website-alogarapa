import { useState } from 'react';
import LoginScreen from '../src/components/LoginScreen';
import Login from './login';

export function Home() {

    const [user, setUser] = useState(null);

    const ActionLoginDataGoogle = async (username) => {
        let newUser = {
            id: username.uid,
            name: username.displayName,
            avatar: username.photoURL
        }

        setUser(newUser);
    }

    if (user === null) {
        return (
            <LoginScreen onReceiveGoogle={ActionLoginDataGoogle}/>
        );
    } else {
        return (
            <Login/>
        )
    }
}

export default Home