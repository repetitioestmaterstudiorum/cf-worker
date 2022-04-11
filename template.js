import flag from 'country-code-emoji'

const template = cf => {
  const city = cf.city || 'an unknown city'
  const country = cf.country || 'an unknown country'
  const emoji = flag(cf.country) || ''

  return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="id=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>cf-worker</title>
        <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
        <style>
            body {
                background: #eee;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                font-family: sans-serif;
            }
            div.container {
                background: #fff;
                border-radius: 1rem;
                padding: 4rem;
            }
            .mapouter {
                position:relative;
                text-align:right;
                height:370px;
                width:600px;
                max-width: 80vw;
            }
            .gmap_canvas {
                overflow:hidden;
                background:none!important;
                height:370px;
                width:600px;
                max-width: 80vw;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello there</h1>
                <p>You seem to be coming from ${city} in ${country} ${emoji}</p>
                <br />
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="370" id="gmap_canvas" src="https://maps.google.com/maps?q=${cf.longitude},%20${cf.latitude}&t=k&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            </div>
        </body>
        </html>
        `
}

export default template
