import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold">CCABM</div>
          <div className="text-sm">© {new Date().getFullYear()} CCABM</div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/share/17zRc1ujjj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.34 1.39-3.63 3.53-3.63 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.16 0-1.52.72-1.52 1.46v1.74h2.59l-.41 2.9h-2.18v7.03C18.34 21.2 22 17.06 22 12.07z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ccabm_2019?igsh=dzlycnl5Z2J5Z3J1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM18.5 6.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@ccabmpkcoku4139?si=i0gw9A_7lKvY2Kty" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M10 15l5.2-3L10 9v6zm11-6.2s-.1-2-.4-2.9c-.2-.9-.8-1.6-1.6-1.9C17 4 12 4 12 4h0s-5 0-6 0c-.9.1-1.5.7-1.8 1.6C3.9 7 3.8 9 3.8 9S3.5 11.4 3.5 13.8v.4C3.5 17 4 19 4 19s.1 2 .4 2.9c.3.9.9 1.6 1.8 1.8 1 0 6 0 6 0s5 0 6 0c.9-.2 1.5-.9 1.8-1.8.3-.9.4-2.9.4-2.9s.5-2.1.5-4.8v-.9c0-2.7-.5-4.8-.5-4.8z"/>
            </svg>
          </a>
        </div>
        <div className="text-sm">
          <a href="mailto:ccabm2019@gmail.com" className="underline">ccabm2019@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
