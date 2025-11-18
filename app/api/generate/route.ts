import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { niche, language } = await request.json()

    if (!niche) {
      return NextResponse.json(
        { error: 'Niche required hai!' },
        { status: 400 }
      )
    }

    // Generate comprehensive content strategy
    const result = await generateContentStrategy(niche, language)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

async function generateContentStrategy(niche: string, language: string) {
  const isHinglish = language === 'hinglish'
  const isHindi = language === 'hindi'

  // Analyze niche and generate trending topics
  const trendingTopics = generateTrendingTopics(niche, language)

  // Generate SEO titles
  const titles = generateTitles(niche, language)

  // Generate hooks
  const hooks = generateHooks(niche, language)

  // Generate scripts
  const scripts = generateScripts(niche, language)

  // Generate visual plan
  const visualPlan = generateVisualPlan(niche, language)

  // Generate tags and hashtags
  const tags = generateTags(niche, language)

  // Generate posting strategy
  const postingStrategy = generatePostingStrategy(niche, language)

  // Generate automation tools
  const automationTools = generateAutomationTools(language)

  // Generate workflow
  const workflow = generateWorkflow(language)

  // Generate description
  const description = generateDescription(niche, language)

  return {
    trendingTopics,
    titles,
    hooks,
    scripts,
    visualPlan,
    tags,
    postingStrategy,
    automationTools,
    workflow,
    description
  }
}

function generateTrendingTopics(niche: string, language: string) {
  const topics = [
    {
      title: `${niche} - Latest Trend 2024`,
      virality: 'High',
      reason: language === 'hinglish'
        ? 'Current trending topic hai with high search volume aur engagement potential'
        : language === 'hindi'
        ? 'वर्तमान ट्रेंडिंग टॉपिक है उच्च सर्च वॉल्यूम के साथ'
        : 'Current trending topic with high search volume and engagement potential'
    },
    {
      title: `${niche} Secrets Nobody Tells You`,
      virality: 'High',
      reason: language === 'hinglish'
        ? 'Mystery aur curiosity create karta hai, click-through rate high hota hai'
        : language === 'hindi'
        ? 'रहस्य और जिज्ञासा पैदा करता है, उच्च क्लिक-थ्रू रेट'
        : 'Creates mystery and curiosity, high click-through rate'
    },
    {
      title: `${niche} in 60 Seconds | Quick Guide`,
      virality: 'Medium',
      reason: language === 'hinglish'
        ? 'Shorts format ke liye perfect, quick consumption content'
        : language === 'hindi'
        ? 'शॉर्ट्स फॉर्मेट के लिए परफेक्ट, त्वरित सामग्री'
        : 'Perfect for Shorts format, quick consumption content'
    }
  ]

  return topics
}

function generateTitles(niche: string, language: string) {
  if (language === 'hinglish') {
    return [
      `🔥 ${niche} Ka Sach! Ye Video Dekhne Se Pehle ${niche} Mat Karna | Shocking Truth Revealed`,
      `💯 ${niche} Kaise Kare in 2024? | Step-by-Step Guide Hindi | ${niche} Tutorial`,
      `⚡ ${niche} Se Paise Kamao | ${niche} Tips & Tricks | Full Guide in Hindi`
    ]
  } else if (language === 'hindi') {
    return [
      `🔥 ${niche} की सच्चाई! यह वीडियो देखने से पहले ${niche} मत करना`,
      `💯 ${niche} कैसे करें 2024 में? | संपूर्ण गाइड हिंदी में`,
      `⚡ ${niche} से पैसे कमाएं | ${niche} टिप्स और ट्रिक्स`
    ]
  } else {
    return [
      `🔥 ${niche} EXPOSED! Don't Try ${niche} Before Watching This | Shocking Truth`,
      `💯 How to Master ${niche} in 2024? | Complete Step-by-Step Guide`,
      `⚡ Make Money With ${niche} | ${niche} Tips & Tricks | Ultimate Guide`
    ]
  }
}

