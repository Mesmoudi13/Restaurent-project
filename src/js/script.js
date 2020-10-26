buttonAni = document.querySelector('.bttn')

buttonAni.addEventListener('click', e => buttonPress(e))

const buttonPress = e => {
  const offset = buttonAni.getBoundingClientRect()
      newX = e.clientX - offset.left,
      newY = e.clientY - offset.top,
      color = getComputedStyle(buttonAni).backgroundColor
  let size = 0,
      opacity = .25

  function btnClick() {
    size += 8
    opacity -= .008
    buttonAni.style.background = `${color} radial-gradient(circle at ${newX}px ${newY}px, rgba(1,8,22,${opacity}) ${size}%, transparent ${size +2}%) no-repeat`
    if( size <= 300 ){
			requestAnimationFrame( btnClick )
		}else{
			buttonAni.style.background = ''
		}
  }
  btnClick()
}
