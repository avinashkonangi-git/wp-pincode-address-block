<?php
/**
 * Plugin Name:       Indian Address Block
 * Description:       Find address using pincode
 * Version:           1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Konangi Avinash
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       indian-address-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}	

defined('ABSPATH') || exit;

function indian_address_block_init() {
    register_block_type(__DIR__);
	
	wp_register_script(
        'indian-address-view',
        plugins_url('src/view.js', __FILE__),
        [],
        null,
        true
    );
}

add_action('init', 'indian_address_block_init');

function indian_address_enqueue_view_script() {
    wp_enqueue_script('indian-address-view');
}

add_action('wp_enqueue_scripts', 'indian_address_enqueue_view_script');