function generateHooks(niche: string, language: string) {
  if (language === 'hinglish') {
    return [
      `"Agar aapne ${niche} galat tarike se kiya, toh ye video aapki life change kar dega!"`,
      `"Maine ${niche} mein ye mistake ki aur sab kuch barbaad ho gaya... par aap mat karna!"`,
      `"${niche} ka ye secret jaanne ke baad aap shocked reh jaoge!"`
    ]
  } else if (language === 'hindi') {
    return [
      `"अगर आपने ${niche} गलत तरीके से किया, तो यह वीडियो आपकी ज़िंदगी बदल देगा!"`,
      `"मैंने ${niche} में यह गलती की और सब कुछ बर्बाद हो गया... पर आप मत करना!"`,
      `"${niche} का यह रहस्य जानने के बाद आप चौंक जाएंगे!"`
    ]
  } else {
    return [
      `"If you're doing ${niche} wrong, this video will change your life!"`,
      `"I made this ${niche} mistake and lost everything... don't let it happen to you!"`,
      `"This ${niche} secret will shock you!"`
    ]
  }
}

function generateScripts(niche: string, language: string) {
  if (language === 'hinglish') {
    return [
      {
        type: 'Short-Form Script (30-60 sec)',
        content: `├─ HOOK (0-3 sec)
"${niche} kar rahe ho? Ye mistake mat karna!"

├─ PROBLEM (3-8 sec)
"Zyada log ${niche} mein ye galti karte hain aur fail ho jate hain"

├─ SOLUTION (8-25 sec)
"Par main aapko bataunga ek secret technique jo actually kaam karti hai:
• Step 1: [Specific action]
• Step 2: [Specific action]
• Step 3: [Result]"

├─ CTA (25-30 sec)
"Agar aur tips chahiye toh follow karo aur like kardo! 🔥"

├─ Visual Cues:
• Fast cuts har 2-3 seconds
• Text overlays for key points
• Trending audio in background`
      },
      {
        type: 'Long-Form Script (8-12 min)',
        content: `├─ INTRO (0-30 sec)
"Namaste doston! Aaj hum baat karenge ${niche} ke baare mein jo sabko jaanna chahiye"
[Show face/logo, energetic intro]

├─ HOOK EXTENSION (30-90 sec)
"Pichle 5 saalon mein maine ${niche} ko deeply study kiya aur jo mujhe pata chala, wo aap sabke saath share karunga"

├─ MAIN CONTENT (90 sec - 10 min)
Section 1: Problem identification
Section 2: Deep dive into solution
Section 3: Step-by-step implementation
Section 4: Common mistakes to avoid
Section 5: Pro tips and hacks

├─ OUTRO (10-12 min)
"Toh doston ye thi complete guide ${niche} ki. Agar helpful laga toh:
• Like karo
• Subscribe karo
• Comment mein batao kya seekha
• Next video mein milte hain!"

├─ End Screen:
• Next video thumbnail
• Subscribe button
• Best video of channel`
      },
      {
        type: 'Shorts/Reels Script (15 sec)',
        content: `├─ HOOK (0-1 sec)
"${niche} ka secret?!"
[Quick zoom in]

├─ RAPID VALUE (1-12 sec)
Fast-paced 3 tips:
"1. [Tip ek]
2. [Tip do]
3. [Tip teen]"
[Text overlay each tip]

├─ CTA (12-15 sec)
"Save this! Follow for more! 💪"
[Point to follow button]`
      }
    ]
  } else if (language === 'hindi') {
    return [
      {
        type: 'शॉर्ट-फॉर्म स्क्रिप्ट (30-60 सेकंड)',
        content: `├─ हुक (0-3 सेकंड)
"${niche} कर रहे हो? यह गलती मत करना!"

├─ समस्या (3-8 सेकंड)
"अधिकतर लोग ${niche} में यह गलती करते हैं"

├─ समाधान (8-25 सेकंड)
"पर मैं आपको बताऊंगा एक विशेष तकनीक:
• चरण 1: [विशिष्ट कार्य]
• चरण 2: [विशिष्ट कार्य]
• चरण 3: [परिणाम]"

├─ CTA (25-30 सेकंड)
"अधिक टिप्स चाहिए तो फॉलो करें! 🔥"`
      },
      {
        type: 'लॉन्ग-फॉर्म स्क्रिप्ट (8-12 मिनट)',
        content: `├─ परिचय (0-30 सेकंड)
"नमस्ते दोस्तों! आज हम बात करेंगे ${niche} के बारे में"

├─ मुख्य सामग्री (90 सेकंड - 10 मिनट)
खंड 1: समस्या की पहचान
खंड 2: समाधान का विस्तार
खंड 3: चरण-दर-चरण कार्यान्वयन
खंड 4: सामान्य गलतियाँ
खंड 5: प्रो टिप्स

├─ समापन (10-12 मिनट)
"तो दोस्तों यह थी ${niche} की पूर्ण गाइड!"`
      },
      {
        type: 'शॉर्ट्स स्क्रिप्ट (15 सेकंड)',
        content: `├─ हुक (0-1 सेकंड)
"${niche} का रहस्य?!"

├─ तेज़ मूल्य (1-12 सेकंड)
3 टिप्स तेज़ी से

├─ CTA (12-15 सेकंड)
"सेव करें! फॉलो करें! 💪"`
      }
    ]
  } else {
    return [
      {
        type: 'Short-Form Script (30-60 sec)',
        content: `├─ HOOK (0-3 sec)
"Doing ${niche}? Don't make this mistake!"

├─ PROBLEM (3-8 sec)
"Most people fail at ${niche} because of this"

├─ SOLUTION (8-25 sec)
"Here's the secret technique that actually works:
• Step 1: [Specific action]
• Step 2: [Specific action]
• Step 3: [Result]"

├─ CTA (25-30 sec)
"Follow for more tips! 🔥"

├─ Visual Cues:
• Fast cuts every 2-3 seconds
• Text overlays for key points
• Trending audio`
      },
      {
        type: 'Long-Form Script (8-12 min)',
        content: `├─ INTRO (0-30 sec)
"Hey everyone! Today we're diving deep into ${niche}"

├─ MAIN CONTENT (90 sec - 10 min)
Section 1: Problem identification
Section 2: Deep dive solution
Section 3: Step-by-step guide
Section 4: Common mistakes
Section 5: Pro tips

├─ OUTRO (10-12 min)
"That's the complete ${niche} guide! If helpful:
• Hit like
• Subscribe
• Comment what you learned"`
      },
      {
        type: 'Shorts/Reels Script (15 sec)',
        content: `├─ HOOK (0-1 sec)
"${niche} secret?!"

├─ RAPID VALUE (1-12 sec)
3 quick tips

├─ CTA (12-15 sec)
"Save this! Follow for more! 💪"`
      }
    ]
  }
}

