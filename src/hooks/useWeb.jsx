import { useEffect, useState } from "react";

const useWebsite = () => {
    const [web, setWeb] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('Website.json')
            .then(res => res.json())
            .then(data => {
                setWeb(data),
                    setLoading(data)
            })
    }, [])
    return [web, loading];
}

export default useWebsite;