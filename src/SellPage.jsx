import {BiUpload} from 'react-icons/bi'

export function SellPage() {
    return (<div className="sell-page-container">
            <div className="sell-window">
                <div className="upload-img-container">
                    <div className="upload-img-preview">
                        
                    </div>
                    <div className="upload-img-text">
                        <h1>Upload images of your car</h1>
                        <button>Upload<BiUpload /></button>
                    </div>
                </div>
                <div className="enter-car-info-container">
                    <h1>Enter car information</h1>
                    <div className='info-container1'>
                        <div className='form-group'>
                            <input type='text' placeholder='Make'/>
                            <input type='text' placeholder='Model'/>
                        </div>
                        <div className='form-group'>
                            <input type='number' placeholder='Year' />
                            <input type='number' placeholder='KMs travelled' />
                        </div>
                        <div className='form-group'>
                            <input type='number' placeholder='Price' />
                        </div>
                        <div className='form-submit-btt-container'>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>)
}