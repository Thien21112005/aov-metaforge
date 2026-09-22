"""
Simple local HTTP server to launch the Lien Quan Web Application with 1-click.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# Ensure UTF-8 output on Windows terminal
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

PORT = 8080

# Ensure working directory is the script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable cache during development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                url = f"http://localhost:{port}/index.html"
                print("=" * 60)
                print("  LIEN QUAN MOBILE - GACHA & PHAN TICH CAM CHON WEB APP")
                print(f"  Server dang chay tai: {url}")
                print("  Dang tu dong mo trinh duyet...")
                print("  (Nhan Ctrl + C de dung server)")
                print("=" * 60)
                webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            port += 1

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nDa dung server.")
