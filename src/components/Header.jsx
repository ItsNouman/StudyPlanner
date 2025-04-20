import { useEffect, useState } from "react";

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return <h1>📚 Study Planner - {time.toLocaleTimeString()}</h1>;
};

export default Header;
