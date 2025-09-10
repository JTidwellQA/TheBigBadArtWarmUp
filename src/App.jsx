// src/App.jsx
import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Switch } from './components/ui/switch'

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

export default function App() {
  const [active, setActive] = useState(
    Object.fromEntries(Object.keys(CATEGORIES).map(key => [key, true]))
  )
  const [prompt, setPrompt] = useState({})

  const generatePrompt = async () => {
  const newPrompt = {}

  // Loop through categories
  for (const key of Object.keys(CATEGORIES)) {
    if (active[key]) {
      const list = CATEGORIES[key]
      const random = list[Math.floor(Math.random() * list.length)]
      newPrompt[key] = random
    }
  }

  // 🔄 Inject dynamic subject from the API (replaces Subject)
  try {
    const res = await fetch('/api/random-subject')
    const data = await res.json()
    if (data?.type && data?.value) {
      newPrompt[data.type] = data.value  // example: Animal: "Sloth"
    }
  } catch (err) {
    console.error('Failed to fetch dynamic subject:', err)
  }

  setPrompt(newPrompt)
}

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-repeat" style={{ backgroundImage: "url('/bg/sketch.png')" }}>
      <div className="md:w-1/2 w-full p-4 space-y-2">
        {Object.entries(CATEGORIES).map(([category, values]) => (
          <div key={category} className="flex items-center justify-between">
            <span>{category}</span>
            <Switch
              checked={active[category]}
              onCheckedChange={val => setActive({ ...active, [category]: val })}
            />
          </div>
        ))}
        <Button onClick={generatePrompt}>🎲 Generate Prompt</Button>
      </div>

      <div className="md:w-1/2 w-full p-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-bold">🎨 Your Prompt</h2>
            {Object.entries(prompt).map(([category, value]) => (
              <div key={category} className="flex items-center justify-between border-b pb-1">
                <span>{category}: <strong>{value}</strong></span>
                <div className="space-x-2">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(value)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >Search</a>
                </div>
              </div>
            ))}
            <p className="mt-4 italic">
              Combine these elements into a drawing warm-up. Focus on creativity, form, and exploration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
