
const controller = function (routerElement, router, ctrlConfig, projectConfig) {
  const scenes = projectConfig.scenes

  const style = ctrlConfig.style || 'color: blue; font-size: 16px'
  const clear = ctrlConfig.clear

  const change = e => {
    const index = e.currentIndex
    const scene = scenes[index]
    const note = scene.notes
    if (clear) console.clear()
    console.log('Scene ' + (index + 1) + ':')
    if (note) {
      console.log(`%c${note}`, style)
    }
  }

  router.on('indexChanged', e => {
    change(e)
  })
}

controller.install = Presenta => {
  Presenta.addController('consoleNotes', controller)
}

export default controller

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(controller)
}
