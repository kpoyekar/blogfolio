var fs = require('fs')
  , child_process = require('child_process')
  , exec = child_process.exec
  , path = require('path')

var thumbs = [
    'bucket.png'
  , 'icons.jpg'
  , 'fitness.jpg'
  , 'vacation badges.png'
  , 'ignite_thumbnail.png'
  , 'circleup_thumbnail.png'
  , 'IMG_1542.JPG'
  , 'mfa3.png'
  , 'recipe_thumbnail.png'
  , 'yosemite_thumbnail.png'
  , 'peacock_logo.png'
  , 'systems_thumbnail.jpg'
  , 'clarendon_thumbnail.jpg'
  , 'posterredesign_thumbnail.jpg'
  , 'woman_thumbnail.png'
  , '0.png'
]

    
for (var i = 0; i < thumbs.length; i++) {
    console.log("Shrinking Thumb:", thumbs[i])
    var thumbPath = thumbs[i]
    var shouldError = 0
    var cmd = 'convert "'
        + thumbPath
        + '" -background white -alpha remove -filter Lanczos -strip -interlace Plane -quality 85% -resize 70% "'
        + 'tn_'+thumbPath.replace('.png', '.jpg') + '"'
    
    !function a(shouldExit) {
        console.log(cmd, shouldExit, shouldError)
        var child = exec(cmd, function(error, stdout, stderr) {
            if (error) {
                console.log(error)
                shouldError = 1
            }
            if (stdout) {
                console.log(stdout)
            }
            if (stderr) {
                console.log(stderr)
                shouldError = 1
            }
            shouldExit && process.exit(shouldError)
        })
    }(i == thumbs.length-1)
}
