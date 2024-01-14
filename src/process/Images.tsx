import { useState, useEffect } from 'react';

function Images( imagetype: string) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch("http://localhost:5000/" + imagetype )
            .then((res) => {
                if(!res.ok) throw new Error(res.statusText);
                return res.blob();
            })
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
            .catch(error => console.error('Error fetching the scatter plot:', error));
    }, []);


    return (
        <>
            {imageUrl && <img src={imageUrl} alt={imagetype} />}
        </>
    );
}

export default Images;
