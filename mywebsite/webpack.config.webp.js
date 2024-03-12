const imagemin = require("imagemin")
const webp = require("imagemin-webp")
imagemin(['src/img/*.{jpg,png}'], {
    destination: 'dist/img',
    plugins: [
        webp(
            {
                quality: 60,
                resize: { width: 150, height: 150 }

            })
    ]
});