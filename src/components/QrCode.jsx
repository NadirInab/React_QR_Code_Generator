import { React, useState } from 'react';
import QRCode from 'qrcode';

function QrCode() {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateQrCode = () => {
        console.log("here");
        QRCode.toDataURL(url,{
            width:280, 
            margin:2 , 
            color : {
                dark:'#000080',
                light: '#F5F5F5'
            }
        }, (err, url) => {
           
            if (err) return console.log(err);
            console.log(url);
            setQrCode(url)
        })
    }
    return (
        <div className='main'>
            <div className='moving'>
                <div id="light">
                    <div id="lineh1"></div>
                    <div id="lineh2"></div>
                    <div id="lineh3"></div>
                    <div id="lineh4"></div>
                    <div id="lineh5"></div>
                    <div id="lineh6"></div>
                    <div id="lineh7"></div>
                    <div id="lineh8"></div>
                    <div id="lineh9"></div>
                    <div id="lineh10"></div>
                    <div id="lineh11"></div>
                    <div id="lineh12"></div>
                </div>
            </div>
            <div className='qrCodeInput'>
                <div className="input-group p-3 d-flex justify-content-center">
                    <div className="form-outline">
                        <input placeholder='eg : google.com' type="text" id="form1" className="form-control p-2" value={url} onChange={e => setUrl(e.target.value)} />
                    </div>
                    <button id='generateBtn' onClick={generateQrCode} type="button" className="btn btn-muted fw-bold mx-2">
                        Generate
                    </button>
                </div>
                {
                    qrCode &&
                    <div className='w-100 h-100 mr-3 text-center'>
                        <img className='d-block mx-auto border-rounded' src={qrCode} />
                        <a className='text-light text-decoration-none m-2' href={qrCode} download="qrcode.png">Download</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default QrCode
