import axios from 'axios';
import { useState } from 'react';

export const Upload = () => {
    const [file, setFile] = useState("");

    const onFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    const upload = async () => {
        let body = new FormData();
        // API key is not sensitive data
        body.set('key', '100aa98ee786fb2d4ffc859b68980878');
        body.append('image', file);

        const url = (await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        }) as any).data.data.url;

        console.log(url);

        return url;
    }

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={upload}>Upload</button>
        </div>
    )
}