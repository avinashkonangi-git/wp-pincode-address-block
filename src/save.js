import { useBlockProps } from '@wordpress/block-editor';
export default function save() {
    return (
        <div className="indian-address-form">

            <div className="address-card">

                <h3>Find Address by PIN Code</h3>

                <div className="form-row">
                    <input 
                        type="text"
                        className="pincode"
                        placeholder="Enter 6 digit PIN code"
                    />

                    <button className="find-address">
                        Find Address
                    </button>
                </div>

                <div className="loader"></div>

                <div className="result"></div>

            </div>

        </div>
    );
}