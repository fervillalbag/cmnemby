import React from 'react'
import { Container } from './styles'

export const Map: React.FC = () => {
  return (
    <Container>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width={'100%'}
            height={'100%'}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Centro%20M%C3%A9dico%20%C3%91emby&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies2.org">https://fmovies2.org</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.mapouter{position:relative;text-align:right;height:100%;width:100%;}'
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}'
            }}
          />
        </div>
      </div>
    </Container>
  )
}
