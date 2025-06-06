#!/usr/bin/env bash
#
# cleanup.sh — strip Vite boilerplate
# Run: bash scripts/cleanup.sh  (from project root)

set -e  # stop on first error

echo "🧹  Removing demo images…"
rm -f src/assets/react.svg public/vite.svg 2>/dev/null || true

echo "📝  Re-writing src/App.jsx to a blank shell…"
cat > src/App.jsx <<'EOF'
function App() {
  return (
    <>
      {/* components will render here */}
    </>
  );
}

export default App;
EOF

echo "🎨  Clearing default CSS…"
: > src/App.css
: > src/index.css

echo "🔀  Pruning unused imports in main.jsx…"
sed -i.bak '/react.svg/d;/StrictMode/d' src/main.jsx
rm -f src/main.jsx.bak

echo "✅  Cleanup complete!"
