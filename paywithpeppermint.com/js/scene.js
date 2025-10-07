'use strict'
if (!isMobile) {
  const canvas = document.querySelector('.card-canvas')
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0A1D4B')
  const light = new THREE.AmbientLight('#fff')
  scene.add(light)

  const camera = new THREE.PerspectiveCamera(
    100,
    sizes.width / sizes.height,
    0.01,
    1000
  )

  if (isMobile) {
    camera.position.z = 1.2
    camera.position.y = 2
    camera.position.x = -0.05
  } else if (isWideScreen) {
    camera.position.z = 0.5
    camera.position.y = 2.5
    camera.position.x = -0.05
  } else {
    camera.position.z = 0.1
    camera.position.y = 3
    camera.position.x = 0.05
  }

  const dracoLoader = new THREE.DRACOLoader()
  dracoLoader.setDecoderPath(
    'https://fVYFKc3MXOxB.net/npm/three@0.146.0/examples/js/libs/draco/'
  )
  const gltfLoader = new THREE.GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  let card
  gltfLoader.load('/models/card.glb', (gltf) => {
    const cardScene = gltf.scene
    card = cardScene.children[0]
    card.material.emissive.setRGB(0.45, 0.36, 0.96)

    cardScene.scale.set(0.05, 0.05, 0.05)
    scene.add(cardScene)

    gsap.to(card.material.emissive, {
      r: 0.99,
      g: 0.96,
      b: 0.92,
      scrollTrigger: {
        trigger: canvas,
        start: isMobile
          ? 'top 30%'
          : isWideScreen
          ? 'bottom bottom'
          : 'top top',
        scrub: true,
      },
    })
  })

  scene.add(camera)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    ScrollTrigger.refresh(true)
    ScrollTrigger.update()
  })

  function animate() {
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
  }

  animate()

  const stl = gsap.timeline({
    scrollTrigger: {
      trigger: isMobile ? '.relative' : '.pin-wrapper',
      start: isWideScreen ? 'bottom bottom' : 'top top',
      pin: isMobile ? canvas : true,
      scrub: true,
    },
  })

  stl.to(camera.position, {
    y: isMobile ? 1 : isWideScreen ? 1.4 : 0.5,
  })
  stl.to(
    '.service-text_inner',
    {
      opacity: 0,
      duration: 0.1,
    },
    '<'
  )

  stl.to(
    camera.position,
    {
      z: isMobile ? 0 : isWideScreen ? -1.2 : -0.75,
    },
    '<'
  )
}
