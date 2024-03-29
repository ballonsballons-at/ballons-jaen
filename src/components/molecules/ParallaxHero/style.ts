import {css, CSSObject} from '@emotion/react'

const parallaxMake = (parallax__layers: number) => {
  let styles: CSSObject = {}
  for (let i = 0; i <= parallax__layers; i++) {
    let x = (parallax__layers - i) / 2

    styles['.parallax__layer__' + i] = {
      transform: `translateZ(${-100 * x}px) scale(${x + 1})`
    }
  }
  return styles
}

export const Section = (noScroll?: boolean) => css`
  perspective: 100px;
  overflow-x: hidden;
  overflow-y: ${noScroll ? 'scroll' : 'hidden'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //margin-left: -1500px;

  .parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .parallax__cover {
    //background: #fff;
    display: flex;
    align-items: flex-end;
    //position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90vh;
  }

  ${parallaxMake(3)}

  #scrollarrows {
    position: relative;
  }
  #scrollarrows span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #e3000f;
    border-bottom: 1px solid #e3000f;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb07 2s infinite;
    animation: sdb07 2s infinite;
    opacity: 0;
    box-sizing: border-box;
    filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1));
  }
  #scrollarrows span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  #scrollarrows span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  #scrollarrows span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  @-webkit-keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
