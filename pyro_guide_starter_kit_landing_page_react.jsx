import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PyroGuideLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 text-neutral-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">PyroGuide</h1>
        <nav className="space-x-4 hidden md:flex">
          <a className="text-sm hover:underline" href="#kit">Starter Kit</a>
          <a className="text-sm hover:underline" href="#templates">Templates</a>
          <a className="text-sm hover:underline" href="#weddings">Wedding Wood</a>
          <a className="text-sm hover:underline" href="#faq">FAQ</a>
          <a className="text-sm hover:underline" href="#shop">Shop</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Wood burning made easy — beautiful results, every time.</h2>
            <p className="mt-4 text-lg text-neutral-700">PyroGuide starter kits pair a quality pyrography tool with patented stick-on templates and curated wedding-grade wood — perfect for beginners and makers who want reliable, shareable results.</p>

            <div className="mt-6 flex gap-4">
              <a href="#shop" className="inline-block rounded-2xl px-6 py-3 bg-neutral-900 text-white font-semibold">Shop Now</a>
              <a href="#templates" className="inline-block rounded-2xl px-6 py-3 border border-neutral-300">View Templates</a>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-neutral-50 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <rect x="20" y="20" rx="16" ry="16" width="760" height="410" fill="#f8f5f0" stroke="#e5dfd6" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fill="#b29b82">PyroGuide Starter Kit — mock preview</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-10">
          <h3 className="text-2xl font-bold mb-6">Shop Starter Kits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <h4 className="font-semibold">Starter Kit</h4>
                <p className="text-sm text-neutral-600 my-2">Pen, 10 templates, 3 blanks</p>
                <p className="text-lg font-bold mb-3">$69</p>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <h4 className="font-semibold">Pro Bundle</h4>
                <p className="text-sm text-neutral-600 my-2">Extra tips, 30 templates, 10 blanks</p>
                <p className="text-lg font-bold mb-3">$129</p>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <h4 className="font-semibold">Wedding Pack</h4>
                <p className="text-sm text-neutral-600 my-2">Bulk blanks, custom templates</p>
                <p className="text-lg font-bold mb-3">Custom Pricing</p>
                <Button className="w-full">Request Quote</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Example Templates */}
        <section id="templates" className="py-10">
          <h3 className="text-2xl font-bold mb-4">Free Example Templates</h3>
          <p className="text-sm text-neutral-600">Download and try these sample SVG templates:</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32 mb-3">
                  <circle cx="100" cy="100" r="60" stroke="#000" fill="none" />
                  <text x="100" y="105" textAnchor="middle" fontSize="12">Wreath</text>
                </svg>
                <Button variant="outline">Download SVG</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32 mb-3">
                  <circle cx="100" cy="100" r="70" stroke="#000" fill="none" />
                  <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="24">A&B</text>
                </svg>
                <Button variant="outline">Download SVG</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <svg viewBox="0 0 200 200" className="w-32 h-32 mb-3">
                  <path d="M100 140 C60 120,40 90,60 70 C80 50,110 70,100 90 C90 70,120 50,140 70 C160 90,140 120,100 140 Z" stroke="#000" fill="none" />
                  <text x="100" y="115" textAnchor="middle" fontSize="12">Mr & Mrs</text>
                </svg>
                <Button variant="outline">Download SVG</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wedding Wood Section */}
        <section id="weddings" className="py-10">
          <h3 className="text-2xl font-bold">Wedding Wood Blanks</h3>
          <p className="text-sm text-neutral-600 mt-2">Choose from curated blanks perfect for wedding signage, table numbers, or keepsakes. Bulk & rush orders available.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold">Welcome Sign</h4>
                <p className="text-sm text-neutral-600">18x24 Maple/Oak blanks, sanded and kiln-dried.</p>
                <p className="font-bold mt-2">From $120</p>
                <Button className="mt-3 w-full">Order Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold">Table Rounds</h4>
                <p className="text-sm text-neutral-600">6-inch packs of 12, perfect for numbering.</p>
                <p className="font-bold mt-2">From $85</p>
                <Button className="mt-3 w-full">Order Now</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marketing TikTok Script Ideas */}
        <section className="py-10">
          <h3 className="text-2xl font-bold">TikTok Marketing Ideas</h3>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-sm text-neutral-700">
            <li>"Before & After" transformation of a blank wood piece vs. a burned template.</li>
            <li>ASMR-style video of peeling off the template to reveal crisp burned lines.</li>
            <li>Quick montage: unboxing the kit, choosing a template, burning, showing finished wedding sign.</li>
            <li>"Couples DIY Date Night" — two people using the kit together making wedding coasters.</li>
            <li>Trend-based audio with captions like: "Thought DIY wood burning was hard? Not with PyroGuide!" while showing a hand tracing the template.</li>
          </ol>
        </section>

        <footer className="py-12 text-center text-sm text-neutral-600">
          <div>© {new Date().getFullYear()} PyroGuide — Crafted for makers</div>
          <div className="mt-2">Contact: hello@pyroguide.example • Terms • Privacy</div>
        </footer>
      </main>
    </div>
  );
}
