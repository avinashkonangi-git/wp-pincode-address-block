import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

import './view'; 

import './style.scss'; // This compiles to style-index.css
import './editor.scss'; // This compiles to index.css

registerBlockType('custom/indian-address', {
    edit: Edit,
    save: Save
});