function generateVisualPlan(niche: string, language: string) {
  if (language === 'hinglish') {
    return `├─ Visuals Strategy:
│
├─ B-Roll Footage Needed:
│   • ${niche} ka live demonstration
│   • Close-up shots of key elements
│   • Before/After comparison shots
│   • Motion graphics for statistics
│
├─ Editing Style:
│   • Fast-paced cuts (har 2-3 seconds)
│   • Trending transitions (whoosh, zoom)
│   • Color grading: Vibrant & high contrast
│   • Text animations: Bold, readable
│
├─ On-Screen Elements:
│   • Lower thirds for important points
│   • Progress bars/checklists
│   • Emoji reactions
│   • Call-to-action overlays
│
├─ Music/Audio:
│   • Copyright-free trending audio
│   • Sound effects for emphasis
│   • Background music: Upbeat, energetic
│
├─ Thumbnail Design:
│   • Face with exaggerated expression
│   • Bold text: "${niche}" in Hindi/English
│   • Bright colors (Red, Yellow, Blue)
│   • 3-4 words maximum
│
├─ Tools to Use:
│   • Editing: CapCut, Adobe Premiere, DaVinci Resolve
│   • Thumbnail: Canva, Photoshop
│   • Stock footage: Pexels, Pixabay, Envato`
  } else if (language === 'hindi') {
    return `├─ विजुअल रणनीति:
│
├─ B-Roll फुटेज आवश्यक:
│   • ${niche} का लाइव प्रदर्शन
│   • महत्वपूर्ण तत्वों के क्लोज-अप
│   • पहले/बाद की तुलना
│
├─ एडिटिंग शैली:
│   • तेज़ कट्स (हर 2-3 सेकंड)
│   • ट्रेंडिंग ट्रांजिशन
│   • रंग ग्रेडिंग: जीवंत और उच्च कंट्रास्ट
│
├─ ऑन-स्क्रीन तत्व:
│   • महत्वपूर्ण बिंदुओं के लिए टेक्स्ट
│   • इमोजी प्रतिक्रियाएं
│
├─ उपयोग करने के लिए टूल:
│   • एडिटिंग: CapCut, Premiere Pro
│   • थंबनेल: Canva, Photoshop`
  } else {
    return `├─ Visual Strategy:
│
├─ B-Roll Footage:
│   • Live ${niche} demonstration
│   • Close-up shots
│   • Before/After comparisons
│   • Motion graphics
│
├─ Editing Style:
│   • Fast-paced cuts (2-3 seconds)
│   • Trending transitions
│   • High contrast color grading
│   • Bold text animations
│
├─ On-Screen Elements:
│   • Lower thirds
│   • Progress indicators
│   • Emoji reactions
│   • CTA overlays
│
├─ Music/Audio:
│   • Trending copyright-free audio
│   • Sound effects
│   • Upbeat background music
│
├─ Thumbnail Design:
│   • Expressive face
│   • Bold text: "${niche}"
│   • Bright colors
│   • 3-4 words max
│
├─ Tools:
│   • Editing: CapCut, Premiere Pro
│   • Thumbnail: Canva, Photoshop
│   • Stock: Pexels, Pixabay`
  }
}

