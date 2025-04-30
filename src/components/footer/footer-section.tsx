"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Instagram, Linkedin, Moon, Send, Sun } from "lucide-react"

function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative bg-background border-t text-foreground transition-colors duration-300">
      <div className="mx-auto px-4 md:px-6 lg:px-8 py-12 container">
        <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 font-bold text-3xl tracking-tight">
              <img src="/logo.png" alt="Milveo Logo" className="brightness-0 invert w-24" />
            </h2>
            <p className="mb-6 text-muted-foreground">
              Das Framework für Growth im E-Commerce
            </p>
            <form className="hidden relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="backdrop-blur-sm pr-12"
              />
              <Button
                type="submit"
                size="icon"
                className="top-1 right-1 absolute bg-primary rounded-full w-8 h-8 text-primary-foreground hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="top-0 -right-4 absolute bg-primary/10 blur-2xl rounded-full w-24 h-24" />
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-lg">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">
                Framework
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Dienstleistungen
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Referenzen
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-lg">Kontakt</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Marienstrasse 18</p>
              <p>71332 Waiblingen</p>
              <p>Email: office@milveo.de</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="w-4 h-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="w-4 h-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Milveo. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
            <a href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer }