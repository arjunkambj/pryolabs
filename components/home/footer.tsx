"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-primary bg-background font-mono">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* System Info */}
          <div>
            <div className="text-primary mb-2">$ uname -a</div>
            <div className="text-foreground/70 text-xs">
              Pyro Labs | Ship Fast. Ship Right.
              <br />
              System: Production v2.0.0
              <br />
              Uptime: 99.99% | Response: &lt;200ms
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-primary mb-2">$ ls -la /links</div>
            <div className="space-y-1 text-xs">
              <Link
                className="block text-foreground/70 hover:text-primary transition-colors"
                href="#terms"
              >
                -rw-r--r-- terms.txt
              </Link>
              <Link
                className="block text-foreground/70 hover:text-primary transition-colors"
                href="#privacy"
              >
                -rw-r--r-- privacy.md
              </Link>
              <Link
                className="block text-foreground/70 hover:text-primary transition-colors"
                href="#contact"
              >
                -rwxr-xr-x contact.sh
              </Link>
              <a
                className="block text-foreground/70 hover:text-primary transition-colors"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
              >
                drwxr-xr-x github/
              </a>
            </div>
          </div>

          {/* Network Status */}
          <div>
            <div className="text-primary mb-2">$ netstat -an</div>
            <div className="text-xs text-foreground/70">
              Active connections:
              <br />
              Port 80: <span className="text-success">LISTENING</span>
              <br />
              Port 443: <span className="text-success">LISTENING</span>
              <br />
              Status: <span className="text-success">● ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="border-t border-primary/30 bg-content1/20">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-xs text-primary/50">
            <div className="flex items-center gap-4">
              <span>© 2024 Pyro Labs</span>
              <span>PID: 1337</span>
              <span>TTY: pts/0</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Load: 0.42</span>
              <span>Mem: 16GB</span>
              <span>Disk: 42%</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