function generateTags(niche: string, language: string) {
  const lowerNiche = niche.toLowerCase()

  return {
    youtube: [
      lowerNiche,
      `${lowerNiche} tutorial`,
      `${lowerNiche} guide`,
      `${lowerNiche} tips`,
      `${lowerNiche} 2024`,
      `how to ${lowerNiche}`,
      `${lowerNiche} for beginners`,
      `${lowerNiche} hindi`,
      `${lowerNiche} explained`,
      `best ${lowerNiche}`
    ],
    shorts: [
      `#${lowerNiche.replace(/\s+/g, '')}`,
      '#shorts',
      '#viral',
      '#trending',
      '#reels',
      '#youtubeshorts',
      '#fyp',
      '#explore',
      language === 'hinglish' || language === 'hindi' ? '#hindiviral' : '#viralvideo',
      '#tips',
      '#tricks',
      '#howto'
    ]
  }
}

function generatePostingStrategy(niche: string, language: string) {
  if (language === 'hinglish') {
    return {
      bestDays: 'Thursday, Friday, Saturday (Weekend se pehle aur weekend)',
      bestTimes: '6-9 AM (Morning), 12-2 PM (Lunch), 6-10 PM (Evening prime time)',
      frequency: 'Shorts: Daily 2-3, Long-form: 3-4 per week',
      contentMix: '70% Shorts/Reels (viral potential), 30% Long-form (deep value)'
    }
  } else if (language === 'hindi') {
    return {
      bestDays: 'गुरुवार, शुक्रवार, शनिवार',
      bestTimes: 'सुबह 6-9, दोपहर 12-2, शाम 6-10',
      frequency: 'शॉर्ट्स: दैनिक 2-3, लंबे वीडियो: सप्ताह में 3-4',
      contentMix: '70% शॉर्ट्स, 30% लंबे वीडियो'
    }
  } else {
    return {
      bestDays: 'Thursday, Friday, Saturday (Before & during weekend)',
      bestTimes: '6-9 AM (Morning), 12-2 PM (Lunch), 6-10 PM (Evening prime)',
      frequency: 'Shorts: 2-3 daily, Long-form: 3-4 per week',
      contentMix: '70% Shorts/Reels (viral), 30% Long-form (value)'
    }
  }
}

