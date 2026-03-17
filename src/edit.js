import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <p><strong>Indian Address Finder</strong></p>
            <p>This form will appear on the frontend.</p>
        </div>
    );
}