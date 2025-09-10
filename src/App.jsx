// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Switch } from './components/ui/switch'
import html2canvas from 'html2canvas'

const CATEGORIES = {
  Subject: ['Red Panda', 'Tiger', 'Elf', 'Robot', 'Samurai'],
  Mood: ['Sad', 'Joyful', 'Mysterious', 'Angry'],
  Medium: ['Traditional (pen)', 'Traditional (marker)', 'Digital (familiar brush)', 'Digital (unfamiliar brush)'],
  Genre: ['Fantasy', 'Sci-Fi', 'Historical', 'Modern', 'Cyberpunk'],
  Clothing: ['Streetwear', 'Kimono', 'Armor', 'Victorian dress'],
  Anatomy: ['Hands', 'Feet', 'Skull', 'Torso'],
  Celebrities: ['Zendaya', 'Timothée Chalamet', 'Rihanna', 'Dwayne Johnson'],
  Franchises: ['Disney', 'Marvel', 'Pixar', 'DC Comics', 'Horror'],
  Holiday: ['Halloween', 'Christmas', 'Valentine’s Day', 'Lunar New Year'],
  Background: ['Old Paper', 'Canvas', 'Sketch Paper', 'Dot Grid', 'Graph Paper']
}

const BACKGROUNDS = [
  '/bg/sketch.png',
  '/bg/canvas.png',
  '/bg/dot.png',
  '/bg/grid.png',
  '/bg/graph.png'
]

export default function App() {
  const [active, setActive] = useState(
    Object.fromEntries(Object.keys(CATEGORIES).map(key => [key, true]))
  )
  const [prompt, setPrompt] = useState({})
  const [history, setHistory] = useState([])
  const [bgImage, setBgImage] = useState(BACKGROUNDS[0])
  const promptRef = useRef(null)

  useEffect(() => {
    const randomBG = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]
    setBgImage(randomBG)
  }, [])

  const generatePrompt = async () => {
    const newPrompt = {}

    for (const key of Object.keys(CATEGORIES)) {
      if (active[key]) {
        const list = CATEGORIES[key]
        const random = list[Math.floor(Math.random() * list.length)]
        newPrompt[key] = random
      }
    }

    try {
      const res = await fetch('/api/random-subject')
      const data = await res.json()
      if (data?.type && data?.value) {
        newPrompt[data.type] = data.value
      }
    } catch (err) {
      console.error('Failed to fetch dynamic subject:', err)
    }

    setPrompt(newPrompt)
    setHistory(prev => [newPrompt, ...prev.slice(0, 9)]) // keep last 10
  }

  const exportAsImage = async () => {
    if (promptRef.current) {
      const canvas = await html2canvas(promptRef.current)
      const link = document.createElement('a')
      link.download = 'art-prompt.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-repeat bg-center bg-fixed bg-cover" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="md:w-1/2 w-full p-4 space-y-2">
        <h2 className="text-lg font-bold mb-2">🔧 Prompt Settings</h2>
        <div className="space-y-2 bg-white bg-opacity-60 rounded-xl p-4">
          {Object.entries(CATEGORIES).map(([category, values]) => (
            <div key={category} className="flex items-center justify-between">
              <span>{category}</span>
              <Switch
                checked={active[category]}
                onCheckedChange={val => setActive({ ...active, [category]: val })}
              />
            </div>
          ))}
          <Button onClick={generatePrompt} className="mt-4">🎲 Generate Prompt</Button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">🕘 Prompt History</h3>
          <div className="space-y-1 max-h-48 overflow-y-auto bg-white bg-opacity-50 rounded-md p-2 text-sm">
            {history.map((item, i) => (
              <div key={i} className="border-b pb-1">
                {Object.entries(item).map(([cat, val]) => (
                  <div key={cat}><strong>{cat}:</strong> {val}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-lg font-bold mb-2">🧠 Your Prompt</h2>
        <Card className="bg-white bg-opacity-70" ref={promptRef}>
          <CardContent className="p-4 space-y-3">
            {Object.entries(prompt).map(([category, value]) => (
              <div key={category} className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-2">
                <div><strong>{category}:</strong> {value}</div>
                <a
                  href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(value)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline mt-1 md:mt-0"
                >Click for Reference</a>
              </div>
            ))}
            <p className="mt-4 italic text-sm">
              Use this randomized prompt as a warm-up. Interpret it your way, and experiment with form, material, and style.
            </p>
            <Button onClick={exportAsImage}>⬇️ Export as Image</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
