import { useContext, useState } from "react"
import axios from "axios"
import spinner from "../assets/Spinner-0.5s-164px.svg";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToastContext from "./context/ToastContext"
import { Button } from "flowbite-react";
import { FaCopy } from 'react-icons/fa';

const API = "https://short-yrld.onrender.com"

const Body = () => {
    const { toast } = useContext(ToastContext)
    const [shortLink, setShortLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [longLink, setLongLink] = useState('')

    const handleApi = () => {
        setLoading(true)

        axios.post(`${API}/api/V8/urlshortner`, { longURL: longLink })
            .then((res) => {
                toast.success("Link Shortened Successfully")
                setLoading(false)
                setShortLink(res.data.url.shortURL)
            })
            .catch((e) => {
                setLoading(false)
                toast.error(e.response.data.message)
            })
    }

    const handleCopy = () => {
        toast.success("Link Copied")
    }

    return (
        <>
            {loading ? (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={spinner} alt="spinner" />
                </div>
            ) : ''}
            <div className="container mx-auto mt-8  flex flex-col items-center w-full">
                <input className="px-4 py-2 border border-gray-300 rounded-md shadow-sm mb-4 w-full md:w-80" placeholder="Enter URL" value={longLink} onChange={(e) => setLongLink(e.target.value)} />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition duration-300 hover:bg-blue-600" onClick={handleApi} title="Shorten URL">Shorten</button>
            </div>
            <div className="container mx-auto mt-8 flex flex-col items-center">
                {shortLink ? (
                    <div className="bg-gray-700 rounded-md p-4">
                        <h2 className="text-white text-lg font-semibold mb-2">Short URL</h2>
                        <div className="flex items-center">
                            <input className="px-2 py-1 border border-gray-300 rounded-md shadow-sm w-full md:w-60 mr-2" value={shortLink} readOnly />
                            <CopyToClipboard text={shortLink} onCopy={handleCopy}>
                             <Button>
                             <FaCopy className="inline-block mr-2" />
                             <span className="font-medium">Copy</span>
                             </Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                ) : ''}
            </div>
        </>
    )
}

export default Body;
