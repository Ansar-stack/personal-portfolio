"use client"

import React, { useEffect, useRef, useState } from "react"

// -------------------- cn (local, no imports) --------------------
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

// -------------------- Mouse Position Hook --------------------
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return mousePosition
}

// -------------------- Helpers --------------------
function hexToRgb(hex) {
  hex = hex.replace("#", "")

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("")
  }

  const hexInt = parseInt(hex, 16)
  return [
    (hexInt >> 16) & 255,
    (hexInt >> 8) & 255,
    hexInt & 255,
  ]
}

// -------------------- Particles Component --------------------
function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) {
  const canvasRef = useRef(null)
  const canvasContainerRef = useRef(null)
  const context = useRef(null)
  const circles = useRef([])
  const mousePosition = useMousePosition()
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1
  const rafID = useRef(null)
  const resizeTimeout = useRef(null)

  const rgb = hexToRgb(color)

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }

    initCanvas()
    animate()

    const handleResize = () => {
      clearTimeout(resizeTimeout.current)
      resizeTimeout.current = setTimeout(initCanvas, 200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (rafID.current) cancelAnimationFrame(rafID.current)
      clearTimeout(resizeTimeout.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [color])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const onMouseMove = () => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const { w, h } = canvasSize.current
    const x = mousePosition.x - rect.left - w / 2
    const y = mousePosition.y - rect.top - h / 2

    if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
      mouse.current.x = x
      mouse.current.y = y
    }
  }

  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current)
      return

    canvasSize.current.w = canvasContainerRef.current.offsetWidth
    canvasSize.current.h = canvasContainerRef.current.offsetHeight

    canvasRef.current.width = canvasSize.current.w * dpr
    canvasRef.current.height = canvasSize.current.h * dpr
    canvasRef.current.style.width = `${canvasSize.current.w}px`
    canvasRef.current.style.height = `${canvasSize.current.h}px`

    context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

    circles.current = []
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams())
    }
  }

  const circleParams = () => ({
    x: Math.random() * canvasSize.current.w,
    y: Math.random() * canvasSize.current.h,
    translateX: 0,
    translateY: 0,
    size: Math.random() * 2 + size,
    alpha: 0,
    targetAlpha: +(Math.random() * 0.6 + 0.1).toFixed(1),
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  })

  const drawCircle = (circle, update = false) => {
    const ctx = context.current
    if (!ctx) return

    ctx.translate(circle.translateX, circle.translateY)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${rgb.join(",")}, ${circle.alpha})`
    ctx.fill()
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!update) circles.current.push(circle)
  }

  const clearContext = () => {
    context.current?.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h
    )
  }

  const drawParticles = () => {
    clearContext()
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams())
    }
  }

  const remapValue = (v, a1, a2, b1, b2) =>
    Math.max(((v - a1) * (b2 - b1)) / (a2 - a1) + b1, 0)

  const animate = () => {
    clearContext()

    circles.current.forEach((circle, i) => {
      const edges = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ]

      const edgeFactor = remapValue(Math.min(...edges), 0, 20, 0, 1)

      circle.alpha =
        edgeFactor > 1
          ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
          : circle.targetAlpha * edgeFactor

      circle.x += circle.dx + vx
      circle.y += circle.dy + vy

      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) -
          circle.translateX) /
        ease
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) -
          circle.translateY) /
        ease

      drawCircle(circle, true)

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1)
        drawCircle(circleParams())
      }
    })

    rafID.current = requestAnimationFrame(animate)
  }

  return (
    <div
      ref={canvasContainerRef}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}

export default Particles
