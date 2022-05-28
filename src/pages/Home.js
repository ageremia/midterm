import { ThemeContext } from "../context/themeContext";
import React, { useContext } from 'react';

const Home = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ color: theme.foreground }}>
            Midterm Home Page
        </div>
    )

}

export default Home;