function generateAutomationTools(language: string) {
  if (language === 'hinglish') {
    return [
      {
        category: '🎬 Video Creation & Editing',
        tools: [
          { name: 'Pictory.ai', purpose: 'Script se automatically video banao with stock footage' },
          { name: 'Descript', purpose: 'Text-based editing, remove filler words automatically' },
          { name: 'CapCut (Desktop)', purpose: 'Auto-captions, trending templates, batch editing' },
          { name: 'Runway ML', purpose: 'AI video effects, background removal, motion tracking' }
        ]
      },
      {
        category: '🎙️ Voiceover & Audio',
        tools: [
          { name: 'ElevenLabs', purpose: 'Ultra-realistic AI voiceover in Hindi/English' },
          { name: 'Murf.ai', purpose: 'Professional voiceovers, multiple accents' },
          { name: 'Adobe Podcast AI', purpose: 'Audio cleanup, noise removal' },
          { name: 'Speechify', purpose: 'Text-to-speech for quick narration' }
        ]
      },
      {
        category: '📝 Script & Content Writing',
        tools: [
          { name: 'ChatGPT/Claude', purpose: 'Full scripts, hooks, titles, descriptions likhne ke liye' },
          { name: 'Copy.ai', purpose: 'Multiple variations, A/B testing content' },
          { name: 'Jasper', purpose: 'SEO-optimized content generation' }
        ]
      },
      {
        category: '🎨 Thumbnails & Graphics',
        tools: [
          { name: 'Canva Pro', purpose: 'AI-powered thumbnail templates, Magic Eraser' },
          { name: 'Thumbly.ai', purpose: 'AI thumbnail generator specifically for YouTube' },
          { name: 'Photopea', purpose: 'Free Photoshop alternative, browser-based' },
          { name: 'Remove.bg', purpose: 'Instant background removal' }
        ]
      },
      {
        category: '🔍 Trend Research & Analytics',
        tools: [
          { name: 'VidIQ', purpose: 'Keyword research, trending topics, competitor analysis' },
          { name: 'TubeBuddy', purpose: 'SEO, best posting times, A/B testing' },
          { name: 'Google Trends', purpose: 'Real-time trending topics by region' },
          { name: 'Answer The Public', purpose: 'Question-based content ideas' }
        ]
      },
      {
        category: '⏰ Scheduling & Publishing',
        tools: [
          { name: 'YouTube Studio (Built-in)', purpose: 'Schedule videos weeks in advance' },
          { name: 'Buffer/Hootsuite', purpose: 'Cross-platform scheduling (YouTube + Instagram + TikTok)' },
          { name: 'Later', purpose: 'Visual content calendar' }
        ]
      },
      {
        category: '🤖 Full Automation Workflow',
        tools: [
          { name: 'Make.com (Integromat)', purpose: 'Connect all tools together, full automation' },
          { name: 'Zapier', purpose: 'Auto-post to multiple platforms' },
          { name: 'n8n', purpose: 'Open-source automation alternative' }
        ]
      }
    ]
  } else if (language === 'hindi') {
    return [
      {
        category: '🎬 वीडियो निर्माण और संपादन',
        tools: [
          { name: 'Pictory.ai', purpose: 'स्क्रिप्ट से स्वचालित वीडियो बनाएं' },
          { name: 'CapCut', purpose: 'ऑटो-कैप्शन, ट्रेंडिंग टेम्पलेट' },
          { name: 'Runway ML', purpose: 'AI वीडियो प्रभाव' }
        ]
      },
      {
        category: '🎙️ वॉइसओवर और ऑडियो',
        tools: [
          { name: 'ElevenLabs', purpose: 'यथार्थवादी AI वॉइसओवर हिंदी में' },
          { name: 'Murf.ai', purpose: 'पेशेवर वॉइसओवर' }
        ]
      },
      {
        category: '📝 स्क्रिप्ट लेखन',
        tools: [
          { name: 'ChatGPT', purpose: 'पूर्ण स्क्रिप्ट, शीर्षक, विवरण' },
          { name: 'Copy.ai', purpose: 'एकाधिक विविधताएं' }
        ]
      }
    ]
  } else {
    return [
      {
        category: '🎬 Video Creation & Editing',
        tools: [
          { name: 'Pictory.ai', purpose: 'Auto-create videos from scripts with stock footage' },
          { name: 'Descript', purpose: 'Text-based editing, auto remove filler words' },
          { name: 'CapCut Desktop', purpose: 'Auto-captions, trending templates, batch editing' },
          { name: 'Runway ML', purpose: 'AI video effects, background removal' }
        ]
      },
      {
        category: '🎙️ Voiceover & Audio',
        tools: [
          { name: 'ElevenLabs', purpose: 'Ultra-realistic AI voiceover' },
          { name: 'Murf.ai', purpose: 'Professional voiceovers, multiple accents' },
          { name: 'Adobe Podcast AI', purpose: 'Audio cleanup, noise removal' }
        ]
      },
      {
        category: '📝 Script & Content Writing',
        tools: [
          { name: 'ChatGPT/Claude', purpose: 'Full scripts, hooks, titles, descriptions' },
          { name: 'Copy.ai', purpose: 'Multiple variations, A/B testing' }
        ]
      },
      {
        category: '🎨 Thumbnails & Graphics',
        tools: [
          { name: 'Canva Pro', purpose: 'AI thumbnail templates' },
          { name: 'Thumbly.ai', purpose: 'AI thumbnail generator for YouTube' },
          { name: 'Remove.bg', purpose: 'Background removal' }
        ]
      },
      {
        category: '🔍 Research & Analytics',
        tools: [
          { name: 'VidIQ', purpose: 'Keywords, trends, competitor analysis' },
          { name: 'TubeBuddy', purpose: 'SEO, posting times, A/B testing' },
          { name: 'Google Trends', purpose: 'Trending topics by region' }
        ]
      }
    ]
  }
}

