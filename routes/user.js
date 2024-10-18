var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Iphone 16 pro",
      category:'mobile',
      description:"this is a phone with AI",
      image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg"
    },
    {
      name:"Iphone 15 pro",
      category:'mobile',
      description:"this is a phone with titanium body",
      image:"https://www.aptronixindia.com/media/catalog/product/i/p/iphone_15_pro_natural_titanium_pdp_image_position-1__wwen.jpg"
    },
    {
      name:"Iphone 14 pro",
      category:'mobile',
      description:"this is a phone with notch",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuYN2vuHTy4ieCIQxoMtexs_QIzRAsCAfrA&s"
    },
    {
      name:"Iphone 13 pro",
      category:'mobile',
      description:"this is a phone with cinematic camera",
      image:"https://5.imimg.com/data5/SELLER/Default/2023/6/319992186/DT/AB/HY/181126883/iphone-13-pro-128gb-500x500.jpg"
    }
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
