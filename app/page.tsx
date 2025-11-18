'use client'

import { useState } from 'react'

export default function Home() {
  const [niche, setNiche] = useState('')
  const [language, setLanguage] = useState('hinglish')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleGenerate = async () => {
    if (!niche.trim()) return

    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ niche, language }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      setResult({ error: 'Kuch galat ho gaya. Please try again!' })
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            🎬 YouTube Automation Agent
          </h1>
          <p className="text-xl text-gray-300">
            AI se banao viral YouTube content - Automatically! 🚀
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Apna Niche/Topic Enter Karo:
            </label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., Tech Reviews, Cooking, Gaming, Finance Tips..."
              className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">
              Language:
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            >
              <option value="hinglish">Hinglish</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !niche.trim()}
            className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
          >
            {loading ? '⏳ Generate ho raha hai...' : '🚀 Generate Content Strategy'}
          </button>
        </div>

        {/* Results Section */}
        {result && !result.error && (
          <div className="space-y-6">
            {/* Trending Topics */}
            {result.trendingTopics && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🔥 Trending Topics
                </h2>
                <div className="space-y-3">
                  {result.trendingTopics.map((topic: any, idx: number) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{topic.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          topic.virality === 'High' ? 'bg-green-500' :
                          topic.virality === 'Medium' ? 'bg-yellow-500' : 'bg-orange-500'
                        }`}>
                          {topic.virality}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{topic.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Titles */}
            {result.titles && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  📝 SEO-Optimized Titles
                </h2>
                <div className="space-y-3">
                  {result.titles.map((title: string, idx: number) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                      <span className="flex-1">{title}</span>
                      <button
                        onClick={() => copyToClipboard(title)}
                        className="ml-4 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm"
                      >
                        📋 Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hooks */}
            {result.hooks && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🎣 Viral Hooks
                </h2>
                <div className="space-y-3">
                  {result.hooks.map((hook: string, idx: number) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                      <span className="flex-1">{hook}</span>
                      <button
                        onClick={() => copyToClipboard(hook)}
                        className="ml-4 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm"
                      >
                        📋 Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scripts */}
            {result.scripts && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🎬 Video Scripts
                </h2>
                <div className="space-y-4">
                  {result.scripts.map((script: any, idx: number) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg">{script.type}</h3>
                        <button
                          onClick={() => copyToClipboard(script.content)}
                          className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm"
                        >
                          📋 Copy Script
                        </button>
                      </div>
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap">{script.content}</pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Plan */}
            {result.visualPlan && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🎨 Visual & Editing Plan
                </h2>
                <div className="bg-white/5 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap">{result.visualPlan}</pre>
                </div>
              </div>
            )}

            {/* Tags & Hashtags */}
            {result.tags && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🏷️ Tags & Hashtags
                </h2>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">YouTube Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.tags.youtube?.map((tag: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-red-600/50 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Shorts/Reels Hashtags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.tags.shorts?.map((tag: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-purple-600/50 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Posting Strategy */}
            {result.postingStrategy && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  📅 Posting Strategy
                </h2>
                <div className="bg-white/5 p-4 rounded-lg space-y-3">
                  <div>
                    <span className="font-semibold">Best Days:</span> {result.postingStrategy.bestDays}
                  </div>
                  <div>
                    <span className="font-semibold">Best Times:</span> {result.postingStrategy.bestTimes}
                  </div>
                  <div>
                    <span className="font-semibold">Frequency:</span> {result.postingStrategy.frequency}
                  </div>
                  <div>
                    <span className="font-semibold">Content Mix:</span> {result.postingStrategy.contentMix}
                  </div>
                </div>
              </div>
            )}

            {/* Automation Tools */}
            {result.automationTools && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  🤖 Automation Tools & Workflow
                </h2>
                <div className="space-y-4">
                  {result.automationTools.map((tool: any, idx: number) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{tool.category}</h3>
                      <ul className="space-y-2">
                        {tool.tools.map((t: any, tidx: number) => (
                          <li key={tidx} className="text-sm">
                            <span className="font-semibold text-purple-400">{t.name}:</span> {t.purpose}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Instructions */}
            {result.workflow && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  ⚙️ Complete Workflow
                </h2>
                <div className="bg-white/5 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap">{result.workflow}</pre>
                </div>
              </div>
            )}

            {/* Description */}
            {result.description && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  📄 Video Description
                </h2>
                <div className="bg-white/5 p-4 rounded-lg relative">
                  <button
                    onClick={() => copyToClipboard(result.description)}
                    className="absolute top-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm"
                  >
                    📋 Copy
                  </button>
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap pr-20">{result.description}</pre>
                </div>
              </div>
            )}
          </div>
        )}

        {result?.error && (
          <div className="bg-red-500/20 border border-red-500 rounded-2xl p-6 text-center">
            <p className="text-xl">{result.error}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-400">
        <p>🚀 Powered by AI • Made for Content Creators</p>
      </div>
    </main>
  )
}
