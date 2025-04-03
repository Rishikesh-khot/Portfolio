"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted || !containerRef.current) return

    // Initialize scene
    sceneRef.current = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    rendererRef.current.setClearColor(0x000000, 0)

    // Add renderer to DOM
    containerRef.current.innerHTML = "" // Clear any existing canvas
    containerRef.current.appendChild(rendererRef.current.domElement)

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      colors[i] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.5,
    })

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
    sceneRef.current.add(particleSystem)

    // Create grid
    const gridHelper = new THREE.GridHelper(20, 40, 0x00ffff, 0x00ffff)
    gridHelper.position.y = -2
    gridHelper.material.opacity = 0.1
    gridHelper.material.transparent = true
    sceneRef.current.add(gridHelper)

    // Position camera
    camera.position.z = 5
    camera.position.y = 1

    // Animation function
    const animate = () => {
      if (!mounted) return

      frameIdRef.current = requestAnimationFrame(animate)

      if (particleSystem && gridHelper && rendererRef.current && sceneRef.current) {
        particleSystem.rotation.y += 0.0002
        gridHelper.rotation.y += 0.0002
        rendererRef.current.render(sceneRef.current, camera)
      }
    }

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameIdRef.current)

      if (rendererRef.current) {
        rendererRef.current.dispose()
      }

      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [mounted])

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.75,
        pointerEvents: "none",
      }}
    />
  )
}

