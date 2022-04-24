import axios from 'axios';
import { SetStateAction, useState } from 'react';

export const Upload = (props: { changeUrl: React.Dispatch<SetStateAction<string>> }) => {
    const onFileChange = async (event: any) => {
        let body = new FormData();
        // API key is not sensitive data
        body.set('key', '100aa98ee786fb2d4ffc859b68980878');
        body.append('image', event.target.files[0]);

        const url = (await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        }) as any).data.data.url;

        props.changeUrl(url);
    };

    return (
        <div className="flex justify-center">
            <div className="">
                <div className="m-4">
                    <label className="inline-block mb-2 text-black">Image Upload</label>
                    <div className="flex items-center justify-center flex-col w-60">
                        <label
                            htmlFor="imageUpload"
                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Attach an image</p>
                            </div>

                        </label>
                        <input
                            id="imageUpload"
                            className="
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                            type="file" onChange={onFileChange} />
                    </div>
                </div>

            </div>

        </div>
    )
}