function generateWorkflow(language: string) {
  if (language === 'hinglish') {
    return `├─ COMPLETE AUTOMATION WORKFLOW:
│
├─ Step 1: Research & Planning (10 min)
│   • VidIQ/TubeBuddy se trending topics find karo
│   • Google Trends check karo for niche
│   • Competitor analysis karo (top 3-5 videos dekho)
│   • Best performing format identify karo
│
├─ Step 2: Content Generation (20 min)
│   • ChatGPT/Claude se script generate karo
│   • 3 title variations banao
│   • 3 hook variations banao
│   • Tags aur hashtags generate karo
│   • Description ready karo
│
├─ Step 3: Voiceover Creation (15 min)
│   • Script ko ElevenLabs mein paste karo
│   • Voice select karo (male/female, accent)
│   • Generate and download MP3
│   • Adobe Podcast AI se cleanup (optional)
│
├─ Step 4: Video Production (30-60 min)
│   FOR SHORTS:
│   • Pictory.ai mein script paste karo
│   • 9:16 aspect ratio select karo
│   • Auto-generate with stock footage
│   • CapCut mein final edits:
│     - Auto-captions add karo
│     - Trending transitions
│     - Sound effects
│     - Color grading preset
│
│   FOR LONG-FORM:
│   • Main footage shoot karo ya screen record
│   • Descript mein import (auto-transcription)
│   • Text-based editing se filler words remove
│   • B-roll add karo from Pexels/Pixabay
│   • Music add karo (YouTube Audio Library)
│
├─ Step 5: Thumbnail Creation (10 min)
│   • Canva mein YouTube Thumbnail template open karo
│   • Face photo upload (exaggerated expression)
│   • Bold text add (3-4 words max):
│     - Font: Bold, readable
│     - Colors: Bright (Red/Yellow/Blue)
│   • Elements add (arrows, emojis, circles)
│   • Download as PNG (1280x720)
│
├─ Step 6: SEO Optimization (5 min)
│   • Title: 60-70 characters
│   • Description:
│     - First 2 lines mein hook
│     - Timestamps add karo
│     - Links (social media, products)
│     - Hashtags bottom mein
│   • Tags: 10-15 relevant tags
│   • Category select
│   • Thumbnail upload
│
├─ Step 7: Scheduling & Publishing (5 min)
│   • YouTube Studio mein upload
│   • Best time select (6-9 AM / 6-10 PM)
│   • Playlist mein add karo
│   • End screen & cards setup
│   • Schedule ya Publish
│
├─ Step 8: Cross-Platform Distribution (10 min)
│   • Instagram Reels mein post karo (repurpose Shorts)
│   • TikTok upload (same content)
│   • Pinterest mein pin (thumbnail + link)
│   • Twitter/X pe announce karo with clip
│   • Buffer/Hootsuite se automate karo
│
├─ Step 9: Analytics & Iteration (Daily 10 min)
│   • YouTube Analytics check:
│     - CTR (aim for 8-10%+)
│     - AVD (Average View Duration)
│     - Traffic sources
│   • Top performing content identify
│   • Remake high performers
│   • A/B test thumbnails aur titles
│
├─ ADVANCED AUTOMATION (Make.com/Zapier):
│   • Trigger: New trending topic in VidIQ
│   • Action 1: Generate script via ChatGPT API
│   • Action 2: Create voiceover via ElevenLabs API
│   • Action 3: Auto-generate video via Pictory API
│   • Action 4: Auto-create thumbnail via Canva API
│   • Action 5: Schedule upload via YouTube API
│   • Action 6: Post to Instagram/TikTok
│
├─ COST BREAKDOWN (Monthly):
│   • Free tier possible: $0
│   • Budget setup: $50-100
│     - ChatGPT Plus: $20
│     - ElevenLabs: $5-22
│     - Canva Pro: $13
│     - VidIQ: $7.50-39
│     - CapCut: Free
│   • Professional: $200-300
│     - Add Pictory, Descript, premium tools
│
├─ TIME INVESTMENT:
│   • Initial setup: 2-3 hours
│   • Per video (manual): 2-3 hours
│   • Per video (semi-automated): 1 hour
│   • Per video (fully automated): 15-30 min
│
└─ PRO TIP: Start manual, then automate step-by-step! 🚀`
  } else if (language === 'hindi') {
    return `├─ संपूर्ण स्वचालन वर्कफ्लो:
│
├─ चरण 1: अनुसंधान और योजना (10 मिनट)
│   • VidIQ से ट्रेंडिंग विषय खोजें
│   • Google Trends जांचें
│   • प्रतियोगी विश्लेषण करें
│
├─ चरण 2: सामग्री निर्माण (20 मिनट)
│   • ChatGPT से स्क्रिप्ट बनाएं
│   • 3 शीर्षक विविधताएं
│   • टैग और हैशटैग
│
├─ चरण 3: वॉइसओवर (15 मिनट)
│   • ElevenLabs में स्क्रिप्ट
│   • आवाज़ चुनें
│   • डाउनलोड करें
│
├─ चरण 4: वीडियो उत्पादन (30-60 मिनट)
│   • Pictory.ai में स्क्रिप्ट
│   • CapCut में संपादन
│   • ऑटो-कैप्शन जोड़ें
│
├─ चरण 5: थंबनेल (10 मिनट)
│   • Canva में टेम्पलेट
│   • बोल्ड टेक्स्ट
│   • चमकीले रंग
│
├─ चरण 6: SEO अनुकूलन (5 मिनट)
│   • शीर्षक, विवरण, टैग
│
├─ चरण 7: शेड्यूलिंग (5 मिनट)
│   • YouTube Studio में अपलोड
│
└─ सुझाव: धीरे-धीरे स्वचालित करें! 🚀`
  } else {
    return `├─ COMPLETE AUTOMATION WORKFLOW:
│
├─ Step 1: Research & Planning (10 min)
│   • Find trending topics via VidIQ/TubeBuddy
│   • Check Google Trends for niche
│   • Analyze top competitors
│
├─ Step 2: Content Generation (20 min)
│   • Generate script with ChatGPT/Claude
│   • Create 3 title variations
│   • Generate hooks, tags, hashtags
│   • Prepare description
│
├─ Step 3: Voiceover Creation (15 min)
│   • Paste script in ElevenLabs
│   • Select voice and accent
│   • Generate and download
│
├─ Step 4: Video Production (30-60 min)
│   SHORTS:
│   • Paste script in Pictory.ai
│   • 9:16 aspect ratio
│   • Auto-generate with stock footage
│   • Final edits in CapCut
│
│   LONG-FORM:
│   • Record main footage
│   • Import to Descript
│   • Remove filler words
│   • Add B-roll from Pexels
│
├─ Step 5: Thumbnail Creation (10 min)
│   • Use Canva template
│   • Add expressive face photo
│   • Bold text (3-4 words)
│   • Bright colors
│
├─ Step 6: SEO Optimization (5 min)
│   • Title: 60-70 characters
│   • Description with hook
│   • 10-15 relevant tags
│
├─ Step 7: Schedule & Publish (5 min)
│   • Upload to YouTube Studio
│   • Select best posting time
│   • Add to playlist
│
├─ Step 8: Cross-Platform (10 min)
│   • Post to Instagram Reels
│   • Upload to TikTok
│   • Share on other platforms
│
├─ Step 9: Analytics (Daily 10 min)
│   • Check CTR, AVD
│   • Identify top performers
│   • A/B test thumbnails
│
└─ PRO TIP: Automate gradually! 🚀`
  }
}

