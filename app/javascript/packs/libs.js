// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("@rails/ujs").start()
//require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("jquery")
require('webpack-jquery-ui')
require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme
require("popper.js")
require("bootstrap")

require('@fortawesome/fontawesome-free/js/fontawesome')
require('@fortawesome/fontawesome-free/js/solid')
require('@fortawesome/fontawesome-free/js/regular')
require('@fortawesome/fontawesome-free/js/brands')

import '../common-css/app_css'

require("../users/users")
