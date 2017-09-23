/**
 * Created by Darina on 23.09.2017.
 * task "Cat Annotation" #3
 */
var picture = require('cat-picture');

var src = picture.src
picture.remove()

var image = require('lightning-image-poly')
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