function generateDescription(niche: string, language: string) {
  if (language === 'hinglish') {
    return `🔥 ${niche} Ki Complete Guide - Ye Video Dekhne Se Pehle Skip Mat Karna!

Is video mein maine ${niche} ke bare mein SABKUCH detail se explain kiya hai jo aapko pata hona chahiye. Agar aap ${niche} mein interested ho, toh ye video aapke liye game-changer hoga! 🚀

📌 TIMESTAMPS:
0:00 - Introduction
0:30 - ${niche} Kya Hai?
2:00 - Step-by-Step Guide
5:00 - Common Mistakes
7:00 - Pro Tips & Tricks
10:00 - Conclusion & Next Steps

💡 KEY TAKEAWAYS:
✅ [Point 1]
✅ [Point 2]
✅ [Point 3]

🔗 USEFUL LINKS:
• Resource 1: [Link]
• Resource 2: [Link]
• Tool Recommendation: [Link]

📱 CONNECT WITH ME:
Instagram: [Your Handle]
Twitter: [Your Handle]
Discord/Telegram: [Community Link]

🎯 RECOMMENDED VIDEOS:
• [Related Video 1]
• [Related Video 2]

🛠️ TOOLS MENTIONED:
1. [Tool Name] - [Purpose]
2. [Tool Name] - [Purpose]

⭐ AGAR VIDEO HELPFUL LAGA TOH:
• LIKE karo (helps the algorithm!)
• SHARE karo apne friends ke saath
• SUBSCRIBE karo for more amazing content
• COMMENT mein batao - Aapka kya experience hai ${niche} ke saath?

🔔 Bell icon daba do taaki aap koi video miss na karo!

📧 Business Inquiries: [Your Email]

#${niche.replace(/\s+/g, '')} #Tutorial #Hindi #HowTo #Guide #Tips #Tricks #2024 #Viral #Trending

---
© 2024 [Your Channel Name]. All Rights Reserved.`
  } else if (language === 'hindi') {
    return `🔥 ${niche} की संपूर्ण गाइड - यह वीडियो छोड़ें नहीं!

इस वीडियो में मैंने ${niche} के बारे में सब कुछ विस्तार से समझाया है। 🚀

📌 टाइमस्टैम्प:
0:00 - परिचय
0:30 - ${niche} क्या है?
2:00 - चरण-दर-चरण गाइड
5:00 - सामान्य गलतियां
7:00 - प्रो टिप्स
10:00 - निष्कर्ष

💡 मुख्य बिंदु:
✅ [बिंदु 1]
✅ [बिंदु 2]
✅ [बिंदु 3]

🔗 उपयोगी लिंक:
• संसाधन 1: [लिंक]
• संसाधन 2: [लिंक]

📱 मुझसे जुड़ें:
Instagram: [आपका हैंडल]
Twitter: [आपका हैंडल]

⭐ अगर वीडियो उपयोगी लगा तो:
• लाइक करें
• शेयर करें
• सब्सक्राइब करें
• कमेंट में बताएं

#${niche.replace(/\s+/g, '')} #हिंदी #गाइड #ट्यूटोरियल`
  } else {
    return `🔥 Complete ${niche} Guide - Don't Skip This Video!

In this video, I've explained EVERYTHING you need to know about ${niche} in detail. If you're interested in ${niche}, this will be a game-changer! 🚀

📌 TIMESTAMPS:
0:00 - Introduction
0:30 - What is ${niche}?
2:00 - Step-by-Step Guide
5:00 - Common Mistakes
7:00 - Pro Tips & Tricks
10:00 - Conclusion

💡 KEY TAKEAWAYS:
✅ [Point 1]
✅ [Point 2]
✅ [Point 3]

🔗 USEFUL LINKS:
• Resource 1: [Link]
• Resource 2: [Link]

📱 CONNECT WITH ME:
Instagram: [Handle]
Twitter: [Handle]

⭐ IF YOU FOUND THIS HELPFUL:
• LIKE this video
• SHARE with friends
• SUBSCRIBE for more
• COMMENT your experience

🔔 Turn on notifications!

#${niche.replace(/\s+/g, '')} #Tutorial #Guide #HowTo #Tips #2024`
  }
}
